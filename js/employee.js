$(document).ready(function(){
    initEvent();
    
});



/**
 * Tạo sự kiện cho các thành phần
 * Author NHNam (05/07/2022)
 */
function initEvent(){
    //1.Nhấn thêm mới để hiện thị form nhập
    $("#btnAdd").click(function(e){
        //Thực hiện lấy mã nhân viên mới từ api
        

        //Biding mã nhân viên vào text box nhập mã

        //Hiển thị form
        $("#employeeForm").show()
        //focus vào ô nhập liệu đầu tiên
        $("#txtEmployeeCode").focus();
        ValidateData();
    });

    //2.Nhấn nút hủy để ẩn form
    $("#btnCancel").click(function(e){
        $("#employeeForm").hide();
        $("td").find("i").text("");
        $("td").find(".warning").removeClass("warning");
        document.getElementById("inputForm").reset();



    });
    //3.Nhấn nút x để ẩn form
    $("#btnClose").click(function(e){
        $("#employeeForm").hide();
        $("td").find("i").text("");
        $("td").find(".warning").removeClass("warning");
        document.getElementById("inputForm").reset();

    });
}

