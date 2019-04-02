<template>
  <div class="datepicker-container" v-if="showDatePicker">
    <div class="datepicker-body">
      <div class="datepicker-main">
        <swiper class="datepicker-swiper" ref="picker" :options="options">
          <swiper-slide :class="{'swiper-disabled': dateItem.disabled}" v-for="dateItem in dateList" :key="dateItem.value" :value="dateItem.value">{{ dateItem.label }}</swiper-slide>
        </swiper>
      </div>
      <div class="datepicker-footer">
        <Button class="plain primary" @click="hide">取 消</Button>
        <Button class="primary" :disabled="canConfirm" @click="confirm">确 认</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '../common/js/utils'

export default {
  props: {
    length: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      dateList: [],
      options: {
        slidesPerView: this.length - 1,
        centeredSlides: true,
        direction: 'vertical',
        slideToClickedSlide: true,
        on: {
          slideChange: this.slideChange
        }
      },
      showDatePicker: false,
      canConfirm: false
    }
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.picker.swiper
  //   }
  // },
  methods: {
    createDate () {
      let list = []
      let start = 1
      let now = new Date().getTime()
      if (now >= new Date(dateFormat(now, 'yyyy/MM/dd 22:00:00')).getTime() // 当天0-22点只能预定第二天，22-24点只能预定第三天
        && now <= new Date(dateFormat(now, 'yyyy/MM/dd 23:59:59')).getTime()) {
        start = 2
      }
      
      for (let i = start, len = start + this.length; i < len; i++) {
        let date = now + i * 24 * 60 * 60 * 1000
        list.push({
          label: dateFormat(date, 'yyyy年M月d日 星期w'),
          value: dateFormat(date, 'yyyy/MM/dd'),
          disabled: new Date(date).getDay() == 0 || new Date(date).getDay() == 6
        })
      }
      this.dateList = list
    },
    clearDate () {
      this.dateList = []
    },
    show () {
      this.createDate()
      this.showDatePicker = true
    },
    hide () {
      this.showDatePicker = false
      this.clearDate()
    },
    confirm () {
      this.hide()
      this.$emit('change', this.dateList[this.$refs.picker.swiper.activeIndex])
    },
    slideChange () {
      this.canConfirm = this.dateList[this.$refs.picker.swiper.activeIndex].disabled
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../common/css/variable.scss';
// @import '../common/css/mixins.scss';

// .datepicker-container {
//   @include mask(101);
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .datepicker-body {
//     width: 75%;
//     background-color: white;
//     border-radius: 8px;
//     overflow: hidden;
//     font-size: $fontXMedium;
//     text-align: center;
//     animation: zoomIn .15s ease forwards;

//     .datepicker-main {
//       box-sizing: content-box;
//       padding: 30px 0;
//       height: 160px;
//       overflow: hidden;

//       .datepicker-swiper {
//         margin: 0 16px;
//         height: 100%;

//         .swiper-slide {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 40px;
//           border-bottom: 1px solid #e9e9e9;
//           font-size: 20px;
//           opacity: .1;
//           transition: transform .1s;
//           transform: scale(.625);
//           &:last-child {
//             border-bottom: 0;
//           }
//           &.swiper-slide-active {
//             transform: scale(1);
//             opacity: 1;
//           }
//           &.swiper-slide-next,
//           &.swiper-slide-prev {
//             transform: scale(.8);
//             opacity: .6;
//           }
//           &.swiper-disabled {
//             opacity: .1;
//           }
//         }
//       }
//     }

//     .datepicker-footer {
//       position: relative;
//       display: flex;
//       &::after {
//         @include top-line();
//       }

//       button {
//         flex: 1;
//         border: 0;
//         border-radius: 0!important;
//       }
//     }
//   }
// }
</style>
