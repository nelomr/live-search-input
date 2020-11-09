<template>
  <div v-if="list.length > 0" class="filter-list">
      <div
        v-for="(item, index) in list"
        :key="'item'+index"
        class="filter--item"
      >
      <label :for="'name'+index" v-html="item"></label>
      <input
        @click="$emit('update:search', $event.target.value)"
        :id="'name'+index"
        type="radio"
        :value="strippedHtml(item)"
      >
    </div>
  </div>
</template>
<script>

export default {
  name: 'FilterList',
  props: {
    list: {
      type: Array,
      defaul: []
    },
    search: {
      type: String,
      default: ''
    }
  },
  setup() {
    function strippedHtml(string) {
      let regex = /(<([^>]+)>)/ig;
      return string.replace(regex, '');
    }

    return { strippedHtml }
  }
}
</script>

<style lang="scss">
  .filter-list {
    max-width: 460px;
    max-height: 280px;
    margin: -1px auto 0;
    overflow: auto;
    background: $light-color;
    border: 1px solid $grey-medium-color;
    border-top: none;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: left;
  }

  .filter--item {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    color: $text-color;
    cursor: pointer;

    label {
      display: block;
      padding: 9px 12px;
      font-family: $primary-font;

      b {
        font-weight: bold;
      }
    }

    input {
      display: none;
    }

    &:first-child {
      background-color: $grey-color;
    }
  }
</style>