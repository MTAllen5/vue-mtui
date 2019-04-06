<template>
  <div class="home">
    <m-tl type="1">MTUI</m-tl>
    <p class="mtui-p">这是一套基于vue2.0的UI框架，组件参考了weui、mint-ui、ElementUI、ant design的设计。目前只是作者用来练习Vue组件使用。</p>
    <m-panel>
      <div slot="head">Basic 基础组件</div>
      <div>
        <m-cell icon="ios-basketball" link="/demo/buttons" arrow>Button 按钮</m-cell>
        <m-cell icon="ios-camera" link="/demo/icons" arrow>Icon 图标</m-cell>
        <m-cell icon="ios-home" link="/demo/titles" arrow>Title 标题</m-cell>
        <m-cell icon="ios-airplane" link="/demo/panels" arrow>Panel 面板</m-cell>
        <m-cell icon="ios-alarm" link="/demo/cells" arrow>Cell 单行列表</m-cell>
        <m-cell icon="ios-beer" link="/demo/grids" arrow>Grid 网格</m-cell>
      </div>
    </m-panel>
    <m-panel>
      <div slot="head">MessageBox 消息组件</div>
      <div>
        <m-cell icon="ios-cellular" link="/demo/alert" arrow>Alert 提示窗</m-cell>
        <m-cell icon="ios-cafe" link="/demo/confirm" arrow>Confirm 确认窗</m-cell>
        <m-cell icon="ios-flash" link="/demo/toast" arrow>Toast 消息提示</m-cell>
      </div>
    </m-panel>
    <m-panel>
      <div slot="head">Other 其他组件</div>
      <div>
        <m-cell icon="ios-eye" link="/demo/loading" arrow>Loading 加载提示</m-cell>
        <m-cell icon="ios-heart" link="/demo/loadingbar" arrow>LoadingBar 页面加载进度条</m-cell>
      </div>
    </m-panel>
    <div class="testDiv">
        <m-button @click="showToast">显示toast</m-button>
        <m-button type="primary" plain @click="setLoading">显示加载中</m-button>
        <m-button type="minor" plain @click="loadingPage">显示加载条</m-button>
        <!-- <MButton class="warn" @click="showOptions">显示options</MButton>
        <MButton class="success plain" @click="showDatePicker">显示日期选择器</MButton> -->
      </div>
      <!-- <p><Number :value.sync="counter" style="margin-right: 16px"></Number><Number type="input" :value.sync="counter"></Number></p>
      <p><Switcher :value="switcher" @change="handleSwitch"></Switcher></p>
      <div style="padding: 0 30px">
        <Former inline label-width="100px">
          <FormItem label="企业名称"><Inputer placeholder="请输入企业名称" clearable></Inputer></FormItem>
          <FormItem label="手机验证码"><Inputer type="tel" maxlength="6" clearable placeholder="请输入验证码"><Button class="text blue" @click="sendCode">发送验证码</Button></Inputer></FormItem>
          <FormItem label="楼宇选择">
            <Selecter placeholder="请选择楼宇">
              <Option label="环球都汇" value="1"></Option>
              <Option label="东塔" value="2"></Option>
              <Option label="西塔" value="3"></Option>
            </Selecter>
          </FormItem>
        </Former>
      </div> -->
      <!-- <p @touchstart="manualSlideStart" @touchmove="manualSlideMove" @touchend="manualSlideEnd"> -->
      <!-- <p>
        <swiper :options="swiperOption" ref="mySwiper" style="height: 160px; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc;">
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
        </swiper>
      </p> -->
    </div>

    <!-- <Options ref="options">
      <Button class="long plain info" @click="handleOption1" style="border: 0">选项1</Button>
      <Button class="long plain blue" @click="handleOption2" style="border: 0">选项2</Button>
      <Button class="long plain primary" @click="handleOption3" style="border: 0">选项3</Button>
    </Options> -->

    <!-- <DatePicker ref="datepicker"></DatePicker> -->
</template>

<script>
// import DatePicker from '@/components/DatePicker'

export default {
  name: 'home',
  data () {
    return {
      counter: 0,
      switcher: true,
      btnLoading: false,
      swiperOption: {}
      // swiperTouchStart: {},
      // swiperTouchMove: {},
      // swiperTranslate: 0,
    }
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  components: {
    // DatePicker
  },
  methods: {
    showToast () {
      this.$toast.bottom('信息信息')
    },
    getIncrease (val) {
      this.counter = val
      this.$toast.bottom(val)
    },
    getReduce (val) {
      this.counter = val
      this.$toast.top(val)
    },
    showOptions () {
      this.$refs.options.show()
    },
    setLoading () {
      this.$loading.show()
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    },
    handleOption1 () {
      this.$refs.options.hide()
    },
    handleOption2 () {
      this.$refs.options.hide()
    },
    handleOption3 () {
      this.$refs.options.hide()
    },
    handleSwitch () {
      this.switcher = !this.switcher
    },
    loadingPage () {
      if (!this.$loadingbar.isLoading()) {
        this.$loadingbar.start()
        setTimeout(() => {
          this.$loadingbar.finish()
        }, 1000)
      }
    },
    sendCode () {
      this.$alert('发送成功！')
    },
    setBtnLoading () {
      this.btnLoading = true
      setTimeout(() => {
        this.btnLoading = false
      }, 2000)
    },
    showDatePicker () {
      this.$refs.datepicker.show()
    }
    // manualSlideStart () {
    //   this.swiperTouchStart = event
    //   this.swiperTranslate = this.swiper.translate
    // },
    // manualSlideMove () {
    //   this.swiperTouchMove = event
    //   let diff = this.swiperTouchMove.changedTouches[0].clientX - this.swiperTouchStart.changedTouches[0].clientX
    //   this.swiper.setTranslate(this.swiperTranslate + diff)
    // },
    // manualSlideEnd () {
    //   let longSwipesRatio = this.swiper.width * 0.1
    //   let diff = event.changedTouches[0].clientX - this.swiperTouchStart.changedTouches[0].clientX
      
    //   if (Math.abs(diff) > longSwipesRatio) {
    //     if (diff > 0) {
    //       // this.swiper.slidePrev() 有bug
    //       this.swiper.slideTo(this.swiper.activeIndex - 1)
    //     } else {
    //       this.swiper.slideNext()
    //     }
    //   } else {
    //     this.swiper.setTranslate(this.swiperTranslate)
    //   }
    // }
  }
}
</script>

<style>
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4390EE;
    font-size: 50px;
    color: #fff;
  }
</style>

