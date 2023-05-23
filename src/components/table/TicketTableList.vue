<template>
  <div class="container">
    <Table :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
export default {
  name: 'TicketTableList',
  props: {
    columns: { type: Array },
    data: { type: Array }
  }
};
</script>
