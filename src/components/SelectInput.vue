<template>
  <div class="form-field grid-x">
    <label class="form-label cell small-10 small-offset-1 large-3 large-offset-2">
      {{ name }}:
    </label>

    <div class="cell small-10 small-offset-1 large-4 large-offset-0">
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
          :class="{ active: active, populated: value }"
          @click="toggleActive"
          ref="select"
        >
          {{ value || 'Select' }}
        </div>
        <OverlayScrollbarsComponent
          class="select-items"
          :class="{ active: active, small: items.length <= 2, medium: items.length == 3, large: items.length == 4 }"
          :options="{ scrollbars: { visibility: 'visible' } }"
        >
          <div
            class="item"
            :class="{ active: item == value }"
            v-for="item in items"
            :key="item"
            @click="$emit('input', item); toggleActive"
          >
            {{ item }}
          </div>
        </OverlayScrollbarsComponent>
      </div>
    </div>
  </div>
</template>

<script>
  import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

  export default {
    name: 'SelectInput',
    
    props: {
      name: String,
      items: Array,
      value: String
    },

    components: {
      OverlayScrollbarsComponent
    },

    data() {
      return {
        active: false
      }
    },

    methods: {
      toggleActive() {
        this.active = !this.active
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
    color: #777;
    cursor: default;
    min-height: 43px;
    padding: 10px;
    transition: border-color .4s cubic-bezier(0.22, 1, 0.36, 1);

    &.populated {
      color: $light-neutral;
    }

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
    cursor: default;
    display: none;
    left: 0;
    height: 200px;
    position: absolute;
    padding: 10px;
    right: 0;
    top: 100%;
    z-index: 2;

    &.small {
      height: 100px;
    }

    &.medium {
      height: 140px;
    }

    &.large {
      height: 180px;
    }

    .item {
      cursor: default;
      padding: 10px;

      &.active,
      &:hover {
        background-color: #e1e2de;
      }
    }

    &.active {
      display: block;
    }
  }
</style>
