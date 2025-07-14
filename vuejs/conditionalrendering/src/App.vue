<template>
  <h2 v-if="num===0">The number is zero {{ num }}</h2>
  <h2 v-else-if="num<0">number is negative {{ num }}</h2>
  <h2 v-else-if="num>0">number is positive {{ num }}</h2>

  <h2 v-else>not a number {{ num }}</h2>
  <!-- div tag creates a block element, while template tag is used for grouping elements without creating an actual DOM element. -->
  <div v-if="display">
    <h2>Hemu</h2>
    <h2>Gowda</h2>
    <h2>HEMANTH</h2>
  </div>
  <template v-if="display">
    <h2>Hemu</h2>
    <h2>Gowda</h2>
    <h2>HEMANTH</h2>
  </template>
  <!-- vshow and v-if are used for conditional rendering in Vue.js.
  v-show toggles the visibility of an element by changing its 
  CSS display property, while v-if conditionally renders the 
  element in the DOM based on the truthiness of the expression. -->
  <h2 v-show="showElement">USING v-show</h2>
  <h2 v-if="showElement">USING v-if</h2>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      num: "HEMU",
      display: true,
      showElement: false,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
