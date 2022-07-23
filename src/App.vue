<template>
  <div>
    <HeaderPage />
    <MainPage />
  </div>
</template>

<script>
import HeaderPage from "../src/components/layout/TheHeader.vue"
import MainPage from "../src/components/layout/TheMain.vue"
export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage
  }
}
</script>

<style>
@import url(../src/css/main.css);
</style>
