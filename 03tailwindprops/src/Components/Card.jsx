import React from 'react'

function Card(props) {
    // console.log("props",props);
    console.log(props.userName)
  return (
    <><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/19036765/pexels-photo-19036765/free-photo-of-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                  <p className="text-lg font-medium">
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any design,
                      and the build size is tiny.”
                  </p>
              </blockquote>
              <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                      Sarah Dayan
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                      Staff Engineer, Algolia
                  </div>
              </figcaption>
          </div>
      </figure><div className="flex font-sans rounded-xl">
              <div className="flex-none w-48 relative rounded-xl">
                  <img src="https://images.pexels.com/photos/18566272/pexels-photo-18566272/free-photo-of-journalists-and-visitors-of-borobudur-interviewed-the-bhante-who-walked-from-thailand-to-indonesia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hi" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              </div>
              <form className="flex-auto p-6">
                  <div className="flex flex-wrap">
                      <h1 className="flex-auto text-lg font-semibold text-slate-900">
                          Utility Jacket
                      </h1>
                      <div className="text-lg font-semibold text-slate-500">
                          $110.00
                      </div>
                      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                          In stock
                      </div>
                  </div>
                  <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                      <div className="space-x-2 flex text-sm">
                          <label>
                              <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                  XS
                              </div>
                          </label>
                          <label>
                              <input className="sr-only peer" name="size" type="radio" value="s" />
                              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                  S
                              </div>
                          </label>
                          <label>
                              <input className="sr-only peer" name="size" type="radio" value="m" />
                              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                  M
                              </div>
                          </label>
                          <label>
                              <input className="sr-only peer" name="size" type="radio" value="l" />
                              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                  L
                              </div>
                          </label>
                          <label>
                              <input className="sr-only peer" name="size" type="radio" value="xl" />
                              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                  XL
                              </div>
                          </label>
                      </div>
                  </div>
                  <div className="flex space-x-4 mb-6 text-sm font-medium">
                      <div className="flex-auto flex space-x-4">
                          <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                              Buy now
                          </button>
                          <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                              Add to bag
                          </button>
                      </div>
                      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                          </svg>
                      </button>
                  </div>
                  <p className="text-sm text-slate-700">
                      Free shipping on all continental US orders.
                  </p>
              </form>
          </div></>
  )
}

export default Card
