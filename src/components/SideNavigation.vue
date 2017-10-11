<template>
  <aside class="db-l fixed-l h-100-l overflow-x-hidden-l overflow-y-auto-l left-0-l top-0-l w5-l br b--light-gray">
    <div class="pa3">
      <h1 class="mt0 mb4 f3">Elucidate</h1>
      <ul class="list pl0 mv0">
        <li v-for="(cValue, cKey, index) in components" :key="index" class="db pb3">
          <router-link class="link db mid-gray hover-dark-gray" :to="link(cKey)">{{cKey}}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import components from '@/data/components'

  export default {
    name: 'side-navigation',
    data () {
      return {
        components
      }
    },
    methods: {
      link (name) {
        return `/components/${name}`
      }
    }
  }
</script>

<style>
  .router-link-active {
    font-weight: 600;
    color: var(--black);
  }
</style>
