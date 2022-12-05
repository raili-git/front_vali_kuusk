<template>

    <div v-if="message.length > 0" class="alert alert-dark col-lg-12 mt-3" role="alert">
      {{message}}
    </div>

</template>
<script>
export default {
  name: 'AlertError',
  props: {
    message: {}
  }
}
</script>
