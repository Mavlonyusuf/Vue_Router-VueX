import AuthService from "../services/auth"
const state = {
    isLoading : false
}
const mutations = {
   registerStart (state) {
    state.isLoading = true
   }, 
   registerSuccess (state) {
    state.isLoading = false
   }, 
   registerFailure (state) {
    state.isLoading = false
   }
}

const actions = {
    register(context, user) {
        return new Promise(() => {
            context.commit("registerStart")
            AuthService.register(user)
                .then((response) => {
                    console.log(response.data)
                    context.commit("registerSuccess")
                })
                .catch(error => {
                    console.log("Error", error.response.data)
                    context.commit("registerFailure")
                })

        })
    }
}

export default {state, mutations, actions}