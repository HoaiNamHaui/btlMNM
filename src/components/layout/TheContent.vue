<template>
  <div class="content active">
    <div class="content__header">
      <div class="content-title title">THỐNG KÊ XE GỬI</div>
      <div class="button-add">
        <button id="btnAdd" class="button button__icon">Thêm xe gửi</button>
      </div>
    </div>
    <div class="content-filter">
      <div class="content-filter-left">
        <div class="content-filter__search">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên"
            class="input__icon"
          />
        </div>
      </div>
      <div class="content-filter-right">
        <div class="icon-refresh"></div>
      </div>
    </div>
    <div class="table-data">
      <table id="tbEmployeeList" class="table">
        <thead>
          <tr>
            <th><input type="checkbox" name="" id="" /></th>
            <!-- <th>ID</th> -->
            <th>CHỦ XE</th>
            <th>SỐ ĐIỆN THOẠI</th>
            <th>NGÀY SINH</th>
            <th>SỐ DƯ</th>
            <th>LOẠI XE</th>
            <th>TÊN XE</th>
            <th>BIỂN SỐ</th>
            <th>NGÀY GỬI</th>
            <th>NGÀY LẤY</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.username">
            <td><input type="checkbox" name="" id="" /></td>
            <td>{{user.own.username}}</td>
            <td>{{user.own.phone}}</td>
            <td>{{user.own.dob}}</td>
            <td style="tex-align: right;">{{user.own.money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}}</td>
            <td>{{user.transport.trans_type}}</td>
            <td>{{user.transport.trans_name}}</td>
            <td>{{user.transport.trans_license}}</td>
            <td>{{user.timeCome}}</td>
            <td>{{user.timeOut}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TheContent",
  components: {},

  data() {
    return {
      users: null,
    };
  },
  methods:{
    fomartDate(date){
          try{
        if(date){
            date = new Date(date);
            let newDate = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            newDate = newDate < 10 ? `0${newDate}` : newDate;
            month = month < 10 ? `0${month}` : month;
            return `${newDate}/${month}/${year}`;
        }
    }
    catch(error)
    {
        console.log(error);
        return "";
    }
    }
  },
  created() {
    try {
      var me = this;
      axios
        .get("https://haidang-guixe.herokuapp.com/api/statistical")
        .then((res) => {
          me.users = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
