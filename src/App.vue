<template>
    <div>

        <invoice class="factor"></invoice>

        <Label class="label"></Label>
    </div>
</template>

<script>
    import invoice from './components/invoice';
    import Label from './components/Label';

    export default {
        name: 'App',
        components: {
            invoice,
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