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
    <Tags />
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/Formltem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';


@Component({
  components: {Tags, FormItem, Types, NumberPad},
})
export default class Money extends Vue {
  //设置初始值，没有初始值的话设置为空数组
  record: RecordItem = {
    tags: [''], notes: '', type: '-', amount: 0
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
    this.$store.commit('createRecord',this.record);
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

