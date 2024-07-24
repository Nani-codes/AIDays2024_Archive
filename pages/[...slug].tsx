import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import Head from "next/head";
import { DrupalNode } from "next-drupal";

import { drupal } from "lib/drupal";
import { NodeArticle } from "components/node--article";
import { NodeBasicPage } from "components/node--basic-page";
import { Layout } from "components/layout";
import { NodePages } from "NodePages";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { Track } from "data/drupal/node--track";

const RESOURCE_TYPES = ["node--page", "node--article"];

interface NodePageProps {
  resource: DrupalNode;
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null;

  const Page = NodePages[resource.type];
  return (
    <Layout>
      <div className="mb-10">
        {Page && <Page resource={resource} />}
      </div>
    </Layout>
  );
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context);

  if (!path) {
    return {
      notFound: true,
    };
  }

  // Check if path.jsonapi is defined
  if (!path.jsonapi) {
    return {
      notFound: true,
    };
  }

  const type = path.jsonapi.resourceName;

  let params = new DrupalJsonApiParams();
  if (type === "node--article") {
    params.addInclude(["uid"]);
  } else if (type === "node--track") {
    params.addInclude(["field_speakers", "field_events"]);
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  );

  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`);
  }

  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      resource,
    },
  };
}
