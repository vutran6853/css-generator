<template>
  <section id="boxShadow-container">
    <div class="boxShadow-inner-a-container">
      <h3>Box Shadow Options</h3>
      <div>
        <p>Horizontal Shadow Length</p>
        <input type="range" min="-200" max="200" value="0" v-model='state.horizontalShadow.result'/>
        {{state.horizontalShadow.result}}px
      </div>
      <div>
        <p>Vertical Shadow Length</p>
        <input type="range" min="-200" max="200" value="0" v-model='state.verticalShadow.result'/>
        {{state.verticalShadow.result}}px
      </div>
      <div>
        <p>Blur Radius</p>
        <input type="range" min="0" max="400" value="2" v-model='state.blurRadius.result'/>
        {{state.blurRadius.result}}px
      </div>
      <div>
        <p>Spread Radius</p>
        <input type="range" min="-200" max="200" value="0" v-model='state.spreadRadius.result'/>
        {{state.spreadRadius.result}}px
      </div>
      <div>
        <p>Shadow Color Opacity</p>
        <input type="range" min="0" max="100" value="0" v-model='state.shadowColorOpacity.result'/>
        0.{{state.shadowColorOpacity.result}}
        <span >

        </span>
      </div>
      <div>
        <p>Shadow Color</p>
        <input type="color">
      </div>
      <div>
        <p>Insert</p>
        <input type="checkbox"  v-bind:checked='state.inset.isTrue' v-on:click='handleSetInset' />
         <label class="switch">
          <!-- <input type="checkbox"  checked=false > -->
          <!-- <span class="slider"></span> -->
        </label>
      </div>
    </div>

    <div class="boxShadow-inner-b-container">
      <div class="demo-container"
        v-bind:style=' `box-shadow: ${state.horizontalShadow.result}px ${ state.verticalShadow.result }px ${ state.blurRadius.result }px ${ state.spreadRadius.result }px rgba(0,0,0,0.${state.shadowColorOpacity.result}) ${inset ? "inset" : ""};` '>
        demo box
      </div>
      <textarea id="code-container" class="code-container">
        box-shadow: {{ state.horizontalShadow.result }}px {{ state.verticalShadow.result }}px {{ state.blurRadius.result }}px {{ state.spreadRadius.result }}px rgba(0, 0, 0, 0.{{state.shadowColorOpacity.result}}){{inset ? " inset;" : ";"}}
        -webkit-box-shadow: {{ state.horizontalShadow.result }}px {{ state.verticalShadow.result }}px {{ state.blurRadius.result }}px {{ state.spreadRadius.result }}px rgba(0, 0, 0, 0.{{state.shadowColorOpacity.result}}){{inset ? " inset;" : ";"}}
        -moz-box-shadow: {{ state.horizontalShadow.result }}px {{ state.verticalShadow.result }}px {{ state.blurRadius.result }}px {{ state.spreadRadius.result }}px rgba(0, 0, 0, 0.{{state.shadowColorOpacity.result}}){{inset ? " inset;" : ";"}}
      </textarea>
      <input type="textBox" name="" id=""/>
      <button v-on:click='handleCopyToClipboard'>copy</button>
      <button v-on="{ mousedown: doThis, mouseup: doThat }">Lcik</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface IBoxShadow {
  state: {
    horizontalShadow: {
      min: number, start: number, max: number, result: string
    },
    verticalShadow: {
      min: number, start: number, max: number, result: string
    },
    blurRadius: {
      min: number, start: number, max: number, result: string
    },
    spreadRadius: {
      min: number, start: number, max: number, result: string
    },
    shadowColorOpacity: {
      min: number, start: number, max: number, result: string   
    },
    inset: {
      isTrue: boolean, text: string
    }
  }
}

export default Vue.extend({
  name: 'BoxShadow',
  data(): IBoxShadow {
    return {
      state: {
        horizontalShadow: {
          min: 200, start: 0, max: 200, result: '10'
        },
        verticalShadow: {
          min: 200, start: 0, max: 200, result: '10'
        },
        blurRadius: {
          min: 200, start: 0, max: 200, result: '2'
        },
        spreadRadius: {
          min: 200, start: 0, max: 200, result: '0'
        },
        shadowColorOpacity: {
          min: 0, start: 0, max: 100, result: '75'
        },
        inset: {
          isTrue: false, text: ''
        }
      }
    }
  },
  methods: {
    handleSetInset() {
      this.state.inset.isTrue = !this.state.inset.isTrue
    },
    handleCopyToClipboard() {
      let content: any = document.querySelector('#code-container')
      content.select()
      document.execCommand('copy')
    },
    doThis() {
      console.log('mousedown')
    },
    doThat() {
      console.log('mouseup')

    }
  },
  computed: {
    inset: {
      get(): boolean {
        return this.state.inset.isTrue
      },
      set() {
        this.state.inset.isTrue = !this.state.inset.isTrue
      }
    }
  }
})
</script>

<style lang="scss">
$boarderColor: 2px solid red;

#boxShadow-container {
  border: $boarderColor;
  display: flex;
  flex-direction: row;

  > .boxShadow-inner-a-container {
    background-color: yellowgreen;
    width: 50%;
    height: 30rem;

      > div {
        height: 5rem;
        border: $boarderColor;
      }

      
    
  }

  > .boxShadow-inner-b-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    
    > .demo-container {
      background-color: darkorchid;
      height: 15rem;
      width: 30rem;
    }

    > .code-container {
      background-color: lightgray;
      height: 5rem;
      width: 30rem;
    }

    
  }
 
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>