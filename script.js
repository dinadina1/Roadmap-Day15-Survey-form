// Function to create break tag
function break_create(){
  let break_ = document.createElement("br");
  return break_;
}

// Function to create label tag
function label_create(tagname,attrname,attrvalue, attr1name, attr1value, content){
  let label_ = document.createElement(tagname);
  label_.setAttribute(attrname,attrvalue);
  label_.setAttribute(attr1name,attr1value);
  label_.innerHTML = content;
  return label_;
}

// Function to create checkbox
function checkbox_create(tagname,attrname,attrvalue, attr1name, attr1value,attr2name, attr2value, attr3name,attr3value){
  let checkbox = document.createElement(tagname);
  checkbox.setAttribute(attrname,attrvalue);
  checkbox.setAttribute(attr1name,attr1value);
  checkbox.setAttribute(attr2name,attr2value);
  checkbox.setAttribute(attr3name,attr3value);
  return checkbox;
}

// Function to create radiobutton
function radiobutton_create(tagname,attrname,attrvalue, attr1name, attr1value,attr2name, attr2value,attr3name,attr3value){
  let radio = document.createElement(tagname);
  radio.setAttribute(attrname,attrvalue);
  radio.setAttribute(attr1name,attr1value);
  radio.setAttribute(attr2name,attr2value);
  radio.setAttribute(attr3name,attr3value);
  return radio;
}

// Function to create redio button label
function radiolabel_create(tagname,attrname,attrvalue,content){
  let radio_ = document.createElement(tagname);
  radio_.setAttribute(attrname,attrvalue);
  radio_.innerHTML = content;
  return radio_;
}

// Function to create input tag
function input_create(tagname,attrname,attrvalue, attr1name, attr1value,attr2name, attr2value,attr3name,attr3value, required){
  let label_ = document.createElement(tagname);
  label_.setAttribute(attrname,attrvalue);
  label_.setAttribute(attr1name,attr1value);
  label_.setAttribute(attr2name,attr2value);
  label_.setAttribute(attr3name,attr3value);
  label_.setAttribute(required,'');
  return label_;
}

// Function to create thead and tbody tags
function thead_tbody_create(tagname,attrname,attrvalue){
  let tab = document.createElement(tagname);
  tab.setAttribute(attrname,attrvalue);
  return tab;
}

// Function to create th tag
function th_create(tagname,attrname,attrvalue,content){
  let th = document.createElement(tagname);
  th.setAttribute(attrname,attrvalue);
  th.innerHTML = content;
  return th;
}

// Creating a container
let container = document.createElement("div");
container.className = "container-fluid";

let row = document.createElement("div");
row.className = "row";

let section1 = document.createElement("div");
section1.className = "col-md-3";

let section2 = document.createElement("div");
section2.className = "col";

let heading1 = document.createElement("h1");
heading1.id = "title";
heading1.innerHTML = `<p id='description'>Survey Form</p>`;

let form_section = document.createElement("form");
form_section.id = "survey-form";
form_section.className = "survey-form";

// Creating form elements
let first_label = label_create("label","for","first-name","id","name-label","First Name");
let first_input = input_create("input","class","form-control","type","text","id","first-name","placeholder","Enter your first name","required");

let last_label = label_create("label","for","last-name","id","name-label","Last Name");
let last_input = input_create("input","class","form-control","type","text","id","last-name","placeholder","Enter your last name","required");

let address_label = label_create("label","for","comments","id","name-label","Address");
let address_input = input_create("textarea","class","form-control","rows","3","id","comments","placeholder","Enter your Address","required");

let pincode_label = label_create("label","for","pincode","id","number-label","Pincode");
let pincode_input = input_create("input","class","form-control","type","tel","id","pincode","placeholder","Pincode","required");

let email_label = label_create("label","for","email","id","email-label","Email");
let email_input = input_create("input","class","form-control","type","email","id","email","placeholder","Enter your Email","required");

let gender_label = label_create("label","for","gender","id","gender-label","Gender");
let radio1_input = radiobutton_create("input","type","radio","name","gender","id","option1","value","Male");
let radio1_label = radiolabel_create("label","for","option1","Male");

let radio2_input = radiobutton_create("input","type","radio","name","gender","id","option2","value","Female");
let radio2_label = radiolabel_create("label","for","option2","Female");

let radio3_input = radiobutton_create("input","type","radio","name","gender","id","option3","value","Others");
let radio3_label = radiolabel_create("label","for","option3","Others");

let food_label = label_create("label","for","checkbox","id","checkbox-label","Choose at least two foods:");

let food_label_span = document.createElement("span");
food_label_span.innerHTML = "(must choose at least 2 option out of 5 options)";

let check1_input = checkbox_create("input","type","checkbox","id","North-Indian","name","food","value","North Indian");
let check1_label = radiolabel_create("label","for","North-Indian","North Indian");

let check2_input = checkbox_create("input","type","checkbox","id","South-Indian","name","food","value","South Indian");
let check2_label = radiolabel_create("label","for","South-Indian","South Indian");

let check3_input = checkbox_create("input","type","checkbox","id","Chinese","name","food","value","Chinese");
let check3_label = radiolabel_create("label","for","Chinese","Chinese");

let check4_input = checkbox_create("input","type","checkbox","id","Japanese","name","food","value","Japanese");
let check4_label = radiolabel_create("label","for","Japanese","Japanese");

let check5_input = checkbox_create("input","type","checkbox","id","Sea-Food","name","food","value","Sea Food");
let check5_label = radiolabel_create("label","for","Sea-Food","Sea Food");

let state_label = label_create("label","for","state","id","name-label","State");
let state_input = input_create("input","class","form-control","type","text","id","state","Placeholder","State","required");

let country_label = label_create("label","for","country","id","name-label","Country");
let country_input = input_create("input","class","form-control","type","text","id","country","Placeholder","Country","required");

let submit_button = checkbox_create("input","type","submit","id","submit","class","btn btn-secondary","onclick","myForm()");


//========================================

let heading2 = document.createElement("h1");
heading2.innerHTML = "Temporary Database";

// Creating a table tag
let table_tag = thead_tbody_create("table","class","table");
let thead = thead_tbody_create("thead","class","thead-dark");

let new_row1 = document.createElement("tr");

let th1 = th_create("th","scope","col","First Name");
let th2 = th_create("th","scope","col","Last Name");
let th3 = th_create("th","scope","col","Address");
let th4 = th_create("th","scope","col","Pincode");
let th5 = th_create("th","scope","col","Email");
let th6 = th_create("th","scope","col","Gender");
let th7 = th_create("th","scope","col","Food");
let th8 = th_create("th","scope","col","State");
let th9 = th_create("th","scope","col","Country");

let tbody = thead_tbody_create("tbody","id","table_data");

// ================================================
// append all the elements into the form_section
form_section.append(first_label, first_input,last_label,last_input, address_label, address_input, pincode_label, pincode_input
  ,email_label,email_input, gender_label,break_create(), radio1_input, radio1_label, radio2_input,radio2_label, radio3_input, radio3_label,
  food_label,break_create(), food_label_span,break_create(), check1_input, check1_label,break_create(), check2_input, check2_label,break_create(),check3_input,check3_label,break_create(), check4_input, check4_label,break_create(), check5_input, check5_label,
  break_create(), state_label, state_input, country_label, country_input, submit_button);

section1.append(heading1,form_section);

new_row1.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead.append(new_row1);

table_tag.append(thead,tbody);

section2.append(heading2,table_tag);

row.append(section1, section2);

container.appendChild(row);
document.body.append(container);

//=============================================================================================================
// Form Logic

function myForm() {
  //Check checkbox at least 2 selected
  let choosefood = document.querySelectorAll("input[name='food']:checked");
  if (choosefood.length < 2) {
    alert("Please select at least 2 foods.");
  } else {
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let address = document.getElementById("comments").value;
    let pincode = document.getElementById("pincode").value;
    let email = document.getElementById("email").value;

    let select_gender = document.querySelectorAll("input[name='gender']:checked");
    let gender = Array.from(select_gender).map((option) => option.value);

    var food = Array.from(choosefood).map((option) => option.value);
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    //Creating a new row
    let table = document.getElementById("table_data");
    let new_row = table.insertRow(-1);

    //Insert cells into the row
    let cell1 = new_row.insertCell(0);
    let cell2 = new_row.insertCell(1);
    let cell3 = new_row.insertCell(2);
    let cell4 = new_row.insertCell(3);
    let cell5 = new_row.insertCell(4);
    let cell6 = new_row.insertCell(5);
    let cell7 = new_row.insertCell(6);
    let cell8 = new_row.insertCell(7);
    let cell9 = new_row.insertCell(8);

    //Append values to the cells
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = email;
    cell6.innerHTML = gender.join();
    cell7.innerHTML = food.join(",");
    cell8.innerHTML = state;
    cell9.innerHTML = country;
  }

  //Clear form fields after given input
  document.getElementById("survey-form").reset();
}
