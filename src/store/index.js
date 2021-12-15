import { createStore } from "vuex";
import counterStore from "./counter";

export default createStore({
  modules: {
    counter: counterStore,
    // Aquí irían el resto de módulos de la APP
    // auth: authStore,
    // product: productStore,
    // ...
  },
});
