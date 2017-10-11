<template>
  <div id="app">
    <side-navigation></side-navigation>
    <main class="ph3 pv3 ph4-l">
      <router-view/>
    </main>
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue'

export default {
  name: 'app',
  components: {
    SideNavigation
  }
}
</script>

<style>
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  pre,
  code {
    -webkit-font-smoothing: subpixel-antialiased;
  }
  
  @media(min-width: 60rem) {
    main {
      margin-left: 16rem; 
    }
  }
</style>
