<template>
  <div class="my-tag" @contextmenu.prevent="rightTag($event)">
    <el-tag
      closable
      size="medium"
      v-for="(tag,index) in tags"
      :key="tag.name"
      :disable-transitions="false"
      :effect="$route.path === tag.path ?'dark':'plain'"
      @close="handleClose(tag,index)"
      @click="handleClick(tag)">
      {{tag.label}}
    </el-tag>
    <ul
      style="position:fixed"
      v-show="visible"
      :style="{left: `${ left }px`, top: `${ top }px`}"
      class="contextmenu"
    >
      <li @click="closeOther">关闭其他</li>
      <li @click="closeAll">关闭所有</li>
    </ul>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
  name: 'AppTag',
  data() {
    return {
      tags: [],
      left: '',
      top: '',
      visible: false
    }
  },
  created() {
    //stateTagsList是state.js中的存放tags数组的key，stateTagsList的值默认为空数组
    this.tags = this.tagList;
  },

  computed: {
    ...mapState({
      tagList: state => state.appTag.headTagList
    })
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeRightTag)
      } else {
        document.body.removeEventListener('click', this.closeRightTag)
      }
    }
  },
  methods: {
    closeOther() {
      if (this.tags.length === 1) { // 如果只有一个标签则不能关闭
        return
      }
      this.closeTagList(this.$route.path)
    },
    closeAll() {
      if (this.tags.length === 1) { // 如果只有一个标签则不能关闭
        return
      }
      if (this.$route.path == this.tags[0].path) {
        return
      } else {
        this.$router.push(this.tags[0].path)
      }
      this.closeTagList(this.$route.path)
    },
    closeRightTag() {
      this.visible=false
    },
    rightTag(e) {
      this.visible=true
      this.left=e.clientX
      this.top=e.clientY
      if(document.body.clientWidth-e.clientX<=100) {
        this.left = e.clientX-100
      }
    },
    ...mapMutations({
      close: 'appTag/closeHeadTag',
      closeTagList: 'appTag/closeTagList'
    }),
    handleClose(tag, index) {
      if (this.tags.length === 1) { // 如果只有一个标签则不能关闭
        return
      }
      this.close(tag) // 删除当前tag
      if (this.$route.path != tag.path) { // 如果关闭的标签不是当前路由的话，不做路由跳转
        return
      } else {
        if (index === (this.tags.length - 1)) { // 关闭最后一个标签,则路由跳转至最后一个
          this.$router.push(this.tags[index].path)
        } else { // 路由跳转至下一个标签页
          if(index===0){
            this.$router.push(this.tags[0].path)
          }else{
            this.$router.push(this.tags[index - 1].path)
          }
        }
      }
    },
    // 点击tags具体标签
    handleClick(tag) {
      if(this.$route.path!=tag.path) {
        this.$router.push(tag.path)
      }
    },
  }
}
</script>
<style scoped>
.my-tag {
  text-align: left;
}
.el-tag {
  margin-right: 5px;
  cursor:pointer;
}
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
}
.contextmenu>li {
  margin: 0;
  padding: 10px 20px;
  cursor: pointer;
}
.contextmenu>li:hover {
     background: #eee;
     color: #199a9f;
}
</style>
