function onOpen() {
  var ui = FormApp.getUi();
  ui.createMenu("Thai Form Tool")
    .addItem("เพิ่มตัวเลือกจังหวัด", "addThaiProvinces")
    .addItem("เพิ่มตัวเลือกวันของสัปดาห์ (วันจันทร์-วันอาทิตย์)", "addThaiDays")
    .addItem("เพิ่มตัวเลือกวันที่ (1-31)", "addDays")
    .addItem("เพิ่มตัวเลือกเดือน (มกราคม-ธันวาคม)", "addThaiMonths")
    .addItem("เพิ่มตัวเลือกเดือนที่ (1-12)", "addMonths")
    .addItem("เพิ่มตัวเลือกปี พ.ศ. (100 ปีล่าสุด)", "addThaiYears")
    .addItem("เพิ่มตัวเลือกอายุ (1-100)", "addAges")
    .addItem("เพิ่มตัวเลือกเพศ (20 เพศ)", "addGenders")
    .addItem("เพิ่มตัวเลือกระดับการศึกษา", "addEducations")
    .addToUi();
}

function addThaiProvinces() {
  var form = FormApp.getActiveForm();
  var thaiProvinces = [
    "กระบี่",
    "กรุงเทพมหานคร",
    "กาญจนบุรี",
    "กาฬสินธุ์",
    "กำแพงเพชร",
    "ขอนแก่น",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "เชียงราย",
    "เชียงใหม่",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครพนม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นนทบุรี",
    "นราธิวาส",
    "น่าน",
    "บึงกาฬ",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "ปัตตานี",
    "พระนครศรีอยุธยา",
    "พะเยา",
    "พังงา",
    "พัทลุง",
    "พิจิตร",
    "พิษณุโลก",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "แพร่",
    "ภูเก็ต",
    "มหาสารคาม",
    "มุกดาหาร",
    "แม่ฮ่องสอน",
    "ยโสธร",
    "ยะลา",
    "ร้อยเอ็ด",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลพบุรี",
    "ลำปาง",
    "ลำพูน",
    "เลย",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สตูล",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุโขทัย",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "หนองคาย",
    "หนองบัวลำภู",
    "อ่างทอง",
    "อำนาจเจริญ",
    "อุดรธานี",
    "อุตรดิตถ์",
    "อุทัยธานี",
    "อุบลราชธานี",
  ];
  var provinceChoices = [];
  var provinceList = form.addListItem();
  for (i = 0; i < 77; i++) {
    provinceChoices.push(provinceList.createChoice(thaiProvinces[i]));
  }
  provinceList.setTitle("จังหวัด").setChoices(provinceChoices);
}

function addThaiDays() {
  var form = FormApp.getActiveForm();
  var thaiDays = [
    "วันจันทร์",
    "วันอังคาร",
    "วันพุธ",
    "วันพฤหัสบดี",
    "วันศุกร์",
    "วันเสาร์",
    "วันอาทิตย์",
  ];
  var dayChoices = [];
  var dayList = form.addListItem();
  for (i = 0; i < 7; i++) {
    dayChoices.push(dayList.createChoice(thaiDays[i]));
  }
  dayList.setTitle("วันของสัปดาห์").setChoices(dayChoices);
}

function addDays() {
  var form = FormApp.getActiveForm();
  var dayChoices = [];
  var dayList = form.addListItem();
  for (i = 1; i <= 31; i++) {
    dayChoices.push(dayList.createChoice(i));
  }
  dayList.setTitle("วันที่").setChoices(dayChoices);
}

function addThaiMonths() {
  var form = FormApp.getActiveForm();
  var thaiMonths = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  var monthChoices = [];
  var monthList = form.addListItem();
  for (i = 0; i < 12; i++) {
    monthChoices.push(monthList.createChoice(thaiMonths[i]));
  }
  monthList.setTitle("เดือน").setChoices(monthChoices);
}

function addMonths() {
  var form = FormApp.getActiveForm();
  var monthChoices = [];
  var monthList = form.addListItem();
  for (i = 1; i <= 12; i++) {
    monthChoices.push(monthList.createChoice(i));
  }
  monthList.setTitle("เดือนที่").setChoices(monthChoices);
}

function addThaiYears() {
  var form = FormApp.getActiveForm();
  var yearList = form.addListItem();
  var yearChoices = [];
  var dateobj = new Date();
  var currentYear = dateobj.getFullYear() + 543;
  for (i = currentYear; i >= currentYear - 100; i--) {
    yearChoices.push(yearList.createChoice(i));
  }
  yearList.setTitle("ปี พ.ศ.").setChoices(yearChoices);
}

function addAges() {
  var form = FormApp.getActiveForm();
  var ageChoices = [];
  var ageList = form.addListItem();
  for (i = 1; i <= 100; i++) {
    ageChoices.push(ageList.createChoice(i));
  }
  ageList.setTitle("อายุ").setChoices(ageChoices);
}

function addGenders() {
  var form = FormApp.getActiveForm();
  var thaiGenders = [
    "ชาย",
    "หญิง",
    "ทอม",
    "ดี้",
    "ทอมเกย์",
    "ทอมเกย์คิง",
    "ทอมเกย์ควีน",
    "ทอมเกย์ทูเวย์",
    "เกย์คิง",
    "เกย์ควีน",
    "โบ๊ท",
    "ไบท์",
    "เลสเบี้ยน",
    "กะเทย",
    "อดัม",
    "แองจี้",
    "เชอร์รี่",
    "สามย่าน",
    "ผู้หญิงข้ามเพศ",
    "ผู้ชายข้ามเพศ",
  ];
  var genderChoices = [];
  var genderList = form.addListItem();
  for (i = 0; i < 20; i++) {
    genderChoices.push(genderList.createChoice(thaiGenders[i]));
  }
  genderList.setTitle("เพศ").setChoices(genderChoices);
}

function addEducations() {
  var form = FormApp.getActiveForm();
  var thaiEducations = [
    "ประถมศึกษา",
    "มัธยมศึกษาตอนต้น",
    "มัธยมศึกษาตอนปลาย",
    "การศึกษานอกระบบและการศึกษาตามอัธยาศัย (กศน.)",
    "ประกาศนียบัตรวิชาชีพ (ปวช.)",
    "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    "ปริญญาตรี",
    "ปริญญาโท",
    "ปริญญาเอก",
  ];
  var educationChoices = [];
  var educationList = form.addListItem();
  for (i = 0; i < 9; i++) {
    educationChoices.push(educationList.createChoice(thaiEducations[i]));
  }
  educationList.setTitle("ระดับการศึกษา").setChoices(educationChoices);
}

function resetList() {
  var form = FormApp.getActiveForm();
  var itemList = form.getItems(FormApp.ItemType.LIST);
  itemList.forEach((item) => {
    form.deleteItem(item);
  });
}
