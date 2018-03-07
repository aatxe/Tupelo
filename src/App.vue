<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
    height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
