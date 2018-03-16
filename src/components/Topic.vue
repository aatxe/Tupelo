<template>
<section id="topic">
  <span class="topic-msg">
    PdgnCo: https://pdgn.co/ | Canary: https://pdgn.co/canary.txt | Stats: http://ircstats.wogloms.com/pisg/pdgn
  </span>
</section>
</template>

<script>

export default {
  name: 'Topic'
}
</script>

<style lang="stylus">
@require '../vars'

#topic
  display: grid
  height: topbar-height !important
  background: topic-bg-color
  border-bottom: topbar-border solid #2A2C30
  box-shadow: 0 1px 1px topbar-shadow-color

.topic-msg
  align-self: center
  padding: 0 0.5em
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
</style>
