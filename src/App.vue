<template>
<main id="app">
  <ServerList/>
  <router-view/>
</main>
</template>

<script>
import ServerList from '@/components/ServerList'

export default {
  name: 'App',

  components: {
    ServerList
  }
}
</script>

<style lang="stylus">
@require 'vars'

html, body, #app
  height: 100vh
  width: 100vw
  display: grid
  grid-template-columns: 1fr 6fr
  -webkit-app-region: drag

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: base-fg-color

::-webkit-scrollbar
  width: 0.5em

::-webkit-scrollbar-track
  margin-top: 0.2em
  border-radius: 10px
  background-color: scrollbar-track-color

::-webkit-scrollbar-thumb
  border-radius: 1em
  background-color: scrollbar-thumb-color
</style>
