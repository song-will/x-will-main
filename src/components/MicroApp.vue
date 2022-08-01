<template>
  <div>
    <div ref="loadMicroApp"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'MicroApp',
  props: {
    url: {
      type: String,
      required: true
    },
    isMount: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    appConfig: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      microApp: null,
      curLoadApp: {
        name: '',
        entry: '',
        container: '',
        props: {}
      }
    }
  },
  watch: {
    isMount: {
      handler(val) {
        console.log({ val })
        val ? this.mount() : this.unmount()
      },
    }
  },
  created() {
    this.curLoadApp = this.appConfig.find(item => item.name === this.name)
  },
  mounted() {
    console.log('mount')
    if (this.isMount) {
      this.mount()
    }
  },
  methods: {
    loadApp() {
      console.log('init', this.microApp, this.curLoadApp)
      if (this.curLoadApp.name) {
        this.microApp = loadMicroApp({
          ...this.curLoadApp,
          container: this.$refs.loadMicroApp,
          props: {
            initUrl: this.url
          }
        })
      }
      console.log('microApp', this.microApp)
    },
    mount() {
      if (!this.microApp) {
        this.loadApp()
      } else {
        this.microApp && this.microApp.mount()
      }
    },
    unmount() {
      console.log('unmount', this.microApp)
      this.microApp && this.microApp.unmount()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
