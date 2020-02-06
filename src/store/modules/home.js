const home = {
  state: {
    currentUser: {},
    homeBg: '',
    leftDrawer: false,
    rightDrawer: false,
    bottomDrawer: false
  },
  mutations: {
    'SET_CURRENT_USER': (state, user) => {
      state.currentUser = user
    },
    'SET_HOME_BG': (state, url) => {
      state.homeBg = url
    },
    'SET_LEFT_DRAWER': (state, visible) => {
      state.leftDrawer = visible
    },
    'SET_RIGHT_DRAWER': (state, visible) => {
      state.rightDrawer = visible
    },
    'SET_BOTTOM_DRAWER': (state, visible) => {
      state.bottomDrawer = visible
    }
  }
}

export default home
