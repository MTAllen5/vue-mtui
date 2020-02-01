<template>
  <div>
    <m-title type="1">Grid</m-title>

    <m-panel title="默认Grid">
      <m-grid>
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
      </m-grid>
    </m-panel>

    <m-panel title="自定义列数Grid">
      <m-grid :col="2">
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
        <m-grid-item icon="image" text="文字" />
      </m-grid>
    </m-panel>

    <m-panel title="网格间隔">
      <div style="background-color: #f5f5f5;">
        <m-grid :col="4" :gap="10">
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
          <m-grid-item icon="image" text="文字" />
        </m-grid>
      </div>
    </m-panel>

    <m-panel title="页面导航">
      <m-grid :col="4" :border="false">
        <m-grid-item icon="android-home" text="首页" link="/" color="#1890ff" />
        <m-grid-item icon="android-list" text="订单" link="/" />
        <m-grid-item icon="android-notifications" text="通知" link="/" />
        <m-grid-item icon="android-person" text="我的" link="/" />
      </m-grid>
    </m-panel>

    <m-panel title="自定义内容">
      <m-grid :col="2" :border="false">
        <m-grid-item>
          <div class="grid-custom-demo">
            <img src="https://hbimg.huabanimg.com/95de519c9bc3710a3bcd36f877140a05b5ce66335bac8-kdW2Bg_fw658">
            <h4>这是商品</h4>
            <p><strong>￥1000</strong></p>
          </div>
        </m-grid-item>
        <m-grid-item>
          <div class="grid-custom-demo">
            <img src="https://hbimg.huabanimg.com/95de519c9bc3710a3bcd36f877140a05b5ce66335bac8-kdW2Bg_fw658">
            <h4>这是商品</h4>
            <p><strong>￥1000</strong></p>
          </div>
        </m-grid-item>
        <m-grid-item>
          <div class="grid-custom-demo">
            <img src="https://hbimg.huabanimg.com/95de519c9bc3710a3bcd36f877140a05b5ce66335bac8-kdW2Bg_fw658">
            <h4>这是商品</h4>
            <p><strong>￥1000</strong></p>
          </div>
        </m-grid-item>
        <m-grid-item>
          <div class="grid-custom-demo">
            <img src="https://hbimg.huabanimg.com/95de519c9bc3710a3bcd36f877140a05b5ce66335bac8-kdW2Bg_fw658">
            <h4>这是商品</h4>
            <p><strong>￥1000</strong></p>
          </div>
        </m-grid-item>
      </m-grid>
    </m-panel>
  </div>
</template>

<style lang="scss" scoped>
.grid-custom-demo {
  img {
    display: block;
    width: 100%;
  }
  h4 {
    margin: 0;
    margin-top: 8px;
    font-weight: normal;
    font-size: 16px;
  }
  p {
    margin: 0;
    margin-top: 8px;
    font-size: 14px;

    strong {
      font-weight: normal;
      color: #f5222d;
    }
  }
}
</style>
