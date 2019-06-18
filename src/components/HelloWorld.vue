<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>


    <v-container>
        <div>
        <v-layout row wrap>
            <v-flex xs12 mb5>
                <div class="headtitle">
                <img align="right" alt="Vue logo" src="./assets/logo_samin_tinter.png" height="80" width="80"></img>
                <div>
                    <div class="title">
                        <h1>صورتحساب فروش کالا و خدمات</h1>
                    </div>

                </div>
                </div>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-5">
            <v-flex  xs12 mb5>

                <template>
                    <div v-for="seller in sellers"  :key="seller.nom">
                            <v-responsive>
                                    <div class="wrapper">
                                    <div class="right box1 text-xlarge text-bold">فروشنده</div>
                                    <div class="sellerInfo box2  text-normal">
                                        <div class="grid-container">
                                    <div class="item1">فروشنده : {{seller.name}}</div>
                                    <div class="item2">   شناسه ملی : {{seller.id}}</div>
                                    <div class="item3">   شماره ثبت : {{seller.regNo}}</div>
                                    <div class="item4">   شماره اقتصادی : {{seller.ecoNo}}</div>
                                    <div class="item5">نشانی شرکت : {{seller.address}}</div>
                                    <div class="item6">کد پستی : {{seller.zipcode}} </div>
                                    <div class="item7">تلفن و فکس : {{seller.faxNo}}</div>
                                        </div>
                                        </div>

                                        <div class="left box3  text-large text-medium ">تاریخ : ۱۳۹۲/۳/۴<br>شماره فاکتور: {{clientFactornumber}}<br>بارکد</div>

                                    </div>
                            </v-responsive>
                    </div>
                </template>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-1">
            <v-flex  xs12 mb5>
                <template>
                    <div  v-for="client in clients"  :key="client.nom">

                            <v-responsive>

                                    <div class="wrapper">
                                        <div class="right box1 text-xlarge text-bold">خریدار</div>
                                        <div class="sellerInfo box2 text-normal">
                                            <div class="grid-container">

                                            <div class="item1">خریدار : {{client.firstName}}&nbsp;{{client.lastName}}</div>

                                             <div class="item2">شناسه ملی : {{client.id}}</div>

                                             <div class="item3">شماره ملی : {{client.id}}</div>

                                            <div class="item4">شماره ثبت : {{client.code}}</div>

                                             <div class="item5">نشانی شرکت : {{client.address}}</div>

                                             <div class="item6">کد پستی : {{client.zipcode}}</div>

                                             <div class="item7">شماره تماس : {{client.number}}</div>
                                            </div>

                                            </div>

                                        <div class="left box3 text-large text-medium">شماره پیگیری : {{trackNumber}}<br>بارکد</div>
                                    </div>

                            </v-responsive>

                    </div>
                </template>
            </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="mt-4 disable-initial-sort">


            <!--table with css design-->
            <div>
                <table>
                    <thead>
                    <tr class="main">
                        <th class="main">ردیف</th>
                        <th class="main">کد کالا</th>
                        <th class="main a">شرح کالا</th>
                        <th class="main">تعداد</th>
                        <th class="main">مبلغ واحد (ریال)</th>
                        <th class="main">مبلغ کل (ریال)</th>
                        <th class="main">تخفیف (ریال)</th>
                        <th class="main">مبلغ کل پس از تخفیف (ریال)</th>
                        <th class="main">جمع مالیات و عوارض (ریال)</th>
                        <th class="main">مبلغ کل نهایی (ریال)</th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="row in rows" class="bodytable">
                        <td v-for="col in columns">{{row[col]}}</td>
                    </tr>
                    </tbody>
                    <thead>
                    <tr class="add">
                        <th colspan="5" class="main">جمع کل (ریال)</th>
                        <td colspan="1" class="main">{{getTotalamount}}</td>
                        <td colspan="1" class="main">{{getTotaldiscount}}</td>
                        <td colspan="1" class="main">{{totalAfterdiscount}}</td>
                        <td colspan="1" class="main">{{totalTaxduty}}</td>
                        <td colspan="1" class="main">{{totalAmountfinal}}</td>

                    </tr>
                    <tr class="add">
                        <th colspan="10" class="description"> توضیحات : </th>

                    </tr>

                    <tr>

                        <th colspan="6"class="one">تاریخ تحویل:</th>
                        <th colspan="4"class="one">ساعت تحویل:</th>

                    </tr>
                    <tr>
                        <th colspan="6" class="one">مهر و امضای فروشنده : </th>
                        <th colspan="4"class="one">مهر و امضای گیرنده : </th>
                    </tr>


                    </thead>

                </table>


            </div>
        </v-layout>

        </div>

    </v-container>




    </div>
</template>







<script>


    export default {
        props:{

        },

        methods: {
            loadClient(id) {
                return this.loadedClient.filter(client => client.nom === id)
            },
            loadSeller(id) {
                return this.loadedSeller.filter(seller => seller.nom === id)
            },

        },


        computed:{
            clients () {
                return this.loadClient(this.idClient)
            },
            sellers () {
                return this.loadSeller(this.idSeller)
            },
            "columns": function columns() {
                if (this.rows.length == 0) {
                    return [];
                }
                return Object.keys(this.rows[0])
            },
            getTotalamount: function(){
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.totalAmount;
                });
                return sum
            }            ,
            getTotaldiscount: function(){
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.discount;
                });
                return sum
            },
            totalAfterdiscount: function(){
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.amountAfterdiscount;
                });
                return sum
            },
            totalTaxduty: function(){
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.taxDuty;
                });
                return sum
            },
            totalAmountfinal: function(){
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.amountFinal;
                });
                return sum
            },
            totalAmount: function(){
                var amount = 0;
                this.rows.forEach(e => {
                    amount = e.deviceCount * e.unitAmount;
                });
                return amount
            }

        },
        data () {
            return {
                clientFactornumber: Math.floor(Math.random()*1000000),
                trackNumber: Math.floor(Math.random()*1000000),
                idClient:'1',
                idSeller:'1',
                loadedClient:[
                    { firstName:'ارش',
                        lastName:'حکیمی',
                        id:'۶۹۴۴۵۳۶۷۸۹',
                        code: '____',
                        address:'تهران ،تهران، خیابان ولیعصر، بالاتر ار میدان ونک، خیابان عطار، پلاک ۸۷',
                        number:'۰۲۱۶۵۶۷۸۸۷۶',
                        zipcode :'۹۸۹۹۷۵۶۴۷۷',
                        nom:'1'
                    },
                    { firstName:'اسم',
                        lastName:'شهرت',
                        id:'۶۹۴۴۵۳۶۳۴۵',
                        code: '____',
                        address:'شیراز ،شیراز، خیابان ولیعصر، بالاتر ار میدان ونک، خیابان عطار، پلاک ۸۷',
                        number:'۰۲۱۶۵۶۷۸۸۷۶',
                        zipcode :'۹۸۹۹۷۵۶۴۳۴',
                        nom:'2'
                    }
                ],
                loadedSeller:[
                    { name:'شرکت هوداک طب',
                        id:'۱۰۵۶۴۵۳۴۳۲',
                        regNo: '۶۷۸۶۸۹',
                        ecoNo:'۶۷۳۴۰۹۸۵۶۴۳۲',
                        address :'تهران ،تهران ،خیابان کارگر شمالی ،پارک علم و فناوری دانشگاه تهران ',
                        number:'۰۹۳۸۷۶۵۲۹۸۷',
                        zipcode:'۸۹۷۵۹۳۰۵۸۷',
                        faxNo:'۹۰۸۶۳۲۷۵',
                        nom:'1'
                    }
                ],
                rows:[
                        {
                            id: 1,
                            deviceCode: 10001,
                            deviceDescription: '\n' +
                                'چای ساز تفال مدل BJ505D10\n' +
                                'گارانتی 24 ماهه شرکت مهستان\n' +
                                'فروشنده : سروین',
                            deviceCount:2,
                            unitAmount: 10,
                            totalAmount: 2,
                            discount: 0,
                            amountAfterdiscount: 0,
                            taxDuty: 0,
                            amountFinal: 0

                        },
                        {
                            id: 2,
                            deviceCode: 20002,
                            deviceDescription: 'ضبط کننده صدا سونی مدل ICD-PX440 - ظرفیت 4 گیگابایت\n' +
                                'سرویس ویژه دیجی کالا: 7 روز تضمین بازگشت کالا\n' +
                                'فروشنده : دیجی‌کالا\n' +
                                'رنگ : مشکی',
                            deviceCount:3,
                            unitAmount: 0,
                            totalAmount: 5,
                            discount: 0,
                            amountAfterdiscount: 0,
                            taxDuty: 0,
                            amountFinal: 0

                        },
                        {
                            id: 3,
                            deviceCode: 30003,
                            deviceDescription: '\n' +
                                'لپ تاپ 15 اینچی لنوو مدل IdeaPad Z5070 - B\n' +
                                'گارانتی 12 ماهه گرین\n' +
                                'فروشنده : دیجی‌کالا\n' +
                                'رنگ : سفید',
                            deviceCount: 3,
                            unitAmount: 0,
                            totalAmount: 4,
                            discount: 0,
                            amountAfterdiscount: 0,
                            taxDuty: 0,
                            amountFinal: 0

                        }
                    ],

            }
        },



    }

</script>






<style lang="scss">

    .title {
        background-color: #ffffff;
        color: #414141;
        padding: 20px;
        text-align: center;
        padding-top: 30px;




    }
    .sellerInfo{
        color: #000000;
        padding: 20px;
        text-align: right;
        line-height: 3;
    }
    .grid-container {
        display: grid;
        grid-template-areas:
        'name id1 id2 id3'
        'address address address address'
        'telno telno faxno faxno';
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #ffffff;
        padding: 10px;
        text-align: right;
        width: 100%;
    }
    .item1 { grid-area: name;  }
    .item2 { grid-area: id1; }
    .item3 { grid-area: id2; }
    .item4 { grid-area: id3; }
    .item5 { grid-area: address;}
    .item6 { grid-area: telno;}
    .item7 { grid-area: faxno;}

    .wrapper {
        display: flex;
        flew-direction : row;
        align-items: stretch;
        justify-content: flex-start;

    }
    .left, .right {

    }
    .right {

    }

    .box1 {
        display: flex;

        align-items: center; /* Center content vertically */
        justify-content: center; /* Center content horizontally */
        width: 5%;
        margin: 5px 2px;
        background: #e8e8e8;
        color: #5c5c5c;
        text-align: center;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        border: 2px solid #7c7c7c;
        min-width: 0px;
    }
    .box2 {
        display: flex;
        align-items: center; /* Center content vertically */
        justify-content: right; /* Center content horizontally */
        width: 75%;
        margin: 5px 2px;
        background: #ffffff;
        color: #000000;
        line-height: 1.8;
        flex-wrap: wrap; /* Allow multiple lines */
        border: 2px solid #7c7c7c;
        min-width: 0px;
        padding-bottom: 1px;
        padding-top: 1px;
    }
    .box3 {
        display: flex;
        align-items: center; /* Center content vertically */
        justify-content: center; /* Center content horizontally */
        width: 20%;
        margin: 5px 2px;
        background: #ffffff;
        color: #000000;
        text-align: center;
        line-height: 1.6;
        flex-wrap: wrap; /* Allow multiple lines */
        border: 2px solid #7c7c7c;
        min-width: 0px;
    }
    td, th {
        border: 1px solid #7c7c7c;
        text-align: center;
        padding: 0px;

    }

    table {
        align-self: center;
        border-collapse: collapse;
        width: 100%;
        line-height: 1.833;
        background-color: #ffffff;


    }

    th.main{
        background-color: #e8e8e8;
        color: #5c5c5c;
        font-size: 1.1em;

    }
    th.one{
        border: 0px;
        text-align: right;
        padding-bottom: 60px;
        font-size: 1.2em;
        padding-right: 10px;
    }
    th.description{
        border: 1px solid #7c7c7c;
        text-align: right;
        padding-bottom: 60px;
        padding-right: 10px;
        font-size: 1.2em;
    }
    tr.add{
        border: 3px solid #7c7c7c;

    }
    tr.bodytable{
        border-right: 3px solid #7c7c7c;
        border-left: 3px solid #7c7c7c;

    }
    tr.main{
        border-right: 3px solid #7c7c7c;
        border-left: 3px solid #7c7c7c;
        border-top: 3px solid #7c7c7c;
    }
    .headtitle{
        font-size: 2em;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .a
    {
        width: 30%;
        max-width: 0;
    }



</style>