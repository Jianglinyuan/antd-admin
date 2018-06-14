import { routerRedux } from 'dva/router'

const user = {
  username : "tianyuan",
  password: "tianyuan666", 
}

export default {
  namespace: 'login',

  state: {},

  effects: {
    * login ({
      payload,
    }, { put, select }) {
      let data = {}
      if(payload.username === user.username && payload.password === user.password) {
        data.success = true
      } else {
        data.mes = "用户与密码错误"
      }

      const { locationQuery } = yield select(_ => _.app)
      if (data.success) {
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (from && from !== '/login') {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw data.mes 
      }
    },
  },

}
