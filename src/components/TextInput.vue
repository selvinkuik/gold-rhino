<template>
  <div class="grid-x">
    <label class="form-label cell large-3 large-offset-2">
      {{ name }}:
    </label>

    <div class="cell large-4">
      <textarea
        v-if="multiline"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <input
        v-else
        type="text"
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
      multiline: Boolean,
      name: String,
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

    &:focus {
      border-color: $light-neutral;
    }
  }
</style>
