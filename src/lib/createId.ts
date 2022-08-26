let id:number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;//获取最大的id

function createId(){
  id++;
  window.localStorage.setItem('_idMax',id.toString());
  return id;
}//每一次id先获取最大的id然后+1

export default createId;