<template>
  <div id="Home">
    <Carousel autoplay :height="300">
      <Carousel-item v-for="(item, i) in carousels" :key="i">
        <div class="demo-carousel full-height flex items-center justify-center">
          <h1 class="text-center text-white">{{ item }}</h1>
        </div>
      </Carousel-item>
    </Carousel>
    <div class="container m-auto p-a bg-white" style="margin-top: 40px; border-radius: 5px;">
      <Row :gutter="16">
        <Col span="12">
          <Card>
            <p slot="title">新闻</p>
            <ul class="p-lr list">
              <li v-for="(item, i) in news" :key="i">
                <p class="ellipsis">
                  <a :href="item.href">{{ item.label }}</a>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span="12">
          <Card>
            <p slot="title">公告</p>
            <ul class="p-lr list">
              <li v-for="(item, i) in news" :key="i">
                <p class="ellipsis">
                  <a :href="item.href">{{ item.label }}</a>
                </p>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carousels: [1, 2, 3, 4],
      news: [
        {
          label: '马斯克之后，英伟达、摩根大通、星巴克、路威酩轩等公司 CEO 等外企高管再掀「来华潮」，释放哪些信号？',
          href: 'https://www.zhihu.com/question/604506301'
        },
        {
          label: '波音 CEO 称 C919 是一架好飞机，但想满足需求还有很久，不该对全球有三家供应商生畏，如何解读？',
          href: 'https://www.zhihu.com/question/604411935'
        },
        {
          label: '单位已采购国产电脑，但很多办公软件用不了，国产机基本成摆设，有什么解决方案么？',
          href: 'https://www.zhihu.com/question/511544506'
        },
        {
          label: '巴黎圣日耳曼官方宣布 37 岁拉莫斯合同到期离队，两年出战 57 场，如何评价拉莫斯的职业生涯？',
          href: 'https://www.zhihu.com/question/604566341'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#Home {
  min-height: calc(100vh - 38px - 48px - 60px);

  .demo-carousel {
    background-color: #657180;
  }

  .list {
    list-style: auto;

    li + li {
      padding-top: 8px;
    }
  }
}
</style>
