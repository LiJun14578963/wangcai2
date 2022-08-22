<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<!--    <Types :value="record.type" @update:value="onUpdateType"/>-->
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
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
import  model from '@/model'
const recordList = model.fetch();


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣','食','住','行'];
  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]')
  //设置初始值，没有初始值的话设置为空数组
  record: RecordItem = {
    tags: [''], notes: '', type: '-', amount: 0
  }//对声明的对象赋值

  onUpdateTags(value:string[]){
    this.record.tags = value;
  }
  onUpdateNotes(value:string){
    this.record.notes = value;
  }
  // onUpdateType(value:string){
  //   this.record.type = value;
  // }
  onUpdateAmount(value:string){
    this.record.amount = parseFloat(value);
  }
  saveRecord(){
    const record2 : RecordItem = model.clone(this.record)
    record2.createdAt = new Date()//设置一个保存时间
    this.recordList.push(record2)
    //把新的对象深拷贝，然后再push
  }
  @Watch('recordList')
  onRecordListChange(){
    model.save(this.recordList)
  }
  }
</script>
<style lass="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

