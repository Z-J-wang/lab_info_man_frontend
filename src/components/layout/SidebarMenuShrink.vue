<template>
  <div style="text-align: center;">
    <template v-for="(item, index) in menuList">
      <Dropdown v-if="item.children.length <= 1" :key="index" transfer placement="right-start" @on-click="changeMenu">
        <Button style=" margin-left: 5px; padding: 10px 0; width: 70px;" type="text">
          <Icon color="white" :type="item.children[0].icon" size="22"></Icon>
        </Button>
        <DropdownMenu slot="list" style="width: 230px;">
          <DropdownItem :key="index" :name="item.children[0].name">
            <Icon :type="item.children[0].icon"></Icon>
            <span style="padding-left: 10px;">{{ item.children[0].title }}</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown v-else :key="index" transfer placement="right-start" @on-click="changeMenu">
        <Button style=" margin-left: -5px; padding: 10px 0; width: 70px;" type="text">
          <Icon color="white" :type="item.icon" size="22"></Icon>
        </Button>
        <DropdownMenu slot="list" style="width: 230px;">
          <template v-for="(child, i) in item.children">
            <DropdownItem v-if="child.meta && !child.meta.hidden" :key="i" :name="child.name">
              <Icon :type="child.icon"></Icon>
              <span class="layout-text">{{ child.title }}</span>
            </DropdownItem>
          </template>
        </DropdownMenu>
      </Dropdown>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuShrink',
  props: {
    menuList: { type: Array },
    openNames: { type: Array }
  },
  methods: {
    changeMenu(active) {
      this.$emit('on-change', active);
    }
  }
};
</script>
