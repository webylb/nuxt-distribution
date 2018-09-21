<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-distribution
      </h1>
      <h2 class="subtitle">
        vue vuex nuxt element axios
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
        <nuxt-link to="/login"> Login </nuxt-link>
        <nuxt-link to="/elementui"> Elementui </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { $axios } from '~/plugins/axios.js'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    AppLogo
  },
  async asyncData () {
    let { data } = await $axios('/api/content/queryBoardList','post')
    console.log("asyncData|"+ data)
    return { users: data.data }
  },
  computed: {
    ...mapState(['testData'])
  },
  created () {
    this.pageInit();
    // console.log(this.$route.query);
  },
  data () {
    return {
      testItem: false, // 测试数据
    }
  },
  methods:{
    ...mapMutations(['TESTDATA']),
    ...mapActions(['getTestData']),
    pageInit(){
      console.log("init...");
      this.getTestData().then(res => {
        console.log("获取数据完成了");
      });
    }
  }
}  
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

