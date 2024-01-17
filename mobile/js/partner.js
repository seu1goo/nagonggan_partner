function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}
// input 숫자 제한

function number_format(data) {
  var tmp = "";
  var number = "";
  var cutlen = 3;
  var comma = ",";
  var i;

  data = data + "";

  var sign = data.match(/^[\+\-]/);
  if (sign) {
    data = data.replace(/^[\+\-]/, "");
  }

  len = data.length;
  mod = len % cutlen;
  k = cutlen - mod;
  for (i = 0; i < data.length; i++) {
    number = number + data.charAt(i);

    if (i < data.length - 1) {
      k++;
      if (k % cutlen == 0) {
        number = number + comma;
        k = 0;
      }
    }
  }

  if (sign != null) number = sign + number;

  return number;
}
// price number (,) add

function id_pw_init() {
  $("#company_name").val("");
  $("#company_email").val("");
  $("#company_email2").val("");
  $("#login_partner_id").val("");
  $("#login_partner_pw").val("");
  $("#login_partner_pw_chk").val("");
}

function find_partner_id() {
  $("#company_name").val("");
  $("#company_email").val("");

  $(".find_id_chk").siblings().removeClass("active");
  $(".find_id_chk").addClass("active");

  id_pw_init();
}

function find_partner_pw() {
  $("#ch_").val($("#login_partner_id").val());
  $("#ch_e").val($("#company_email2").val());

  $(".find_pw_set").siblings().removeClass("active");
  $(".find_pw_set").addClass("active");
  $("#pw_last").hide();
  id_pw_init();
}

function pw_change() {
  if (
    $("#login_partner_pw").val().length < 5 ||
    $("#login_partner_pw").val().length > 12
  ) {
    alert("새 비밀번호는 5~12자리로 입력해주세요.");
  } else if ($("#login_partner_pw").val() != $("#login_partner_pw_chk").val()) {
    alert("비밀번호가 일치하지 않습니다.");
  } else if (
    $("#login_partner_pw").val().length >= 5 &&
    $("#login_partner_pw").val().length <= 12 &&
    $("#login_partner_pw").val() == $("#login_partner_pw_chk").val()
  ) {
    if (!/^[a-zA-Z0-9]{5,12}$/.test($("#login_partner_pw").val())) {
      $("#login_partner_pw").focus();
      alert("비밀번호는 숫자와 영문자 조합으로 5~12자리를 사용해야 합니다.");
      return;
    }

    var chk_num = $("#login_partner_pw").val().trim().search(/[0-9]/g);
    var chk_eng = $("#login_partner_pw").val().trim().search(/[a-z]/gi);

    if (chk_num < 0 || chk_eng < 0) {
      $("#login_partner_pw").focus();
      alert("비밀번호는 숫자와 영문자를 혼용하여야 합니다.");
      return;
    }

    if ($("#login_partner_pw").val() != $("#login_partner_pw_chk").val()) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    $(".find_pw_chk").siblings().removeClass("active");
    $(".find_pw_chk").addClass("active");
  }
}
// login

function check_partner_id() {
  var user_id_rule = RegExp(/^[a-z]+[a-z0-9]{5,12}$/); //아이디 정책

  if ($("#join_partner_id").val() == "") {
    alert("사용하실 아이디를 입력해주세요.");
    $("#join_partner_id").focus();
    return false;
  }

  if (
    $("#join_partner_id").val().length < 5 ||
    $("#join_partner_id").val().length > 12
  ) {
    alert("아이디의 경우 5~12자리까지 가능합니다.");
    $("#join_partner_id").focus();
    return false;
  }

  if (!user_id_rule.test($("#join_partner_id").val())) {
    alert(
      "아이디의 경우 공백없이 5~12자 이내 영문 또는 영문/숫자 조합만 가능합니다."
    );
    return false;
  }

  alert("사용할 수 있는 아이디입니다.");
}

function check_partner_join() {
  if ($("#join_partner_id").val() == "") {
    alert("사용하실 아이디를 입력해주세요.");
    $("#join_partner_id").focus();
    return false;
  }

  if ($("#join_partner_id").val() == "") {
    alert("아이디 중복확인을 클릭해주세요.");
    return false;
  }

  if ($("#join_partner_pw").val().trim() == "") {
    alert("비밀번호를 입력해주세요.");
    $("#join_partner_pw").focus();
    return false;
  }

  if (!/^[a-zA-Z0-9]{5,12}$/.test($("#join_partner_pw").val())) {
    $("#join_partner_pw").focus();
    alert("비밀번호는 숫자와 영문자 조합으로 5~12자리를 사용해야 합니다.");
    return false;
  }

  var chk_num = $("#join_partner_pw").val().trim().search(/[0-9]/g);
  var chk_eng = $("#join_partner_pw").val().trim().search(/[a-z]/gi);

  if (chk_num < 0 || chk_eng < 0) {
    $("#join_partner_pw").focus();
    alert("비밀번호는 숫자와 영문자를 혼용하여야 합니다.");
    return false;
  }

  if (
    $("#join_partner_pw").val().length < 5 ||
    $("#join_partner_pw").val().length > 12
  ) {
    alert("비밀번호의 경우 5~12자리까지 가능합니다.");
    $("#join_partner_pw").focus();
    return false;
  }

  if ($("#join_partner_pw_ok").val() == "") {
    alert("확인 비밀번호를 입력해주세요.");
    $("#join_partner_pw_ok").focus();
    return false;
  }

  if ($("#join_partner_pw").val() !== $("#join_partner_pw_ok").val()) {
    alert("비밀번호가 일치하지 않습니다.");
    $("#join_partner_pw_ok").focus();
    return false;
  }

  if ($("#ceo_name").val() == "") {
    alert("대표자 성명을 입력해주세요.");
    $("#ceo_name").focus();
    return false;
  }
  if ($("#ceo_phone").val() == "") {
    alert("대표자 연락처를 입력해주세요.");
    $("#ceo_phone").focus();
    return false;
  }

  if ($("input[name='business_scope']:checked").length < 1) {
    alert("시공범위를 체크해주세요.");
    return false;
  }

  var arrayParam_business_scope = new Array();
  $("input:checkbox[name=business_scope]:checked").each(function () {
    arrayParam_business_scope.push($(this).val());
  });

  business_scope = arrayParam_business_scope.join(",");

  if ($("#company_name").val() == "") {
    alert("회사 상호명을 입력해주세요.");
    $("#company_name").focus();
    return false;
  }

  if ($("#company_license").val() == "") {
    alert("사업등록번호를 입력해주세요.");
    $("#company_license").focus();
    return false;
  }

  if ($("#company_phone").val() == "") {
    alert("회사 연락처를 입력해주세요.");
    $("#company_phone").focus();
    return false;
  }

  if ($("#company_email").val() == "") {
    alert("회사 이메일을 입력해주세요.");
    $("#company_email").focus();
    return false;
  }

  if ($("#company_email").val() == "") {
    alert("회사 이메일을 입력해주세요.");
    $("#company_email").focus();
    return false;
  }

  if ($("#company_email2").val() == "") {
    alert("회사 이메일 도메인을 입력해주세요.");
    $("#company_email2").focus();
    return false;
  }

  if ("직접입력" == $("#company_email2").val()) {
    if ($("#emaildomain_txt").val() == "") {
      alert("회사 이메일 도메인을 입력해주세요.");
      $("#emaildomain_txt").focus();
      return false;
    }
  }

  if ($("#company_addr1").val() == "") {
    alert("회사 주소를 입력해주세요.");
    $("#company_addr1").focus();
    return false;
  }

  if ($("#business_area").val() == "") {
    alert("시공지역을 선택해주세요.");
    $("#business_area").focus();
    return false;
  }

  if ($("#business_career").val() == "") {
    alert("경력을 선택해주세요.");
    $("#business_career").focus();
    return false;
  }

  if ($("#main_field").val() == "") {
    alert("전문분야를 입력해주세요.");
    $("#main_field").focus();
    return false;
  }

  if ($("#company_intro").val() == "") {
    alert("회사소개를 입력해주세요.");
    $("#company_intro").focus();
    return false;
  }

  if ($("#company_license_img").val() == "") {
    alert("사업자등록증 이미지를 첨부해주세요.");
    $("#company_license_img").focus();
    return false;
  }

  partner_join();
}

function partner_join() {
  $(".pop_join").show();
}
// join

function contract_popup() {
  $(".pop_file").show();
}

function contract_img_up() {
  $(".pop_file").hide();
}
// contract

function set_price() {
  var pay_check = $('input:radio[name="pay_check"]:checked').val();
  var price = 0;
  var product_name = "";
  if (pay_check == "1") {
    price = 1200000;
    product_name = "1개월";
  } else if (pay_check == "2") {
    price = 2000000;
    product_name = "2개월";
  } else if (pay_check == "3") {
    price = 3000000;
    product_name = "3개월";
  } else if (pay_check == "6") {
    price = 5000000;
    product_name = "6개월";
  } else if (pay_check == "12") {
    price = 9000000;
    product_name = "1년";
  } else {
    alert("결제 기간을 선택해주세요.");
    return;
  }
  $("#good_name").val(product_name);
  $("#good_mny").val(price);

  $("#product_name").html(product_name);
  $("#pay_text").html(number_format(price) + "원");
}
// pay

function check_partner_edit() {
  if (
    $("#edit_partner_pw").val().length > 0 ||
    $("#edit_partner_pw_ok").val().length > 0
  ) {
    if ($("#edit_partner_pw").val() !== $("#edit_partner_pw_ok").val()) {
      alert("비밀번호가 일치하지 않습니다.");
      $("#edit_partner_pw_ok").focus();
      return false;
    }

    if (!/^[a-zA-Z0-9]{5,12}$/.test($("#edit_partner_pw").val())) {
      $("#edit_partner_pw").focus();
      alert("비밀번호는 숫자와 영문자 조합으로 5~12자리를 사용해야 합니다.");
      return false;
    }

    var chk_num = $("#edit_partner_pw").val().trim().search(/[0-9]/g);
    var chk_eng = $("#edit_partner_pw").val().trim().search(/[a-z]/gi);

    if (chk_num < 0 || chk_eng < 0) {
      $("#edit_partner_pw").focus();
      alert("비밀번호는 숫자와 영문자를 혼용하여야 합니다.");
      return false;
    }
  }

  if ($("#company_name").val() == "") {
    alert("회사 상호명을 입력해주세요.");
    $("#company_name").focus();
    return false;
  }
  if ($("#ceo_name").val() == "") {
    alert("대표자 성명을 입력해주세요.");
    $("#ceo_name").focus();
    return false;
  }
  if ($("#ceo_phone").val() == "") {
    alert("대표자 연락처를 입력해주세요.");
    $("#ceo_phone").focus();
    return false;
  }
  if ($("#company_license").val() == "") {
    alert("사업등록번호를 입력해주세요.");
    $("#company_license").focus();
    return false;
  }
  if ($("#company_phone").val() == "") {
    alert("회사 연락처를 입력해주세요.");
    $("#company_phone").focus();
    return false;
  }
  if ($("#company_email").val() == "") {
    alert("회사 이메일을 입력해주세요.");
    $("#company_email").focus();
    return false;
  }
  if ($("#company_addr1").val() == "") {
    alert("회사 주소를 입력해주세요.");
    $("#company_addr1").focus();
    return false;
  }

  if ($("#business_area").val() == "") {
    alert("시공지역을 선택해주세요.");
    $("#business_area").focus();
    return false;
  }
  if ($("#business_career").val() == "") {
    alert("경력을 선택해주세요.");
    $("#business_career").focus();
    return false;
  }
  if ($("#main_field").val() == "") {
    alert("전문분야를 입력해주세요.");
    $("#main_field").focus();
    return false;
  }
  if ($("input[name='business_scope']:checked").length < 1) {
    alert("시공범위를 체크해주세요.");
    return false;
  }
  var arrayParam_business_scope = new Array();
  $("input:checkbox[name=business_scope]:checked").each(function () {
    arrayParam_business_scope.push($(this).val());
  });
  business_scope = arrayParam_business_scope.join(",");

  if ($("#company_intro").val() == "") {
    alert("회사소개를 입력해주세요.");
    $("#company_intro").focus();
    return false;
  }

  partner_edit();
}

function partner_edit() {
  alert("회사 정보가 저장되었습니다.");
  location.href = "./home.html";
}
// company

$(document).ready(function () {
  $("#chk_all").on("click", function () {
    if ($("#chk_all").is(":checked")) {
      $(".agree_separate input").prop("checked", true);
    } else {
      $(".agree_separate input").prop("checked", false);
    }
  });

  $(".agree_separate input").on("click", function () {
    var total = $(".agree_separate input").length;
    var checked = $(".agree_separate input:checked").length;

    if (total != checked) $("#chk_all").prop("checked", false);
    else $("#chk_all").prop("checked", true);
  });
  // checkbox

  $(".pg_page").on("click", function () {
    $(this).siblings().removeClass("pg_current");
    $(this).addClass("pg_current");
  });
  // pagination

  $(".input_file_img").on("change", function () {
    var fileName = $(this).val();
    if (fileName == "") fileName = "파일을 선택해주세요.";
    $(".filename_img").text(fileName);
  });

  $(".input_file_logo").on("change", function () {
    var fileName = $(this).val();
    if (fileName == "") fileName = "파일을 선택해주세요.";
    $(".filename_logo").text(fileName);
  });

  $(".input_file_contract").on("change", function () {
    var fileName = $(this).val();
    if (fileName == "") fileName = "파일을 선택해주세요.";
    $(".filename_contract").text(fileName);
  });

  $(".input_file_schedule").on("change", function () {
    var fileName = $(this).val();
    if (fileName == "") fileName = "파일을 선택해주세요.";
    $(".filename_schedule").text(fileName);
  });

  $(".input_file_estimate").on("change", function () {
    var fileName = $(this).val();
    if (fileName == "") fileName = "파일을 선택해주세요.";
    $(".filename_estimate").text(fileName);
  });
  // file

  $(".pop_join").hide();
  $(".btn_signup").on("click", function () {});

  $(".pop_join .pop_close").on("click", function () {
    $(".pop_join").hide();
  });

  $(".go_apply").on("click", function () {
    $(".attach_upload").removeClass("active");
  });

  $(".pop_close").on("click", function () {
    $(".pop_wrap").removeClass("active");
    $(".pop_wrap").hide();
  });
  // popup

  $(".pw_area figure").each(function () {
    $(this).on("click", function () {
      $(this)
        .find(">img")
        .attr("src", function (index, attr) {
          if (attr.match("_off")) {
            return attr.replace("_off.png", "_on.png");
          } else {
            return attr.replace("_on.png", "_off.png");
          }
        });

      $(".login_pw").toggleClass("active");
      if ($(".login_pw").hasClass("active")) {
        $(".login_pw").attr("type", "text");
      } else {
        $(".login_pw").attr("type", "password");
      }
    });
  });

  $(".find_area").each(function () {
    $(".choice_user > li").each(function () {
      var findBtn = $(this);
      var findList = $(".find_area > ul");

      findBtn.on("click", function (e) {
        e.preventDefault();

        var target = $(this);
        var index = target.index();

        findList.eq(index).siblings().removeClass("active");
        findList.eq(index).addClass("active");

        target.siblings().removeClass("active");
        target.addClass("active");

        $(".find_id").siblings().removeClass("active");
        $(".find_pw").siblings().removeClass("active");

        $(".find_id").addClass("active");
        $(".find_pw").addClass("active");
      });
    });
    // find_tab

    $(".find_user").each(function () {
      $(".open_find").on("click", function () {
        $(".find_contents").removeClass("active");
        $(".btn_pw").removeClass("active");

        $(".find_user").show();
        $(".choice_user").show();

        $(".btn_id").addClass("active");
        $(".find_id").addClass("active");
        $(".find_pw").addClass("active");
        id_pw_init();
      });
      $(document).on("click", ".go_login", function () {
        id_pw_init();
        $(".find_user").hide();
      });

      $(".find_user .pop_close").on("click", function () {
        id_pw_init(); //입력풋 초기화
        $(".find_user").hide();
      });
    });
  });
  // login

  $(document).on("click", ".contract_popup_close", function () {
    $(".pop_file").hide();
  });
  // contract

  var total_sel_files = 0;
  var sel_files0 = [];
  var sel_files1 = [];
  var sel_files2 = [];
  var sel_files3 = [];
  var sel_files4 = [];
  var sel_files5 = [];
  var sel_files6 = [];
  var sel_files7 = [];
  var sel_files8 = [];
  var sel_files9 = [];

  $("#input_thumbnail").on("change", handleImgFileSelect_thumb);
  $("#input_imgs0").on("change", handleImgFileSelect_thumb0);
  $("#input_imgs1").on("change", handleImgFileSelect_thumb1);
  $("#input_imgs2").on("change", handleImgFileSelect_thumb2);
  $("#input_imgs3").on("change", handleImgFileSelect_thumb3);
  $("#input_imgs4").on("change", handleImgFileSelect_thumb4);
  $("#input_imgs5").on("change", handleImgFileSelect_thumb5);
  $("#input_imgs6").on("change", handleImgFileSelect_thumb6);
  $("#input_imgs7").on("change", handleImgFileSelect_thumb7);
  $("#input_imgs8").on("change", handleImgFileSelect_thumb8);
  $("#input_imgs9").on("change", handleImgFileSelect_thumb9);

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_thumbnail").trigger("click");
  }

  $("#form1").on("submit", function (e) {
    e.preventDefault(); //페이지 자동 새로고침 방지

    if ($("#company_code").val() == "") {
      alert("시공업체 정보가 없습니다.\n시공업체 정보 등록 후 진행해 주세요.");
      return false;
    }

    if (confirm("현재의 내용으로 등록하시겠습니까?")) {
      portfolio_reg();
    } else {
      return false;
    }
  });

  function handleImgFileSelect_thumb(e) {
    sel_files = [];
    $(".thumbnail_wrap").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    if (files.length > 5) {
      alert("썸네일 이미지의 파일첨부는 최대 5개까지 가능합니다.");
      $("#input_thumbnail").val("");
      return false;
    }

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        return;
      }
      sel_files.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<div class="thumbnail_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></div> ";
        $(".thumbnail_wrap").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs0").trigger("click");
  }

  function handleImgFileSelect_thumb0(e) {
    img_size_chk0 = false;
    img_type_chk0 = false;
    sel_files0 = [];
    $(".input_imgs_wrap").empty();
    var list_img = "";

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;

    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk0 = true;
        return;
      }

      //	console.log(f)
      //	console.log(f)

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert(f.name + " 첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk0 = true;
          return;
        }
      }
      sel_files0.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap").append(html);

        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs1").trigger("click");
  }

  function handleImgFileSelect_thumb1(e) {
    img_size_chk1 = false;
    img_type_chk1 = false;
    sel_files1 = [];
    $(".input_imgs_wrap1").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk1 = true;
        return;
      }

      console.log(f);
      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk1 = true;
          return;
        }
      }
      sel_files1.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap1").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs2").trigger("click");
  }

  function handleImgFileSelect_thumb2(e) {
    img_size_chk2 = false;
    img_type_chk2 = false;
    sel_files2 = [];
    $(".input_imgs_wrap2").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk2 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk2 = true;
          return;
        }
      }
      sel_files2.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs2_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap2").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs3").trigger("click");
  }

  function handleImgFileSelect_thumb3(e) {
    img_size_chk3 = false;
    img_type_chk3 = false;
    sel_files3 = [];
    $(".input_imgs_wrap3").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk3 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk3 = true;
          return;
        }
      }
      sel_files3.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs3_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap3").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs4").trigger("click");
  }

  function handleImgFileSelect_thumb4(e) {
    img_size_chk4 = false;
    img_type_chk4 = false;
    sel_files4 = [];
    $(".input_imgs_wrap4").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk4 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk4 = true;
          return;
        }
      }
      sel_files4.push(f);
      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs4_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap4").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs5").trigger("click");
  }

  function handleImgFileSelect_thumb5(e) {
    img_size_chk5 = false;
    img_type_chk5 = false;
    sel_files5 = [];
    $(".input_imgs_wrap5").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk5 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk5 = true;
          return;
        }
      }
      sel_files5.push(f);
      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs5_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap5").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs6").trigger("click");
  }

  function handleImgFileSelect_thumb6(e) {
    img_size_chk6 = false;
    img_type_chk6 = false;
    sel_files6 = [];
    $(".input_imgs_wrap6").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk6 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk6 = true;
          return;
        }
      }
      sel_files6.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs6_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap6").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs7").trigger("click");
  }

  function handleImgFileSelect_thumb7(e) {
    img_size_chk7 = false;
    img_type_chk7 = false;
    sel_files7 = [];
    $(".input_imgs_wrap7").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk7 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk7 = true;
          return;
        }
      }
      sel_files7.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs7_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap7").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs8").trigger("click");
  }

  function handleImgFileSelect_thumb8(e) {
    img_size_chk8 = false;
    img_type_chk8 = false;
    sel_files8 = [];
    $(".input_imgs_wrap8").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk8 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk8 = true;
          return;
        }
      }
      sel_files8.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs8_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap8").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }

  function fileUploadAction() {
    console.log("fileUploadAction");
    $("#input_imgs9").trigger("click");
  }

  function handleImgFileSelect_thumb9(e) {
    img_size_chk9 = false;
    img_type_chk9 = false;
    sel_files9 = [];
    $(".input_imgs_wrap9").empty();

    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);

    var index = 0;
    filesArr.forEach(function (f) {
      if (!f.type.match("image.*")) {
        alert("확장자는 이미지 확장자만 가능합니다.");
        img_type_chk9 = true;
        return;
      }

      if (f.size > 0) {
        var maxSize = 5 * 1024 * 1024;
        var fileSize = f.size;

        if (fileSize > maxSize) {
          alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
          img_size_chk9 = true;
          return;
        }
      }
      sel_files9.push(f);

      var reader = new FileReader();
      reader.onload = function (e) {
        var html =
          '<figure class="input_imgs9_id_' +
          index +
          '"><img src="' +
          e.target.result +
          "\" data-file='" +
          f.name +
          "'></figure> ";
        $(".input_imgs_wrap9").append(html);
        index++;
      };
      reader.readAsDataURL(f);
    });
  }
  // write

  $("#portfolio_form1").on("submit", function (e) {
    e.preventDefault(); //페이지 자동 새로고침 방지

    if ($("#company_code").val() == "") {
      alert("시공업체 정보가 없습니다.\n시공업체 정보 등록 후 진행해 주세요.");
      return false;
    }

    if (confirm("현재의 내용으로 등록하시겠습니까?")) {
      var regexp = /^[0-9]*$/;

      if (!regexp.test($("#construct_area").val())) {
        alert("공사면적 숫자만 입력하세요");
        return false;
      }

      if (!regexp.test($("#construct_period").val())) {
        alert("공사기간 숫자만 입력하세요");
        return false;
      }

      if (!regexp.test($("#construct_amount").val())) {
        alert("공사금액 숫자만 입력하세요");
        return false;
      }

      total_sel_files =
        sel_files0.length +
        sel_files1.length +
        sel_files2.length +
        sel_files3.length +
        sel_files4.length +
        sel_files5.length +
        sel_files6.length +
        sel_files7.length +
        sel_files8.length +
        sel_files9.length;

      if (total_sel_files <= 0) {
        alert("프로젝트 내용 이미지를 올려주세요.");
        return false;
      }

      alert("등록이 완료되었습니다.");
      location.href = "./portfolio.html";
    } else {
      return false;
    }
  });
  // portfolio

  $("#progres_form").on("submit", function (e) {
    e.preventDefault();

    if ($("#company_code").val() == "") {
      alert("시공업체 정보가 없습니다.\n시공업체 정보 등록 후 진행해 주세요.");
      return false;
    }

    var regexp = /^[0-9]*$/;

    if (!regexp.test($("#construct_area").val())) {
      alert("공사면적 숫자만 입력하세요");
      return false;
    }

    if (!regexp.test($("#construct_period").val())) {
      alert("공사기간 숫자만 입력하세요");
      return false;
    }

    if (!regexp.test($("#construct_amount").val())) {
      alert("공사금액 숫자만 입력하세요");
      return false;
    }

    total_sel_files =
      sel_files0.length +
      sel_files1.length +
      sel_files2.length +
      sel_files3.length +
      sel_files4.length +
      sel_files5.length +
      sel_files6.length +
      sel_files7.length +
      sel_files8.length +
      sel_files9.length;

    if (total_sel_files <= 0) {
      alert("실시간 현황 이미지를 올려주세요.");
      return false;
    }

    var msg = "";
    if ($("#idx").val() == "") {
      msg = "현재의 내용으로 등록하시겠습니까?";
    } else {
      msg = "현재의 내용으로 수정하시겠습니까?";
    }
    if (confirm(msg)) {
      alert("등록이 완료되었습니다.");
      location.href = "./progress.html";
    } else {
      return false;
    }
  });
  // progress

  $(".pay_btn1").click(function () {
    let date = new Date();

    var od_id =
      date.getFullYear().toString() +
      date.getMonth().toString() +
      date.getDate().toString() +
      date.getHours().toString() +
      date.getMinutes().toString() +
      date.getSeconds().toString() +
      date.getMilliseconds().toString();

    $("#ordr_idxx").val(od_id);

    var pay_method = $('input:radio[name="method_payment"]:checked').val();

    if (pay_method == "bank") {
      if ($("#bank_depositor").val() == "") {
        alert("입금자명을 입력해주세요.");
        return;
      }
    }

    if (!$("#payment_agree").is(":checked")) {
      alert("구매조건 확인 및 결제진행에 동의에 동의해주세요");
      return;
    }

    set_price();

    alert("신청이 완료되었습니다.");
  });

  $("#pay_radio li").on("click", function () {
    set_price();
  });

  $("#pay_radio li label").on("click", function () {
    $("#pay_radio li").removeClass("active");

    if ($(this).find("input").prop("checked", true)) {
      $(this).parents("li").addClass("active");
    }
  });
  // pay

  $("#withdrawal_reason").on("keyup", function () {
    $(".count").html($(this).val().length + " / 300");

    if ($(this).val().length > 300) {
      $(this).val($(this).val().substring(0, 300));
    }
  });

  $(".withdrawal_service button").on("click", function () {
    $(".pop_quit_approval").show();
  });

  $("#withdrawal_submit").on("click", function () {
    if (confirm("회원탈퇴 하시겠습니까?")) {
      // 약관동의 체크
      if ($("#withdrawal_agree").is(":checked") == false) {
        alert("유의사항을 확인 후 동의해주세요.");
        return;
      }

      alert("정상적으로 회원 탈퇴 되었습니다.");
      location.href = "./withdrawal_chk.html";
    }
  });
});
