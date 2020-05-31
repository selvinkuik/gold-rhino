<template>
  <div class="grid-x">
    <label class="form-label cell large-3 large-offset-2">
      {{ name }}:
    </label>

    <div class="cell large-4">
      <div class="styled-select">
        <select @input="$emit('input', $event.target.value)">
          <option value=""></option>
          <option
            v-for="item in items"
            :key="item"
            :value="item"
            :selected="value == item"
          >
            {{ item }}
          </option>
        </select>

        <div
          class="select-selected"
          :class="{ active: active }"
          @click="active = !active"
          ref="select"
        >
          {{ value }}
        </div>
        <div
          class="select-items"
          :class="{ active: active }"
        >
          <div
            v-for="item in items"
            :key="item"
            @click="$emit('input', item); active = !active"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectInput',
    
    props: {
      name: String,
      items: Array,
      value: String
    },

    data() {
      return {
        active: false
      }
    },

    mounted() {
      this.onMouseClick = (e) => {
        if (e.target != this.$refs.select) {
          this.active = false
        }
      }
      window.addEventListener('click', this.onMouseClick)
    },

    beforeDestroy() { 
      window.removeEventListener('click', this.onMouseClick) 
    }
  }
</script>

<style lang="scss" scoped>
  .styled-select {
    position: relative;

    select {
      display: none;
    }
  }

  .select-selected {
    border: 2px solid #49515A;
    border-radius: 8px;
    color: $light-neutral;
    cursor: default;
    min-height: 43px;
    padding: 10px;
    transition: border-color .4s cubic-bezier(0.19, 1, 0.22, 1);

    &:after {
      border: 6px solid transparent;
      border-color: #fff transparent transparent transparent;
      content: ' ';
      height: 0;
      margin-top: -3px;
      position: absolute;
      right: 10px;
      top: 50%;
      width: 0;
    }
  }

  .select-items {
    background-color: $light-neutral;
    border-radius: 8px;
    display: none;
    left: 0;
    margin-top: -33px;
    position: absolute;
    padding: 10px;
    right: 0;
    top: 100%;
    z-index: 1;

    div {
      cursor: default;
      padding: 10px;

      &:hover {
        background-color: #e1e2de;
      }
    }

    &.active {
      display: block;
    }
  }
</style>
