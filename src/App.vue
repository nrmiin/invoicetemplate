<template>
    <div>

        <HelloWorld class="factor"></HelloWorld>

        <Label class="label"></Label>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld';
    import Label from './components/Label';

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Label,
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
   .label {
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       text-align: right;
       color: #2c3e50;
       margin-top: 30px;
       background: #ffffff;

   }

</style>