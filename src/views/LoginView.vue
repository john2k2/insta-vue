<script setup>
import IconInstagram from "@/components/icons/IconInstagram.vue";
import { DeFacebookPlain } from "@kalimahapps/vue-icons";
</script>

<template>
  <main class="bg-white h-screen pt-12">
    <div class="flex flex-col items-center justify-start xs:mt-12">
      <IconInstagram class="w-44" />
      <!-- <h1 class="text-xs text-center font-serif text-gray-600">
        Puedes iniciar sesión en estas cuentas porque están en el centro de cuentas.
      </h1> -->
      <section class="xxs:w-[310px] px-10">
        <form class="flex flex-col items-center justify-center mt-6">
          <input
            type="text"
            class="h-10 w-full border border-gray-300 rounded-md px-3 bg-slate-200/30 placeholder:text-xs"
            placeholder="Teléfono, usuario o correo electrónico" />
          <input
            type="password"
            class="h-10 w-full border placeholder:text-xs border-gray-300 rounded-md px-3 mt-2 xs:mt-1 bg-slate-200/30"
            placeholder="Contraseña" />
          <button type="submit" class="w-full h-10 bg-[#0095f6] hover:bg-blue-600 text-white rounded-md mt-3">
            Iniciar sesión
          </button>
        </form>
        <div class="flex justify-center items-center mt-5 h-full">
          <span class="w-1/2 bg-gray-300 h-[1px]"></span>
          <p class="mx-4 text-gray-300">O</p>
          <span class="w-1/2 bg-gray-300 h-[1px]"></span>
        </div>
        <div class="flex flex-col items-center justify-center mt-5">
          <router-link to="/">
            <div class="flex justify-center items-start mb-3 w-full">
              <DeFacebookPlain class="text-blue-500 size-6" />
              <p class="text-base text-blue-800 font-normal ml-2 text-center">Iniciar sesión con Facebook</p>
            </div>
          </router-link>
          <p class="text-xs text-gray-600">¿Has olvidado tu contraseña?</p>
        </div>
        <div class="flex flex-col items-center justify-center mt-5">
          <p class="text-xs text-gray-600">¿No tienes una cuenta?</p>
          <p class="text-xs text-blue-500">Regístrate</p>
        </div>
      </section>
      <div class="flex justify-center flex-col items-center">
        <p class="text-sm text-gray-600 mt-5">Descarga la app</p>
        <div class="grid grid-cols-1 xxs:grid-cols-2 mt-3 w-full justify-center items-center gap-y-1">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yT/r/0BpxdgM3WUr.png"
            alt="App Store"
            class="w-[134px] col-span-1" />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/LjIQEL8csb0.png"
            alt="Google Play"
            class="w-[111px] col-span-1 mx-auto" />
        </div>
      </div>
    </div>
    <footer class="flex items-center justify-center">
      <p class="text-xs text-gray-600 mt-5">© 2021 Instagram de Facebook</p>
    </footer>
  </main>
</template>

<style scoped></style>
