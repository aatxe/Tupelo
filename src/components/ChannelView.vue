<template>
<section id="channel-view" v-bind:class="{ 'with-user-list': showUserList }">
  <section id="buffer-view">
    <Topic/>
    <ChatBuffer/>
  </section>
  <UserList v-if="showUserList"/>
</section>
</template>

<script>
import ChatBuffer from '@/components/buffers/ChatBuffer'
import Topic from '@/components/buffers/Topic'
import UserList from '@/components/buffers/UserList'

export default {
  name: 'ChannelView',

  props: ['showUserList'],

  components: {
    ChatBuffer,
    Topic,
    UserList
  }
}
</script>

<style lang="stylus">
@require '../vars'

#channel-view
  height: 100vh
  display: grid

#channel-view.with-user-list
  grid-template-columns: 6fr 1fr;

#buffer-view
  -webkit-app-region: no-drag
  height: 100vh
  display: flex
  flex-direction: column
</style>
