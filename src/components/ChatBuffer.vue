<template>
<section id="chat-buffer">
  <Topic/>
  <section id="buffer-content">
    <div class="message" v-for="msg in messages" :key="msg.id">
      <span class="message-time">{{ msg.time }}</span>
      <span class="message-author">{{ msg.author }}</span>
      <span class="message-body">{{ msg.content }}</span>
    </div>
  </section>
  <ChatInput/>
</section>
</template>

<script>
import Topic from '@/components/Topic'
import ChatInput from '@/components/ChatInput'

export default {
  name: 'ChatBuffer',

  components: {
    ChatInput,
    Topic
  },

  data: function () {
    return {
      messages: Array(100).fill().map((_, i) => {
        return { id: i, time: '20:08', author: 'awe', content: 'ay le mayo' }
      })
    }
  }
}
</script>

<style lang="stylus">
@require '../vars'

topbar-total-size = topbar-height - (2 * topbar-border)

#chat-buffer
  background: buffer-bg-color
  -webkit-app-region: no-drag
  height: 100vh
  display: flex
  flex-direction: column

#buffer-content
  height: 100%
  width: 6fr
  align-self: end
  overflow-y: scroll
  margin: 0.2em
  padding: 0.5em 2em

.message-time
  &::before
    content: "["
  &::after
    content: "]"

.message-author
  &::before
    content: "("
  &::after
    content: ")"
</style>
