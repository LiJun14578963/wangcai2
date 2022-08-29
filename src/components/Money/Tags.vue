<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList"  :key="tag.id"
      :class="{selected: selectedTags.indexOf(tag)>=0}"
      @click="toggle(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, {computed} from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
  computed:{
    tagList(){
      // TODO
      // return this.$store.fetchTags();
      return []
    }
  }}
)
export default class Tags extends Vue {
  // @Prop({required: true}) readonly dataSource!: string[];//字符串数组  @Prop不指定类型可以用（）表示  readonly只读属性
  selectedTags: string[] = [];
  toggle(tag: string){
    const index = this.selectedTags.indexOf(tag);
    if(index >= 0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags)//点击的时候把this.selectedTags 传参数给 value
  }
  create() {
    const name = window.prompt('请输入标签名')
    if (!name) {return window.alert('标签名不能为空');}
      //TODO
      // store.createTag(name)
      // this.$emit('update:dataSource', [...this.dataSource, name]);  会报错
      //如果你填了一个name，且name的值不为空，我就会把你要更新dataSource的请求告诉外部，外部就可以接受这个事件
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  flex-grow:1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $bg:#d9d9d9;
      background:$bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected{
        background: darken($bg,40%);
        color:white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>