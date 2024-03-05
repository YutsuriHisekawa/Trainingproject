<script setup>
import { RouterLink, RouterView } from "vue-router";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Bottom from "@/components/Bottom.vue";
</script>

<template>
  <Breadcrumb />
  <div class="pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="mb-4">
            <img
              class="w-full object-cover"
              src="../../img/product-details-1.png"
            />
          </div>
          <div class="carousel carousel-center mx-auto flex">
            <div class="carousel-item">
              <div class="grid">
                <div class="flex flex-col shadow-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-40 w-full object-cover"
                      src="../../img/product-details-7.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ml-1.5">
              <div class="grid">
                <div class="flex flex-col shadow-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-40 w-full object-cover"
                      src="../../img/product-details-8.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ml-2">
              <div class="grid">
                <div class="flex flex-col shadow-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-40 w-full object-cover"
                      src="../../img/product-details-9.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ml-2">
              <div class="grid">
                <div class="flex flex-col shadow-lg">
                  <div class="flex-shrink-0">
                    <img
                      class="h-40 w-full object-cover"
                      src="../../img/product-details-10.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Cotton Combed 30s Royal Blue
          </h2>
          <div class="flex gap-1.5 mb-2.5 items-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6652 12.9167C16.3954 13.1782 16.2714 13.5563 16.3329 13.9272L17.2589 19.0522C17.337 19.4865 17.1537 19.9261 16.7902 20.1772C16.4339 20.4376 15.96 20.4688 15.5714 20.2605L10.9579 17.8542C10.7975 17.7688 10.6193 17.723 10.437 17.7178H10.1548C10.0568 17.7324 9.961 17.7636 9.8735 17.8115L5.25892 20.2292C5.0308 20.3438 4.77246 20.3845 4.51934 20.3438C3.90267 20.2272 3.49121 19.6397 3.59225 19.0199L4.51934 13.8949C4.5808 13.5209 4.45684 13.1407 4.18705 12.8751L0.425587 9.22925C0.111003 8.92404 0.00162844 8.46571 0.145378 8.05216C0.284962 7.63966 0.641212 7.33862 1.07142 7.27091L6.2485 6.51987C6.64225 6.47925 6.98809 6.23966 7.16517 5.8855L9.44642 1.20841C9.50059 1.10425 9.57038 1.00841 9.65475 0.927165L9.7485 0.854248C9.79746 0.800081 9.85371 0.75529 9.91621 0.718831L10.0298 0.677165L10.2068 0.604248H10.6454C11.037 0.644873 11.3818 0.879248 11.562 1.22925L13.8735 5.8855C14.0402 6.22612 14.3641 6.46258 14.7381 6.51987L19.9152 7.27091C20.3527 7.33341 20.7183 7.6355 20.8631 8.05216C20.9995 8.46987 20.8818 8.92821 20.561 9.22925L16.6652 12.9167Z"
                fill="#FFA31D"
              />
            </svg>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6652 12.9167C16.3954 13.1782 16.2714 13.5563 16.3329 13.9272L17.2589 19.0522C17.337 19.4865 17.1537 19.9261 16.7902 20.1772C16.4339 20.4376 15.96 20.4688 15.5714 20.2605L10.9579 17.8542C10.7975 17.7688 10.6193 17.723 10.437 17.7178H10.1548C10.0568 17.7324 9.961 17.7636 9.8735 17.8115L5.25892 20.2292C5.0308 20.3438 4.77246 20.3845 4.51934 20.3438C3.90267 20.2272 3.49121 19.6397 3.59225 19.0199L4.51934 13.8949C4.5808 13.5209 4.45684 13.1407 4.18705 12.8751L0.425587 9.22925C0.111003 8.92404 0.00162844 8.46571 0.145378 8.05216C0.284962 7.63966 0.641212 7.33862 1.07142 7.27091L6.2485 6.51987C6.64225 6.47925 6.98809 6.23966 7.16517 5.8855L9.44642 1.20841C9.50059 1.10425 9.57038 1.00841 9.65475 0.927165L9.7485 0.854248C9.79746 0.800081 9.85371 0.75529 9.91621 0.718831L10.0298 0.677165L10.2068 0.604248H10.6454C11.037 0.644873 11.3818 0.879248 11.562 1.22925L13.8735 5.8855C14.0402 6.22612 14.3641 6.46258 14.7381 6.51987L19.9152 7.27091C20.3527 7.33341 20.7183 7.6355 20.8631 8.05216C20.9995 8.46987 20.8818 8.92821 20.561 9.22925L16.6652 12.9167Z"
                fill="#FFA31D"
              />
            </svg>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6652 12.9167C16.3954 13.1782 16.2714 13.5563 16.3329 13.9272L17.2589 19.0522C17.337 19.4865 17.1537 19.9261 16.7902 20.1772C16.4339 20.4376 15.96 20.4688 15.5714 20.2605L10.9579 17.8542C10.7975 17.7688 10.6193 17.723 10.437 17.7178H10.1548C10.0568 17.7324 9.961 17.7636 9.8735 17.8115L5.25892 20.2292C5.0308 20.3438 4.77246 20.3845 4.51934 20.3438C3.90267 20.2272 3.49121 19.6397 3.59225 19.0199L4.51934 13.8949C4.5808 13.5209 4.45684 13.1407 4.18705 12.8751L0.425587 9.22925C0.111003 8.92404 0.00162844 8.46571 0.145378 8.05216C0.284962 7.63966 0.641212 7.33862 1.07142 7.27091L6.2485 6.51987C6.64225 6.47925 6.98809 6.23966 7.16517 5.8855L9.44642 1.20841C9.50059 1.10425 9.57038 1.00841 9.65475 0.927165L9.7485 0.854248C9.79746 0.800081 9.85371 0.75529 9.91621 0.718831L10.0298 0.677165L10.2068 0.604248H10.6454C11.037 0.644873 11.3818 0.879248 11.562 1.22925L13.8735 5.8855C14.0402 6.22612 14.3641 6.46258 14.7381 6.51987L19.9152 7.27091C20.3527 7.33341 20.7183 7.6355 20.8631 8.05216C20.9995 8.46987 20.8818 8.92821 20.561 9.22925L16.6652 12.9167Z"
                fill="#FFA31D"
              />
            </svg>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6652 12.9167C16.3954 13.1782 16.2714 13.5563 16.3329 13.9272L17.2589 19.0522C17.337 19.4865 17.1537 19.9261 16.7902 20.1772C16.4339 20.4376 15.96 20.4688 15.5714 20.2605L10.9579 17.8542C10.7975 17.7688 10.6193 17.723 10.437 17.7178H10.1548C10.0568 17.7324 9.961 17.7636 9.8735 17.8115L5.25892 20.2292C5.0308 20.3438 4.77246 20.3845 4.51934 20.3438C3.90267 20.2272 3.49121 19.6397 3.59225 19.0199L4.51934 13.8949C4.5808 13.5209 4.45684 13.1407 4.18705 12.8751L0.425587 9.22925C0.111003 8.92404 0.00162844 8.46571 0.145378 8.05216C0.284962 7.63966 0.641212 7.33862 1.07142 7.27091L6.2485 6.51987C6.64225 6.47925 6.98809 6.23966 7.16517 5.8855L9.44642 1.20841C9.50059 1.10425 9.57038 1.00841 9.65475 0.927165L9.7485 0.854248C9.79746 0.800081 9.85371 0.75529 9.91621 0.718831L10.0298 0.677165L10.2068 0.604248H10.6454C11.037 0.644873 11.3818 0.879248 11.562 1.22925L13.8735 5.8855C14.0402 6.22612 14.3641 6.46258 14.7381 6.51987L19.9152 7.27091C20.3527 7.33341 20.7183 7.6355 20.8631 8.05216C20.9995 8.46987 20.8818 8.92821 20.561 9.22925L16.6652 12.9167Z"
                fill="#FFA31D"
              />
            </svg>
            <img src="../../img/product-details-rating.png" />
            <p class="text-lg text-amber-500 mt-[2px] ml-1">(3)</p>
          </div>
          <div class="flex">
            <div class="mr-4">
              <span
                class="text-xl text-blue-600 font-semibold dark:text-gray-300"
                >Rp95.000,00
              </span>
              <span class="text-xl font-semibold dark:text-gray-300">/ Kg</span>
            </div>
          </div>
          <div class="mb-4 -mt-1">
            <span class="text-xs text-gray-700 dark:text-gray-300"
              >*Tax Included</span
            >
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300"
              >Quantity</span
            >
            <div class="mt-2">
              <button
                class="border-2 border-gray-400/60 py-1 px-9 rounded-full"
              >
                1
              </button>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              class="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              class="ms-2 text-sm font-medium text-neutral-800/50 dark:text-gray-300"
              >Saya setuju dengan
              <span class="text-blue-600">Syarat dan Ketentuan</span>
              pemesanan</label
            >
          </div>
          <button
            class="border-2 border-blue-600 text-blue-600 py-1.5 px-[114px] rounded-xl mb-4 hover:bg-blue-600 hover:text-white"
          >
            Masukkan Keranjang
          </button>
          <button
            class="bg-blue-600 text-white py-2 px-36 rounded-xl mb-4 hover:bg-blue-300 hover:text-black"
          >
            Beli Sekarang
          </button>
          <hr class="border border-gray-400/50 mb-2" />
          <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300"
              >Deskripsi</span
            >
            <p
              class="text-gray-600 dark:text-gray-300 text-sm text-justify mt-1"
            >
              Cotton combed adalah jenis kain katun yang telah melalui proses
              perataan serat (combing process) untuk menghilangkan serat-serat
              halus dan kasar dari benang katun. Proses ini membuat kain lebih
              halus, lembut, dan nyaman saat dipakai. Cotton combed sering
              digunakan untuk pembuatan pakaian seperti kaos, karena teksturnya
              yang lembut dan penampilannya yang halus. Kain ini juga cenderung
              lebih tahan lama dan awet karena serat-serat kasar telah
              dihilangkan, menghasilkan produk pakaian yang nyaman dan
              berkualitas tinggi.
            </p>
          </div>
          <hr class="border border-gray-400/50 mb-2" />
          <div>
            <span class="font-bold text-gray-700 dark:text-gray-300"
              >Komposisi</span
            >
            <p
              class="text-gray-600 dark:text-gray-300 text-sm text-justify mt-1"
            >
              Dalam hal komposisi serat, cotton combed terbuat sepenuhnya dari
              serat katun. Oleh karena itu, komposisi kain cotton combed adalah
              100% katun.
            </p>
          </div>
        </div>
      </div>
      <hr class="border border-gray-400/30 my-6" />
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Produk Lainnya
      </h1>
      <div class="carousel carousel-center mx-auto flex">
        <div class="carousel-item">
          <div class="grid">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-64 w-full object-cover"
                  src="../../img/product-details-2.png"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block text-center">
                    <p class="text-xl font-semibold text-gray-900">
                      COTTON CARDED 30s
                    </p>
                    <p class="mt-3 text-base text-gray-500">Biru Muda</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ml-14">
          <div class="grid">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-64 w-full object-cover"
                  src="../../img/product-details-3.png"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block text-center">
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
        <div class="carousel-item ml-14">
          <div class="grid">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-64 w-full object-cover"
                  src="../../img/product-details-4.png"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block text-center">
                    <p class="text-xl font-semibold text-gray-900">
                      COTTON COMBED 30s
                    </p>
                    <p class="mt-3 text-base text-gray-500">Biru Muda</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ml-14">
          <div class="grid">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-64 w-full object-cover"
                  src="../../img/product-details-5.png"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block text-center">
                    <p class="text-xl font-semibold text-gray-900">
                      COTTON CARDED 30s
                    </p>
                    <p class="mt-3 text-base text-gray-500">Coklat Abu</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ml-14">
          <div class="grid">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-64 w-full object-cover"
                  src="../../img/product-details-6.png"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block text-center">
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
      </div>
    </div>
  </div>
  <Bottom />
</template>
