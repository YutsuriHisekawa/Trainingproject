<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import Bottom from "@/components/Bottom.vue";
</script>

<template>
  <Breadcrumb />
  <section class="relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7">
      <h2 class="title font-bold text-4xl leading-10 mb-8 text-black">
        Keranjang
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 py-6">
        <div
          class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
        >
          <img src="../../public/img/cart-1.png" class="xl:w-[120px]" />
          <div class="pro-data w-full max-w-sm">
            <h5
              class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
            >
              COTTON CARDED 30s
            </h5>
            <p
              class="font-normal text-lg leading-8 text-gray-700 my-2 min-[550px]:my-3 max-[550px]:text-center"
            >
              Biru Muda
            </p>
          </div>
        </div>
        <div
          class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
        >
          <h6
            class="font-medium text-md leading-9 text-white w-full max-w-[146px] text-center bg-blue-700 rounded-md"
          >
            Order Sample
          </h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <h6
              class="font-medium text-lg text-black leading-9 w-full max-w-[146px] text-center"
            >
              1 Kg
            </h6>
          </div>
          <h6
            class="text-black font-medium text-lg leading-9 w-full max-w-[176px] text-center"
          >
            Body
          </h6>
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-300 py-6"
      >
        <div
          class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
        >
          <div class="img-box">
            <img src="../../public/img/cart-2.png" class="xl:w-[120px]" />
          </div>
          <div class="pro-data w-full max-w-sm">
            <h5
              class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
            >
              COTTON COMBED 29s
            </h5>
            <p
              class="font-normal text-lg leading-8 text-gray-700 my-2 min-[550px]:my-3 max-[550px]:text-center"
            >
              Merah Maroon
            </p>
          </div>
        </div>
        <div
          class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
        >
          <h6
            class="font-medium text-md leading-9 text-white w-full max-w-[146px] text-center bg-blue-700 rounded-md"
          >
            Order Kain
          </h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <h6
              class="font-medium text-lg text-black leading-9 w-full max-w-[146px] text-center"
            >
              1 Kg
            </h6>
          </div>
          <h6
            class="text-black font-medium text-lg leading-9 w-full max-w-[176px] text-center"
          >
            Body
          </h6>
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-300 py-6"
      >
        <div
          class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
        >
          <div class="img-box">
            <img src="../../public/img/cart-3.png" class="xl:w-[120px]" />
          </div>
          <div class="pro-data w-full max-w-sm">
            <h5
              class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
            >
              M70B
            </h5>
            <p
              class="font-normal text-lg leading-8 text-gray-700 my-2 min-[550px]:my-3 max-[550px]:text-center"
            >
              Misty M070 Bluish
            </p>
          </div>
        </div>
        <div
          class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
        >
          <h6
            class="font-medium text-md leading-9 text-white w-full max-w-[146px] text-center bg-blue-700 rounded-md"
          >
            Order Kain
          </h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <h6
              class="font-medium text-lg text-black leading-9 w-full max-w-[146px] text-center"
            >
              1 Kg
            </h6>
          </div>
          <h6
            class="text-black font-medium text-lg leading-9 w-full max-w-[176px] text-center"
          >
            Body
          </h6>
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-300 py-6"
      >
        <div
          class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
        >
          <div class="img-box">
            <img src="../../public/img/cart-4.png" class="xl:w-[120px]" />
          </div>
          <div class="pro-data w-full max-w-sm">
            <h5
              class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
            >
              COTTON CARDED 30s
            </h5>
            <p
              class="font-normal text-lg leading-8 text-gray-700 my-2 min-[550px]:my-3 max-[550px]:text-center"
            >
              Ungu
            </p>
          </div>
        </div>
        <div
          class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
        >
          <h6
            class="font-medium text-md leading-9 text-white w-full max-w-[146px] text-center bg-blue-700 rounded-md"
          >
            Order Sample
          </h6>
          <div class="flex items-center w-full mx-auto justify-center">
            <h6
              class="font-medium text-lg text-black leading-9 w-full max-w-[146px] text-center"
            >
              1 Kg
            </h6>
          </div>
          <h6
            class="text-black font-medium text-lg leading-9 w-full max-w-[176px] text-center"
          >
            Body
          </h6>
        </div>
      </div>
      <div class="flex justify-center border-t border-gray-300 py-14">
        <button
          class="btn btn-outline btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          + Tambah Barang Lain
        </button>
      </div>
      <div
        class="bg-gray-500/10 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto"
      >
        <p class="font-medium text-2xl leading-9 text-gray-900 mb-6">
          Ringkasan Pesanan
        </p>
        <div class="flex items-center justify-between max-w-xs mb-3">
          <p class="font-normal text-xl leading-8 text-gray-900">Total Kain:</p>
          <h6 class="font-normal text-xl leading-8 text-gray-900">1 Barang</h6>
        </div>
        <div class="flex items-center justify-between max-w-xs pb-4">
          <p class="font-normal text-xl leading-8 text-gray-900">
            Total Sample:
          </p>
          <h6 class="font-normal text-xl leading-8 text-gray-900">1 Barang</h6>
        </div>
        <div class="flex items-center justify-between max-w-xl py-3">
          <p class="font-medium text-2xl leading-9 text-gray-900">
            Total Pesanan:
          </p>
          <h6 class="font-normal text-xl leading-8 text-gray-900 mr-12">
            2 Barang
          </h6>
          <button
            class="font-normal text-xl leading-8 text-white px-6 py-3 bg-blue-700 rounded-md hover:bg-blue-400 hover:text-black"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
  <Bottom />
</template>
