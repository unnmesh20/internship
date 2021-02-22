function clicked(event) {
 // event.preventDefault();
  console.log("The submit button was clicked");
  //validateForm();
  //debugger;
  return true;
}
var fname = document.forms["myForm"]["first_name"].value;
  var lname = document.forms["myForm"]["last_name"].value;
  var pno = document.forms["myForm"]["phone_number"].value;
  var email_id = document.forms["myForm"]["email"].value;
  var address1=document.forms["myForm"]["addr1"].value;
  var pcode=document.forms["myForm"]["pincode"].value;
function validateForm() {
  var valb = true;
  
  var pno_regex = /^\d{10}$/;
  if (pno.length != 10) {
    phone.querySelector(".phonerror").innerHTML =
      "Phone Number should have 10 digits";
    valb = false;
  }
  if (email_id.length == 0) {
    femail_id.querySelector(".emailerror").innerHTML =
      "Email id cannot be empty";
  }
  if (fname.length == 0) {
    ffname.querySelector(".formerror").innerHTML = "First Name cannot be empty";
  }
  if (lname.length == 0) {
    console.log("Last Name cannot be empty");
    flname.querySelector(".lname_error").innerHTML =
      "Last name cannot be empty";
    valb = false;
  }
  if (fname.length > 20) {
    seterror("name", "Length is more than 5");
    console.log("First Name cannot be greater than 20 characters");
    console.log(fname.length);
    valb = false;
  }
  if (fname.length == 0) {
    console.log("First Name cannot be blank");
    valb = false;
  }
  if(address1.length<5)
  {
    console.log("Please enter a valid address");
    faddress1.querySelector(".faddress1_error").innerHTML="Please enter a valid address"; 
    valb=false;
  }
  if(pcode.length==0){
    console.log("Please enter pincode");
    pincode_div.querySelector(".pcode_error").innerHTML="Please enter pincode"; 
    valb=false;
  }
  // if (!(pno.value.match(pno_regex)))
  // {
  //   phone.querySelector(".phonerror").innerHTML="Phone number cannot have alphabets or special characters. Please only enter numbers."
  //   valb=false;
  // }   

  return valb;
}
//
$("#first_name").focus(function(){
  $(".formerror").text("");
})
// if(!($("#first_name").is(":focus"))&& fname.length==0){
//   ffname.querySelector(".formerror").innerHTML = "First Name cannot be empty";
// } focus-get //
$("#last_name").focus(function(){
  $(".lname_error").text("");
})
$("#phone_number").focus(function(){
  $(".phonerror").text("");
})
$("#email").focus(function(){
  $(".emailerror").text("");
})
$("#addr1").focus(function(){
  $(".faddress1_error").text("");
})
$("#pincode").focus(function(){
  $(".pcode_error").text("");
})



//
function seterror(id, error) {
  element = document.getElementById("ffname"); //`<option id = ${id} class = ${class} value=${value}> ${value} </option>`
  console.log(element);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}
// For fetching country and state details.
var auth_token = "";
async function get_auth_token() {
  var res = await axios.get(
    "https://www.universal-tutorial.com/api/getaccesstoken",
    {
      headers: {
        "api-token":
          "1gwAOiIGHy-nDpmdrmINA8VUFu8HS9KBwY9W5suC4BKioIQV4SEDqN6nXmsfdQdxROA",
        "user-email": "unnmeshmishra@gmail.com",
      },
    }
  );
  auth_token = res.data.auth_token;
}
let dropdown = document.getElementById("country");
async function get_country() {
  var res = await axios.get(
    "https://www.universal-tutorial.com/api/countries/",
    {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    }
  );
  var country = document.querySelector("#country");
  var html = "";
  let option;
  for (let i = 0; i < res.data.length; i++) {
    html += `<option name=${res.data[i].country_name}>${res.data[i].country_name}</option>`;
    // option=document.createElement('option');
    // option.text=res.data[i].country_name;
    // option.value=res.data[i].country_short_name;
    // dropdown.add(option);
  }
  country.innerHTML += html;
  $('select').formSelect();
}
async function get_state(country) {
  var res = await axios.get(
    `https://www.universal-tutorial.com/api/states/${country}`,
    {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    }
  );
  var state = document.querySelector("#state");
  var html = '<option value="">Select State</option>';
  for (let i = 0; i < res.data.length; i++) {
    html += `<option name=${res.data[i].state_name}>${res.data[i].state_name}</option>`; 
  }
  state.innerHTML += html;
  $('select').formSelect();
}
window.onload = async () => {
  await get_auth_token();
  await get_country();
  var country = document.querySelector("#country");
  var state = document.querySelector("#state");
  country.addEventListener("change", async () => {
    await get_state(country.value);
    state.disabled = false;
  });
};
