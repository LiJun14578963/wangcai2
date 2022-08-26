import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem){
    const record2 : RecordItem = clone(record)
    record2.createdAt = new Date()//设置一个保存时间
    this.data.push(record2)
    //把新的对象深拷贝，然后再push
  },
  fetch() {

    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    //as强制类型为什么
    return this.data;
  },
  save() {
    window.localStorage.setItem('localStorageKeyName', JSON.stringify(this.data));
  }
};

export default recordListModel;