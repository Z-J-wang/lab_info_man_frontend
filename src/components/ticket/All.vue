<template>
  <TicketTable :category="'all'" />
</template>

<script>
import TicketTable from './components/TicketTable.vue';

export default {
  name: 'All',
  components: { TicketTable }
};
</script>
