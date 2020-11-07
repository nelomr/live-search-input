<template>
  <div class="filter-list">
      <div
        v-for="(item, index) in list"
        :key="'item'+index"
        :value="item.name"
        class="filter--item"
      >
      <label :for="'name'+index" v-html="item.name"></label>
      <input
        @input="$emit('update:search', $event.target.value)"
        :id="'name'+index"
        type="radio"
        :value="item.name"
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
  }
}
</script>

<style lang="scss">
  .filter-list {
    max-width: 460px;
    margin: -1px auto 0;
    background: #FFFFFF;
    border: 1px solid #D2D2D2;
    border-top: none;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: left;
  }

  .filter--item {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    color: #404040;

    label {
      display: block;
      width: 100%;
      padding: 9px 12px;
    }

    input {
      display: none;
    }

    &:first-child {
      background-color: #FAFAFA;
    }
  }
</style>