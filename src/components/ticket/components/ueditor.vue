<template>
  <div>
    <script id="ueditor-container" type="text/plain"></script>
  </div>
</template>
<script>
export default {
  name: 'UE',
  props: {
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      instance: null
    };
  },
  mounted() {
    this.initEditor();
  },
  destroyed() {
    if (this.instance !== null && this.instance.destroy) {
      this.instance.destroy();
    }
  },
  methods: {
    initEditor() {
      this.$nextTick(() => {
        this.instance = UE.getEditor('ueditor-container', this.config);
        // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
        this.instance.addListener('ready', () => {
          this.$emit('ready', this.instance);
        });
      });
    },
    getUEContent() {
      // 获取内容方法
      return this.editor.getContent();
    }
  }
};
</script>

<style>
.edui-default .edui-button-body,
.edui-splitbutton-body,
.edui-menubutton-body,
.edui-combox-body {
  height: 20px !important;
}
</style>
