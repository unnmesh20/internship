export default function validateInfo(values){
    let errors={}
    if(!values.first_name.trim()){
        errors.first_name="First Name required";
    }
    if(!values.last_name.trim()){
        errors.last_name="Last Name required";
    }
    if(!values.phone){
        errors.phone="Phone number required";
        //console.log(values.phone);
    }
    else if(values.phone.length!=10){
        errors.phone="Phone Number should have 10 digits";
    }

    if(!values.email){
        errors.email="Email required";
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if(!values.address1){
        errors.address1="Address cannot be empty";
    }
    if(!values.pincode){
        errors.pincode="Pincode cannot be empty";
    }
    if(!values.percentage10){
        errors.percentage10="10th marks required";
    }else if (values.percentage10.value > 100) {
        errors.percentage10 = "10th marks cannot be greater than 100";
    }
    
    if(!values.percentage12){
        errors.percentage12="12th marks required";
    }
    if(!values.cgpa){
        errors.cgpa="CGPA required";
    }
        return errors;

    
}