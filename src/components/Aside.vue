<template>
  <aside
    :class="{ shown: show, oculta: !show }"
    class="shown bg-gray-100 h-screen"
  >
    <ol class="flex flex-col text-3xl">
      <li class="my-5">
        <router-link to="/">Home</router-link>
      </li>
      <li class="my-5">
        <router-link to="/about">About</router-link>
      </li>
      <li class="my-5">
        <router-link to="/experience">Experience</router-link>
      </li>
      <li class="my-4">
        <div>
          <a
            download="AlexisBetancourtResume.pdf"
            class="border-2 border-black p-2 rounded-md"
            href="/resume.pdf"
            >Resume</a
          >
        </div>
      </li>
    </ol>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Aside",
  props: {
    show: Boolean,
  },
});
</script>

<style lang="css">
aside.shown {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0px;

  box-shadow: -10px 0px 30px -15px black;
  z-index: 39;
  transform: translateX(0vw);
  visibility: visible;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
aside.oculta {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  padding: 50px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0px;

  box-shadow: -10px 0px 30px -15px black;
  z-index: 39;
  transform: translateX(100vw);
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
