$(function(){
    $.validator.addMethod('phoneNumber',function(value,element){
        return this.optional(element)
        || value.length===10
        && /\d/.test(value);
    },"Please enter only 10 digits")
    $.validator.addMethod('pinCode',function(value,element){
        return this.optional(element)
        || value.length>=5
        && /\d/.test(value);
    },"Please enter correct Pincode")

    $.validator.setDefaults({
        errorPlacement: function(error,element){
            if(element.prop('type')==='text'){
            //   $('<br/>').insertBefore(element);
            //     error.insertBefore(element);
                error.appendTo(element.next("small"));
               
            }

        }
    })
    $("#form_id").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            fname:{
                required:true,
                nowhitespace:true,
                lettersonly:true
                

            },
            lname:{
                required:true

            },
            phone_number:{
                required:true,
                phoneNumber:true

            },
            addr1:{
                required:true
            },
            pincode:{
                required:true,
                pinCode:true
            }
        },
        messages:{
            email:{
                required:"Email cannot be empty",
                email:"Please enter a valid email address"

            },
            fname:{
                required:"First Name cannot be empty",
                nowhitespace:"First Name cannot have any space",
                lettersonly:"Name cannot have digits",
                
            },
            lname:{
                required:"Last Name cannot be empty"
            },
            addr1:{
                required:"The address field cannot be empty"
            },
            pincode:{
                required:"Please enter pincode"

            },
            phone_number:{
                required:"Please enter the phone number"
            }
        }
    })

})
