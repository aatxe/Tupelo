<template>
<section id="channel-view">
  <section id="buffer-view">
    <Topic/>
    <ChatBuffer/>
  </section>
  <UserList/>
</section>
</template>

<script>
import ChatBuffer from '@/components/buffers/ChatBuffer'
import Topic from '@/components/buffers/Topic'
import UserList from '@/components/buffers/UserList'

export default {
  name: 'ChannelView',

  components: {
    ChatBuffer,
    Topic,
    UserList
  }
}
</script>

<style lang="stylus">
#channel-view
  height: 100vh
  display: grid
  grid-template-columns: 6fr 1fr;

#buffer-view
  -webkit-app-region: no-drag
  height: 100vh
  display: flex
  flex-direction: column
</style>
