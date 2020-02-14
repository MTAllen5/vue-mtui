<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/common/css/variable.scss';
@import './views/style.scss';

html, body {
  margin: 0;
  padding: 0;
  background-color: $colorBg;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colorBlack;
}
</style>
