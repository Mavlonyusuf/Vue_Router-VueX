import { createStore } from 'vuex'
import Auth from '../modules/Auth'
// Create a new store instance.
const store = createStore({
  state : {}, 
  mutations : {}, 
  actions : {}, 
  modules : {Auth}
})
export default store