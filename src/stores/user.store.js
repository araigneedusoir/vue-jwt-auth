import { computed, reactive } from "vue"
import * as Request from "@/services/requests"

const state = reactive({
  name: "",
  username: "",

  error: ""
})

const getters = reactive({
  isLoggedIn: computed(() => state.username !== "")
})

const actions = {
  async getUser() {
    const user = await Request.getUser()
    if (user == null) return

    state.name = user.name
    state.username = user.username
  },
  async login(username, password) {
    const user = await Request.login(username, password)
    if (user == null) {
      state.error = "Wrong username or password."
      return false
    }

    state.name = user.name
    state.username = username
    state.error = ""

    return true
  },
  async logout() {
    state.name = ""
    state.username = ""
  }
}

export default { state, getters, ...actions }
