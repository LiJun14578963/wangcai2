const localStorageKeyName = 'tagList'
type TagListModel = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => 'success' | 'duplicated' //联合类型，只能返回这两个字符串
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
    return this.data;
  },
  create(name: string) {
    if(this.data.indexOf(name)>=0){return 'duplicated';}
    this.data.push(name);
    this.save();
    console.log(name);
    return 'success';
  },
  save(){
    window.localStorage.setItem('localStorageKeyName',JSON.stringify(this.data));
  }
}

export  default tagListModel