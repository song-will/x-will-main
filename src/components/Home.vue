<template>
    <div>
        Home
        <span>
            sss
        </span>
    </div>
</template>

<script>
export default {
    name: 'Home',
    created () {
        console.log('state', window.history.state)
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