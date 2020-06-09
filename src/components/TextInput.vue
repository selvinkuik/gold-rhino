<template>
  <div class="form-field grid-x">
    <label class="form-label cell small-10 small-offset-1 large-3 large-offset-2">
      {{ name }}:
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
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>

      <input
        v-else
        :placeholder="type == 'number' ? '-' : 'Type here'"
        :type="type || 'text'"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
  import 'overlayscrollbars/css/OverlayScrollbars.css'
  import OverlayScrollbars from 'overlayscrollbars'

  export default {
    name: 'TextInput',
    
    props: {
      name: String,
      type: String,
      value: String
    },

    data() {
      return {
        osInstance: null
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
    }
  }
</script>

<style lang="scss" scoped>
  input,
  .textarea {
    background-color: transparent;
    border: 2px solid #49515A;
    border-radius: 8px;
    color: #F8F7F1;
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
</style>
