<template>
  <div>
    <!-- Current Selection -->
    <button ref="button" class="bleu-select" @click="showOptions">
      <img v-if="hasIcon" alt="brazil flag" :src="optionIcon">
      <span>{{value.label}}</span>
      <img alt="arrow down" :src="arrowIcon">
    </button>

    <!-- Options -->
    <div
      class="options-container"
      :class="optionContainerClasses"
      v-click-outside="{ exclude: ['button'], handler: 'hideOptions' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlSelect',
  props: {
    /**
     * If true, the selected object must have a property
     * called image that points to the icon of the selected item
     */
    hasIcon: {
      type: Boolean,
      default: false
    },
    /**
     * Change the default arrow of 
     * the select component
     */
    overrideDefaultArrow: {
      type: String,
      default: 'icon-arrow-down.png'
    },
    /**
     * To support v-model, we need 
     * to add a value prop and notify its change
     * emitting an input event
     */
    value: {
      type: Object
    }
  },
  data() {
    return {
      isActive: false,
      selectedItem: {},
      /**
       * This instance is used on provide method
       * to permit options to update the selected item
       */
      BlSelect: {
        setSelectedItem: this.setSelectedItem
      }
    }
  },
  provide() {
    const BlSelect = this.BlSelect;

    return { BlSelect }
  },
  computed: {
    optionContainerClasses() {
      return {
        'is-active': this.isActive
      }
    },
    arrowIcon() {
      // Note that this require will add all files in the assets folder
      // Create an icon folder to better resource management
      // Or find another way to get this images dynamically
      return require('@/assets/' + this.overrideDefaultArrow)
    },
    optionIcon() {
      console.log('@/assets/' + this.value.icon)
      return require('@/assets/' + this.value.icon)
    }
  },
  methods: {
    showOptions() {
      this.isActive = true;
    },
    hideOptions() {
      this.isActive = false
    },
    setSelectedItem(newItem) {
      this.$emit('input', newItem)
      this.hideOptions()
    }
  }
}
</script>

<style scoped>
.bleu-select {
  display: flex;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: none;
  justify-content: center;
  align-items: center;
}

.bleu-select > span {
  margin: 0 6px;
}

.options-container {
  position: absolute;
  background-color: #1c70ad;
  border-radius: 2px;
  transform: scale(1);
  transition: all 0.2s;
}

.options-container:not(.is-active) {
  transform: scale(0);
}

.options-container > div {
  padding: 10px;
  color: #fff;
  cursor: pointer;
}

.options-container > div:hover {
  background-color: #1c70ff;
}
</style>
