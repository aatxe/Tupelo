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
@require '../../vars'

#topic
  display: grid
  flex: 0 0 topbar-height
  background: topic-bg-color
  border-bottom: topbar-border solid topbar-border-color
  box-shadow: 0 1px 1px topbar-shadow-color
  white-space: nowrap
  overflow: hidden

  &:hover
    flex: 2 0 topbar-height
    padding: 0.5em 0
    overflow: inherit
    white-space: normal

.topic-msg
  align-self: center
  padding: 0 0.5em
  overflow: inherit
  text-overflow: ellipsis
</style>
