<template>
  <div class="container">
    <Toolbar :params.sync="filterParams" @search="search" />
    <Card class="m-t">
      <Table :columns="dataTable.columns" :data="dataTable.data" size="small"></Table>
      <br />
      <Page :total="total" show-sizer show-total size="small" @on-change="handleChangePage"></Page>
    </Card>
  </div>
</template>

<script>
/**
 * 工单表格展示
 * 通过prop.category来进行不同业务类型工单查询
 */
import Buttons from '../../../utils/buttons';
import ToolbarMixin from '@/mixins/Toolbar.js';
import Toolbar from '@/components/common/Toolbar.vue';

export default {
  name: 'TicketTable',
  components: { Toolbar },
  mixins: [ToolbarMixin],
  props: {
    category: {
      type: String,
      required: true,
      validator(value) {
        // 可选值 all,relation,owner,duty
        return ['all', 'relation', 'owner', 'duty'].includes(value);
      }
    }
  },
  data() {
    return {
      dataTable: {
        columns: [
          {
            key: 'sn',
            title: '流水号',
            minWidth: 220,
            align: 'center'
          },
          {
            key: 'title',
            title: '标题',
            align: 'center',
            minWidth: 150
          },
          {
            key: 'workflow',
            title: '业务流程',
            align: 'center',
            width: 150,
            render: (h, params) => {
              return h('div', [h('span', {}, params.row.workflow_info.workflow_name)]);
            }
          },
          {
            key: 'state',
            title: '当前状态',
            align: 'center',
            width: 150,
            render: (h, params) => {
              return h('div', [h('span', {}, params.row.state.state_name)]);
            }
          },
          {
            key: 'creator',
            title: '创建人',
            align: 'center',
            width: 100
          },
          {
            key: 'gmt_created',
            title: '创建时间',
            align: 'center',
            width: 150
          },
          {
            key: 'gmt_modified',
            title: '更新时间',
            align: 'center',
            width: 150
          },
          {
            key: 'action',
            title: '操作',
            align: 'center',
            fixed: 'right',
            minWidth: 100,
            render: (h, params) => {
              return h('div', [Buttons.detailButton(this, h, params)]);
            }
          }
        ],
        data: []
      },
      total: 0,
      filterParams: {}
    };
  },
  computed: {
    formatParams() {
      const { title, type, creator, sn, dateRange } = this.filterParams;
      const params = {};
      title && (params.title = title);
      type && (params.workflow_ids = type);
      creator && (params.creator = creator);
      sn && (params.sn = sn);
      dateRange[0] && (params.create_start = dateRange[0]);
      dateRange[1] && (params.create_end = dateRange[1]);

      return params;
    }
  },
  mounted() {
    this.getTicketList(1);
  },
  methods: {
    handleChangePage(page) {
      this.getTicketList(page);
    },
    search() {
      this.getTicketList(1);
    },
    getTicketList(page) {
      this.$store
        .dispatch('api_get_ticket_list', { ...this.formatParams, category: this.category, page })
        .then(resp => {
          this.dataTable.data = resp.data.data.value;
          this.total = resp.data.data.total;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
