<template>
  <nav id="nav-container">
    <h1>CSS Generator Tool</h1>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
  data: function () {
    return {
      state: {

      }
    }
  }
})
</script>

<style lang="scss">

#nav-container {
  background-color: #e7e7e7;
  width: 95%;
  margin: auto;
  padding: 1rem;
  box-shadow: 2px 5px #f8f8f8;
  color: rebeccapurple;
}
#nav-container > h1 {
  font-weight: 400;
}
</style>