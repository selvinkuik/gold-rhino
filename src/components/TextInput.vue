<template>
  <div class="form-field grid-x">
    <label class="form-label cell small-10 small-offset-1 large-3 large-offset-2">
      {{ label }}:
    </label>

    <div
      class="cell small-10 small-offset-1 large-offset-0"
      :class="{ 'large-1': type == 'number', 'large-4': type != 'number' }"
    >
      <div
        v-if="type == 'textarea'"
        class="textarea"
      >
        <textarea
          placeholder="Type here"
          ref="textarea"
          style="height: 165px;"
          :name="name"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>

      <div
        v-else
        class="textinput"
      >
        <span
          v-if="prefix"
          class="prefix"
        >
          {{ prefix }}
        </span>

        <input
          :placeholder="type == 'number' ? '-' : 'Type here'"
          :type="type || 'text'"
          :name="name"
          :value="value"
          @input="handleInput"
          @wheel="$event.target.blur()"
        />

        <span
          v-if="suffix"
          class="suffix"
          ref="suffix"
          :style="{ left: `${suffixLeft}px` }"
        >
          {{ suffix }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import 'overlayscrollbars/css/OverlayScrollbars.css'
  import OverlayScrollbars from 'overlayscrollbars'

  export default {
    name: 'TextInput',
    
    props: {
      label: String,
      name: String,
      prefix: String,
      suffix: String,
      type: String,
      value: String
    },

    data() {
      let canvas = document.createElement('canvas')

      return {
        canvasContext: canvas.getContext('2d'),
        osInstance: null,
        suffixLeft: 18
      }
    },

    mounted() {
      if (this.type == 'textarea') {
        this.osInstance = OverlayScrollbars(this.$refs.textarea, {})
      }
    },

    beforeDestroy() { 
      if (OverlayScrollbars.valid(this.osInstance)) { 
        this.osInstance.destroy()
      }
    },

    methods: {
      getTextWidth(text, font) {
        this.canvasContext.font = font
        let metrics = this.canvasContext.measureText(text)
        return metrics.width
      },

      handleInput(event) {
        if (this.suffix) {
          this.suffixLeft = event.target.value ? this.getTextWidth(event.target.value, '16px Montserrat') + 13 : 18
        }

        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  input,
  .textarea {
    background-color: transparent;
    border: 2px solid #49515A;
    border-radius: 8px;
    color: $light-neutral;
    font: 16px Montserrat;
    padding: 13px;
    transition: border-color .4s cubic-bezier(0.22, 1, 0.36, 1);
    width: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }

    &:focus {
      border-color: $light-neutral;
    }
  }

  .textinput {
    position: relative;

    .prefix {
      color: $light-neutral;
      position: absolute;
      left: 13px;
      top: 15px;

      + input {
        padding-left: 23px;
      }
    }

    .suffix {
      position: absolute;
      top: 15px;
      color: $light-neutral;
      padding-left: 5px;
    }
  }
</style>
