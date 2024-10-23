import {constantRoutes} from '@/router'
import {getMenuList} from '@/api/user'
import Layout from '@/layout'

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = {...route}
    if (hasPermission(roles, tmp)) {
      let component = tmp.component
      if (route.component) {
        if (component === 'Layout') {
          tmp.component = Layout
        } else {
          tmp.component = (resolve) => require([`@/views${component}`], resolve)
        }
      }
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({commit}, roles) {
    return new Promise((resolve, reject) => {
      getMenuList().then(response => {
        if (response.code === 200) {
          const accessedRoutes = filterAsyncRoutes(response.data, roles)
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        } else {
          reject(response.msg)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true, state, mutations, actions
}
