<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-container class="factor-container persian">
            <div>
                <v-layout row wrap>
                    <v-flex xs12 mb5>
                        <div class="page-title">
                            <img
                                    align="right"
                                    alt="Factor logo"
                                    src="./assets/logo_samin_tinter.png"
                                    height="50"
                                    width="50"
                            />
                            <div>
                                <div class="factor-title">
                                    <h1>صورتحساب فروش کالا و خدمات</h1>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-2">
                    <v-flex xs12 mb5>
                        <template>
                            <div v-for="seller in sellers" :key="seller.nom">
                                <v-responsive>
                                    <div class="wrapper">
                                        <div class="right box1 text-large text-bold">فروشنده</div>
                                        <div class="person-Info box2  text-small">
                                            <div class="grid-container">
                                                <div class="item1"> فروشنده : {{ seller.name }} </div>
                                                <div class="item2">شناسه ملی : {{ seller.id }}</div>
                                                <div class="item3">شماره ثبت : {{ seller.regNo }}</div>
                                                <div class="item4">
                                                    شماره اقتصادی : {{ seller.ecoNo }}
                                                </div>
                                                <div class="item5">
                                                    نشانی شرکت : {{ seller.address }}
                                                </div>
                                                <div class="item6">کد پستی : {{ seller.zipcode }}</div>
                                                <div class="item7">تلفن و فکس : {{ seller.faxNo }}</div>
                                            </div>
                                        </div>

                                        <div class="left box3  text-medium text-normal">
                                            تاریخ : ۱۳۹۲/۳/۴<br />شماره فاکتور: {{ clientFactornumber
                                            }}<br />بارکد
                                        </div>
                                    </div>
                                </v-responsive>
                            </div>
                        </template>
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-1">
                    <v-flex xs12 mb5>
                        <template>
                            <div v-for="client in clients" :key="client.nom">
                                <v-responsive>
                                    <div class="wrapper">
                                        <div class="right box1 text-large text-bold">خریدار</div>
                                        <div class="person-Info box2 text-small">
                                            <div class="grid-container">
                                                <div class="item1">
                                                    خریدار : {{ client.firstName }}&nbsp;{{
                                                    client.lastName
                                                    }}
                                                </div>

                                                <div class="item2">شناسه ملی : {{ client.id }}</div>

                                                <div class="item3">شماره ملی : {{ client.id }}</div>

                                                <div class="item4">شماره ثبت : {{ client.code }}</div>

                                                <div class="item5">
                                                    نشانی : {{ client.address }}
                                                </div>

                                                <div class="item6">کد پستی : {{ client.zipcode }}</div>

                                                <div class="item7">
                                                    شماره تماس : {{ client.number }}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="left box3 text-normal text-medium">
                                            شماره پیگیری : {{ trackNumber }}<br />بارکد
                                        </div>
                                    </div>
                                </v-responsive>
                            </div>
                        </template>
                    </v-flex>
                </v-layout>

                <v-layout row wrap justify-center class="mt-2 disable-initial-sort">
                    <!--table with css design-->
                    <div>
                        <table>
                            <thead>
                            <tr class="main">
                                <th class="main">ردیف</th>
                                <th class="main">کد کالا</th>
                                <th class="main device-description">شرح کالا</th>
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
                            <tr v-for="(row, index) in rows" :key="index" class="table-body">

                                <td>{{ index  + 1}}</td>


                                <td>{{ row.deviceCode }}</td>
                                <td><p class="m-1 text-small">{{ row.deviceDescription }}</p></td>


                                <td>{{ row.deviceCount }}</td>
                                <td>{{ row.unitAmount }}</td>
                                <td>{{ row.deviceCount * row.unitAmount}}</td>
                                <td>{{ row.discount }}</td>
                                <td>{{ row.deviceCount * row.unitAmount-row.discount }}</td>
                                <td>{{ row.taxDuty }}</td>
                                <td>{{ row.deviceCount * row.unitAmount-row.discount + row.taxDuty}}</td>

                            </tr>
                            </tbody>

                            <tr class="add">
                                <th colspan="5" class="main ">جمع کل (ریال)</th>
                                <td colspan="1" class="main">{{ sum_prices }}</td>
                                <td colspan="1" class="main">{{ sum_discounts }}</td>
                                <td colspan="1" class="main">{{ sum_prices_after_discount }}</td>
                                <td colspan="1" class="main">{{ sum_taxes }}</td>
                                <td colspan="1" class="main">{{ sum_final_prices }}</td>
                            </tr>
                            <tr class="totals">
                                <th colspan="10" class="description">توضیحات :</th>
                            </tr>

                            <tr>
                                <th colspan="6" class="end">تاریخ تحویل:</th>
                                <th colspan="4" class="end">ساعت تحویل:</th>
                            </tr>
                            <tr>
                                <th colspan="6" class="end">مهر و امضای فروشنده :</th>
                                <th colspan="4" class="end">مهر و امضای گیرنده :</th>
                            </tr>

                        </table>
                    </div>
                </v-layout>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        props: {},

        methods: {
            loadClient(id) {
                return this.loadedClient.filter(client => client.nom === id);
            },
            loadSeller(id) {
                return this.loadedSeller.filter(seller => seller.nom === id);
            }
        },

        computed: {
            clients() {
                return this.loadClient(this.idClient);
            },
            sellers() {
                return this.loadSeller(this.idSeller);
            },
            columns: function columns() {
                if (this.rows.length == 0) {
                    return [];
                }
                return Object.keys(this.rows[0]);
            },
            sum_prices: function() {
                var sum = 0;
                this.rows.forEach(e => {
                    sum +=  e.deviceCount * e.unitAmount;
                });
                return sum;
            },
            sum_discounts: function() {
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.discount;
                });
                return sum;
            },
            sum_prices_after_discount: function() {
                var sum = 0;
                this.rows.forEach(e => {
                    sum +=  e.deviceCount * e.unitAmount-e.discount;
                });
                return sum;
            },
            sum_taxes: function() {
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.taxDuty;
                });
                return sum;
            },
            sum_final_prices: function() {
                var sum = 0;
                this.rows.forEach(e => {
                    sum += e.deviceCount * e.unitAmount-e.discount+e.taxDuty;
                });
                return sum;
            },

        },
        data() {
            return {
                clientFactornumber: Math.floor(Math.random() * 1000000),
                trackNumber: Math.floor(Math.random() * 1000000),
                idClient: "1",
                idSeller: "1",
                loadedClient: [
                    {
                        firstName: "ارش",
                        lastName: "حکیمی",
                        id: "64564564",
                        code: "____",
                        address:
                            "تهران ،تهران، خیابان ولیعصر، بالاتر ار میدان ونک، خیابان عطار، پلاک ۸۷",
                        number: "۰۲۱۶۵۶۷۸۸۷۶",
                        zipcode: "۹۸۹۹۷۵۶۴۷۷",
                        nom: "1"
                    },
                    {
                        firstName: "اسم",
                        lastName: "شهرت",
                        id: "2352353245",
                        code: "____",
                        address:
                            "شیراز ،شیراز، خیابان ولیعصر، بالاتر ار میدان ونک، خیابان عطار، پلاک ۸۷",
                        number: "45675475467",
                        zipcode: "457457",
                        nom: "2"
                    }
                ],
                loadedSeller: [
                    {
                        name: "شرکت هوداک طب",
                        id: "34234234",
                        regNo: "۶۷۸۶۸۹",
                        ecoNo: "۶۷۳۴۰۹۸۵۶۴۳۲",
                        address:
                            "تهران ،تهران ،خیابان کارگر شمالی ،پارک علم و فناوری دانشگاه تهران ",
                        number: "۰۹۳۸۷۶۵۲۹۸۷",
                        zipcode: "۸۹۷۵۹۳۰۵۸۷",
                        faxNo: "۹۰۸۶۳۲۷۵",
                        nom: "1"
                    }
                ],
                rows: [
                    {
                        id: 1,
                        deviceCode: 10001,
                        deviceDescription:
                            "\n" +
                            "چای ساز تفال مدل BJ505D10\n" +
                            "گارانتی 24 ماهه شرکت مهستان\n" +
                            "فروشنده : سروین",
                        deviceCount: 2,
                        unitAmount: 50000,
                        discount: 52000,
                        taxDuty: 0,

                    },
                    {
                        id: 2,
                        deviceCode: 20002,
                        deviceDescription:
                            "ضبط کننده صدا سونی مدل ICD-PX440 - ظرفیت 4 گیگابایت\n" +
                            "سرویس ویژه دیجی کالا: 7 روز تضمین بازگشت کالا\n" +
                            "فروشنده : دیجی‌کالا\n" +
                            "رنگ : مشکی",
                        deviceCount: 3,
                        unitAmount: 450000,
                        discount: 120000,
                        taxDuty: 0,

                    },
                    {
                        id: 3,
                        deviceCode: 30003,
                        deviceDescription:
                            "\n" +
                            "لپ تاپ 15 اینچی لنوو مدل IdeaPad Z5070 - B\n" +
                            "گارانتی 12 ماهه گرین\n" +
                            "فروشنده : دیجی‌کالا\n" +
                            "رنگ : سفید",
                        deviceCount: 3,
                        unitAmount: 435000,
                        discount: 10000,
                        taxDuty: 1000,

                    }
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    .factor-container {
        font-weight: 400;
    }
    .page-title {
        padding-top: 10px;
        padding-bottom: 5px;
        padding-right: 20px;
        padding-left: 20px;
        background-color: #ffffff;
        color: #414141;

    }
    .factor-title {
        font-size: 11px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .person-Info {
        color: #000000;
        padding: 20px;
        text-align: right;
        line-height: 3;
    }
    .grid-container {
        display: grid;
        grid-template-areas:
                "name id1 id2 id3"
                "address address address address"
                "telno telno faxno faxno";
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        background-color: #ffffff;
        padding: 10px;
        text-align: right;
        width: 100%;
    }
    .item1 {
        grid-area: name;
    }
    .item2 {
        grid-area: id1;
    }
    .item3 {
        grid-area: id2;
    }
    .item4 {
        grid-area: id3;
    }
    .item5 {
        grid-area: address;
    }
    .item6 {
        grid-area: telno;
    }
    .item7 {
        grid-area: faxno;
    }

    .wrapper {   /*wraps three boxes*/
        display: flex;
        flew-direction: row;
        align-items: stretch;
        justify-content: flex-start;
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

    th.main {
        background-color: #e8e8e8;
        color: #5c5c5c;
        font-size: 0.9em;
        padding: 1px;
    }
    th.end {
        border: 0px;
        text-align: right;
        padding-bottom: 60px;
        font-size: 0.8em;
        padding-right: 10px;
    }
    th.description {
        border: 1px solid #7c7c7c;
        text-align: right;
        padding-bottom: 60px;
        padding-right: 10px;
        font-size: 0.8em;
    }
    tr.totals {
        border: 2px solid #7c7c7c;
    }
    tr.table-body {
        border-right: 2px solid #7c7c7c;
        border-left: 2px solid #7c7c7c;
    }
    tr.main {
        border-right: 2px solid #7c7c7c;
        border-left: 2px solid #7c7c7c;
        border-top: 2px solid #7c7c7c;
    }

    .device-description {
        width: 30%;
        max-width: 0;
    }


</style>
