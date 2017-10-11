<template>
  <aside class="db-l fixed-l h-100-l overflow-x-hidden-l overflow-y-auto-l left-0-l top-0-l w5-l br b--light-gray">
    <div class="pa3">
      <ul class="list pl0 mv0">
        <li v-for="(cValue, cKey, index) in components" :key="index" class="db pb2">
          <router-link class="link" :to="link(cKey)">{{cKey}}</router-link>
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