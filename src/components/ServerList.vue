<template>
<section id="server-list">
  <div id="server-list-gutter">
  </div>
  <section class="list-content">
    <ul>
      <router-link to="/server/FyreChat"><li class="server">FyreChat</li></router-link>
      <li class="channels">
        <ul>
          <router-link to="/chan/vana"><li class="channel">#vana</li></router-link>
          <router-link to="/chan/vana-commits"><li class="channel">#vana-commits</li></router-link>
        </ul>
      </li>
      <router-link to="/server/PdgnCo"><li class="server">PdgnCo</li></router-link>
      <li class="channels">
        <ul>
          <router-link to="/chan/pdgn"><li class="channel">#pdgn</li></router-link>
          <router-link to="/chan/merveille"><li class="channel">#merveille</li></router-link>
          <router-link to="/query/big_meech"><li class="channel">big_meech</li></router-link>
        </ul>
      </li>
      <router-link to="/server/Freenode"><li class="server">Freenode</li></router-link>
      <li class="channels">
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
      <router-link to="/server/Mozilla"><li class="server">Mozilla</li></router-link>
      <li class="channels">
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

  a, a:visited
    color: inherit
    text-decoration: none

  .list-content
    max-height: "calc(100vh - %s - %s)" % topbar-components
    overflow-y: scroll
    margin: 0 0.2em

  ul
    list-style: none
    padding: 0
    margin: 1em 0.5em
    color: #aaa

    li.channels
      margin-top: -0.3em
      margin-bottom: 1em
      white-space: nowrap
      text-overflow: ellipsis

    li.server
      padding: 0.5em

    ul
      margin: 0.5em 0

      li.channel
        padding: 0.5em 1em
        margin: 0.2em 0

.channel, .server
  border-radius: 0.2em

  &:hover
    background: #353940
    color: #bbb

.router-link-active .channel, .router-link-active .server
  font-weight: bold
  background: #3C4148
  color: #ccc
</style>
