<template>
<section id="chat-input">
  <input placeholder="Send message...">
</section>
</template>

<script>
export default {
  name: 'ChatInput'
}
</script>

<style lang="stylus">
@require '../vars'

#chat-input
  padding: input-area-padding

#chat-input input
  width: calc(100% - 2em)
  border: 0
  padding: (input-area-padding / 2) 1em
  border-radius: 0.3em
  background: input-bg-color

  &:focus
    outline: none

  &::placeholder
    color: #aaa
</style>
