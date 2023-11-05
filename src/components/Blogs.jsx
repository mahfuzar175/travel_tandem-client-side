
const Blogs = () => {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Travel and Tour Blogs</h2>
          <p className="font-serif text-sm dark:text-gray-400">
            Explore exciting travel destinations and tour experiences with our blog posts.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-900 border">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Explore the Enchanting Beaches of Bali"
            >
              <img
                alt="Bali Beaches"
                className="object-cover w-full h-52"
                src="https://source.unsplash.com/200x200/?bali"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Explore the Enchanting Beaches of Bali"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking uppercase hover:underline dark:text-violet-400"
              >
                Bali, Indonesia
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading">
                Explore the Enchanting Beaches of Bali
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 15, 2022</span>
                <span>1.8K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 border">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Discover the Rich Culture of Kyoto"
            >
              <img
                alt="Kyoto Culture"
                className="object-cover w-full h-52"
                src="https://source.unsplash.com/200x200/?kyoto"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Discover the Rich Culture of Kyoto"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking uppercase hover:underline dark:text-violet-400"
              >
                Kyoto, Japan
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading">
                Discover the Rich Culture of Kyoto
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>July 5, 2022</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 border">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Safari Adventure in Serengeti National Park"
            >
              <img
                alt="Serengeti Safari"
                className="object-cover w-full h-52"
                src="https://source.unsplash.com/200x200/?serengeti"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Safari Adventure in Serengeti National Park"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking uppercase hover:underline dark:text-violet-400"
              >
                Serengeti, Tanzania
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading">
                Safari Adventure in Serengeti National Park
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>August 20, 2022</span>
                <span>1.5K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-900 border">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Marvel at the Northern Lights in Lapland"
            >
              <img
                alt="Lapland Northern Lights"
                className="object-cover w-full h-52"
                src="https://source.unsplash.com/200x200/?lapland"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Marvel at the Northern Lights in Lapland"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking uppercase hover:underline dark:text-violet-400"
              >
                Lapland, Finland
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading">
                Marvel at the Northern Lights in Lapland
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>September 10, 2022</span>
                <span>1.9K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
