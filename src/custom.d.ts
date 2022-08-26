type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number //数据类型
  createdAt?: Date //类或者构造函数
}
//type  是声明类型的意思，声明一个复杂类型类似于js的var   let   const

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //联合类型，只能返回这两个字符串
  remove: (id: string) => boolean
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  save: () => void
}

  interface Window {
    tagList: Tag[];
  }

//声明一个window属性