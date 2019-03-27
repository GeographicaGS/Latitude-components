/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('Checkbox', module)
  .add('Simple checkbox', () => ({
    data () {
      return {
        el: undefined
      }
    },
    template: // html
      `
      <div>
        <p>Simple checkbox</p>
        <ltd-checkbox @change="onCheckboxChange"></ltd-checkbox>
        <br/>
        <p>Checkbox with label</p>
        <ltd-checkbox label="geo">Geographica</ltd-checkbox>
        <br/>
        <p>Checkbox with icon</p>
        <ltd-checkbox label="geo">
          <ltd-icon :icon="getSource('icons/country.svg')" size="16px"></ltd-icon>
        </ltd-checkbox>
        <br/>
        <p>Checkbox disabled</p>
        <ltd-checkbox disabled="true">disabled</ltd-checkbox>
      </div>
    `,
    mounted () { },
    beforeDestroyed () { },
    methods: {
      onCheckboxChange (value) {
        console.log('sisisi')
        console.log(value)
      },

      getSource (data) {
        const context = require.context('@/assets/', true, /.svg/)
        const icon = context(`./${data}`)
        return icon
      }
    }
  }))
