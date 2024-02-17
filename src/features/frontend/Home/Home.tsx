//import Layout from "../../../components/frontend/Layout/Layout";

const Home = () => {
  return (
    <>
      <div>
        <section className="sm:mt-6 lg:mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>
                <span className="block text-indigo-600 xl:inline">
                  online business
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              {/* Button Section */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
              {/* End of Button Section */}
            </div>
            {/*   Image Section     */}
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt=""
              />
            </div>
            {/*   End of Image Section     */}
          </div>
        </section>

        {/* component */}
        <div className="flex justify-center items-center">
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
          <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
            <div
              role="main"
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                This Week Blogs
              </h1>
              <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                If you're looking for random paragraphs, you've come to the
                right place. When a random word or a random sentence isn't quite
                enough
              </p>
            </div>
            <div className="lg:flex items-stretch md:mt-12 mt-8">
              <div className="lg:w-1/2">
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                  <div className="sm:w-1/2 relative">
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        12 April 2021
                      </p>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          The Decorated Ways
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Dive into minimalism
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/DYxtCJq/img-1.png"
                      className="w-full"
                      alt="chair"
                    />
                  </div>
                  <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        12 April 2021
                      </p>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          The Decorated Ways
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Dive into minimalism
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/3C5HvxC/img-2.png"
                      className="w-full"
                      alt="wall design"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/Ms4qyXp/img-3.png"
                    alt="sitting place"
                    className="w-full mt-8 md:mt-6 hidden sm:block"
                  />
                  <img
                    className="w-full mt-4 sm:hidden"
                    src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                    alt="sitting place"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                <div className="relative">
                  <div>
                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/6Wfjf2w/img-4.png"
                    alt="sitting place"
                    className="w-full sm:block hidden"
                  />
                  <img
                    className="w-full sm:hidden"
                    src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                    alt="sitting place"
                  />
                </div>
                <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                  <div className="relative w-full">
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        12 April 2021
                      </p>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          The Decorated Ways
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Dive into minimalism
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/3yvZBpm/img-5.png"
                      className="w-full"
                      alt="chair"
                    />
                  </div>
                  <div className="relative w-full sm:mt-0 mt-4">
                    <div>
                      <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                        12 April 2021
                      </p>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          The Decorated Ways
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Dive into minimalism
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read More
                          </p>
                          <svg
                            className="fill-stroke"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.75 12.5L10.25 8L5.75 3.5"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/gDdnJb5/img-6.png"
                      className="w-full"
                      alt="wall design"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Noster tincidunt reprimique ad pro
                </h3>
                <span className="text-xs dark:text-gray-400">
                  February 19, 2021
                </span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?1"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 21, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?2"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 22, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?3"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 23, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?4"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 24, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?5"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 25, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?6"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 26, 2021
                  </span>
                  <p>
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white font-Inter uppercase">
              Recent publish articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    className="mb-5 rounded-lg"
                    alt="Image 1"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white font-Inter uppercase">
                  <a href="#" className="no-underline text-gray-900">
                    Our first office
                  </a>
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400 font-Outfit">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline-offset-4 text-[#666666] dark:text-primary-500 no-underline  hover:underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    className="mb-5 rounded-lg"
                    alt="Image 1"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white font-Inter uppercase">
                  <a href="#" className="no-underline text-gray-900">
                    Our first office
                  </a>
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400 font-Outfit">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline-offset-4 text-[#666666] dark:text-primary-500 no-underline  hover:underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    className="mb-5 rounded-lg"
                    alt="Image 1"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white font-Inter uppercase">
                  <a href="#" className="no-underline text-gray-900">
                    Our first office
                  </a>
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400 font-Outfit">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline-offset-4 text-[#666666] dark:text-primary-500 no-underline  hover:underline"
                >
                  Read in 2 minutes
                </a>
              </article>
              <article className="max-w-xs">
                <a href="#">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                    className="mb-5 rounded-lg"
                    alt="Image 1"
                  />
                </a>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white font-Inter uppercase">
                  <a href="#" className="no-underline text-gray-900">
                    Our first office
                  </a>
                </h2>
                <p className="mb-4 text-gray-500 dark:text-gray-400 font-Outfit">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-medium underline-offset-4 text-[#666666] dark:text-primary-500 no-underline  hover:underline"
                >
                  Read in 2 minutes
                </a>
              </article>
            </div>
          </div>
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white font-Inter">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400 font-Outfit">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-Outfit"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border
                 border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500
                  focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                   dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-16 w-full text-sm text-center text-[14px] font-bold text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300 font-Outfit">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 dark:text-primary-500 no-underline   hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
