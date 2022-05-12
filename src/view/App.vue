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
        <router-link to="/comp1/about">child-about</router-link>
      </li>
      <li>
        <router-link to="/comp1/">child-home</router-link>
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
