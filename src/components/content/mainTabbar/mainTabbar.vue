<template>
  <tabbar>
      <tabbaritem path="/home" activeColor="red">
        <img slot="item-icon" src="../../../assets/img/首页.png" />
        <img slot="item-icon-active" src="../../../assets/img/首页(1).png" />
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category" activeColor="red">
        <img slot="item-icon" src="../../../assets/img/筛选.png" />
        <img slot="item-icon-active" src="../../../assets/img/筛选(1).png" />
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activeColor="red">
        <img slot="item-icon" src="../../../assets/img/讨论区.png" />
        <img slot="item-icon-active" src="../../../assets/img/讨论区(1).png" />
        <div slot="item-text">关于</div>
      </tabbaritem>
      <tabbaritem path="/profile" activeColor="red">
        <img slot="item-icon" src="../../../assets/img/我的.png" />
        <img slot="item-icon-active" src="../../../assets/img/我的(1).png" />
        <div slot="item-text">我的</div>
      </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from '../../common/tabbar/tabbar.vue'
  import tabbaritem from '../../common/tabbar/tabbaritem.vue'

  export default {
    name: 'mainTabbar',
    components:{
      tabbar,
      tabbaritem

    }
  }
</script>

<style>
</style>
