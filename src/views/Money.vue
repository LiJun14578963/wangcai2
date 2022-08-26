<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
<!--    <Types :value="record.type" @update:value="onUpdateType"/>-->
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/Formltem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';
import  recordListModel from '@/models/recordListModel'
import tagListModel from '@/models/tagListModel';
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {Tags, FormItem, Types, NumberPad}
})
export default class Money extends Vue {
  tags = tagList;
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
    this.record.amount = parseFloat(value);//value的值可能有小数，parseFloat小数
  }
  saveRecord(){
    recordListModel.create(this.record);
  }
  @Watch('recordList')
  onRecordListChange(){
    recordListModel.save()
  }
  }
</script>
<style lass="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>

