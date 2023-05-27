import Toolbar from '@/components/common/Toolbar.vue';

export default {
  components: { Toolbar },
  data() {
    return {
      filterParams: {}
    };
  },
  computed: {
    formatParams() {
      const { title, type, creator, sn, dateRange } = this.filterParams;
      return {
        title,
        workflow_ids: type,
        creator,
        sn,
        create_start: dateRange[0],
        create_end: dateRange[1]
      };
    }
  }
};
