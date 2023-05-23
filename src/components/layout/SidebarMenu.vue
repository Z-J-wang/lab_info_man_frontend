<template>
  <Menu
    ref="sideMenu"
    width="auto"
    theme="dark"
    :active-name="$route.name"
    :open-names="openNames"
    :accordion="true"
    @on-select="changeMenu"
  >
    <template v-for="(item, index) in menuList">
      <MenuItem v-if="item.children.length <= 1" :key="index" :name="item.children[0].name">
        <Icon :type="item.children[0].icon" size="22"></Icon>
        <span class="layout-text">{{ item.children[0].title }}</span>
      </MenuItem>
      <Submenu v-else :key="index" :name="item.name">
        <template slot="title">
          <Icon :type="item.icon" :size="22"></Icon>
          <span class="layout-text">{{ item.title }}</span>
        </template>
        <template v-for="(child, i) in item.children">
          <MenuItem v-if="child.meta && !child.meta.hidden" :key="i" :name="child.name">
            <Icon :type="child.icon" :size="22"></Icon>
            <span class="layout-text">{{ child.title }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    openNames: { type: Array },
    menuList: { type: Array }
  },
  methods: {
    changeMenu(active) {
      this.$emit('on-change', active);
    }
  }
};
</script>
