<template>
<section id="client-ui">
  <ServerList/>
  <ChannelView/>
</section>
</template>

<script>
import ChannelView from '@/components/ChannelView'
import ServerList from '@/components/ServerList'

export default {
  name: 'Client',

  components: {
    ChannelView,
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
