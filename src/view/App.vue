<template>
  <div>
    app
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
      <li>
        <router-link to="/comp1/about">child-vue2-about</router-link>
      </li>
      <li>
        <router-link to="/comp1/">child-vue2-home</router-link>
      </li>
      <li>
        <router-link to="/comp2/about">child-vue3-about</router-link>
      </li>
      <li>
        <router-link to="/comp2/">child-vue3-home</router-link>
      </li>
    </ul>
    <div id="sub-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
