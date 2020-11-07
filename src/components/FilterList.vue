<template>
  <div v-if="list.length > 0" class="filter-list">
    <div 
      v-for="(item, index) in list" 
      :key="'item'+index"
      class="filter--item"
    >
      {{ item.name }}
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
    padding: 9px 12px;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    color: #404040;

    &:first-child {
      background-color: #FAFAFA;
    }
  }
</style>