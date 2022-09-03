<template>
  <Layout class-prefix="layout">
    <NumberPad :value="record.amount" @update:value="onUpdateAmount" @submit="saveRecord"/>
<!--    <Types :value="record.type" @update:value="onUpdateType"/>-->
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                :value = "record.notes"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags @update:value="onTagsSelected"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/Formltem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  //设置初始值，没有初始值的话设置为空数组
  recordTypeList = recordTypeList;
  get recordList(){
    return this.$store.state.recordList;
  }
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  }//对声明的对象赋值
  created(){
    this.$store.commit('fetchRecords')
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
    if(!this.record.tags || this.record.tags.length === 0){
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord',this.record);
    if(this.$store.state.createRecordError === null){
      window.alert('已保存');
      this.record.notes = '';
    }
  }
  onTagsSelected(tags: Tag[]) {
    this.record.tags = tags.map(t => t.name)
  }
  }
</script>
<style scoped lass="scss">
  ::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>

