<template>
  <div>
    <elucidate :example="example" :component="example.component"></elucidate>
  </div>
</template>

<script>
  import components from '@/data/components'

  export default {
    name: 'detail',
    data () {
      return {
        example: {
          component: {}
        }
      }
    },
    created () {
      let match = components[this.$route.params.name]
      this.example = match.example
      this.example.component = require(`keen-ui/lib/${this.$route.params.name}`).default
    }
  }
</script>
