<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import Bottom from "@/components/Bottom.vue";
</script>

<template>
  <Breadcrumb />
  <div class="max-w-screen-xl mx-auto px-4 pb-20 lg:px-6">
    <div class="mb-6">
      <h2 class="text-3xl tracking-tight font-bold">Resources Focus Textile</h2>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="mr-0 md:mr-8 mb-6 md:mb-0">
        <img class="w-1/2 md:w-full mx-auto" src="../../img/resources-1.png" />
      </div>
      <div class="flex-1 flex flex-col sm:flex-row flex-wrap">
        <div class="w-full sm:w-1/2 mb-4 px-2">
          <div class="h-full py-4 px-6">
            <h3 class="text-2xl font-bold text-md mb-6">
              1. Price List Ready Stock
            </h3>
            <p class="text-md">
              Merupakan dokumen yang berisi list harga kain yang tersedia di
              Focus Textile.
            </p>
            <img
              class="border border-blue-400 p-6 w-36 mt-6"
              src="../../img/resources-2.png"
            />
            <button
              class="bg-slate-300 hover:bg-slate-500 hover:text-white text-lg px-3.5 py-1 rounded-full ml-3 mt-6"
            >
              Download
            </button>
          </div>
        </div>
        <div class="w-full sm:w-1/2 mb-4 px-2">
          <div class="h-full py-4 px-6">
            <h3 class="text-2xl font-bold text-md mb-6">
              2. Price List Fresh Order
            </h3>
            <p class="text-md">
              Merupakan dokumen yang berisi list harga kain yang tersedia di
              Focus Textile.
            </p>
            <img
              class="border border-blue-400 p-6 w-36 mt-6"
              src="../../img/resources-2.png"
            />
            <button
              class="bg-slate-300 hover:bg-slate-500 hover:text-white text-lg px-3.5 py-1 rounded-full ml-3 mt-6"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Bottom />
</template>
