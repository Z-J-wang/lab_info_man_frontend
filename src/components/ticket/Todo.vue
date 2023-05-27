<template>
  <TicketTable :category="'duty'" />
</template>

<script>
import TicketTable from './components/TicketTable.vue';

export default {
  name: 'Todo',
  components: { TicketTable }
};
</script>
