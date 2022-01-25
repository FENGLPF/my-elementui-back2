<template>
  <div style="text-align: left;height: 100%;background-color:#545c64">
    <el-scrollbar>
      <el-menu class="el-menu-vertical-demo"
               router
               :default-active="this.$route.name"
               :collapse="!foldAside" background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">

        <!--按有无子菜单排序 -->
<!--        <el-menu-item :index="item.name" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">-->
<!--          <i :class="item.icon"></i>-->
<!--          <span slot="title">{{item.label}}</span>-->
<!--        </el-menu-item>-->
<!--        <el-submenu :index="item.label" v-for="(item, index) in hasChildren" :key="index">-->
<!--          <template slot="title">-->
<!--            <i :class="item.icon"></i>-->
<!--            <span slot="title">{{item.label}}</span>-->
<!--          </template>-->
<!--          <el-menu-item-group>-->
<!--            <el-menu-item :index="subItem.name" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">-->
<!--              <i :class="subItem.icon"></i>-->
<!--              <span slot="title">{{subItem.label}}</span>-->
<!--            </el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--        </el-submenu>-->

        <!--          <div v-show="item.icon=='el-icon-s-home'" style="float: right" class="header-title" @click="foldOrOpen">-->
        <!--            <a class="el-icon-s-fold" v-if="foldAside" title="折叠侧边栏" />-->
        <!--            <a class="el-icon-s-unfold" v-else title="展开侧边栏" />-->
        <!--          </div>-->

        <!--按菜单顺序排序 -->
        <div v-for="item in menu">
          <el-menu-item v-if="item.children.length==0" :index="item.name" :key="item.path" @click="clickMenu(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
          <el-submenu v-if="item.children.length>0" :index="item.label" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="subItem.name" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
                <i :class="subItem.icon"></i>
                <span slot="title">{{subItem.label}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>

  </div>

</template>

<script>

export default {
  name: "Aside",
  data() {
    return {
      menu: [
        {
          children:[],
          icon: 'el-icon-s-home',
          label: '首页',
          name: 'Home',
          path: '/Home',
        },
        {
          children: [],
          icon: 'el-icon-menu',
          label: '模板',
          name: 'Demo',
          path: '/Demo'
        },
        {
          children: [
            {
              children: [],
              icon: 'el-icon-menu',
              label: '二级菜单',
              name: 'Page1',
              path: '/Page1'
            }
          ],
          icon: 'el-icon-menu',
          label: '一级菜单',
          name: '',
          path: ''
        },
        {
          children: [],
          icon: 'el-icon-pie-chart',
          label: 'Echarts',
          name: 'Echarts',
          path: '/Echarts'
        },
        {
          children: [],
          icon: 'el-icon-s-help',
          label: '图标库',
          name: 'Icons',
          path: '/Icons'
        },
        {
          children: [
            {
              children: [],
              icon: 'el-icon-menu',
              label: 'IntroJS',
              name: 'IntroStep',
              path: '/IntroStep'
            },
            {
              children: [],
              icon: 'el-icon-menu',
              label: 'VueGuide',
              name: 'GuideStep',
              path: '/GuideStep'
            },
          ],
          icon: 'el-icon-menu',
          label: '新手引导',
          name: '',
          path: ''
        },
      ],
      foldAside: true
    };
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => item.children.length==0)
    },
    hasChildren() {
      return this.menu.filter(item => item.children.length>0)
    },
  },
  created() {
    // this.menu=JSON.parse(localStorage.getItem('menu'))
  },
  mounted() {
    for(let i=0;i<this.menu.length;i++) {
      if(this.menu[i].children.length!=0) {
        for(let j=0;j<this.menu[i].children.length;j++) {
          if(this.menu[i].children[j].path == this.$route.path) {
            //首次加载或刷新后，将当前菜单加入tag数组
            this.$store.commit('appTag/addHeadTagList', this.menu[i].children[j])
            break
          }
        }
      }else if(this.menu[i].path==this.$route.path) {
        //首次加载或刷新后，将当前菜单加入tag数组
        this.$store.commit('appTag/addHeadTagList', this.menu[i])
        break
      }
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({name: item.name})
      //点击左侧菜单后，将菜单加入tag数组
      this.$store.commit('appTag/addHeadTagList', item)
    },
    // 展开、折叠侧边栏
    foldOrOpen() {
      this.foldAside = !this.foldAside
    },
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 80%;
  padding: 0;
  min-height: 400px;
  /*height: 100%;*/
}
.el-scrollbar__wrap{
  overflow-x:hidden;
}
</style>
