<script setup>
function toggleFAQ(event) {
  const button = event.currentTarget;
  const content = button.nextElementSibling;
  button.setAttribute(
    "aria-expanded",
    button.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  content.style.maxHeight =
    button.getAttribute("aria-expanded") === "true"
      ? content.scrollHeight + "px"
      : "0";
}
</script>

<template>
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col md:flex-row gap-3"
  >
    <div class="flex flex-col text-left basis-1/2">
      <p
        class="mt-6 mb-10 sm:text-4xl text-3xl font-extrabold text-base-content"
      >
        Pertanyaan yang Sering Diajukan
      </p>
      <p class="inline-block font-semibold text-lg text-black/70 mb-5">
        Tentang Focus Textile
      </p>
      <p class="inline-block font-semibold text-lg text-black/70 mb-5">
        Produk Kain
      </p>
      <p class="inline-block font-semibold text-lg text-black/70 mb-5">
        Produk Aksesoris
      </p>
    </div>
    <ul
      class="border border-gray-300 bg-gray-50 rounded-lg shadow-xl p-8 basis-1/2"
    >
      <p class="sm:text-2xl text-2xl font-bold text-base-content">
        Tentang Focus Textile
      </p>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left md:text-lg"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Dimana saja lokasi toko Focus Textile berada?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Focus Textile (CV. Surya Jaya Abadi) berlokasi di Ruko Holis
              Regency M15-17 Bandung
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah hari Minggu buka? Jam berapa toko tutup?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Mohon maaf, hari Minggu kami libur. <br />
              Berikut jam operasional kami: <br />
              Senin-Jumat: 08.30-16.30 <br />Sabtu: 08.30-14.00
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah kualitas di seluruh cabang Focus Textile sama?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah Focus Textile bisa sekalian membuat kaos?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden border-t border-black/30"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <p class="mt-10 sm:text-2xl text-2xl font-bold text-base-content">
        Produk Kain
      </p>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left md:text-lg"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah Focus Textile menyediakan sample gratis?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Focus Textile (CV. Surya Jaya Abadi) berlokasi di Ruko Holis
              Regency M15-17 Bandung
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Berapa meterkah panjang 1 roll kain combed?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, numquam quis repudiandae saepe sint aut!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apa yang dimaksud dengan setting kain?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah kain Focus Textile dapat diprint?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left md:text-lg border-t border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apa yang dimaksud dengan gramasi?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Focus Textile (CV. Surya Jaya Abadi) berlokasi di Ruko Holis
              Regency M15-17 Bandung
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Perbedaan ketebalan kain 20s, 24s, 30s, dan 40s itu apa?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, numquam quis repudiandae saepe sint aut!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Bagaimana cara membedakan kain combed yang 100% cotton?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah kain Focus Textile ramah lingkungan?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Mengapa kain menyusut setelah dicuci?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left md:text-lg border-t border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah warna kain selalu konsisten?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Focus Textile (CV. Surya Jaya Abadi) berlokasi di Ruko Holis
              Regency M15-17 Bandung
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Mengapa berat kain roll tidak sesuai dengan yang tertulis pada
            label sticker?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, numquam quis repudiandae saepe sint aut!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apa perbedaan antara bruto dan netto?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Mengapa kain saya mempunyai cacat?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden border-t border-black/30"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <p class="mt-10 sm:text-2xl text-2xl font-bold text-base-content">
        Produk Aksesoris
      </p>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left md:text-lg"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content">Apa itu RIB? </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Focus Textile (CV. Surya Jaya Abadi) berlokasi di Ruko Holis
              Regency M15-17 Bandung
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content">Apa itu BUR?</span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, numquam quis repudiandae saepe sint aut!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apa itu kerah dan manset?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content">Apa itu RIB spandex? </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left md:text-lg border-t border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Berapa jumlah RIB yang dibutuhkan untuk 1 kg kain?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Focus Textile (CV. Surya Jaya Abadi) berlokasi di Ruko Holis
              Regency M15-17 Bandung
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Berapa jumlah kerah dan manset yang dibutuhkan untuk 1 kg
            kain?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, numquam quis repudiandae saepe sint aut!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Berapa jumlah BUR yang dibutuhkan setiap pembuatan
            jaket/hoodie?</span
          >
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
      <li>
        <button
          class="relative flex gap-2 items-center w-full py-5 text-base text-left border-t md:text-lg border-black/30"
          aria-expanded="false"
          @click="toggleFAQ"
        >
          <span class="flex-1 text-base-content"
            >Apakah kain polyester activedry memiliki aksesoris atau pasangan
            kainnya?
          </span>
          <svg
            class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out false"
            ></rect>
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out false"
            ></rect>
          </svg>
        </button>
        <div
          class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden border-t border-black/30"
          style="transition: max-height 0.3s ease-in-out 0s"
        >
          <div class="pb-5 leading-relaxed">
            <div class="space-y-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
              fugit aliquid expedita, non harum!
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
