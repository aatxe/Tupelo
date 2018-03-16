<template>
<section id="user-list">
  <div id="user-list-gutter">
  </div>
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
  </ul>
</section>
</template>

<script>

export default {
  name: 'UserList'
}
</script>

<style lang="stylus">
@require '../vars'

#user-list
  background: sidebar-bg-color

#user-list-gutter
  background: topbar-bg-color
  height: topbar-height
  border-bottom: topbar-border solid topbar-bg-color
  box-shadow: 0 1px 1px #323439
</style>
