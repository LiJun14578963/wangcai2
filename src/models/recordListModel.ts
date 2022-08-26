const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
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