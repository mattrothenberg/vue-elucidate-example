const components = {
  'UiButton': {
    example: {
      markup: '<ui-button :color="color" @click="yell" raised>RawrAWrawr</ui-button>',
      props: {
        color: 'primary'
      },
      methods: {
        yell () {
          console.log('LOUD NOISES')
        }
      }
    }
  }
}
export default components
