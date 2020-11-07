<template>
  <div class="search--title">Encuentra profesionales de confianza</div>
  <form  @submit.prevent="sendQuery()" class="search--container">
    <input class="search--input" v-model="search" @focus="focus = true" @blur="focus = false" placeholder="Qué necesitas..." type="text">
    
    <div class="search--icon">
      <SearchIcon v-if="!waitingQuery" @click="sendQuery()" class="search--icon-icon" :class="{'is-focus': focus}" />
      <LoaderIcon v-if="waitingQuery" class="search--icon-icon" />
    </div>
  </form>
  <FilterList :list="filteredSearch" />
</template>
<script>
import searchList from "@/api/searchList.js";
import FilterList from "@/components/FilterList";
import SearchIcon from "@/components/icons/SearchIcon";
import LoaderIcon from "@/components/icons/LoaderIcon";
import {computed, ref} from 'vue';

export default {
  name: 'searchInput',
  components: {
    SearchIcon,
    FilterList,
    LoaderIcon
  },
  setup() {
    const queries = ref(searchList);
    const search = ref('');
    const focus = ref(false);
    const waitingQuery = ref(false);

    const filteredSearch = computed(() => {
      if (search.value != '') {
        return queries.value.filter(query => query.name.toLowerCase().includes(search.value.toLowerCase()))
      }
      return [];
    });

    function sendQuery() {
      if (search.value != '') {
        //call search ajax o POST with parameter search
        waitingQuery.value = true;
      }

    }
    
    return { queries, search, focus, filteredSearch, waitingQuery, sendQuery }
  }
}
</script>

<style lang="scss">
  .search--title {
    margin-bottom: 8px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
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
    background: #FFFFFF;
    border: 1px solid #D2D2D2;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    transition: background .3s ease, border .3s ease;

    &:hover {
      background: #FAFAFA;
      border: 1px solid #9B9B9B;
    }

    &:focus {
      border: 1px solid #FF7300;
      box-shadow: 0px 0px 8px rgba(255, 115, 0, 0.2);
    }
  }

  .search--icon {
    position: relative;
    width: 24px;
    height: 24px;
    margin-left: -40px;

    path {
      transition: stroke .3s ease;
    }

    &.is-focus path {
      stroke: #FF7300;
    }
  }

  .search--icon-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>