<template>
  <h1>VUEX COUNTER</h1>

  <hr />

  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <hr />

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <hr />

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <hr />

  <h2>Direct Getter: {{ $store.getters.squareCount }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.count;
    },

    ...mapState(["count", "lastMutation", "isLoading"]),

    // ...mapState({
    //   count: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    //   lastMutation: "lastMutation",
    // }),
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },

    incrementBy() {
      this.$store.commit("incrementBy", 5);

      // También se pueden llamar acciones desde los métodos p.ej:
      // this.randomInt()
    },

    // incrementRandomInt() {
    //   this.$store.dispatch("incrementRandomInt");
    // },

    // ...mapActions(["incrementRandomInt"]),
    ...mapActions({
      randomInt: "incrementRandomInt",
    }),
  },
};
</script>

<style></style>
