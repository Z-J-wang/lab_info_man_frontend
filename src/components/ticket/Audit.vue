<template>
  <TicketTable :category="'relation'" />
</template>

<script>
import TicketTable from './components/TicketTable.vue';

export default {
  name: 'Audit',
  components: { TicketTable }
};
</script>
