<template>
  <div>
    <elucidate :example="example" :component="example.component"></elucidate>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        comp: {},
        example: {
          markup: '<ui-button :color="color" @click="yell" raised>RawrAWrawr</ui-button>',
          props: {
            color: 'primary'
          },
          methods: {
            yell () {
              console.log('LOUD NOISES')
            }
          },
          component: {}
        }
      }
    },
    created () {
      try {
        this.example.component = require(`keen-ui/lib/${this.$route.params.name}`).default
      } catch (e) {
        console.log('OH NO')
      }
    }
  }
</script>
