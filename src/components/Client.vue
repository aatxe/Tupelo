<template>
<section id="client-ui">
  <ServerList/>
  <BufferView/>
</section>
</template>

<script>
import BufferView from '@/components/BufferView'
import ServerList from '@/components/ServerList'

export default {
  name: 'Client',

  components: {
    BufferView,
    ServerList
  }
}
</script>

<style lang="stylus">
#client-ui
  height: 100vh
  display: grid
  grid-template-columns: 1fr 6fr
</style>
