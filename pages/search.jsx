import { useState, useRef } from "react";
import { getSearchResults } from "../services";
import Image from "next/image";
import Link from "next/link";

export default function search() {
  const [posts, setPosts] = useState([]);
  const valuesRef = useRef();
  async function handleSubmit() {
    if (valuesRef.current.value !== "") {
      const result = await getSearchResults(valuesRef.current.value);
      setPosts(result);
    }
  }
  return (
    <>
      <section className="">
        <section>
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap pt-10 ">
              <div className="w-full md:w-11/12 ml-auto mr-auto px-4">
                <h3 className="text-3xl text-white xl:text-6xl lg:text-6xl md:text-4xl mb-2 font-bold leading-normal ">
                  Search
                </h3>

                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Keywords
                </label>
                <div className=" w-full">
                  <div className="w-full px-3 mb-6 flex justify-start">
                    <input
                      className="appearance-none   w-3/4 bg-grey-lighter text-black border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-password"
                      type="search"
                      placeholder="Search"
                      ref={valuesRef}
                    />
                    <div className="w-1/4 pl-10 flex justify-end">
                      <button
                        onClick={handleSubmit}
                        className=" w-full  font-bold leading-tight bg-red hover:bg-red-light border border-red hover:border-red-light w-1/4  text-white uppercase tracking-wide py-3 px-4 rounded"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 ">
          <div className="flex flex-wrap pt-10 ">
            <div className="w-full md:w-11/12 ml-auto mr-auto px-4">
              <h3 className="text-3xl text-white xl:text-6xl lg:text-6xl md:text-4xl mb-2 font-bold leading-normal ">
                Search Results
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap pt-10 ">
            <div className="w-full md:w-11/12 ml-auto mr-auto px-4">
              <div className="flex flex-wrap -mx-3">
                {posts && posts.length ? (
                  posts.map((post, index) => (
                    <div key={index} className="w-full md:w-1/3 px-3 mb-6">
                      <div className="relative h-72">
                        <div
                          className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
                          style={{
                            backgroundImage: `url('${post.featuredImage.url}')`,
                          }}
                        />
                        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
                        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                          <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
                            {post.title}
                          </p>
                          <div className="flex items-center absolute bottom-5 w-full justify-center">
                            <Image
                              unoptimized
                              alt={post.author.name}
                              height="30px"
                              width="30px"
                              className="align-middle drop-shadow-lg rounded-full"
                              src={post.author.photo.url}
                            />
                            <p className="inline align-middle text-white text-shadow ml-2 font-medium">
                              {post.author.name}
                            </p>
                          </div>
                        </div>
                        <Link href={`/post/${post.slug}`}>
                          <span className="cursor-pointer absolute w-full h-full" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="w-full md:w-1/3 px-3 mb-6">
                    <div className="relative h-72">
                      <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" />
                      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
                      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
                          No Results
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
