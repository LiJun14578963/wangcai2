<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>  //插入内容的位置
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border:1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow:1;
}
</style>