<template>
  <TicketTable :category="'owner'" />
</template>

<script>
import TicketTable from './components/TicketTable.vue';

export default {
  name: 'Myself',
  components: { TicketTable }
};
</script>
