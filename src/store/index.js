import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import jwt from 'jwt-decode';
import { otherRouter, appRouters } from '../router/routers';

// const axios = Axios.create({
//   baseURL: "http://localhost:6061",
//   // baseURL: "http://103.39.212.167:6062",
//   withCredentials: true,
//   timeout: 5000
// });

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menuList: [...appRouters],
    routers: [otherRouter, ...appRouters],
    menulist: [],
    currentPath: [],
    openNames: [],
    userid: null,
    expire: '',
    username: '',
    token: ''
  },
  getters: {},
  mutations: {
    updateToken: (state, token) => {
      state.token = token;
      localStorage.token = token;
    },
    decodeToken: (state, token) => {
      state.userid = jwt(localStorage.token).user_id;
      state.expire = new Date(1000 * jwt(localStorage.token).exp);
      state.username = jwt(localStorage.token).username;
    },
    setOpenNames: (state, name) => {
      state.openNames = [name];
    },
    setCurrentPath: (state, pathArr) => {
      state.currentPath = pathArr;
    },
    removeStorage: state => {
      localStorage.removeItem('token');
    }
  },
  actions: {
    login: (context, data) => {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/v1/account/obtain_token/', data)
          .then(resp => {
            context.commit('updateToken', resp.data.token);
            context.commit('decodeToken', resp.data.token);
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout: context => {
      context.commit('removeStorage');
    },

    // 获取 workflows 数据列表
    api_workflows: context => {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/v1/service/workflows/')
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    api_init_state: (context, params) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/v1/service/init_state/${params.id}/`)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 创建工单
    api_post_ticket: (context, data) => {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/v1/service/create_ticket/', data)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取工单列表
    api_get_ticket_list: (context, params) => {
      var url = '';
      let keys = Object.keys(params);
      var query = [];
      if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
          query.push(`${keys[i]}=${params[keys[i]]}`);
        }
        url = `/api/v1/service/tickets/?${query.join('&')}`;
      } else {
        url = '/api/v1/service/tickets/';
      }
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取工单详情
    api_get_ticket_detail: (context, params) => {
      let url = `/api/v1/service/tickets/${params.id}/`;
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取工单处理进度
    api_get_ticket_step_list: (context, params) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/v1/service/steps/${params.id}/`)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取工单操日志
    api_get_ticket_transiton_list: (context, params) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/v1/service/logs/${params.id}/`)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    api_get_ticket_transitions: (context, params) => {
      return new Promise((resolve, reject) => {
        axios
          .get(`/api/v1/service/actions/${params.id}/`)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 工单处理
    api_handle_ticket_action: (context, data) => {
      let url = `/api/v1/service/tickets/${data.id}/`;
      return new Promise((resolve, reject) => {
        axios
          .patch(url, data.data)
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户列表
    api_fetch_account_list: context => {
      return new Promise((resolve, reject) => {
        axios
          .get('/api/v1/account/users/fetch-users/')
          .then(resp => {
            resolve(resp);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
});

export default store;
