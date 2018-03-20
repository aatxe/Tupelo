<template>
<section id="chat-buffer">
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
import ChatInput from '@/components/buffers/ChatInput'

export default {
  name: 'ChatBuffer',

  components: {
    ChatInput
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
@require '../../vars'

#chat-buffer
  background: buffer-bg-color
  display: flex
  flex-direction: column

#buffer-content
  height: 100%
  align-self: end
  overflow-x: hidden
  overflow-y: scroll
  margin: 0.2em
  padding: 0.5em 2em
  /* width is less the width changes made by padding and margin */
  width: calc(100% - 4.4em)

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
