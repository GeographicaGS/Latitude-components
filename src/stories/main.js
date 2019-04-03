import Vue from 'vue'
// eslint-disable-next-line
import wrap from '@vue/web-component-wrapper';

import Icon from '@/components/icon/index'
import Calendar from '@/components/calendar/index'
import Table from '@/components/table/index'
import Dropdown from '@/components/dropdown/index'
import Switch from '@/components/switch/index'
import Checkbox from '@/components/checkbox/index'
import RadioGroup from '@/components/radio-group/index'
import Radio from '@/components/radio-group/radio/index'

const WrappedIcon = wrap(Vue, Icon)
const WrappedCalendar = wrap(Vue, Calendar)
const WrappedTable = wrap(Vue, Table)
const WrappedDropdown = wrap(Vue, Dropdown)
const WrappedSwitch = wrap(Vue, Switch)
const WrappedCheckbox = wrap(Vue, Checkbox)
const WrappedRadioGroup = wrap(Vue, RadioGroup)
const WrappedRadio = wrap(Vue, Radio)

window.customElements.define('ltd-icon', WrappedIcon)
window.customElements.define('ltd-calendar', WrappedCalendar)
window.customElements.define('ltd-table', WrappedTable)
window.customElements.define('ltd-dropdown', WrappedDropdown)
window.customElements.define('ltd-switch', WrappedSwitch)
window.customElements.define('ltd-checkbox', WrappedCheckbox)
window.customElements.define('ltd-radio-group', WrappedRadioGroup)
window.customElements.define('ltd-radio', WrappedRadio)
