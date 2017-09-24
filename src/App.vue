<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <!-- <h2> {{msg}} </h2> -->
        <!-- <firstcomponent></firstcomponent> -->
        <couponsList style = "height:130px"></couponsList>
        <!-- <router-link to="/firstView">跳转View1</router-link>
        <router-link to="/secondView">跳转View2</router-link> -->
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>

import firstcomponent from './components/first-component.vue'
import couponsList from './views/userFreeCoupons.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
        }
    },
    components: { firstcomponent, couponsList }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
