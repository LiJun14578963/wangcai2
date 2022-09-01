<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="selected">
<!-- 添加active-class="selected"样式，会在点击选中的时候加上该样式，默认是不加的-->
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">

 export default {
  name: 'Nav'
};
</script>

<style lang="scss"  scoped>
@import "~@/assets/style/helper.scss";
.nav{
  @extend %outerShadow;
  display:flex;
  justify-content: space-between;
  flex-direction:row;
  font-size:12px;
  > .item{
    padding:2px 0;
     width:33.3333%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width:32px;
      height:32px;
    }
  }
  > .item.selected{
    color:$color-highlight;
  }
}

</style>