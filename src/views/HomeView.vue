<script setup>
import { RouterLink, RouterView } from "vue-router";
import bottom from "@/components/bottom.vue";
import navbar from "@/components/navbar.vue";
</script>

<template>
  <navbar />
  <div>
    <div class="bg-slate-100 -mt-36">
      <div class="left-0 pt-52 ml-16 mr-7">
        <h1 class="text-3xl font-bold w-auto">
          Kain Premium dengan Inovasi <br />
          untuk Nilai Jual yang Lebih Tinggi
        </h1>
        <p class="py-6 text-1xl font-sans">
          Kain yang kami hadirkan ialah kain Premium Terbaru dengan <br />
          terkini yang akan membuat produk anda memiliki nilai jual yang <br />
          lebih tinggi dibandingkan pesaing anda.<br />
          Segera miliki kain Premium Terbaru FOCUS TEXTILE!
        </p>
        <button class="btn btn-primary text-justify font-sans">
          Belanja Sekarang
        </button>
      </div>
      <div
        class="flex flex-col lg:flex-row lg:gap-4 items-center justify-center gap-0 bg-white py-4 px-4 mx-auto max-w-screen-xl w-1/2 mt-24 rounded-2xl"
      >
        <div class="flex items-center">
          <svg
            class="mr-2"
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.68 11.69L8 9.93L10.31 11.69L9.43 8.84L11.75 7H8.91L8 4.19L7.09 7H4.25L6.56 8.84L5.68 11.69ZM16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 10.03 0.76 11.87 2 13.28V21L8 19L14 21V13.28C15.2894 11.8235 16.0009 9.94526 16 8ZM8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2Z"
              fill="#5555FF"
            />
          </svg>

          <p class="text-lg font-semibold">Kualitas Premium</p>
        </div>
        <div class="md:flex">
          <svg
            class="transform rotate-90 md:rotate-0"
            width="2"
            height="62"
            viewBox="0 0 2 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 61L0.999997 1"
              stroke="#0000FF"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <!-- Menambahkan pembatas "|" -->
        <div class="flex items-center">
          <svg
            class="mr-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.137 2.728L15.967 4.558C18.655 7.248 20 8.592 20 10.262C20 11.933 18.655 13.277 15.966 15.966C13.277 18.657 11.933 20 10.262 20C8.59199 20 7.24699 18.655 4.55799 15.966L2.72799 14.136C1.18299 12.591 0.409988 11.819 0.122988 10.816C-0.165012 9.813 0.0809883 8.748 0.572988 6.619L0.855988 5.391C1.26899 3.599 1.47599 2.703 2.08899 2.089C2.70299 1.476 3.59899 1.269 5.39099 0.856001L6.61899 0.572001C8.74899 0.0810013 9.81299 -0.164999 10.816 0.122001C11.819 0.410001 12.592 1.183 14.137 2.728ZM9.14699 12.328C8.47399 11.656 8.47899 10.69 8.88199 9.925C8.78222 9.7809 8.73607 9.6064 8.75156 9.43181C8.76705 9.25722 8.84319 9.09357 8.96677 8.96928C9.09035 8.84499 9.25356 8.7679 9.42806 8.75141C9.60255 8.73492 9.77731 8.78006 9.92199 8.879C10.262 8.699 10.635 8.603 11.007 8.607C11.2059 8.60886 11.3959 8.68966 11.5353 8.83162C11.6746 8.97359 11.7518 9.16509 11.75 9.364C11.7481 9.56291 11.6673 9.75294 11.5254 9.89228C11.3834 10.0316 11.1919 10.1089 10.993 10.107C10.7614 10.1156 10.5426 10.2151 10.384 10.384C9.99699 10.771 10.098 11.159 10.207 11.268C10.317 11.377 10.704 11.478 11.091 11.091C11.875 10.307 13.229 10.047 14.096 10.914C14.769 11.587 14.764 12.553 14.361 13.318C14.4601 13.4621 14.5058 13.6364 14.49 13.8106C14.4742 13.9849 14.3981 14.1481 14.2746 14.2721C14.1512 14.3961 13.9884 14.473 13.8142 14.4896C13.6401 14.5062 13.4656 14.4614 13.321 14.363C12.8722 14.6091 12.3517 14.6912 11.849 14.595C11.6541 14.555 11.483 14.4391 11.3735 14.273C11.264 14.1068 11.2249 13.9039 11.265 13.709C11.305 13.5141 11.4209 13.343 11.587 13.2335C11.7532 13.124 11.9561 13.085 12.151 13.125C12.328 13.162 12.614 13.104 12.859 12.859C13.246 12.471 13.145 12.084 13.036 11.975C12.926 11.866 12.539 11.765 12.152 12.152C11.368 12.936 10.014 13.196 9.14699 12.328ZM8.02099 8.293C8.20668 8.10725 8.35396 7.88674 8.45443 7.64406C8.5549 7.40139 8.60659 7.1413 8.60654 6.87865C8.60649 6.616 8.55471 6.35593 8.45416 6.11329C8.35361 5.87065 8.20624 5.65019 8.02049 5.4645C7.83473 5.27881 7.61422 5.13153 7.37155 5.03106C7.12887 4.93059 6.86879 4.8789 6.60614 4.87895C6.34348 4.879 6.08342 4.93078 5.84078 5.03133C5.59814 5.13189 5.37768 5.27925 5.19199 5.465C4.81697 5.84015 4.60634 6.34891 4.60644 6.87935C4.60653 7.4098 4.81734 7.91848 5.19249 8.2935C5.56764 8.66852 6.0764 8.87915 6.60684 8.87905C7.13729 8.87896 7.64597 8.66815 8.02099 8.293Z"
              fill="#5555FF"
            />
          </svg>

          <p class="text-lg font-semibold">Harga Terjangkau</p>
        </div>
        <div class="md:flex">
          <svg
            class="transform rotate-90 md:rotate-0"
            width="2"
            height="62"
            viewBox="0 0 2 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 61L0.999997 1"
              stroke="#0000FF"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <!-- Menambahkan pembatas "|" -->
        <div class="flex items-center">
          <svg
            class="mr-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0H5C2.243 0 0 2.243 0 5V15C0 17.757 2.243 20 5 20H17C18.654 20 20 18.654 20 17C20 15.346 18.654 14 17 14H4V16H17C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H5C3.346 18 2 16.654 2 15C2 13.346 3.346 12 5 12H18C19.103 12 20 11.103 20 10V2C20 0.897 19.103 0 18 0ZM2 11H2.003L2 11.002V11Z"
              fill="#5555FF"
            />
          </svg>

          <p class="text-lg font-semibold">Kain Lengkap</p>
        </div>
      </div>
      <div>
        <div class="text-center py-8 mx-auto max-w-screen-xl w-5/6 my-6">
          <h2 class="text-xl font-semibold py-2">Jual Berbagai Macam Kain</h2>
          <div class="flex flex-row items-center justify-center">
            <ul
              class="flex flex-row flex-wrap items-center justify-center text-primary"
            >
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Cotton Carded
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Cotton Galaxy
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Cotton Baby Terry
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Cotton & CVC Misty
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Fancy Siro
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Fancy Hugo
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Fancy Indigo Slub
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Fancy Poly Cotton Mamboo
              </li>
              <li class="flex items-center py-2 px-4">
                <span
                  class="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                ></span
                >Salur Polyester
              </li>
            </ul>
          </div>
        </div>
        <div class="max-w-7xl carousel carousel-center mx-auto flex my-6">
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0 relative">
                  <div class="absolute w-full h-16 flex bottom-0 justify-end">
                    <div
                      class="w-16 h-16 bg-slate-200 rounded-tl-full justify-center text-center items-center flex pl-2 pt-3"
                    >
                      <h1 class="font-bold">30S</h1>
                    </div>
                  </div>
                  <img src="../assets/corosel1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0 relative">
                  <div class="absolute w-full h-16 flex bottom-0 justify-end">
                    <div
                      class="w-16 h-16 bg-slate-200 rounded-tl-full justify-center text-center items-center flex pl-2 pt-3"
                    >
                      <h1 class="font-bold">30S</h1>
                    </div>
                  </div>
                  <img src="../assets/corosel2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item mr-8 ml-6">
            <div class="grid">
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0 relative">
                  <div class="absolute w-full h-16 flex bottom-0 justify-end">
                    <div
                      class="w-16 h-16 bg-slate-200 rounded-tl-full justify-center text-center items-center flex pl-2 pt-3"
                    >
                      <h1 class="font-bold">30S</h1>
                    </div>
                  </div>
                  <img src="../assets/corosel3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full flex flex-row items-center lg:justify-end gap-3 pr-8 justify-center -mt-4"
        >
          <span>lihat lebih lengkapnya</span>
          <svg
            class="align-middle"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7515 0.351472C13.2201 -0.117157 13.9799 -0.117157 14.4485 0.351472L19.2485 5.15147C19.7172 5.6201 19.7172 6.3799 19.2485 6.84853L14.4485 11.6485C13.9799 12.1172 13.2201 12.1172 12.7515 11.6485C12.2828 11.1799 12.2828 10.4201 12.7515 9.95147L15.5029 7.2H1.6C0.93726 7.2 0.400001 6.66274 0.400002 6C0.400002 5.33726 0.93726 4.8 1.6 4.8H15.5029L12.7515 2.04853C12.2828 1.5799 12.2828 0.820101 12.7515 0.351472Z"
              fill="#2A2AFF"
            />
          </svg>
        </div>
        <div class="opacity-0 h-14">|</div>
      </div>
    </div>
    <div class="mt-14">
      <div class="flex justify-center">
        <div class="flex lg:flex-row flex-col justify-between w-5/6">
          <div class="font-bold text-2xl">Koleksi kain baru</div>
          <div class="items-center flex text-primary">
            <span>View all</span>
          </div>
        </div>
      </div>
      <div class="max-w-7xl carousel carousel-center mx-auto flex my-4">
        <div class="carousel-item mr-8 ml-24">
          <div class="grid">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-64 w-full object-cover"
                  src="../assets/navy.svg"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
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
                  src="../assets/royalblue.svg"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
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
                  src="../assets/coklatabu.svg"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">
                      COTTON COMBED 30s
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
                <div class="flex-1">
                  <a href="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">
                      COTTON CARDED 30s
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
                <div class="flex-1">
                  <a href="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">
                      COTTON CARDED 30s
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
    <section
      id="features"
      class="container mx-auto px-4 space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-20"
    >
      <div
        class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
      >
        <h2 class="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-2x1">
          Mengapa Focus Textile
        </h2>
      </div>
      <div
        class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
      >
        <div
          class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
        >
          <div class="flex h-auto flex-col justify-between rounded-md p-6">
            <svg
              width="28"
              height="36"
              viewBox="0 0 28 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1333 19.8166L14 16.8833L17.85 19.8166L16.3833 15.0666L20.25 11.9999H15.5166L14 7.31659L12.4833 11.9999H7.74996L11.6 15.0666L10.1333 19.8166ZM27.3333 13.6666C27.3333 6.29992 21.3666 0.333252 14 0.333252C6.63329 0.333252 0.666626 6.29992 0.666626 13.6666C0.666626 17.0499 1.93329 20.1166 3.99996 22.4666V35.3333L14 31.9999L24 35.3333V22.4666C26.149 20.0391 27.3348 16.9087 27.3333 13.6666ZM14 3.66659C19.5166 3.66659 24 8.14992 24 13.6666C24 19.1833 19.5166 23.6666 14 23.6666C8.48329 23.6666 3.99996 19.1833 3.99996 13.6666C3.99996 8.14992 8.48329 3.66659 14 3.66659Z"
                fill="#5555FF"
              />
            </svg>

            <div class="space-y-2 pt-1">
              <h3 class="font-bold">Kualitas Premium</h3>
              <p class="text-xs text-muted-foreground">
                Focus Textile selalu memproduksi kain dengan standar produksi
                tinggi. Focus Textile Menggunakan Bahan Baku yang PREMIUM.
                Setiap SARAN,KRITIK, dan MASUKAN dari Konsumen langsung
                ditanggapi dan akan dibuat untuk peningkatan kualitas.
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
        >
          <div class="flex h-auto flex-col justify-between rounded-md p-6">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.895 4.88008L26.945 7.93008C31.425 12.4134 33.6667 14.6534 33.6667 17.4368C33.6667 20.2218 31.425 22.4618 26.9433 26.9434C22.4617 31.4284 20.2217 33.6668 17.4367 33.6668C14.6533 33.6668 12.4117 31.4251 7.93 26.9434L4.88 23.8934C2.305 21.3184 1.01667 20.0317 0.538334 18.3601C0.0583342 16.6884 0.468334 14.9134 1.28833 11.3651L1.76 9.31842C2.44833 6.33175 2.79333 4.83842 3.815 3.81508C4.83833 2.79342 6.33167 2.44842 9.31833 1.76008L11.365 1.28675C14.915 0.468417 16.6883 0.0584167 18.36 0.53675C20.0317 1.01675 21.32 2.30508 23.895 4.88008ZM15.5783 20.8801C14.4567 19.7601 14.465 18.1501 15.1367 16.8751C14.9704 16.6349 14.8935 16.3441 14.9193 16.0531C14.9451 15.7621 15.072 15.4894 15.278 15.2822C15.4839 15.0751 15.756 14.9466 16.0468 14.9191C16.3376 14.8916 16.6289 14.9669 16.87 15.1318C17.4367 14.8317 18.0583 14.6718 18.6783 14.6784C19.0099 14.6815 19.3266 14.8162 19.5588 15.0528C19.791 15.2894 19.9198 15.6086 19.9167 15.9401C19.9136 16.2716 19.7789 16.5883 19.5423 16.8205C19.3057 17.0528 18.9865 17.1815 18.655 17.1784C18.2691 17.1927 17.9044 17.3586 17.64 17.6401C16.995 18.2851 17.1633 18.9317 17.345 19.1134C17.5283 19.2951 18.1733 19.4634 18.8183 18.8184C20.125 17.5117 22.3817 17.0784 23.8267 18.5234C24.9483 19.6451 24.94 21.2551 24.2683 22.5301C24.4336 22.7703 24.5096 23.0607 24.4833 23.3511C24.4571 23.6415 24.3301 23.9136 24.1244 24.1202C23.9188 24.3269 23.6473 24.4551 23.3571 24.4828C23.0668 24.5105 22.776 24.4358 22.535 24.2718C21.7871 24.682 20.9195 24.8187 20.0817 24.6584C19.7568 24.5917 19.4717 24.3986 19.2892 24.1217C19.1066 23.8447 19.0416 23.5066 19.1083 23.1817C19.1751 22.8569 19.3682 22.5718 19.6451 22.3893C19.922 22.2067 20.2601 22.1417 20.585 22.2084C20.88 22.2701 21.3567 22.1734 21.765 21.7651C22.41 21.1184 22.2417 20.4734 22.06 20.2918C21.8767 20.1101 21.2317 19.9418 20.5867 20.5868C19.28 21.8934 17.0233 22.3267 15.5783 20.8801ZM13.7017 14.1551C14.0111 13.8455 14.2566 13.478 14.4241 13.0735C14.5915 12.6691 14.6777 12.2356 14.6776 11.7978C14.6775 11.3601 14.5912 10.9266 14.4236 10.5222C14.256 10.1178 14.0104 9.7504 13.7008 9.44092C13.3912 9.13144 13.0237 8.88596 12.6193 8.71851C12.2148 8.55107 11.7813 8.46492 11.3436 8.465C10.9058 8.46508 10.4724 8.55137 10.068 8.71897C9.66358 8.88656 9.29615 9.13216 8.98667 9.44175C8.36164 10.067 8.01059 10.9149 8.01075 11.799C8.01091 12.6831 8.36225 13.5309 8.9875 14.1559C9.61275 14.7809 10.4607 15.132 11.3448 15.1318C12.2288 15.1317 13.0766 14.7803 13.7017 14.1551Z"
                fill="#5555FF"
              />
            </svg>

            <div class="space-y-2 pt-1">
              <h3 class="font-bold">Harga Terjangkau</h3>
              <p class="text-sm">
                Efisiensi dalam produksi menjadi kunci utama untuk Focus
                Textile, Sehingga kami mampu memberikan KAIN dengan HARGA
                TERJANGKAU
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
        >
          <div class="flex h-auto flex-col justify-between rounded-md p-6">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3333 0.333252H8.66668C4.07168 0.333252 0.333344 4.07159 0.333344 8.66659V25.3333C0.333344 29.9283 4.07168 33.6666 8.66668 33.6666H28.6667C31.4233 33.6666 33.6667 31.4233 33.6667 28.6666C33.6667 25.9099 31.4233 23.6666 28.6667 23.6666H7.00001V26.9999H28.6667C29.1087 26.9999 29.5326 27.1755 29.8452 27.4881C30.1578 27.8006 30.3333 28.2246 30.3333 28.6666C30.3333 29.1086 30.1578 29.5325 29.8452 29.8451C29.5326 30.1577 29.1087 30.3333 28.6667 30.3333H8.66668C5.91001 30.3333 3.66668 28.0899 3.66668 25.3333C3.66668 22.5766 5.91001 20.3333 8.66668 20.3333H30.3333C32.1717 20.3333 33.6667 18.8383 33.6667 16.9999V3.66659C33.6667 1.82825 32.1717 0.333252 30.3333 0.333252ZM3.66668 18.6666H3.67168L3.66668 18.6699V18.6666Z"
                fill="#5555FF"
              />
            </svg>

            <div class="space-y-2 pt-1">
              <h3 class="font-bold">Kain Lengkap</h3>
              <p class="text-sm text-muted-foreground">
                Focus Textile menyediakan berbagai jenis barang dengan berbagai
                jenis kain, dan pilihan warna terlengkap. kami juga selalu
                menyediakan kain yang READY STOCK untuk memudahkan konsumen.
                jangan khawatir, jika kehabisan, kami akan me-Restock kain dalam
                waktu yang cepat.
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
        >
          <div class="flex h-auto flex-col justify-between rounded-md p-6">
            <svg
              width="24"
              height="35"
              viewBox="0 0 24 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0.3334C14.9734 0.3334 17.4217 0.595066 19.295 0.911733C21.1934 1.23173 22.1417 1.39173 22.935 2.3684C23.7284 3.34507 23.685 4.40007 23.6017 6.51007C23.315 13.7584 21.7517 22.8101 13.25 23.6101V29.5001H15.6334C16.0185 29.5003 16.3917 29.6339 16.6895 29.8782C16.9872 30.1225 17.1912 30.4624 17.2667 30.8401L17.5834 32.4167H22C22.3316 32.4167 22.6495 32.5484 22.8839 32.7828C23.1183 33.0173 23.25 33.3352 23.25 33.6667C23.25 33.9983 23.1183 34.3162 22.8839 34.5506C22.6495 34.785 22.3316 34.9167 22 34.9167H2.00004C1.66851 34.9167 1.35057 34.785 1.11615 34.5506C0.881731 34.3162 0.750036 33.9983 0.750036 33.6667C0.750036 33.3352 0.881731 33.0173 1.11615 32.7828C1.35057 32.5484 1.66851 32.4167 2.00004 32.4167H6.4167L6.73337 30.8401C6.80886 30.4624 7.01283 30.1225 7.31059 29.8782C7.60836 29.6339 7.98155 29.5003 8.3667 29.5001H10.75V23.6101C2.25004 22.8101 0.686702 13.7567 0.400036 6.51007C0.315036 4.40007 0.273369 3.3434 1.0667 2.3684C1.85837 1.39173 2.8067 1.23173 4.70504 0.911733C7.1164 0.516527 9.55652 0.323079 12 0.3334ZM13.5867 7.33173L13.4234 7.0384C12.79 5.90007 12.4734 5.3334 12 5.3334C11.5267 5.3334 11.21 5.90007 10.5767 7.0384L10.4134 7.33173C10.2334 7.65507 10.1434 7.81507 10.0034 7.92173C9.8617 8.0284 9.6867 8.0684 9.3367 8.14673L9.02003 8.22007C7.79003 8.4984 7.17504 8.63673 7.02837 9.10673C6.8817 9.5784 7.3017 10.0684 8.14004 11.0484L8.3567 11.3017C8.59504 11.5801 8.71503 11.7184 8.76837 11.8917C8.8217 12.0651 8.80337 12.2501 8.76837 12.6217L8.73504 12.9601C8.60837 14.2684 8.54504 14.9234 8.9267 15.2134C9.31004 15.5034 9.8867 15.2384 11.0384 14.7084L11.335 14.5717C11.6634 14.4217 11.8267 14.3467 12 14.3467C12.1734 14.3467 12.3367 14.4217 12.665 14.5717L12.9617 14.7084C14.1134 15.2401 14.69 15.5034 15.0734 15.2134C15.4567 14.9234 15.3917 14.2684 15.265 12.9601L15.2317 12.6217C15.1967 12.2501 15.1784 12.0651 15.2317 11.8917C15.285 11.7201 15.405 11.5801 15.6434 11.3017L15.86 11.0484C16.6984 10.0684 17.1184 9.5784 16.9717 9.10673C16.825 8.63673 16.21 8.4984 14.98 8.22007L14.6634 8.14673C14.3134 8.0684 14.1384 8.03007 13.9967 7.92173C13.8567 7.81507 13.7667 7.65507 13.5867 7.33173Z"
                fill="#5555FF"
              />
            </svg>

            <div class="space-y-2 pt-1">
              <h3 class="font-bold">Inovasi Terdepan</h3>
              <p class="text-sm text-muted-foreground">
                Kami memberikan INOVASI terdepan, selalu menjadi pelopor untuk
                menghasilkan kain kualitas jenis baru, yang selalu membuat
                produk lebih unggul.
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
        >
          <div class="flex h-auto flex-col justify-between rounded-md p-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 22L24.4167 10.25L22.0833 7.91667L12.6667 17.3333L7.91667 12.5833L5.58334 14.9167L12.6667 22ZM3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H3.33334Z"
                fill="#5555FF"
              />
            </svg>

            <div class="space-y-2 pt-1">
              <h3 class="font-bold">Proses QC Ketat</h3>
              <p class="text-sm text-muted-foreground">
                Hal terpenting yang tidak akan dilupakan ialah QC (QUALITY
                CONTROL) yang baik dan ketat akan membuat produksi pakaian
                menjadi efisien dan menghasilkan produk yang dapat laku dan
                digemari di pasar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <div
        class="flex pt-32 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden bg-slate-100"
      >
        <div class="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <div class="w-full md:w-1/2 lg:pr-32">
            <h1 class="pb-6 font-semibold text-2xl">
              Rekomendasi Kain Untuk :
            </h1>
            <h2
              class="text-4xl lg:text-5xl text-left md:text-left text-primary leading-tight font-medium"
            >
              Bahan Jaket dan Celana
            </h2>
            <div class="mt-12">
              <ul class="list-disc pl-6">
                <li>Cotton Combed</li>
                <li>Cotton Baby Terry</li>
                <li>Cotton & CVC Misty</li>
              </ul>
            </div>
            <div class="flex flex-col lg:flex-row gap-3 mt-6">
              <label
                for=""
                class="btn btn-ghost border-2 border-primary text-primary"
                >Kaos casual</label
              >
              <label
                for=""
                class="btn btn-ghost border-2 border-primary text-primary"
                >Baju Muslim</label
              >
              <label
                for=""
                class="btn btn-ghost border-2 border-primary text-primary"
                >Kaos Polos</label
              >
              <label
                for=""
                class="btn btn-ghost border-2 border-primary text-primary"
                >Jaket dan Celana</label
              >
            </div>
            <div class="mt-10 flex sm:flex-row justify-center md:justify-start">
              <button
                class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-primary text-white"
              >
                Konsultasi Sekarang
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="../assets/figure2.svg" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <section class="text-gray-600 body-font">
        <div class="container py-24 mx-auto">
          <h1
            class="text-3xl font-medium title-font text-gray-900 mb-12 text-center"
          >
            Kata Mereka
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 w-auto">
              <div class="h-full p-8 rounded relative">
                <div
                  class="absolute w-48 h-full bg-gray-200 border top-0 left-0"
                  style="z-index: -1"
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="absolute top-4 left-6 w-12 h-12 text-gray-500 opacity-20 mb-4 rotate-180"
                  viewBox="0 0 975.036 975.036"
                >
                  <path
                    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                  ></path>
                </svg>
                <p class="leading-relaxed mb-6 font-thin text-xs">
                  Produk dengan kualitas premium dari Focus Textile membuat
                  bisnis cloting saya menjadi dipercaya. Harganya juga pas.
                  Sukses terus Focus Textile
                </p>
                <div class="flex items-center pb-2 pt-10">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <a class="inline-flex items-center">
                  <span class="flex-grow flex flex-col">
                    <span class="text-gray-500 text-sm">Gracia Indri</span>
                  </span>
                  <li class="pl-3 text-gray-500 text-sm font-thin">
                    3 Hari yang lalu
                  </li>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-auto">
              <div class="h-full p-8 rounded relative">
                <div
                  class="absolute w-48 h-full bg-gray-200 border top-0 left-0"
                  style="z-index: -1"
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="absolute top-4 left-6 w-12 h-12 text-gray-500 opacity-20 mb-4 rotate-180"
                  viewBox="0 0 975.036 975.036"
                >
                  <path
                    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                  ></path>
                </svg>
                <p class="leading-relaxed mb-6 font-thin text-xs">
                  Produk dengan kualitas premium dari Focus Textile membuat
                  bisnis cloting saya menjadi dipercaya. Harganya juga pas.
                  Sukses terus Focus Textile
                </p>
                <div class="flex items-center pb-2 pt-10">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <a class="inline-flex items-center">
                  <span class="flex-grow flex flex-col">
                    <span class="text-gray-500 text-sm">Gracia Indri</span>
                  </span>
                  <li class="pl-3 text-gray-500 text-sm font-thin">
                    3 Hari yang lalu
                  </li>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-auto">
              <div class="h-full p-8 rounded relative">
                <div
                  class="absolute w-48 h-full bg-gray-200 border top-0 left-0"
                  style="z-index: -1"
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="absolute top-4 left-6 w-12 h-12 text-gray-500 opacity-20 mb-4 rotate-180"
                  viewBox="0 0 975.036 975.036"
                >
                  <path
                    d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                  ></path>
                </svg>
                <p class="leading-relaxed mb-6 font-thin text-xs">
                  Produk dengan kualitas premium dari Focus Textile membuat
                  bisnis cloting saya menjadi dipercaya. Harganya juga pas.
                  Sukses terus Focus Textile
                </p>
                <div class="flex items-center pb-2 pt-10">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <a class="inline-flex items-center">
                  <span class="flex-grow flex flex-col">
                    <span class="text-gray-500 text-sm">Gracia Indri</span>
                  </span>
                  <li class="pl-3 text-gray-500 text-sm font-thin">
                    3 Hari yang lalu
                  </li>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <bottom/>
</template>
