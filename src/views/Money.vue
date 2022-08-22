<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad @update:value="onUpdateAmount"/>
    <Types @update:value="onUpdateType"/>
    <Notes @Update:value="onUpdateNotes"/>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';
//type  是声明类型的意思，声明一个复杂类型类似于js的var   let   const
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣','食','住','行'];
  record: Record = {
    tags: [''], notes: '', type: '-', amount: 0
  }//对声明的对象赋值

  onUpdateTags(value:string[]){
    this.record.tags = value;
  }
  onUpdateNotes(value:string){
    this.record.notes = value;
    console.log('3');
  }
  onUpdateType(value:string){
    this.record.type = value;
  }
  onUpdateAmount(value:string){
    this.record.amount = parseFloat(value);
  }
  }
</script>
<style lass="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

