<template>
  <main>
    <div class="w-5/6 flex-col items-center justify-center mx-auto mt-6">
      <div class="carousel w-full items-center">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="../assets/belanjafigure.svg" class="w-full" />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex justify-center">
          <div class="flex lg:flex-row flex-col justify-between w-full">
            <div class="font-bold text-2xl">Cotton Combed</div>
            <div class="items-center flex text-primary">
              <span>View all</span>
            </div>
          </div>
        </div>
        <div class="max-w-7xl carousel carousel-center mx-auto flex my-4">
          <div class="carousel-item mr-8 ml-0">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/navy.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        Cotton Combed 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Navy</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/royalblue.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        Cotton Combed 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Royal Blue</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/coklatabu.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        Cotton Combed 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Coklat abu</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/hitamreaktif.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        Cotton Combed 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Hitam Reaktif</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/birumuda.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        Cotton Combed 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Biru muda</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-14">
        <div class="flex justify-center">
          <div class="flex lg:flex-row flex-col justify-between w-full">
            <div class="font-bold text-2xl">Cotton Carded</div>
            <div class="items-center flex text-primary">
              <span>View all</span>
            </div>
          </div>
        </div>
        <div class="max-w-7xl carousel carousel-center mx-auto flex my-4">
          <div class="carousel-item mr-8 ml-0">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/navy1.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        COTTON CARDED 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Navy</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/birumuda1.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        COTTON CARDED 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Royal Blue</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/hitamjetblack1.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        COTTON COMBED 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Hitam Jetblack</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/ungu1.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        COTTON CARDED 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Ungu</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/putih1.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        COTTON CARDED 30s
                      </p>
                      <p class="mt-3 text-base text-gray-500">Putih</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-14">
        <div class="flex justify-center">
          <div class="flex lg:flex-row flex-col justify-between w-full">
            <div class="font-bold text-2xl">Cotton & CVC Misty</div>
            <div class="items-center flex text-primary">
              <span>View all</span>
            </div>
          </div>
        </div>
        <div class="max-w-7xl carousel carousel-center mx-auto flex my-4">
          <div class="carousel-item mr-8 ml-0">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/m70b.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">M70B</p>
                      <p class="mt-3 text-base text-gray-500">
                        Misty M070 Bluish
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/m71b.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">M71B</p>
                      <p class="mt-3 text-base text-gray-500">
                        Misty M071 Bluish
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/m061.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">M061</p>
                      <p class="mt-3 text-base text-gray-500">Misty M061</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/m081.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">M081</p>
                      <p class="mt-3 text-base text-gray-500">Misty M081</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/m041.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">M041</p>
                      <p class="mt-3 text-base text-gray-500">Misty M041</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-14">
        <div class="flex justify-center">
          <div class="flex lg:flex-row flex-col justify-between w-full">
            <div class="font-bold text-2xl">CVC Two Tone & Three Tone</div>
            <div class="items-center flex text-primary">
              <span>View all</span>
            </div>
          </div>
        </div>
        <div class="max-w-7xl carousel carousel-center mx-auto flex my-4">
          <div class="carousel-item mr-8 ml-0">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/ttmerah.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        THREE TONE
                      </p>
                      <p class="mt-3 text-base text-gray-500">Merah X Hitam</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/ttabu.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        TWO TONE
                      </p>
                      <p class="mt-3 text-base text-gray-500">Abu Muda</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/tthitam.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        TWO TONE
                      </p>
                      <p class="mt-3 text-base text-gray-500">Hitam</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/ttnavy.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        TWO TONE
                      </p>
                      <p class="mt-3 text-base text-gray-500">Navy</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-64 w-full object-cover"
                    src="../assets/tthijau.svg"
                  />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1 text-center">
                    <a href="#" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">
                        TWO TONE
                      </p>
                      <p class="mt-3 text-base text-gray-500">Hijau</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-10 text-white mb-12">
        <button class="btn btn-primary font-extralight w-64 items-center">
          Lihat Lainnya
        </button>
      </div>
    </div>
  </main>
</template>
