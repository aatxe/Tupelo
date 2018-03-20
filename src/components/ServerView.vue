<template>
<section id="server-view">
  <ChatBuffer/>
</section>
</template>

<script>
import ChatBuffer from '@/components/buffers/ChatBuffer'

export default {
  name: 'ServerView',

  components: {
    ChatBuffer
  }
}
</script>

<style lang="stylus">
#server-view
  height: 100vh
  display: grid
</style>
