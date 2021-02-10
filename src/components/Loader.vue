<template>
  <div class="loader">
    <icon-base
        class="loader__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        icon-name="loader"><icon-loader /></icon-base>
  </div>
</template>

<script>
import IconBase from "./IconBase.vue"
import IconLoader from "../assets/img/icons/IconLoader.vue"

export default {
  name: "Loader",
  components: {
      IconBase,
      IconLoader
    }
}

</script>
