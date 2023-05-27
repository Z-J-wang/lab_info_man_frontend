<template>
  <div class="container">
    <Toolbar :params.sync="filterParams" @search="search" />
    <Card>
      <Table :columns="dataTable.columns" :data="dataTable.data" size="small"></Table>
      <br />
      <Page :total="total" show-sizer show-total size="small" @on-change="handleChangePage"></Page>
    </Card>
  </div>
</template>

<script>
import Buttons from '../../utils/buttons';
import ToolbarMixin from '@/mixins/Toolbar.js';

export default {
  name: 'All',
  mixins: [ToolbarMixin],
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
      total: 0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$store
        .dispatch('api_get_ticket_list', { category: 'all' })
        .then(resp => {
          this.dataTable.data = resp.data.data.value;
          this.total = resp.data.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleChangePage(page) {
      this.$store
        .dispatch('api_get_ticket_list', { ...this.formatParams, category: 'all', page: page })
        .then(resp => {
          this.dataTable.data = resp.data.data.value;
          this.total = resp.data.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },
    search() {
      this.$store
        .dispatch('api_get_ticket_list', { ...this.formatParams, category: 'all', page: 1 })
        .then(resp => {
          this.dataTable.data = resp.data.data.value;
          this.total = resp.data.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
