/**
 * Icon
 * @version 1.0.0
 * */
export default {
  name: 'LtdIcon', // component: ltd-icon
  mixins: [],
  components: {},
  props: {
    /**
     * Sets the icon source
     * */
    icon: {
      type: String,
      default: undefined,
      required: true
    },
    /**
     * Sets the icon size in pixels
     * */
    size: {
      type: String,
      default: '20px'
    },
    fill: {
      type: String,
      default: '#000000'
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  mounted () {
    this.getSource()
  },
  methods: {
    /**
     * Triggered when button is clicked
     * */
    getSource () {
      const myRequest = new Request(this.icon)
      window.fetch(myRequest).then(response => response.text())
        .then((svg) => {
          const parser = new DOMParser()
          const doc = parser.parseFromString(svg, 'image/svg+xml')
          doc.documentElement.setAttribute('width', this.size)
          doc.documentElement.setAttribute('height', this.size)
          this.removeImage()
          this.drawIcon(doc)
        }).catch((error) => {
          // TODO: handle error
          console.error(error)
        })
    },
    /**
     * Removes image element.
     * */
    removeImage () {
      const img = this.$el.querySelector('img')
      this.$el.removeChild(img)
    },
    /**
     * Appends the SVG.
     * */
    drawIcon (doc) {
      this.$el.appendChild(doc.documentElement)
      const svg = this.$el.querySelector('svg')
      svg.style.fill = this.fill
    }
  }
}
