<template>
  <div class="mt-32 mx-8 md:mx-16 text-left">
    <h2 class="text-2xl text-green-700">Hi, my name is</h2>
    <h1 class="text-4xl">Alexis Betancourt.</h1>
    <h1 class="text-4xl text-gray-700">
      I build technology for your business.
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Landing",
  props: {
    msg: String,
  },
});
</script>
