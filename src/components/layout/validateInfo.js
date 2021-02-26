export default function validateInfo(values){
    let errors={};
    // if(!values.first_name.trim()){
    //     errors.first_name="First Name required";
    // }
    // if(!values.last_name.trim()){
    //     errors.last_name="Last Name required";
    // }
    // if(!values.phone){
    //     errors.phone="Phone number required";
    //     //console.log(values.phone);
    // }
    // else if(values.phone.length!=10){
    //     errors.phone="Phone Number should have 10 digits";
    // }

    // if(!values.email){
    //     errors.email="Email required";
    // }
    // else 
    // if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = 'Email address is invalid';
    // }

    // if(!values.address1){
    //     errors.address1="Address cannot be empty";
    // }
    // if(!values.pincode){
    //     errors.pincode="Pincode cannot be empty";
    // }
    // // // debugger
    // if(!values.percentage10){
    //     errors.percentage10="10th marks required";
    //     console.log(values.percentage10);
    // }else if (parseInt(values.percentage10) >100) {
    //     errors.percentage10 = "10th marks cannot be greater than 100";
    //     errors.percentage10 = "10th marks cannot be greater than 100";
    //    console.log(typeof(parseInt(values.percentage10)));

    // }
    // if(!values.percentage12){
    //     errors.percentage12="12th marks required";
    // }
    // if(!values.cgpa){
    //     errors.cgpa="CGPA required";
    // }
    rejectIfNotWithin(values,"percentage10",errors,0,100);
    rejectIfNotWithin(values,"percentage12",errors,0,100);
    rejectIfNotWithin(values,"cgpa",errors,0,10);
    rejectIfNull(values, "email", errors);
    rejectIfNull(values,"first_name",errors);
    rejectIfNull(values,"last_name",errors);
    rejectIfNull(values,"phone",errors);
    rejectIfNull(values,"percentage10",errors);
    rejectIfNull(values,"percentage12",errors);
    rejectIfNull(values,"cgpa",errors);
    rejectIfNull(values,"address1",errors);
    rejectIfNull(values,"pincode",errors);
    
        return errors;


    
}

function  rejectIfNull (values, parameter, errors) 
{
    if(!values[parameter])
    {
        errors[parameter] = `This field is required`;
    }
}

function rejectIfNotWithin(values, parameter, errors, min, max)
{
    if(values[parameter] && (parseFloat(values)<min || parseFloat(values[parameter])>max ))
    {
        errors[parameter] = `This field should be within ${min} and ${max}`
    }
}



// function validateAllForEmpty(values, errors)
// {
//     let map = new Map(values);
//     map.forEach((k,v) => {
//         rejectIfNull(values, k,errors)
//     })
// }

// function validateEmail(){
//     console.log("vE");
// }
