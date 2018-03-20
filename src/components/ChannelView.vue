<template>
<section id="buffer-view">
  <ChatBuffer/>
  <UserList/>
</section>
</template>

<script>
import ChatBuffer from '@/components/buffers/ChatBuffer'
import UserList from '@/components/buffers/UserList'

export default {
  name: 'ChannelView',

  components: {
    ChatBuffer,
    UserList
  }
}
</script>

<style lang="stylus">
#buffer-view
  height: 100vh
  display: grid
  grid-template-columns: 6fr 1fr;
</style>
