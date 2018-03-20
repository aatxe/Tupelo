<template>
<section id="query-view">
  <section id="buffer-view">
    <ChatBuffer/>
  </section>
</section>
</template>

<script>
import ChatBuffer from '@/components/buffers/ChatBuffer'

export default {
  name: 'QueryView',

  components: {
    ChatBuffer
  }
}
</script>

<style lang="stylus">
@require '../vars'

#query-view
  height: 100vh
  display: grid

#buffer-view
  -webkit-app-region: no-drag
  height: 100vh
  display: flex
  flex-direction: column
</style>
