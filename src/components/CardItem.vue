<template>
  <div class="item-card">
    <div class=item-card--data>
      <span>Name: </span>{{person.name}}
    </div>
    <div class=item-card--data>
      <span>Height: </span>{{person.height}}
    </div>
    <div class=item-card--data>
      <span>Mass: </span>{{person.mass}}
    </div>
    <div class=item-card--data>
      <span> Hair Color: </span>{{person.hair_color}}
    </div>
    <div class=item-card--data>
      <span>Skin Color: </span>{{person.skin_color}}
    </div>
    <div class=item-card--data>
      <span>Eye Color: </span>{{person.eye_color}}
    </div>
    <div class=item-card--data>
      <span>Birth year: </span>{{person.birth_year}}
    </div>
    <div class=item-card--data>
      <span>Gender: </span>{{person.gender}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: [ 'person']
}
</script>

<style lang="scss">
  .item-card {
    display: flex;
    flex-wrap: wrap;
    max-width: 450px;
    padding: 4px;
    margin: 40px auto 0;
    background: $grey-medium-color;
    border-radius: 4px;
    box-shadow: $shadow;
  }

  .item-card--data {
    flex: 0 0 calc(50% - 22px);
    padding: 10px;
    margin: 0 1px 1px;
    text-align: left;
    background-color: $grey-color;

    span {
      font-weight: bold;
    }
  }
</style>