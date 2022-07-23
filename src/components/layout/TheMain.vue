<template>
   <div class="main">
        <TheMenu />
        <TheContent />
   </div>
</template>


<script>
    import TheMenu from "../layout/TheMenu.vue"
    import TheContent from "../layout/TheContent.vue"

    export default{
        name: "TheMain",
        components:{
            TheMenu,
            TheContent,
        }
    }
</script>

<style></style>