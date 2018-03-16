<template>
<section id="server-list">
  <div id="server-list-gutter">
  </div>
  <ul>
    <li class="server">
      <font-awesome-icon :icon="server"/>
      <span class="server-name">FyreChat</span>
      <ul>
        <li class="channel">#vana</li>
        <li class="channel">#vana-commits</li>
      </ul>
    </li>
    <li>
      <font-awesome-icon :icon="server"/>
      <span class="server-name">PdgnCo</span>
      <ul>
        <li class="channel current">#pdgn</li>
        <li class="channel">#merveille</li>
      </ul>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'ServerList'
}
</script>

<style lang="stylus">
@require '../vars'

#server-list
  background: sidebar-bg-color

#server-list-gutter
  background: topbar-bg-color
  height: topbar-height
  border-bottom: topbar-border solid topbar-bg-color
  box-shadow: 0 1px 1px topbar-shadow-color
</style>
