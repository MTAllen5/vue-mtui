<template>
  <div class="home">
    <div class="testDiv">
      <div class="panel">
        <m-button>default</m-button>
        <m-button type="primary">primary</m-button>
        <m-button type="minor">minor</m-button>

        <m-button disabled>default</m-button>
        <m-button type="primary" disabled>primary disabled</m-button>
        <m-button type="minor" disabled>minor disabled</m-button>

        <m-button type="primary" plain>primary plain</m-button>
        <m-button type="minor" plain>primary plain</m-button>

        <m-button inline style="margin-right: 10px;">default</m-button>
        <m-button type="primary" inline style="margin-right: 10px;">primary</m-button>
        <m-button type="minor" inline style="margin-right: 10px;">minor</m-button>
        <br>
        <m-button inline small style="margin-right: 10px;">default</m-button>
        <m-button type="primary" inline small style="margin-right: 10px;">primary</m-button>
        <m-button type="minor" inline small style="margin-right: 10px;">minor</m-button>
        <br>
        <m-button inline small round style="margin-right: 10px;">default</m-button>
        <m-button type="primary" inline small round style="margin-right: 10px;">primary</m-button>
        <m-button type="minor" inline small round style="margin-right: 10px;">minor</m-button>
        <br>
        <m-button inline text>default</m-button>
        <m-button type="primary" inline text>primary</m-button>
        <m-button type="minor" inline text>minor</m-button>
        <!-- <MButton class="blue" inline @click="showAlert">显示alert</MButton>
        <MButton class="blue plain" inline @click="showAlertClose">显示alert(可关闭)</MButton>
        <MButton class="primary" @click="showConfirm">显示confirm</MButton>
        <MButton class="success" @click="showToast">显示toast</MButton>
        <MButton class="text blue">文本按钮</MButton>
        <MButton class="warn" @click="showOptions">显示options</MButton>
        <MButton class="primary" disabled>不可用</MButton>
        <MButton class="info" @click="setLoading">显示加载中</MButton>
        <MButton class="primary plain" @click="loadingPage">显示加载条</MButton>
        <MButton class="success plain" @click="showDatePicker">显示日期选择器</MButton>
        <MButton class="warn plain" :loading="btnLoading" @click="setBtnLoading" style="width: 200px;">加载状态按钮</MButton> -->
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
  </div>
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
    showAlert () {
      this.$alert({
        message: '客官老爷，小的还没有开拓完疆土， 待打下这一片江山后，欢迎您再来啊！',
        confirmTxt: '朕一定会再来的'
      })
    },
    showAlertClose () {
      this.$alert({
        message: '您还未加入企业，需要绑定企业才可享受团餐优惠！',
        confirmTxt: '加入企业团餐',
        closeable: true
      })
    },
    showConfirm () {
      this.$confirm({
        message: '贵公司还未加入平台吗？贵客可直接创建一个新的企业团餐账号或者将页面分享给企业福利主管~',
        cancelTxt: '分享',
        confirmTxt: '创建',
        closeable: true
      })
    },
    showToast () {
      this.$toast.center('信息信息')
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
      this.$loading(1)
      setTimeout(() => {
        this.$loading(0)
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
  html, body {
    margin: 0;
    padding: 0;
  }
  .panel {
    padding: 20px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4390EE;
    font-size: 50px;
    color: #fff;
  }
</style>

