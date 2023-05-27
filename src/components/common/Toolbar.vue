<template>
  <div class="tool-bar">
    <Card>
      <Form ref="Form" :model="form" label-position="right" :label-width="80">
        <Row type="flex" justify="start" :gutter="16">
          <Col span="6">
            <Form-item label="标题:" prop="title">
              <Input v-model="form.title" placeholder="支持标题模糊查询" />
            </Form-item>
          </Col>
          <Col span="6">
            <Form-item label="工单类型：" prop="type">
              <Select v-model="form.type" label-in-value class="text-left" placeholder="请选择工单类型">
                <Option v-for="(item, index) in typeOptions" :key="index" :value="item.id">{{ item.name }}</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span="6">
            <Form-item label="创建人：" prop="creator">
              <Input v-model="form.creator" placeholder="请填写工单创建人" />
            </Form-item>
          </Col>
          <Col span="6">
            <Form-item label="流水号：" prop="sn">
              <Input v-model="form.sn" placeholder="请填写工单流水号" />
            </Form-item>
          </Col>
          <Col span="6">
            <Form-item label="创建时间：" prop="dateRange">
              <Date-picker
                :value="form.dateRange"
                format="yyyy-MM-dd"
                type="daterange"
                placement="bottom-end"
                placeholder="选择日期区间"
                style="width: 100%"
                @on-change="val => (form.dateRange = val)"
              />
            </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <Form-item class="text-right">
              <Button type="primary" @click="$emit('search')">提交</Button>
              <Button type="ghost" style="margin-left: 8px" @click="handleReset">重置</Button>
            </Form-item>
          </Col>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: {
        title: '',
        type: '',
        creator: '',
        sn: '',
        dateRange: null
      },
      typeOptions: []
    };
  },
  watch: {
    form: {
      handler() {
        console.log(this.form);
        this.$emit('update:params', this.form);
      },
      deep: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch('api_workflows').then(resp => {
        if (resp.data.code === -1) {
          alert(resp.data.msg);
        }
        this.typeOptions = resp.data.data.value;
      });
    },
    handleReset() {
      this.$refs.Form.resetFields();
    }
  }
};
</script>
