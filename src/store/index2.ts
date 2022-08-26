import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),

//tag store==
  findTag (id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  tagList: tagListModel.fetch(),//保障数据属性在高层
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (name) {
      if (message === 'duplicated') {
        window.alert('标签名重复了');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  },
  removeTag : (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};
//record store

export default store;