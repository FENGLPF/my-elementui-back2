const state = ({
  headTagList: [],
  tagList:[],
  /**
   * 菜单是否收起
   */
  foldAside: true
})

const getters = {
  getHeadTagList(state) {
    return state.headTagList
  },
  getTagList(state) {
    return state.tagList
  }
}

const mutations = {
  /**
   * 点击左侧菜单栏时，tags数组中存在当前标签则return，否则push
   * @param state
   * @param data
   * @returns {boolean}
   */
  addHeadTagList(state, data) {
    let result = false
    for(let i=0; i<state.headTagList.length;i++){
      if(state.headTagList[i].path == data.path){
        return result = true
      }
    }
    if(!result) {
      state.headTagList.push(data)
      state.tagList.push(data.name)
    }
    // result === false ? state.headTagList.push(data) : ''
  },
  /**
   * 关闭tag标签
   */
  closeHeadTag(state, data){
    let result = state.headTagList.findIndex(item => item.path === data.path)
    state.headTagList.splice(result, 1)
    state.tagList.splice(result,1)
  },
  closeTagList(state,path) {
    let result = state.headTagList.findIndex(item => item.path === path)

    for(let i=state.headTagList.length-1;i>=0;i--) {
      if(i==result) {
        continue
      }
      state.headTagList.splice(i, 1)
      state.tagList.splice(i,1)
    }
  },
  foldOrOpenAside(state,data) {
    state.foldAside = data
  }
}

const actions = {            //actions提交的是mutations，相当于就是改变变量的方法的重写，但是，actions是可以进行异步操作的
  setHeadTagList(content) {
    content.commit('addHeadTagList');
  }
};

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
