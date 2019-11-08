<template>
  <div class="mtui-datepicker-wrapper">
    <!-- 头部 -->
    <div class="datepicker-header" v-if="showHead">
      <div class="btn-today" v-if="showBack" @click="backtoday"></div>
      <div class="arrow-left" @click="changeMonth('Prev')"></div>
      <div class="title">{{ curParams | fmtCurYearMonth }}</div>
      <div class="arrow-right" @click="changeMonth('Next')"></div>
    </div>
    <!-- 主体 -->
    <div class="datepicker-body">
      <!-- 周展示 -->
      <div class="weeks">
        <span v-for="dayName in ['日', '一', '二', '三', '四', '五', '六']" class="item" :key="dayName">{{ dayName }}</span>
      </div>
      <!-- 日展示 -->
      <swiper :options="swiperOption" ref="monthSwiper">
        <swiper-slide class="dates" v-for="dayList in monList" :key="dayList[0].date">
          <div v-for="date in dayList" :key="date.date" class="item" :class="{'selected-day' : date.selected}" @click="handleSelectDay(date)">
            <p class="date-num" :class="{
              today: today === date.date,
              event: date.event === 1,
              event2: date.event === 2,
              disabled: date.status === 0 || date.disable
            }">{{ date.date | filterDay }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/common/js/utils.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'mtui-datepicker',
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
      required: false
    },
    // 可选择范围: [start, end]
    range: {
      type: Array,
      default: () => []
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
      type: Number,
      default: 1
    }
  },
  data () {
    let today = new Date()

    return {
      today: dateFormat(today, 'yyyy/MM/dd'),
      curParams: { // 当前选中日期的参数
        year: today.getFullYear(),
        month: today.getMonth() + 1
      },
      selectedDays: [], // 当前选中日期集合
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
          slideChangeTransitionEnd: this.slideEnd,
          slideNextTransitionEnd: this.nextMonth,
          slidePrevTransitionEnd: this.prevMonth
        }
      },
      monArry: [] // 月份列表
    }
  },
  computed: {
    swiper () {
      return this.$refs.monthSwiper ? this.$refs.monthSwiper.swiper : null
    },
    monList () { // 月份详细列表
      return this.monArry.map(yearMonth => this.createDayList(yearMonth))
    }
  },
  watch: {
    selected (val) {
      this.propToData(val)
    },
    curParams: {
      handler (val) { this.$emit('on-change-month', `${val.year}/${val.month}`) },
      deep: true
    }
  },
  filters: {
    fmtCurYearMonth (date) {
      return dateFormat(new Date(`${date.year}/${date.month}/1`), 'yyyy年M月')
    },
    filterDay (val) {
      return parseInt(val.split('/')[2])
    }
  },
  created () {
    this.propToData(this.selected)
    this.initCalendar()
  },
  methods: {
    // 对selected进行处理，并拷贝到本地data的selectedDays，以便操作
    propToData (val) {
      if (typeof val === 'undefined') return

      val = this.type === 'single' && typeof val === 'string' ? [val] : val

      this.selectedDays = val.map(v => {
        v = new Date(v.replace(/-/g, '/'))
        return v.toString() === 'Invalid Date' ? '' : dateFormat(v, 'yyyy/MM/dd')
      }).filter(item => item !== '')
    },

    // 初始化日历
    initCalendar () {
      let [year, mon] = this.today.split('/').map(e => Number(e))
      let diffs = [0] // 默认生成当月及前后俩月

      this.monArry = []
      diffs.forEach(diff => {
        let tmpYear = Math.floor((year * 12 + mon + diff) / 12)
        let tmpMon = (year * 12 + mon + diff) % 12
        this.monArry.push(`${tmpYear}/${tmpMon}`)
      })
    },

    // 创建单月日期列表
    createDayList (yearMonth) {
      if (this.startAt < 0) {
        let [year, month] = yearMonth.split('/')
        yearMonth = this.prevMonth({year, month})
      }
      let firstDayTimestamp = new Date(`${yearMonth}/${Math.abs(this.startAt)}`).getTime()
      let startTimestamp = firstDayTimestamp - 1000 * 60 * 60 * 24 * new Date(firstDayTimestamp).getDay()
      let [rangeStart, rangeEnd] = this.range.map(r => new Date(r.replace(/-/g, '/')))
      let dayList = []

      for (let i = 0; i < 7 * 6; i++) {
        let item = new Date(startTimestamp + i * 1000 * 60 * 60 * 24)
        let fmtItem = dateFormat(item, 'yyyy/MM/dd')
        let status = this.calStatus(firstDayTimestamp, item) // 标记是否当前月的日子
        let disable = (rangeStart && item < rangeStart) || (rangeEnd && item >= rangeEnd) // 是否可以点击
        let event = this.events.find(event => dateFormat(event.date.replace(/-/g, '/'), 'yyyy/MM/dd') === fmtItem) // 标记是否有事件
        let eventStatus = 0
        if (event) {
          eventStatus = typeof event.status === 'undefined' ? 1 : event.status
        }

        // 如果五周可以把当月所有日期显示出来，就不用把第六周也显示
        if (i === 35 && status === 0) {
          break
        }

        dayList.push({
          date: fmtItem,
          status: status,
          event: eventStatus,
          disable: this.disabled || disable,
          selected: this.selectedDays.includes(fmtItem)
        })
      }

      return dayList
    },

    // 插入新的周日期。在滑动到尽头的前一页时插入
    slideEnd () {
      if (this.swiper.activeIndex <= 1) {
        let [year, month] = this.monArry[0].split('/').map(e => Number(e))
        this.monArry.unshift(this.prevMonth({ year, month }))
        this.swiper.activeIndex++
      }
      if (this.swiper.activeIndex >= this.swiper.slides.length - 2) {
        let [year, month] = this.monArry[this.monArry.length - 1].split('/').map(e => Number(e))
        this.monArry.push(this.nextMonth({ year, month }))
      }
    },

    nextMonth (obj = this.curParams) {
      if (++obj.month >= 13) {
        ++obj.year
        obj.month = 1
      }
      return `${obj.year}/${obj.month}`
    },

    prevMonth (obj = this.curParams) {
      if (--obj.month <= 0) {
        --obj.year
        obj.month = 12
      }
      return `${obj.year}/${obj.month}`
    },

    changeMonth (type) {
      this.swiper['slide' + type]()
    },

    // 选择日期
    handleSelectDay (date) {
      if (this.disabled || date.disable || date.status === 0) return

      if (this.type === 'fromto') {
        this.selectDayFromto(date)
      } else if (this.type === 'multi') {
        this.selectDayMulti(date)
      } else {
        this.selectedDays = [date.date]
      }

      // 如果点击灰色日期（即非选择月份的日期），则自动切换对应的上下月 (PS:该功能取消于2019/8/8)
      // if (date.status === 0) {
      //   let tmp = new Date(date.date).getMonth() + 1
      //   this.changeMonth(tmp < this.curParams.month ? 'Prev' : 'Next')
      // }

      let sd = this.type === 'single' && typeof this.selected === 'string' ? this.selectedDays[0] : this.selectedDays.map(item => item)
      this.$emit('change', sd)
      this.$emit('on-change', sd)
    },

    // 多日方式处理选择日期
    selectDayMulti (date) {
      if (date.selected) {
        let idx = this.selectedDays.findIndex(day => day === date.date)
        this.selectedDays.splice(idx, 1)
      } else {
        this.selectedDays.push(date.date)
      }
      this.selectedDays = this.selectedDays.sort()
    },

    // 起止方式处理选择日期
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

    // 选中起止日期之间的日期
    selectBetweenDays (start, end) {
      start = new Date(start).getTime()
      end = new Date(end).getTime()
      let day = 1000 * 60 * 60 * 24
      let len = Math.ceil((end - start) / day)
      let ary = []
      for (let i = 0; i <= len; i++) {
        ary.push(dateFormat(start + i * day, 'yyyy/MM/dd'))
      }
      return ary
    },

    // 返回今天
    backtoday () {
      let today = new Date(this.today)
      this.curParams.year = today.getFullYear()
      this.curParams.month = today.getMonth() + 1
      this.swiper.slideTo(this.monArry.findIndex(m => m === `${this.curParams.year}/${Number(this.curParams.month)}`), 300, false)
      // this.handleSelectDay({date: this.today})
    },

    // 计算日期的状态
    calStatus (cur, com) {
      cur = new Date(cur)
      let next = this.nextMonth({
        year: cur.getFullYear(),
        month: cur.getMonth() + 1
      })
      return Number(cur <= com && com < new Date(`${next}/${cur.getDate()}`))
    }
  }
}
</script>

<style lang="scss" scoped>
.mtui-datepicker-wrapper {
  padding: 16px 10px 0;
  background-color: white;
  color: #333;
  font-size: $fontXMedium;
  font-family: $font;
  -webkit-font-smoothing: antialiased;

  .datepicker-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    line-height: 1.6;

    .btn-today {
      position: absolute;
      top: 0;
      left: 4%;
      width: 32px;
      height: 24px;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAwCAYAAAChS3wfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZjRiMDk0MS1mMjhmLTM5NDQtOWNkNC1hZWJhYjkxNTg0NTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUIzRjE5NTk1RDZGMTFFNzk0MzJEOEZBMzY3NDRGRjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUIzRjE5NTg1RDZGMTFFNzk0MzJEOEZBMzY3NDRGRjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNlNTM4MWI3LWNhYjAtM2U0Ny1iNGE0LTBjMGJjZDc4OGFhNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyZjRiMDk0MS1mMjhmLTM5NDQtOWNkNC1hZWJhYjkxNTg0NTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5AZYdnAAAEDElEQVR42uxazU8TQRQfCIELkoJHD5b/YPHg52V7M9EYSIwfCcQ28eMG9ODHQWPVxEQ9FI7Gw5ZwIOoBNHozYW94MLYY79QDR7UJEsNHsr5Jf5M81xZmd2cLtn3Jj91uZzv7+82b994s0+F5nohql8euddPhGWGU0EGYJdycm32xKQxZXH10GXq+p4Rx9lme/ybcEeYslj46Lo1eNfFw3wkDjx/eFZtbWyL36Im89oNw0KAAsfRhygMG5J/BwcP/XDNosfTRyc674VZLhDWCFwD1zDOIqH2sgds4uP7lAYcI7wiWaF7rJRwHMoSzhNVOqKHIS4UuEPoQaXVRN8YYRNQ++sBtCVzfE3qkB9xg5M8QfoZQVwajgZWVb2Jre5tfM2lR+5BT4DXhAwb8JOG6zAJLcIuLhFchH26KMFEjbd02KIDJPqQnvCR8lB5wBBffRHi4W3CzMXyWRco9wx5gso+3OA5JD/DYXGol8/xpsCWtLUBbgLYAxizJys7h/0WALoO/5bBzma8XAt5vG+ZWIlQaJUAeBFSn8nwSxYuuLRoWIEVwGyFAGmQl8RFcK0IUea2g+Tu5AG102pZ1X4hEKYTSzPWH4AECMWCeieIaGlWTRVvkQoiTzzDyAvNfXkvAtdPNlgUcQI2wcvMEa1OACKp93vd9UEvsBwEszO80yKcw2kmM9LyvvRKhgjhRjBDtrb0UQKp/HwQszOlB5vZltLHRzi9CCm2VUIsxpL1QphMEh+G+SRaBH+zgHf6AyEWc8EXwHJbhec1BsOBNJU1+2R3aerppMAm4u/xgCYRy8IIR3/cVCDeDmCDJTONoB4wFtqm4oSPAFFxcp7Kb9h3r5ecUHq4CYXXSWh5xREDchUbGAN3O1ChXNNsGMb6+uLJXawHPRNwJcY/NpmEZWSipW+01w3JYBckZwL/4apgAYd7n97ORCjNvJxEoy0ipLmCbqDAb4QEO3LXEKsMgrp9n5bbwneejFkhxCzCJ4FVhFWGQym+eZSLXl0mybK1h7UcBLDZ62QDFi1poFUGwgPtrpecC2hRZitwXAiTYC46pAO8EEhh1p8aCqpZl2G/nw5TYcQmwCDKlOqNXb62xwvJ9VjNmZNj0stlaQytAdsVA3mE1e0qzwHFY2Vqq8X5hN1PZwYEINvOEQiM9IMEWTSOaQU8VN2UQHwpI3l9iq3eBOZ2pZ9oD1KjbAV6DqXsqhp7BDdB3bDHADSHcnlj7P0NtAYRQOy17Woj3ARx/SQE+48O5FhLgNI5fpQBzrG7vbwHykqPaazQnBXhOWBbVXVNy69h5Ud1T12zWC25yh9gpwhfJXdYBG6K6PU5+cUJUt5I1uy2D84bKAquEY5gGnwjrTUh6Hdwkx6PgLP4IMAB3qTqMXDmKoQAAAABJRU5ErkJggg==") center center no-repeat;
      background-size: contain;
    }

    .arrow-left,
    .arrow-right {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 23px;
      height: 26px;
      cursor: pointer;
      user-select: none;

      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-left: 1px solid #666;
        border-bottom: 1px solid #666;
      }
    }
    .arrow-left::after { transform: rotate(45deg); }
    .arrow-right::after { transform: rotate(-135deg); }
  }

  .datepicker-body {
    padding-bottom: 16px;
    overflow: hidden;
    font-size: 14px;
    line-height: 36px;
    text-align: center;

    .weeks {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .item {
        width: 100%;
        color: #9b9b9b;
      }
    }

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
        color: $black;

        // 背景圈
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 1;
          transform: translate(-50%, -50%) scale(0);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          transition: all .2s;
        }
        // 选中的样式
        &.selected-day {
          .date-num {
            color: white;
            &.event::before { background-color: white; }
            // &.event2::before { background-color: #fff; }
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
          width: 36px;
          height: 36px;
          border: 1px solid transparent;
          border-radius: 50%;

          // 被禁用的样式
          &.disabled { color: #ccc; }
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
