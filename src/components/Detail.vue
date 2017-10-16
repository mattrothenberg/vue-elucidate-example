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
      if (Array.isArray(match.component)) {
        this.example.component = []
        match.component.forEach(c => {
          this.example.component.push(require(`keen-ui/lib/${c}`).default)
        })
      } else {
        this.example.component = require(`keen-ui/lib/${match.component}`).default
      }
    }
  }
</script>

<style>
  .preview {
    background: transparent !important;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .props-table {
    font-size: 14px;
  }
</style>
