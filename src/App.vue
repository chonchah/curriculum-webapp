<template>
  <Header @aside="showAside" :aside="aside" />
  <main><router-view /></main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
export default defineComponent({
  components: { Header },
  data() {
    return {
      aside: false,
    };
  },
  methods: {
    showAside(val: boolean) {
      this.aside = val;
      document.querySelector("main")?.classList.toggle("blur");
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lilita+One&display=swap");
</style>

<style>
.blur {
  filter: blur(1px);
}
body {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
ol > li > a::before {
  content: "0" counter(item) ".";
  margin-right: 5px;
  color: var(--green);
  font-weight: bold;
  text-align: right;
}
ol li {
  counter-increment: item 1;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lilita One", cursive;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
