import Vue from 'vue'
import Vuex from 'vuex'
import  service from '../static/js/server'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存放用户
    socket: '',
    // 存放历史记录
    messhistory: {
      infos: [],
      allmessage: []
    },
    // 存放房间信息，为了方便以后做多房间
    roomdetail: {
      id: '',
      users: {},
      infos: []
    },

    // svg
    svgmodal: null,
    // 是否启动tab
    istab: false
  },
  getters: {
    getSocket: state => state.socket,
    getUsers: state => state.roomdetail.users,
    getInfos: state => state.roomdetail.infos,
    getMessHistoryInfos: state => state.messhistory.infos,
    getMessHistoryAll: state => state.messhistory.allmessage,
  },
  mutations: {
    setTab(state, data) {
      state.istab = data
    },
    setSvgModal(state, data) {
      state.svgmodal = data
    },
    setGetSocket (state, data) {
      state.socket = data
    },
    addRoomDetailInfos(state, data) {
      state.roomdetail.infos.push(data)
    },
    setRoomDetailInfos(state) {
      state.roomdetail.infos = []
    },
    setUsers(state, data) {
      state.roomdetail.users = data
    },
    setAllMessHistory(state, data) {
      state.messhistory.allmessage = data
    },
    setMessHistoryInfos(state, data) {
      state.messhistory.infos = data
    }
  },
  actions: {

    async reg({commit}, data) {
      const res = await service.RegisterUser(data)
      if (res.data.errno === 0) {
        return {
          status: 'success',
          data: res.data
        }
      }
      return {
        status: 'fail',
        data: res.data
      }
    },
    async login({commit}, data) {
      const res = await service.login(data)
      if (res.data.info === 0) {
        return {
          status: 'success',
          data: res.data
        }
      }
      return {
        status: 'fail',
        data: res.data
      }
    }/*,
    async getMessHistory({commit}, data) {
      const res = await service.RoomHistory(data)
      if (res) {
        commit('setMessHistoryInfos', res.data.data)
      }
    },
    async getAllMessHistory({commit}, data) {
      const res = await service.RoomHistoryAll(data)
      if (res.data.data.errno === 0) {
        return {
          data: res.data.data.data,
          total: res.data.data.total
        }
        // commit('setAllMessHistory', res.data.data.data)
      }
    },
    async getRobatMess({commit}, data) {
      let robotdata = ''
      const res = await service.getRobotMessage(data)
      if (res) {
        robotdata = JSON.parse(res.data.data)
        // 分类信息
        if (robotdata.code === 100000) {
          commit('setRobotMsg', {message: robotdata.text, user: 'robot'})
        } else if (robotdata.code === 200000) {
          let data = robotdata.text + robotdata.service
          commit('setRobotMsg', {message: data, user: 'robot'})
        } else if (robotdata.code === 302000) {
          commit('setRobotMsg', {message: '暂不支持此类对话', user: 'robot'})
        } else {
          commit('setRobotMsg', {message: '暂不支持此类对话', user: 'robot'})
        }
      }
    }*/
  }
})
export default store
