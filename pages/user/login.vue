<template>
  <div>
    <div>login</div>
    <nuxt-link to="/">返回</nuxt-link>
  </div>
</template>
<script>
export default {
  name: "login",
  transitions: 'user-login'
};
</script>