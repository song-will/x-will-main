<template>
    <div>
        Home
        <span>
            sss
        </span>
        <TestMainVue />
        <LoadMicroApp />
    </div>
</template>

<script>
import TestMainVue from './TestMain.vue'
import LoadMicroApp from './LoadMicroApp.vue'
export default {
    name: 'Home',
    components: {
        TestMainVue,
        LoadMicroApp
    },
    data() {
        return {
            microApp: null
        }
    },
    created() {
        console.log('state', window.history.state)
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
div {
    span {
        color: orange;
    }
}
</style>
