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
  },
  'UiAutocomplete': {
    example: {
      markup: `<ui-autocomplete
  help="Pick your favourite month of the year"
  label="Favourite Month"
  name="favourite_month"
  placeholder="Enter your favourite month"
  :suggestions="months"
  v-model="selected">
</ui-autocomplete>`,
      props: {
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        selected: ''
      }
    }
  },
  'UiCheckbox': {
    example: {
      markup: `<ui-checkbox @change="handleChange" v-model="checked">Check me</ui-checkbox>`,
      props: {
        checked: false
      },
      methods: {
        handleChange (e) {
          console.log(e)
        }
      }
    }
  },
  'UiMenu': {
    example: {
      markup: `<ui-menu :options="menuOptions" raised></ui-menu>`,
      props: {
        menuOptions: [
          {
            id: 'edit',
            label: 'Edit',
            icon: 'edit',
            secondaryText: 'Ctrl+E'
          },
          {
            id: 'duplicate',
            label: 'Duplicate',
            icon: 'content_copy',
            secondaryText: 'Ctrl+D'
          },
          {
            id: 'share',
            label: 'Share',
            icon: 'share',
            secondaryText: 'Ctrl+Shift+S',
            disabled: true
          },
          {
            type: 'divider'
          },
          {
            id: 'delete',
            label: 'Delete',
            icon: 'delete',
            secondaryText: 'Del'
          }
        ]
      }
    }
  },
  'UiSwitch': {
    example: {
      markup: `<ui-switch v-model="shouldThey">Should Designers Code?</ui-switch>`,
      props: {
        shouldThey: false
      }
    }
  }
}
export default components
