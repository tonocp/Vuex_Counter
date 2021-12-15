import { createStore } from "vuex";
import getRandomInt from "@/helpers/getRandomInt";

export default createStore({
  state: {
    // Similar a la data()
    count: 1,
    lastMutation: "none",
    isLoading: false,
    lastRandomInt: 0,
  },

  mutations: {
    // Similar a methods()

    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },

    incrementBy(state, value) {
      state.count += value;
      state.lastMutation = "incrementBy = " + value;
      state.lastRandomInt = value;
    },

    setLoading(state, value) {
      state.isLoading = value;
      state.lastMutation = "setLoading = " + value;
    },
  },

  actions: {
    // Métodos asíncronos, p.ej: peticiones HTTP

    async incrementRandomInt({ commit }) {
      commit("setLoading", true);
      const randomInt = await getRandomInt();
      commit("setLoading", false);
      commit("incrementBy", randomInt);
    },
  },

  getters: {
    // Pueden ser llamados en cualquier parte de la app

    squareCount(state) {
      return state.count * state.count;
    },
  },
});
