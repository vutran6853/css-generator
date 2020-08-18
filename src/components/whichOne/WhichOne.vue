<template>
  <div>
    <div class="grid-container">
      <button class="btn-container"
        v-for='value in state.items' 
        v-bind:key='value.id'
        v-on:click='handleRouteTo(value.path)'>
        {{ value.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WhichOne',
  data: function () {
    return {
      state: {
        items: [
          { id: 0, name: 'Box Shadow', path: '/css/boxShadow', isHover: false },
          { id: 1, name: 'Text Shadow', path: '/css/textShadow', isHover: false },
          { id: 2, name: 'Gradient', path: '/css/gradient', isHover: false },
          { id: 3, name: 'CSS cursor', path: '/css/cssCursor', isHover: false },
          { id: 4, name: 'Border', path: '/css/border', isHover: false },
          { id: 5, name: 'Border Radius', path: '/css/borderRadius', isHover: false },
          { id: 6, name: 'Transform', path: '/css/transform', isHover: false },
          { id: 7, name: 'RGBA & Hex Color', path: '/css/rgbaHexColor', isHover: false },
          { id: 8, name: 'Filter', path: '/css/filter', isHover: false },
          { id: 9, name: 'Multiple Columns', path: '/css/multipletColumns', isHover: false }
        ]
      }
    }
  },
  methods: {
    handleRouteTo(urlPath: string) {
      this.$router.push({
        path: urlPath
      })
    }
  }
})
</script>

<style>

.btn-container {
  flex: 1;
  height: 5rem;
  border: 1px solid transparent;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: lightskyblue;
  color: white;
  outline-color: lightskyblue;
}

.btn-container:hover {

  cursor: pointer;
  color: aqua;
}

.grid-container {
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin: auto;
}

.grid-container > .btn-container:nth-child(9) {
  grid-column: 2;
}
</style>