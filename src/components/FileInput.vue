<template>
  <div class="grid-x">
    <label class="form-label cell large-3 large-offset-2">
      {{ name }}:
    </label>

    <div class="cell large-4">
      <input
        class="file-input"
        ref="fileInput"
        type="file"
        :id="`file-input-${_uid}`"
        @input="$emit('input', $event.target.files[0])"
      />

      <label :for="`file-input-${_uid}`">
        <div class="file-input-name">
          {{ fileName }}
        </div>
        <div class="file-input-button">
          BROWSE
        </div>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileInput',
    
    props: {
      name: String
    },

    data() {
      return {
        fileName: ''
      }
    },

    mounted() {
      this.$refs.fileInput.addEventListener('change', (e) => {
        let fileName = e.target.value.split( '\\' ).pop()
        this.fileName = fileName
      })
    }
  }
</script>

<style lang="scss" scoped>
  .file-input {
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 0.1px;
    z-index: -1;

    + label {
      border: 2px solid #49515A;
      border-radius: 8px;
      color: $light-neutral;
      display: flex;

      .file-input-name {
        display: inline-block;
        flex-grow: 1;
        min-height: 39px;
        overflow: hidden;
        padding: 10px;
        text-overflow: ellipsis;
        vertical-align: top;
        white-space: nowrap;
      }

      .file-input-button {
        align-items: center;
        background-color: $light-neutral;
        border-radius: 6px;
        color: $dark-neutral;
        cursor: pointer;
        display: flex;
        font: 8px Termina;
        justify-content: center;
        letter-spacing: 1px;
        width: 100px;
      }
    }

    &:focus + label {
      border-color: $light-neutral;
    }
  }
</style>
