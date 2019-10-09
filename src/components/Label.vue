<template>
    <v-container class="persian">
        <v-layout row wrap justify-center class="mt-2 disable-initial-sort">

            <div class="label-box">
                <table>
                    <thead>
                    <tr>
                        <th colspan="3" rowspan="2"  class="label-header">
                            <div>
                                <img
                                        align="right"
                                        alt="Factor logo"
                                        src="./assets/logo_samin_tinter.png"
                                        height="50"
                                        width="50"
                                        hspace="100"
                                />
                                <img
                                        align="left"
                                        alt="Factor logo"
                                        src="./assets/logo_samin_tinter.png"
                                        height="50"
                                        width="50"
                                        hspace="100"
                                />

                                <div class="label-header-text text-large">
                                    فروشگاه اینترنتی ثمین

                                </div>

                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colspan="1" rowspan="3" class="text-large">
                            <qr-code
                                    text="https://samin.io/"
                                    :size="150"
                                    class="pr-3 pt-2">

                            </qr-code>
                            <div class="pt-3">QRcode</div>
                        </td>
                        <td colspan="2" class="item-setting">
                            <div v-for="seller in sellers" :key="seller.nom">
                                <div> فروشنده : {{ seller.name }} </div>
                                <div>نشانی :  {{ seller.address }}</div>
                                <div class="inline pl-5">کد پستی : {{ seller.zipcode }}</div>
                                <div class="inline">تلفن : {{ seller.faxNo }}</div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td colspan="2" rowspan="1" class="item-setting">
                            <div  v-for="client in clients" :key="client.nom">
                                <div>گیرنده : {{ client.firstName }}&nbsp;{{
                                    client.lastName
                                    }}</div>
                                <div>نشانی : {{ client.address }}</div>
                                <div class="inline pl-5">کد پستی : {{ client.zipcode }}</div>
                                <div class="inline">تلفن : {{ client.number }}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1">
                            وضعیت فاکتور</td>
                        <td colspan="1">فقره</td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="2">نحوه ارسال : express</td>
                        <td colspan="1"><v-icon class="pr-0" >departure_board</v-icon>
                            زمان</td>
                        <td colspan="1"><v-icon class="pr-0" >date_range</v-icon>
                            تاریخ</td>


                    </tr>
                    <tr>
                        <td colspan="1"><v-icon class="pr-0" >money</v-icon>
                            نحوه پرداخت</td>
                        <td colspan="1"><v-icon class="pr-0" >location_on</v-icon>
                            THR/MFT</td>

                    </tr>
                    <tr>
                        <td colspan="1" rowspan="2" class="text-bold end-row">کد مرسوله : <br />{{idConsignment}}</td>
                        <td colspan="2" rowspan="2">
                            <barcode
                                    :value="clientFactornumber"
                                    height = "50"
                                    width = "3"
                                    display-value = false>
                                Show this if the rendering fails.
                            </barcode>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>

        </v-layout>
    </v-container>
</template>



<script>

    export default {
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
        },

        data() {
            return {
                clientFactornumber: Math.floor(Math.random() * 1000000),
                trackNumber: Math.floor(Math.random() * 1000000),
                idClient: "1",
                idSeller: "1",
                idConsignment: "1244243254546",


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
    .box-container{
        text-align: center;
    }
    .label-box {
        display: inline-block;
        border-radius: 1em 1em;
        width: 600px;
        height: 500px;
        border: 2px solid black;
    }
    table {

        border-collapse: collapse;
        border-spacing: 0;
        width: 95%;
        height: 95%;
        line-height: 1.6;
        background-color: #ffffff;
        margin : auto;
        margin-top: 12px;
        margin-bottom: 12px;
        table-layout: fixed;

    }
    .label-header{

        padding: 15px;
    }
    .label-header-text{
        padding-top: 16px;
    }
    td, th {
        border: 1px solid #7c7c7c;
        text-align: center;
        padding: 0px;
        border-spacing: 0;
        border-collapse: collapse;
    }
    tbody { border: 1px solid #2f96b4}
    .image-set{
        padding: 20px;

    }
    td.item-setting{
        text-align: right;
        padding-right: 10px;
    }
    div.inline{
        display: inline;
        float: right;
    }
    td.end-row{
        border-left-color : white;
    }




</style>