
export default function ContactUsForm() {
  return (
    <div className="container mx-auto  md:px-6">
      <section className="mb-10">
        <div className="jus flex flex-wrap  justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-col">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto  ">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="bg-primary-100 inline-block rounded-md p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Contact No
                    </p>
                    <a href={`tel:${+918977503615}`} className="cursor-pointer text-neutral-500 dark:text-neutral-200">
                      (+91) 8977503615
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto   ">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="bg-primary-100 inline-block rounded-md p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Email
                    </p>
                    <a href={`mailto:shello@aidays.io`} className="text-neutral-500 dark:text-neutral-200">
                      hello@aidays.io
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
