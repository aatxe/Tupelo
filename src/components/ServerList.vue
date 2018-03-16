<template>
<section id="server-list">
  <div id="server-list-gutter">
  </div>
  <section class="list-content">
    <ul>
      <li class="server">
        <font-awesome-icon :icon="server"/>
        <span class="server-name">FyreChat</span>
        <ul>
          <li class="channel">#vana</li>
          <li class="channel">#vana-commits</li>
        </ul>
      </li>
      <li class="server">
        <font-awesome-icon :icon="server"/>
        <span class="server-name">PdgnCo</span>
        <ul>
          <li class="channel current">#pdgn</li>
          <li class="channel">#merveille</li>
        </ul>
      </li>
      <li class="server">
        <font-awesome-icon :icon="server"/>
        <span class="server-name">Freenode</span>
        <ul>
          <li class="channel">#`</li>
          <li class="channel">##yulli</li>
          <li class="channel">#prl</li>
          <li class="channel">#ircv3</li>
          <li class="channel">#idris</li>
          <li class="channel">#scuttlebutt</li>
          <li class="channel">#pijul</li>
        </ul>
      </li>
      <li class="server">
        <font-awesome-icon :icon="server"/>
        <span class="server-name">Mozilla</span>
        <ul>
          <li class="channel">#rust</li>
          <li class="channel">#rust-offtopic</li>
          <li class="channel">#rust-irc</li>
        </ul>
      </li>
    </ul>
  </section>
</section>
</template>

<script>
export default {
  name: 'ServerList'
}
</script>

<style lang="stylus">
@require '../vars'

#server-list-gutter
  background: topbar-bg-color
  height: topbar-height
  border-bottom: topbar-border solid topbar-bg-color
  box-shadow: 0 1px 1px topbar-shadow-color

#server-list
  background: sidebar-bg-color

  .list-content
    max-height: "calc(100vh - %s - %s)" % topbar-components
    overflow-y: scroll
    margin: 0 0.2em

  ul
    list-style: none
    padding: 0
    margin: 1em 0.5em
    color: #aaa

    li.server
      margin-bottom: 1em
      white-space: nowrap
      text-overflow: ellipsis

    ul
      margin: 0.5em 0

      li.channel
        padding: 0.5em
        margin: 0.2em 0

.channel
  border-radius: 0.2em

  &:hover
    background: #353940
    color: #bbb

  &.current
    font-weight: bold
    background: #3C4148
    color: #ccc
</style>
