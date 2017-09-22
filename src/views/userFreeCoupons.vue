<template>
    <div id = "couponsList">
        <couponCell> </couponCell>
    </div>
</template>

<script>
import couponCell from '../components/coupon_cell.vue'
export default {
    name: "couponsList",
    data () {
        return {
            msg: "cell"
        }
    },
    components: { couponCell }
}
</script>

<style lang="css">



</style>
