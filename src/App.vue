<template>
  <div id="app">	 
	  <router-view></router-view>

    <mainTabbar></mainTabbar>
  </div>
</template>

<script>

import mainTabbar from './components/content/mainTabbar/mainTabbar.vue'

export default {
  name: 'App',
  components: {
		mainTabbar,

  }
}
</script> 

<style>
@import url("assets/css/base.css");
</style>
