<template>
  <div class="home">
    <Landing />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Landing from "@/components/Landing.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Landing,
  },
});
</script>
