<template>

    <div id = "firstcomponent">
     <h1>my first vue product</h1>
     <a> 作者：{{ author }} </a>
    </div>

</template>

<script type = "text/javascript">
    export default {
        data() {
            return {
                author: "Larry"
            }
        }
    }

</script>


<style>
</style>
