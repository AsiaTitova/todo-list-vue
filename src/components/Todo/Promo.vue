<template>
  <div class="promo__container">
    <h1 class="promo__title">To do list</h1>
    <p class="promo__content">Начни строить планы прямо сейчас</p>
    <icon-base
      class="promo__icon"
      width="110"
      height="110"
      viewBox="0 0 110 110"
      icon-name="promo"><icon-promo /></icon-base>
  </div>
</template>

<script>
  import IconBase from '../Icon/IconBase.vue'
  import IconPromo from "../../assets/img/icons/IconPromo.vue"

  export default {
    name: 'Promo',
    components: {
      IconBase,
      IconPromo
    },
  }
</script>
