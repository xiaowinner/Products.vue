<template>
    <div id = "couponsList">
         <ul class = "list">
             <couponCell :coupons="coupons"> </couponCell>
        </ul>
        <mugen-scroll v-if = "loadShow" :handler="loadMore" :should-handle="!loading">
         loading...
        </mugen-scroll>
    </div>
</template>


<script>
import couponCell from '../components/couponCell.vue'
import axios from 'axios'
import MugenScroll from 'vue-mugen-scroll'

export default {
    name: "couponsList",
    data () {
        return {
            msg: "cell",
            loading: false,
            currentPage: 1,
            coupons: [],
            loadShow: true
        }
    },
    components: { couponCell,MugenScroll },
    methods: {

        loadMore() {
            if (this.loadShow === true) {

                if (this.loading === false) {

                    let originData = this.coupons
                    this.loading = true
                    var url = 'https://api.beta.jojotu.cn/v1/user/coupons?api_token=MU5DfnSwdjMRj7X3VdM9fhZfjcx1olxJIMhyNynQMaza69SCqaPXzxbUmAol&page=' + this.currentPage.toString();
                    console.log(url);
                    axios.get(url)
                    .then(response => {
                        this.loading = false
                        if (response.data.errcode === 0) {
                        console.log(response.data);
                        if (response.data.data.length === 0) {
                            this.loadShow = false;
                        }
                        this.coupons = originData.concat(response.data.data);
                        this.currentPage += 1;
                        }
                    }).catch(error => {

                    }) 
                }

            }
        }
    },
    mounted() {
      document.title = "我的免单券"
    }
}
</script>


<style lang="css">

.list {
    height: 100%;
    margin: 0px;
}

</style>
