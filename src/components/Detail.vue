<template>
  <div>
    <h2 class="mt0 mb3 near-black fw6">{{$route.params.name}}</h2>
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
      this.$forceUpdate()
    }
  }
</script>

<style>
  .preview {
    background: white;
  }

  .props-table {
    font-size: 14px;
  }
</style>
