<template>
  <div class="search--title">Encuentra profesionales de confianza</div>
  <form  @submit.prevent="sendQuery()" class="search--container">
    <input 
      class="search--input" 
      v-model="search" :class="{'is-focus': search.length > 0}" 
      @focus="focus = true" 
      @blur="focus = false" 
      placeholder="Qué necesitas..." 
      type="text"
    >

    <div class="search--icon">
      <SearchIcon 
        v-if="!waitingQuery" 
        @click="sendQuery()" class="search--icon-icon" 
        :class="{'is-focus': 
        focus || search.length > 0}" 
      />
      <LoaderIcon 
        v-if="waitingQuery" 
        class="search--icon-icon" 
      />
    </div>
  </form>
  <FilterList v-model:search="search" :list="transformSearch" />
</template>
<script>
import { initApi } from "@/api/dummyApi.js";
import FilterList from "@/components/FilterList";
import SearchIcon from "@/components/icons/SearchIcon";
import LoaderIcon from "@/components/icons/LoaderIcon";
import {computed, ref, onMounted} from 'vue';

export default {
  name: 'searchInput',
  components: {
    SearchIcon,
    FilterList,
    LoaderIcon
  },
  setup() {
    const queries = ref([]);
    const search = ref('');
    const focus = ref(false);
    const waitingQuery = ref(false);

    onMounted(() => {
      initApi().then((result) => {
        queries.value = result;
      })
    });

    const filteredSearch = computed(() => {
      if (search.value != '') {
        return queries.value.filter(
          query => query.name.toLowerCase().includes(search.value.toLowerCase()));
      }
      return [];
    });

    const transformSearch = computed(() => {
      return filteredSearch.value.map(
          query => query.name.toLowerCase()
          .replace(search.value.toLowerCase(), `<strong>${search.value}</strong>`));
    });

    function sendQuery() {
      if (search.value != '' && filteredSearch.value.length > 0) {
        //call search ajax o POST with parameter search
        waitingQuery.value = true;
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }
    
    return { queries, search, focus, filteredSearch, waitingQuery, sendQuery, transformSearch }
  }
}
</script>

<style lang="scss">
  .search--title {
    max-width: 460px;
    margin: 0 auto;
    margin-bottom: 8px;
    font-family: $primary-font;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: $title-color;
    text-align: left;
  }

  .search--container {
    display: flex;
    align-items: center;
    max-width: 460px;
    margin: 0 auto;
  }

  .search--input {
    width: 100%;
    min-height: 22px;
    padding: 12px 44px 12px 14px;
    font-family: $primary-font;
    background: $light-color;
    border: 1px solid $grey-medium-color;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    transition: background .3s ease, border .3s ease;

    &:hover {
      background: $grey-color;
      border: 1px solid $grey-dark-color;
    }

    &:focus,
    &.is-focus {
      border: 1px solid $orange-color;
      box-shadow: $shadow;
    }
  }

  .search--icon {
    position: relative;
    width: 24px;
    height: 24px;
    margin-left: -40px;
  }

  .search--icon-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    path {
      transition: stroke .3s ease;
    }

    &.is-focus path {
      stroke: $orange-color;
    }
  }
</style>