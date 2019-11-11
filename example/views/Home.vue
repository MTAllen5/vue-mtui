<template>
  <div class="home">
    <m-title type="1">MTUI</m-title>

    <p class="mtui-p">这是一套基于vue2.0的UI框架，组件参考了weui、<a href="https://github.com/ElemeFE/mint-ui">mint-ui</a>、<a href="https://github.com/didi/cube-ui">cube-ui</a>、<a href="https://ant.design/index-cn">ant design设计规范</a>。</p>

    <m-panel>
      <div slot="head">Basic 基础组件</div>
      <div>
        <m-cell link="/buttons" arrow>Button 按钮</m-cell>
        <m-cell link="/icons" arrow>Icon 图标</m-cell>
        <m-cell link="/titles" arrow>Title 标题</m-cell>
        <m-cell link="/panels" arrow>Panel 面板</m-cell>
        <m-cell link="/cells" arrow>Cell 单行列表</m-cell>
        <m-cell link="/grids" arrow>Grid 网格</m-cell>
      </div>
    </m-panel>

    <m-panel>
      <div slot="head">MessageBox 消息弹窗</div>
      <div>
        <m-cell link="/dialogs" arrow>Dialog 对话窗</m-cell>
        <m-cell link="/alert" arrow>Alert 提示窗</m-cell>
        <m-cell link="/confirm" arrow>Confirm 确认窗</m-cell>
        <m-cell link="/toast" arrow>Toast 消息提示</m-cell>
        <m-cell link="/loading" arrow>Loading 加载提示</m-cell>
        <m-cell link="/loadingbar" arrow>LoadingBar 页面加载进度条</m-cell>
      </div>
    </m-panel>

    <m-panel>
      <div slot="head">Form 表单</div>
      <div>
        <m-cell link="/inputs" arrow>Input 输入框</m-cell>
        <m-cell link="/textareas" arrow>Textarea 文本域</m-cell>
        <m-cell link="/switchs" arrow>Switch 转换开关</m-cell>
        <m-cell link="/counters" arrow>Counter 计数器</m-cell>
        <m-cell link="/radios" arrow>Radio 单选按钮</m-cell>
        <m-cell link="/checkboxes" arrow>Checkbox 复选按钮</m-cell>
        <m-cell link="/datepicker" arrow>DatePicker 日期选择器</m-cell>
        <m-cell link="/form" arrow>Form 表单</m-cell>
      </div>
    </m-panel>

    <div class="testDiv">
        <!-- <MButton class="warn" @click="showOptions">显示options</MButton>
        <MButton class="success plain" @click="showDatePicker">显示日期选择器</MButton> -->
      </div>
      <!-- <div style="padding: 0 30px">
        <Former inline label-width="100px">
          <FormItem label="楼宇选择">
            <Selecter placeholder="请选择楼宇">
              <Option label="环球都汇" value="1"></Option>
              <Option label="东塔" value="2"></Option>
              <Option label="西塔" value="3"></Option>
            </Selecter>
          </FormItem>
        </Former>
      </div> -->
    </div>

    <!-- <Options ref="options">
      <Button class="long plain info" @click="handleOption1" style="border: 0">选项1</Button>
      <Button class="long plain blue" @click="handleOption2" style="border: 0">选项2</Button>
      <Button class="long plain primary" @click="handleOption3" style="border: 0">选项3</Button>
    </Options> -->

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      counter: 0,
      switcher: true,
      btnLoading: false,
      swiperOption: {}
    }
  },
  methods: {
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
    handleOption1 () {
      this.$refs.options.hide()
    },
    handleOption2 () {
      this.$refs.options.hide()
    },
    handleOption3 () {
      this.$refs.options.hide()
    },
    showDatePicker () {
      this.$refs.datepicker.show()
    }
  }
}
</script>

<style>

</style>
