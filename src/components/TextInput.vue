<template>
  <div class="grid-x">
    <label class="form-label cell small-10 small-offset-1 large-3 large-offset-2">
      {{ name }}:
    </label>

    <div
      class="cell small-10 small-offset-1 large-offset-0"
      :class="{ 'large-1': type == 'number', 'large-4': type != 'number' }"
    >
      <textarea
        v-if="type == 'textarea'"
        placeholder="Type here"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
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
  export default {
    name: 'TextInput',
    
    props: {
      name: String,
      type: String,
      value: String
    }
  }
</script>

<style lang="scss" scoped>
  input,
  textarea {
    background-color: transparent;
    border: 2px solid #49515A;
    border-radius: 8px;
    color: #F8F7F1;
    font: 16px Montserrat;
    padding: 10px;
    resize: none;
    transition: border-color .4s cubic-bezier(0.19, 1, 0.22, 1);
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
