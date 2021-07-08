<template>
  <header>
    <nav>
      <div class="flex flex-row mx-4">
        <div class="flex justify-start">
          <img style="width: 5em" alt="Vue logo" src="@/assets/logo.svg" />
        </div>

        <div
          class="
            hidden
            md:inline-flex
            w-full
            flex flex-wrap
            justify-end
            content-center
          "
        >
          <ol class="flex">
            <li class="ml-5">
              <router-link to="/">Home</router-link>
            </li>
            <li class="ml-5">
              <router-link to="/about">About</router-link>
            </li>
            <li class="ml-5">
              <router-link to="/experience">Experience</router-link>
            </li>
            <li class="ml-4">
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
        </div>
        <div class="md:hidden w-full flex flex-wrap justify-end content-center">
          <svg
            @click="$emit('aside', !aside)"
            style="width: 36px; height: 36px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
          <svg
            @click="$emit('aside', !aside)"
            v-show="aside"
            style="z-index: 40; width: 36px; height: 36px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
            />
          </svg>
        </div>
      </div>
    </nav>
    <Aside :show="aside" />
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Aside from "@/components/Aside.vue";

export default defineComponent({
  name: "Header",
  components: { Aside },
  props: { aside: Boolean },
});
</script>

