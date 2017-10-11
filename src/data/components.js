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
  },
  'UiAlert': {
    example: {
      markup: `<ui-alert @dismiss="dismiss" v-show="showAlert">Hi everybody! This is the default alert.</ui-alert>`,
      props: {
        showAlert: true
      },
      methods: {
        dismiss () {
          this.showAlert = false
        }
      }
    }
  }
}
export default components
