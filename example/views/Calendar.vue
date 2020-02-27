<template>
  <div class="api-layout">
    <doc-content></doc-content>

    <div class="emulated-phone">
      <m-title type="1">Calendar</m-title>

      <m-panel>
        <div slot="head">默认</div>
        <m-calendar @on-change="handleChange"></m-calendar>
      </m-panel>

      <m-panel>
        <div slot="head">多选</div>
        <m-calendar v-model="selected" showBack type="multi" @on-change="handleChange"></m-calendar>
      </m-panel>

      <m-panel>
        <div slot="head">起止</div>
        <m-calendar type="fromto" v-model="selectedFromTo"></m-calendar>
      </m-panel>

      <m-panel>
        <div slot="head">有范围限制</div>
        <m-calendar :range="range"></m-calendar>
      </m-panel>

      <m-panel>
        <div slot="head">显示事件</div>
        <m-calendar :events="events" @on-change-month="handleChangeMonth"></m-calendar>
      </m-panel>

      <m-panel>
        <div slot="head">禁用</div>
        <m-calendar :selected="today" disabled></m-calendar>
      </m-panel>

      <!-- <m-panel>
        <div slot="head">月开始日偏移</div>
        <m-calendar :selected="today" :startAt="-26" @on-change="handleChange"></m-calendar>
      </m-panel> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Content from '../doc/Calendar'

export default {
  name: 'exp-calendar',
  components: { DocContent: Content },
  data () {
    let now = new Date()
    let today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
    let selectedFromTo = []
    for (let i = 0; i < 7; i++) {
      selectedFromTo.push(moment(today, 'YYYY/MM/DD').add(i, 'days').format('YYYY-MM-DD'))
    }

    return {
      today: today,
      selected: [selectedFromTo[0], selectedFromTo[2], selectedFromTo[5]],
      selectedFromTo: selectedFromTo,
      events: [
        { date: selectedFromTo[0], status: 1, event: {} },
        { date: selectedFromTo[1], status: 2, event: {} },
        { date: selectedFromTo[4], status: 1, event: {} },
        { date: selectedFromTo[6], event: {} }
      ],
      range: [today, selectedFromTo[selectedFromTo.length - 1]]
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.selected = ['2019-07-18', '2019-07-20']
    //   this.range = ['2019-07-19', '2019-07-24']
    //   this.events = [
    //     { date: '2019-07-09', event: {} },
    //     { date: '2019-07-19', event: {} }
    //   ]
    // }, 2000)
  },
  methods: {
    handleChange (selectedDays) {
      console.log(selectedDays)
    },
    handleChangeMonth (yearMonth) {
      console.log(yearMonth)
    }
  }
}
</script>
