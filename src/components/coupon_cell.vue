<template>
  <div id = "couponCell" class = "background">
      <section class = "background_image">
          <section>
              
          </section>
      </section>
  </div>
</template>

<script>
export default {
    name: 'couponCell',
}

</script>

<style lang="css">

    .background {
        background-color: #F6F9F9;
        height: 100%;
        width: 100%;
    }

    .background_image {
        background-image: url('../assets/coupon_background.png');
        background-repeat:no-repeat;
        background-size: 100% 100%;
        background-position: center;
    }


    .coupon_title {
        font: italic medium 20px;
        color: #3D3D3D;
    }

    .coupon_time {
        font: italic 13px;
        color: #7F7F7F;
    }

    .coupon_content {
        font: italic 11px;
        color: #B2B2B2;
    }

    .button_font {
        font: italic 13px;
        color: #F6F9F9;
    }

</style>
