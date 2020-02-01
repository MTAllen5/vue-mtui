<template>
  <div class="page-404">
    <div class="title">404</div>
    <p class="mtui-p">对不起，您所访问的页面不存在</p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/common/css/mixins.scss';
@import '@/common/css/global.scss';

.page-404 {
  @include flex-center();
  flex-direction: column;

  .title {
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 80px;
  }
}
</style>
