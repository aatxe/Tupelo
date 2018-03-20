<template>
<section id="user-list">
  <div id="user-list-gutter">
  </div>
  <section class="list-content">
    <ul>
      <li class="user">
        <div class="role role-voice"></div>
        <div class="nickname">awe</div>
      </li>
      <li class="user">
        <div class="role role-voice"></div>
        <div class="nickname">awebot</div>
      </li>
      <li class="user">
        <div class="role"></div>
        <div class="nickname">big_meech</div>
      </li>
      <li class="user">
        <div class="role"></div>
        <div class="nickname">this_is_one_long_name</div>
      </li>
    </ul>
  </section>
</section>
</template>

<script>
export default {
  name: 'UserList'
}
</script>

<style lang="stylus">
@require '../../vars'

#user-list-gutter
  display: grid
  background: topbar-bg-color
  height: topbar-height
  border-bottom: topbar-border solid topbar-bg-color
  box-shadow: 0 1px 1px topbar-shadow-color

#user-list
  background: sidebar-bg-color

  .list-content
    max-height: "calc(100vh - %s - %s)" % topbar-components
    overflow-y: scroll
    margin: 0 0.2em

  ul
    list-style: none
    margin: 0
    padding: 1em
    white-space: nowrap

  li
    margin: 0.3em 0

  .nickname, .role
    vertical-align: middle

  .nickname
    display: inline-block
    max-width: max-nickname-width
    overflow: hidden
    text-overflow: ellipsis

  .role
    display: inline-grid
    justify-content: center
    align-content: center
    border-radius: 0.3em
    width: 1.2em
    height: 1.2em
    background: role-none-color
    color: role-symbol-color
    font-weight: bold

  .role-voice
    background: role-voice-color
    &::after
      content: '+'

  .role-halfop
    background: role-halfop-color
    &::after
      content: '%'

  .role-op
    background: role-op-color
    &::after
      content: '@'

  .role-admin
    background: role-admin-color
    &::after
      content: '&'

  .role-owner
    background: role-owner-color
    &::after
      content: '~'
</style>
