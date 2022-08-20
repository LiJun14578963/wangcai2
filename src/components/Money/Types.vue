<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType(type='-')">支出
      </li>
      <li :class="type === '+' && 'selected'"
          @click="selectType(type='+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
//必须从vue-property-decorator引入一个{Component}装饰器，然后吧修饰器修饰到class上面，class可以声明data 生命周期等等
@Component
export default class Types extends Vue {
  type = '-';

  selectType(type: string) {//type 只能是'-'和‘+’中的一个
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }

  createb() {}

  mounted() {}

}
// export default {
//   name: 'Types',
//   props:['xxx'],
//   data() {
//     return {
//       type: "-",//'-'表示支出，'+'表示收入
//     }
//   },
//   mounted() {
//     console.log(this.xxx)
//   },
//   methods: {
//     selectType(type) {//type 只能是'-'和‘+’中的一个
//       if (type !== '-' && type !== '+') {
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}

</style>