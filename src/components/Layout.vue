<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
<!--      插入内容的位置-->
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.layout-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow:1;
}
</style>