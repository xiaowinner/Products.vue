<template>
<div class = "background">
      <section v-for = "item in coupons" :key = "item.coupon_code" class = "background_image">
        <p class = "coupon_title">{{item.name}}</p>
        <p class = "coupon_time">{{item.deadline}}</p>
        <section class = "bottom_position">
             <p class = "coupon_content">{{item.description}}</p>
             <section style="flex:1;padding-right:15px;padding-top:20px;padding-bottom:10px;">
                <button type="submit" class = "button_position">立即使用</button>
             </section>
        </section>
      </section>
</div>
</template>

<script>
export default {
    name: 'couponCell',
    props: ['coupons']
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
        background-size: 100% 95%;
        background-position: left;
        /* height: 130px; */
        padding: 8px 8px;
    }


    .coupon_title {
        font-size: 16px;
        font-weight: bold;
        color: #3D3D3D;
        text-align: left;
        padding-top: 10px;
        padding-left: 10px;
        margin: 0px;
    }

    .coupon_time {
        font-size: 13px;
        font-weight: 500;
        color: #7F7F7F;
        padding-top: 10px;
        padding-left: 10px;
        margin: 0px;
        text-align: left;
    }

    .bottom_position {
        display: flex;
        margin: 0px;
        flex: 3;
    }

    .coupon_content {
        font-size: 11px;
        color: #B2B2B2;
        padding-top: 25px;
        padding-left: 10px;
        padding-bottom: 10px;
        margin: 0px;
        text-align: left;
        flex: 2;
    }

    .button_position {
        font-size: 13px;
        color: #F6F9F9;
        background-color: #ff761a;
        border-width: 0px;
        width: 78px;
        height: 25px;
        border-radius: 3px;
        float: right;
        margin-right: 10px;
    }

</style>
