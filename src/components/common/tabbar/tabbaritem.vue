<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else> <slot  name="item-icon-active"></slot></div>

    <div :style="activeStyle">
       <slot  name="item-text"></slot>
    </div>

 <!--   <img  src="assets/img/首页.png"/>
    <div>首页</div> -->

  </div>
</template>

<script>
  export default{
    name:"tabbaritem",
    props:{
      path:String,
	  // path获取到当前点击的组件对应的文件地址
      activeColor:{
        type:String,
        defule:'red'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }

    },
    methods:{
		// 拿到path使用replace来进行路由的跳转
      itemclick(){
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style>
  .tab-bar-item{
     flex: 1;
     text-align: center;
     height: 49px;
     font-size: 14px;
   }
   .tab-bar-item img{
     height: 24px;
     margin-top: 3px;
     /* 去掉图片下面的3个像素 */
     vertical-align: middle;
   }
   .active{
     color: #FF0000;
   }
</style>
