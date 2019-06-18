<template>
    <div class="app-simulator">

        <HelloWorld class="factor"></HelloWorld>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data () {
            return {
                //
            }
        }
    }
</script>

<style lang="scss" scoped>

   .factor {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: right;
        color: #2c3e50;
        margin-top: 30px;
        background: #ffffff;

    }



</style>