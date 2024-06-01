<script setup>
import IconInstagram from "@/components/icons/IconInstagram.vue";
import { DeFacebookPlain } from "@kalimahapps/vue-icons";
</script>

<template>
  <main class="bg-white h-screen pt-12">
    <div class="flex flex-col items-center justify-start xs:mt-12 xl:grid xl:grid-cols-2 xl:items-start bg-white">
      <!-- <h1 class="text-xs text-center font-serif text-gray-600">
        Puedes iniciar sesión en estas cuentas porque están en el centro de cuentas.
      </h1> -->
      <section class="xl:col-span-1 flex justify-end">
        <img class="w-[560px] hidden xl:flex" src="../assets/img/mobile/home-phones-2x.png" alt="" />
      </section>
      <section class="xl:col-span-1 col-span-2 xl:flex xl:flex-col xl:justify-start sm:w-[400px]">
        <div class="sm:border py-10 px-10">
          <div class="w-full flex justify-center">
            <IconInstagram class="min-w-52 max-w-64" />
          </div>
          <form class="flex flex-col items-center justify-center mt-10 mx-auto">
            <input
              type="text"
              class="h-10 w-full border border-gray-300 rounded-md px-3 bg-slate-200/30 placeholder:text-xs"
              placeholder="Teléfono, usuario o correo electrónico" />
            <input
              type="password"
              class="h-10 w-full border placeholder:text-xs border-gray-300 rounded-md px-3 mt-2 xs:mt-1 bg-slate-200/30"
              placeholder="Contraseña" />
            <button type="submit" class="w-full h-10 bg-[#0095f6] hover:bg-blue-600 text-white rounded-md mt-5">
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
            <p class="text-sm mt-6 text-gray-600">¿Has olvidado tu contraseña?</p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-center gap-x-2 mt-4 w-full xl:w-[400px] xs:border py-6">
            <p class="text-sm text-gray-600">¿No tienes una cuenta?</p>
            <router-link>
              <p class="text-base text-[#0095f6]">Regístrate</p>
            </router-link>
          </div>
        </div>
        <div class="flex justify-center flex-col items-center mt-2 w-full xl:w-[400px]">
          <p class="text-base text-gray-600 mt-5">Descarga la app</p>
          <div class="grid grid-cols-1 xs:grid-cols-2 mt-4 justify-center items-center gap-y-1">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yT/r/0BpxdgM3WUr.png"
              alt="App Store"
              class="min-w-[134px] max-w-[170px] col-span-1" />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/LjIQEL8csb0.png"
              alt="Google Play"
              class="min-w-[111px] max-w-[150px] col-span-1 mx-auto" />
          </div>
        </div>
      </section>
    </div>
    <footer class="flex flex-col bg-white">
      <div class="flex items-center justify-center gap-x-7 w-11/12 flex-wrap mx-auto text-sm">
        <router-link to="#">
          <p class="text-gray-600 mt-2">Meta</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Informacion</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Blog</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Ayuda</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Api</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Privacidad</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Condiciones</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Ubicaciones</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Instagram Lite</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Importacion de contactos y no usuarios</p>
        </router-link>
        <router-link to="#">
          <p class="text-gray-600 mt-2">Meta Verified</p>
        </router-link>
      </div>
      <div class="flex justify-center gap-x-4 mt-5 mb-12">
        <select class="text-sm text-gray-600 text-center">
          <option value="es" Default>Español</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
          <option value="de">Deutsch</option>
          <option value="pt">Português</option>
          <option value="zh">中文(简体)</option>
        </select>

        <p class="text-sm text-gray-600 text-center">© 2021 Instagram de Facebook</p>
      </div>
    </footer>
  </main>
</template>

<style scoped></style>
