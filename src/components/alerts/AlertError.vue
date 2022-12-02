<template>

    <div v-if="message.length > 0" class="alert alert-dark col-lg-7 m-5" role="alert">
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
