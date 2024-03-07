<template>
  <div class="pb-16">
    <div class="mr-4">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1">
          <div class="mb-4">
            <img
              class="w-full object-cover"
              src="../../img/recommendation-1.png"
            />
          </div>
        </div>
        <div
          class="md:flex-1 px-4 mb-4 flex items-center justify-center text-center"
        >
          <div>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Rekomendasi Kain
            </h2>
            <p class="dark:text-gray-300 text-sm mt-1 max-w-[33rem]">
              Ayo coba rekomendasi kain kami dan temukan jenis kain yang
              sempurna untuk tipe baju Anda. Pilih kain yang sesuai dengan gaya
              dan kenyamanan Anda!
            </p>
            <form class="max-w-[480px] w-full px-4 mt-8">
              <div class="relative">
                <input
                  type="text"
                  class="w-full border h-12 p-4 rounded-full bg-blue-600 placeholder:text-white/90"
                  placeholder="Cari tipe baju Anda"
                />
                <button type="submit">
                  <svg
                    class="text-white h-5 w-5 absolute top-3.5 right-3 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style="enable-background: new 0 0 56.966 56.966"
                    xml:space="preserve"
                  >
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4 max-w-md">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            V-Neck T-Shirt
          </h2>
          <div class="mb-4 bg-gray-100 w-96">
            <img
              class="w-96 object-cover shadow-xl rounded-lg"
              src="../../img/recommendation-2.png"
            />
          </div>
        </div>
        <div class="md:flex-1 px-4 pt-10">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-6">
            Untuk pilihan baju Anda, jenis kain yang paling cocok, yaitu:
          </h2>
          <div class="carousel carousel-center mx-auto flex">
            <div class="carousel-item">
              <div class="grid">
                <div class="flex flex-col overflow-hidden rounded-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-72 w-56"
                      src="../../img/recommendation-3.png"
                    />
                  </div>
                  <div
                    class="flex flex-1 flex-col justify-between bg-slate-200 p-2"
                  >
                    <div class="flex-1">
                      <a class="block text-center">
                        <p class="text-lg font-medium text-gray-900">
                          COTTON COMBED
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ml-11">
              <div class="grid">
                <div class="flex flex-col overflow-hidden rounded-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-72 w-56"
                      src="../../img/recommendation-4.png"
                    />
                  </div>
                  <div
                    class="flex flex-1 flex-col justify-between bg-slate-200 p-2"
                  >
                    <div class="flex-1">
                      <a class="block text-center">
                        <p class="text-lg font-medium text-gray-900">
                          CVC ASTRO
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ml-11">
              <div class="grid">
                <div class="flex flex-col overflow-hidden rounded-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-72 w-56"
                      src="../../img/recommendation-5.png"
                    />
                  </div>
                  <div
                    class="flex flex-1 flex-col justify-between bg-slate-200 p-2"
                  >
                    <div class="flex-1">
                      <a class="block text-center">
                        <p class="text-lg font-medium text-gray-900">
                          COTTON CARDED
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ml-11">
              <div class="grid">
                <div class="flex flex-col overflow-hidden rounded-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-72 w-56"
                      src="../../img/recommendation-3.png"
                    />
                  </div>
                  <div
                    class="flex flex-1 flex-col justify-between bg-slate-200 p-2"
                  >
                    <div class="flex-1">
                      <a class="block text-center">
                        <p class="text-lg font-medium text-gray-900">
                          COTTON COMBED
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
