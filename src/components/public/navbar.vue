<template>
    <div :class="$style.top">
        <div :class="$style.item">
             <a><router-link to="/goods">商品</router-link></a>
         </div>
        <div :class="$style.item">
            <a><router-link to="/ratings">评论</router-link></a>
        </div>
        <div :class="$style.item">
            <a><router-link to="/seller">商家</router-link></a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" module>
    .top{
        display: flex;
        width: 100%;
        height: 160px;
        line-height: 160px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .item{
            flex: 1;
            text-align: center;
            & > a{
                display: block;
                font-size: 56px;
                color: rgb(77,85,93);
                &.active{
                    color: rgb(240,20,20);
                }
            }
        }
    }
</style>
