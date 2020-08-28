import Vue from 'vue'

import './textShadow.scss'

interface ITextShadow {
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


const TextShadow = Vue.extend({
  name: 'TextShadow',
  data(): ITextShadow {
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
  render() {
    return (
      <section id="textShadow-container">
        <div class="textShadow-inner-a-container">
          <h3>Text Shadow Options</h3>
          <div>
            <p>Horizontal Shadow Length</p>
            {/* <input type="range" min="-200" max="200" value="0" v-model='state.horizontalShadow.result' /> */}
            {/* {{state.horizontalShadow.result}}px */}
          </div>
          <div>
            <p>Vertical Shadow Length</p>
            {/* <input type="range" min="-200" max="200" value="0" v-model='state.verticalShadow.result' /> */}
            {/* {{state.verticalShadow.result}}px */}
          </div>
          <div>
            <p>Blur Radius</p>
            {/* <input type="range" min="0" max="400" value="2" v-model='state.blurRadius.result' /> */}
            {/* {{state.blurRadius.result}}px */}
          </div>
          <div>
            <p>Spread Radius</p>
            {/* <input type="range" min="-200" max="200" value="0" v-model='state.spreadRadius.result' /> */}
            {/* {{state.spreadRadius.result}}px */}
          </div>
          <div>
            <p>Shadow Color Opacity</p>
            {/* <input type="range" min="0" max="100" value="0" v-model='state.shadowColorOpacity.result' /> */}
            {/* 0.{{state.shadowColorOpacity.result}} */}
            <span >

            </span>
          </div>
          <div>
            <p>Shadow Color</p>
            {/* <input type="color"/> */}
          </div>
          <div>
            <p>Insert</p>
            {/* <input type="checkbox"  v-bind:checked='state.inset.isTrue' v-on:click='handleSetInset' /> */}
            {/* <label class="switch"> */}
            {/* </label> */}
          </div>
        </div>

        <div class="textShadow-inner-b-container">
          <div class="demo-container">
            demo box
          </div>
          <textarea id="code-container" class="code-container">
          </textarea>
          <input type="textBox" name="" id=""/>
          {/* <button onclick={this.handleCopyToClipboard}>copy</button> */}
        </div>
        
      </section>
    )
  }
})

export default TextShadow