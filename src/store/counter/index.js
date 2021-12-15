import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

// MÓDULO SEPARADO EN ARCHIVOS DIFERENTES PARA UNA MEJOR ESCALABILIDAD

const counterStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default counterStore;
