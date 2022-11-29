<template>
  <div>
    商品详情
  </div>
</template>
<script>
// 本页面路由  /detail/:id
export default {
  name: "detail",
  validate({params}) {
    console.log('-->',params);
    return /^\d+$/.test(params.id)
  }
};
</script>