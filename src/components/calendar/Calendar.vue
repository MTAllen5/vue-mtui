<template>
  <div class="mtui-calendar">
    <!-- 头部 -->
    <div class="calendar-header" v-if="showHead">
      <div class="btn-today" @click="backtoday" v-if="showBack"></div>
      <div class="arrow-left" @click="changeMonth('Prev')"></div>
      <div class="title">{{ curYearMonth | fmtCurYearMonth }}</div>
      <div class="arrow-right" @click="changeMonth('Next')"></div>
    </div>
    <!-- 主体 -->
    <div class="calendar-body">
      <!-- 周展示 -->
      <div class="weeks">
        <span v-for="dayName in ['日', '一', '二', '三', '四', '五', '六']" class="item" :key="dayName">{{ dayName }}</span>
      </div>
      <!-- 日展示 -->
      <swiper :options="swiperOption" ref="monthSwiper">
        <swiper-slide class="dates" v-for="(dayList, idx) in monList" :key="dayList[0].date" :data-month="monArry[idx]">
          <div v-for="date in dayList" :key="date.date" class="item" :class="{'selected-day' : date.selected}" @click="handleSelectDay(date)">
            <p class="date-num" :class="{
              today: today === date.date,
              event: date.event === 1,
              event2: date.event === 2,
              disabled: !date.isInMonth || date.disable
            }">{{ date.date | filterDay }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

function _moment (date) {
  return moment(date, 'YYYY/MM/DD')
}

export default {
  name: 'm-calendar',
  components: {
    swiper,
    swiperSlide
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  props: {
    // 日期选择器类型: 单选: 'single'; 多选：'multi'; 起止：'fromto'
    type: {
      type: String,
      default: 'single',
      validator (value) {
        return ['single', 'multi', 'fromto'].indexOf(value) > -1
      }
    },
    // 事件
    events: {
      type: Array,
      default: () => []
    },
    // 默认选中的日期
    selected: {
      type: [String, Array],
      default: moment().format('YYYY/MM/DD'),
      required: false
    },
    // 可选择范围: [start, end]
    range: {
      type: Array,
      default: () => [],
      validator (value) {
        return !((value[0] && new Date(value[0]).toString() === 'Invalid Date') ||
          (value[1] && new Date(value[1]).toString() === 'Invalid Date'))
      }
    },
    // 是否显示返回今天按钮
    showBack: Boolean,
    // 是否显示头部
    showHead: {
      type: Boolean,
      default: true
    },
    // 是否禁止选择日期
    disabled: Boolean,
    // 月开始日偏移量
    startAt: {
      type: Number, // startAt < 0表示上月几号，start > 0表示本月几号
      default: 1
    }
  },
  data () {
    let today = moment()

    return {
      today: today.format('YYYY/MM/DD'),
      curYearMonth: today.format('YYYY/MM'), // 当前年月
      selectedDays: [], // 当前选中日期集合
      monArry: [], // 月份列表
      swiperOption: { // swiper配置
        initialSlide: 0,
        observer: true,
        autoHeight: true,
        on: {
          init: () => {
            this.$nextTick(() => {
              this.slideEnd()
            })
          },
          slideChangeTransitionEnd: this.slideEnd
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.monthSwiper ? this.$refs.monthSwiper.swiper : null
    },
    monList () { // 月份日期列表
      return this.monArry.map(yearMonth => this.createDayList(yearMonth))
    }
  },
  watch: {
    selected (val) {
      this.propToData(val)
    }
  },
  filters: {
    fmtCurYearMonth (yearMonth) {
      return _moment(yearMonth).format('YYYY年M月')
    },
    filterDay (val) {
      return parseInt(val.split('/')[2])
    }
  },
  created () {
    this.propToData(this.selected)
    this.initCalendar(this.selectedDays[0])
  },
  methods: {
    /**
     * 对选项数据val进行处理，并拷贝到本地data的selectedDays，以便操作
     * @params val { Array | String } 要处理的参数
     */
    propToData (val) {
      val = val || moment().format('YYYY/MM/DD')

      val = typeof val === 'string' ? [val] : val

      this.selectedDays = val.map(v => {
        v = _moment(v).format('YYYY/MM/DD')
        return v.toString() === 'Invalid Date' ? '' : v
      }).filter(item => item !== '')
    },

    /**
     * 初始化日历
     * @params defaultDate { String } 初始化显示的日期，默认选中的第一天
     */
    initCalendar (defaultDate) {
      defaultDate = _moment(defaultDate)

      // 如果默认选中日期是在偏移量到月初之间，则显示为下个月
      if (this.startAt < 0 && defaultDate.date() >= Math.abs(this.startAt)) {
        defaultDate = defaultDate.add(1, 'months')
      }

      this.monArry.push(defaultDate.format('YYYY/MM'))
    },

    /**
     * 创建单月日期列表
     * @params yearMonth { String } 要生成日历的月份
     * @returns dayList { Array } 已生成的日期列表
     */
    createDayList (yearMonth) {
      // 如果偏移到上一个月，则从上一个月开始
      if (this.startAt < 0) {
        yearMonth = _moment(yearMonth).subtract(1, 'months').format('YYYY/MM')
      }

      let curMonthFirstDay = _moment(`${yearMonth}/${Math.abs(this.startAt)}`)
      let displayMonthFirstDay = _moment(curMonthFirstDay).subtract(curMonthFirstDay.day(), 'days')
      let [rangeStart, rangeEnd] = this.range.map(r => r ? _moment(r) : r)
      let dayList = []

      for (let i = 0; i < 7 * 6; i++) {
        let dayItem = _moment(displayMonthFirstDay).add(i, 'days')
        let isInMonth = dayItem.isBetween(_moment(curMonthFirstDay).subtract(1, 'days'), _moment(curMonthFirstDay).add(1, 'months')) // 标记是否当前月的日子
        let disable = (rangeStart && dayItem.isBefore(rangeStart)) || (rangeEnd && dayItem.isAfter(rangeEnd)) // 是否可以点击
        let event = this.events.find(event => _moment(event.date).isSame(dayItem)) // 标记是否有事件

        // 如果五周可以把当月所有日期显示出来，就不用把第六周也显示
        if (i === 35 && !isInMonth) {
          break
        }

        dayList.push({
          date: dayItem.format('YYYY/MM/DD'),
          isInMonth: isInMonth,
          event: event ? (event.status || 1) : 0,
          disable: this.disabled || disable,
          selected: this.selectedDays.includes(dayItem.format('YYYY/MM/DD'))
        })
      }

      return dayList
    },

    /**
     * 插入新的月份
     * @params 无
     * @returns 无
     */
    slideEnd () {
      if (this.swiper.activeIndex <= 0) {
        this.monArry.unshift(_moment(this.monArry[0]).subtract(1, 'months').format('YYYY/MM'))
        this.swiper.activeIndex++
      }

      if (this.swiper.activeIndex >= this.monArry.length - 1) {
        this.monArry.push(_moment(this.monArry[this.monArry.length - 1]).add(1, 'months').format('YYYY/MM'))
      }

      this.$forceUpdate()

      this.$nextTick(() => {
        if (this.swiper.slides && this.swiper.slides.length > 0 && this.swiper.slides[this.swiper.activeIndex]) {
          this.curYearMonth = this.swiper.slides[this.swiper.activeIndex].getAttribute('data-month')
          this.$emit('on-change-month', this.curYearMonth)
        }
      })
    },

    /**
     * 切换上下月
     * @params 无
     * @returns 无
     */
    changeMonth (type) {
      this.swiper['slide' + type]()
    },

    /**
     * 选择日期
     * @params date { String } 选中的日期
     * @returns 无
     */
    handleSelectDay (date) {
      if (this.disabled || date.disable || !date.isInMonth) return

      if (this.type === 'fromto') {
        this.selectDayFromto(date)
      } else if (this.type === 'multi') {
        this.selectDayMulti(date)
      } else {
        this.selectedDays = [date.date]
      }

      // 根据传入的数据返回对应的数据类型
      let sd = this.type === 'single' && typeof this.selected === 'string' ? this.selectedDays[0] : this.selectedDays.map(item => item)
      this.$emit('change', sd)
      this.$emit('on-change', sd)
    },

    /**
     * 多日方式处理选择日期
     * @params date { String } 选中的日期
     * @returns 无
     */
    selectDayMulti (date) {
      if (date.selected) {
        let idx = this.selectedDays.findIndex(day => day === date.date)
        this.selectedDays.splice(idx, 1)
      } else {
        this.selectedDays.push(date.date)
      }
      this.selectedDays = this.selectedDays.sort()
    },

    /**
     * 起止方式处理选择日期
     * @params date { String } 选中的日期
     * @returns 无
     */
    selectDayFromto (date) {
      if (this.selectedDays.length <= 0) {
        this.selectedDays.push(date.date)
      } else {
        if (date.date > this.selectedDays[0]) {
          this.selectedDays = this.selectBetweenDays(this.selectedDays[0], date.date)
        } else if (date.date < this.selectedDays[0]) {
          this.selectedDays = this.selectBetweenDays(date.date, this.selectedDays[0]).slice(0, -1).concat(this.selectedDays)
        } else {
          this.selectedDays = []
        }
      }
    },

    /**
     * 获取起止日期之间的日期
     * @params start { String } 选中的起止开始日期
     * @params end { String } 选中的起止结束日期
     * @returns ary { Array } 返回起止日期之间的日期
     */
    selectBetweenDays (start, end) {
      start = _moment(start)
      end = _moment(end)
      let len = Math.abs(start.diff(end, 'days'))
      let ary = []
      for (let i = 0; i <= len; i++) {
        ary.push(_moment(start).add(i, 'days').format('YYYY/MM/DD'))
      }
      return ary
    },

    /**
     * 返回今天
     * @params 无
     * @returns 无
     */
    backtoday () {
      this.curYearMonth = _moment(this.today).format('YYYY/MM')
      this.swiper.slideTo(this.monArry.findIndex(m => m === this.curYearMonth), 300, false)
      // this.handleSelectDay({date: this.today})
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-calendar {
  padding: 16px 10px 0;
  background-color: white;
  color: $black;
  font-size: $fontXMedium;
  font-family: $font;
  -webkit-font-smoothing: antialiased;

  // 月历头部样式
  .calendar-header {
    @include flex-center();
    position: relative;
    margin-bottom: 10px;
    line-height: 26px;

    // 回到今天按钮
    .btn-today {
      position: absolute;
      top: 0;
      left: 4%;
      width: 32px;
      height: 24px;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZjRiMDk0MS1mMjhmLTM5NDQtOWNkNC1hZWJhYjkxNTg0NTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUIzRjE5NTk1RDZGMTFFNzk0MzJEOEZBMzY3NDRGRjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUIzRjE5NTg1RDZGMTFFNzk0MzJEOEZBMzY3NDRGRjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlNTM4MWI3LWNhYjAtM2U0Ny1iNGE0LTBjMGJjZDc4OGFhNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZjRiMDk0MS1mMjhmLTM5NDQtOWNkNC1hZWJhYjkxNTg0NTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5AZYdnAAAEDElEQVR42uxazU8TQRQfCIELkoJHD5b/YPHg52V7M9EYSIwfCcQ28eMG9ODHQWPVxEQ9FI7Gw5ZwIOoBNHozYW94MLYY79QDR7UJEsNHsr5Jf5M81xZmd2cLtn3Jj91uZzv7+82b994s0+F5nohql8euddPhGWGU0EGYJdycm32xKQxZXH10GXq+p4Rx9lme/ybcEeYslj46Lo1eNfFw3wkDjx/eFZtbWyL36Im89oNw0KAAsfRhygMG5J/BwcP/XDNosfTRyc674VZLhDWCFwD1zDOIqH2sgds4uP7lAYcI7wiWaF7rJRwHMoSzhNVOqKHIS4UuEPoQaXVRN8YYRNQ++sBtCVzfE3qkB9xg5M8QfoZQVwajgZWVb2Jre5tfM2lR+5BT4DXhAwb8JOG6zAJLcIuLhFchH26KMFEjbd02KIDJPqQnvCR8lB5wBBffRHi4W3CzMXyWRco9wx5gso+3OA5JD/DYXGol8/xpsCWtLUBbgLYAxizJys7h/0WALoO/5bBzma8XAt5vG+ZWIlQaJUAeBFSn8nwSxYuuLRoWIEVwGyFAGmQl8RFcK0IUea2g+Tu5AG102pZ1X4hEKYTSzPWH4AECMWCeieIaGlWTRVvkQoiTzzDyAvNfXkvAtdPNlgUcQI2wcvMEa1OACKp93vd9UEvsBwEszO80yKcw2kmM9LyvvRKhgjhRjBDtrb0UQKp/HwQszOlB5vZltLHRzi9CCm2VUIsxpL1QphMEh+G+SRaBH+zgHf6AyEWc8EXwHJbhec1BsOBNJU1+2R3aerppMAm4u/xgCYRy8IIR3/cVCDeDmCDJTONoB4wFtqm4oSPAFFxcp7Kb9h3r5ecUHq4CYXXSWh5xREDchUbGAN3O1ChXNNsGMb6+uLJXawHPRNwJcY/NpmEZWSipW+01w3JYBckZwL/4apgAYd7n97ORCjNvJxEoy0ipLmCbqDAb4QEO3LXEKsMgrp9n5bbwneejFkhxCzCJ4FVhFWGQym+eZSLXl0mybK1h7UcBLDZ62QDFi1poFUGwgPtrpecC2hRZitwXAiTYC46pAO8EEhh1p8aCqpZl2G/nw5TYcQmwCDKlOqNXb62xwvJ9VjNmZNj0stlaQytAdsVA3mE1e0qzwHFY2Vqq8X5hN1PZwYEINvOEQiM9IMEWTSOaQU8VN2UQHwpI3l9iq3eBOZ2pZ9oD1KjbAV6DqXsqhp7BDdB3bDHADSHcnlj7P0NtAYRQOy17Woj3ARx/SQE+48O5FhLgNI5fpQBzrG7vbwHykqPaazQnBXhOWBbVXVNy69h5Ud1T12zWC25yh9gpwhfJXdYBG6K6PU5+cUJUt5I1uy2D84bKAquEY5gGnwjrTUh6Hdwkx6PgLP4IMAB3qTqMXDmKoQAAAABJRU5ErkJggg==") center center no-repeat;
      background-size: contain;
    }

    // 上下月切换按钮
    .arrow-left,
    .arrow-right {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 23px;
      height: 26px;
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;

      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-left: 1px solid lighten($black, 30%);
        border-bottom: 1px solid lighten($black, 30%);
      }
    }
    .arrow-left::after { transform: rotate(45deg); }
    .arrow-right::after { transform: rotate(-135deg); }
  }

  // 月历主体样式
  .calendar-body {
    padding-bottom: 16px;
    overflow: hidden;
    font-size: $fontMedium;
    line-height: 36px;
    text-align: center;

    // 星期几文本
    .weeks {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .item {
        width: 100%;
        color: lighten($black, 20%);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
    }

    // 日期样式
    .dates {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;

      .item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14.285%;
        color: lighten($black, 20%);
        user-select: none;
        -webkit-tap-highlight-color: transparent;

        // 背景圈
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 1;
          transform: translate(-50%, -50%) scale(0);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: all .2s;
        }
        // 选中的样式
        &.selected-day {
          .date-num {
            color: #fff;
            &.event::before { background-color: white; }
            // &.event2::before { background-color: white; }
          }

          &::after {
            transform: translate(-50%, -50%) scale(1);
            background-color: $colorPrimary;
            box-shadow: 0 2px 8px fade($colorPrimary, 40%);
          }
        }

        .date-num {
          position: relative;
          z-index: 3;
          box-sizing: border-box;
          margin: 0;
          width: 36px;
          height: 36px;
          border: 1px solid transparent;
          border-radius: 50%;

          // 被禁用的样式
          &.disabled { color: $colorDisabled; }
          // 今天的样式
          &.today { border-color: $colorPrimary; }
          // 带事件的样式
          &.event,
          &.event2 {
            cursor: pointer;

            &::before {
              content: '';
              position: absolute;
              bottom: 1px;
              left: 50%;
              z-index: 2;
              transform: translateX(-50%);
              background-color: $colorPrimary;
              width: 6px;
              height: 6px;
              border-radius: 50%;
            }
          }
          &.event2::before { background-color: $colorMinor; }
        }
      }
    }
  }

  .swiper-container {
    overflow: visible;
  }
}
</style>
