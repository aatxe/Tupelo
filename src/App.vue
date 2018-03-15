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
    -webkit-app-region: drag;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

::-webkit-scrollbar {
    width: 0.5em;
}

::-webkit-scrollbar-track {
    margin-top: 0.2em;
    border-radius: 10px;
    background-color: #2F3136;
}

::-webkit-scrollbar-thumb {
    border-radius: 1em;
    background-color: #171B1D;
    outline: 1em solid #35393F;
}
</style>
