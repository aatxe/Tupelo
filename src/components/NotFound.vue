<template>
<section id="splash">
  <h1>404</h1>
  <div class="message"><code>{{ path }}</code> is not a valid route.</div>
</section>
</template>

<script>
export default {
  name: 'NotFound',

  computed: {
    path: function () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="stylus">
@require '../vars'

#splash
  background: buffer-bg-color
  align-items: center
  justify-content: center
  height: 100vh
  display: flex
  flex-direction: column

  h1
    margin: 0.1em 0
</style>
