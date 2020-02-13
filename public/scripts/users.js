//var forTooltip = $('.form-control');
    //var toast = document.getElementById('toast');
           /* $('#Name').tooltip({
            title: "Please enter address"
        });*/
        // $('.toast').toast('show');
    const signupForm = document.signupForm;
    var UserName = document.getElementById('UserName');
    var PhoneNumber = document.getElementById('PhoneNumber');
    var EmailAdress = document.getElementById('EmailAdress');
    var Select = document.getElementById('SelectInput');
    var DeliveryType = document.getElementById('deliveryType');
    var Address = document.getElementById('Adress');
    var Items = document.getElementById('Items');
    var CardNumber = document.getElementById('CreditCard');
    var ExpiringDate = document.getElementById('ExpiringDate');
    var CardName = document.getElementById('CardName');
    var CardCode = document.getElementById('CardCode');
    var CheckBox = document.getElementById('checkBox');
    var alert_success = document.getElementById('alert-success');
    var alert_danger = document.getElementById('alert-danger');
    var button = $('#submitbtn');

    var regexForPhoneNumber = /^[\d]{9,11}$/;
    var regexForEmailAddres = /^([a-z\d]{2,})@([a-z]{2,7})\.([a-z]{2,3})(\.[a-z]{2,3})?/;
    var regexForCardNumber = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    var regexForExpiringDate = /^(0[1-9]|1[0-2]|[1-9])\/(1[4-9]|[2-9][0-9]|20[1-9][1-9])$/;
    var RegexCardCode = /^[0-9]{3}$/;
    
    function validatePhoneNumber(){
        if(!regexForPhoneNumber.test(PhoneNumber.value)){
            PhoneNumber.classList.add('is-invalid');
            PhoneNumber.classList.remove('is-valid');
            PhoneNumber.focus();
            return false;   
        }else{
            PhoneNumber.classList.remove('is-valid');
            PhoneNumber.classList.remove('is-invalid');
            return true;
        } 
    }

    function validateEmailAddress(){
        if(!regexForEmailAddres.test(EmailAdress.value)){
            EmailAdress.classList.add('is-invalid');
            EmailAdress.classList.remove('is-valid');
            EmailAdress.focus();
            return false;
        }else{
            EmailAdress.classList.remove('is-invalid');
            EmailAdress.classList.add('is-valid');
            return true
        }
    }

    function validateCardNumber(){
        if(!regexForCardNumber.test(CardNumber.value)){
            CardNumber.classList.add('is-invalid');
            CardNumber.classList.remove('is-valid');
            CardNumber.focus();
            return false;
        }else{
            CardNumber.classList.remove('is-invalid');
            CardNumber.classList.add('is-valid');
            return true;
        }
    }

    function validateCardCode(){
        if(!RegexCardCode.test(CardCode.value)){
            CardCode.classList.add('is-invalid');
            CardCode.classList.remove('is-valid');
            CardCode.focus();
            return false;
        }else{
            CardCode.classList.remove('is-invalid');
            CardCode.classList.add('is-valid');
            return true;
        }
    }

    function validateExpiringDate(){
        if(!regexForExpiringDate.test(ExpiringDate.value)){
            ExpiringDate.classList.add('is-invalid');
            ExpiringDate.classList.remove('is-valid');
            ExpiringDate.focus();
            return false;
        }else{
            ExpiringDate.classList.remove('is-invalid');
            ExpiringDate.classList.add('is-valid');
            return true;
        }
    }    

$(document).ready(function () {
    $('#loadDatePicker').datepicker({
        format : "mm/yyyy",
        autoclose : true
    }); 

    PhoneNumber.addEventListener('mouseenter', function(){
        $(this).tooltip({
            title: "enter valid phone number eg 07033345695"
        })
    });

    EmailAdress.addEventListener('mouseenter', function(){
        $(this).tooltip({title: "enter valid a valid email address e.g ugoform@gmail.com"});
    });

    CardNumber.addEventListener('mouseenter', function(event){
        $(this).tooltip({title: "enter a valid credit card number"});
    });

    ExpiringDate.addEventListener('mouseenter', function(){
        $(this).tooltip({title: "enter the expiring date of your card"});
    });

    CardCode.addEventListener('mouseenter', function(){
        $(this).tooltip({title: "enter the three digit numbers at the back of your card e.g 232"});
    });

    PhoneNumber.addEventListener('keyup', function(event){
        $(this).tooltip({
            title: "enter valid phone number eg 07033345695"
        })
        if(!regexForPhoneNumber.test(event.target.value)){
            event.target.classList.add('is-invalid');
            event.target.classList.remove('is-valid');
        }else{
            $(this).tooltip('dispose');
            event.target.classList.add('is-valid');
            event.target.classList.remove('is-invalid');
        }
    });

    EmailAdress.addEventListener('keyup', function(event){
        $(this).tooltip({
            title: "enter valid email adress e.g ugoform@gmail.com"
        })
        if(!regexForEmailAddres.test(event.target.value)){
            event.target.classList.add('is-invalid');
            event.target.classList.remove('is-valid');
        }else{
            $(this).tooltip('dispose');
            event.target.classList.add('is-valid');
            event.target.classList.remove('is-invalid');
        }
    });

    CardNumber.addEventListener('keyup', function(event){
        $(this).tooltip({
            title: "enter the card number of your credit card: card number must be a valid one"
        })
        if(!regexForCardNumber.test(event.target.value)){
            event.target.classList.add('is-invalid');
            event.target.classList.remove('is-valid');
        }else{
            $(this).tooltip('dispose');
            event.target.classList.remove('is-invalid');
            event.target.classList.add('is-valid');
        }
    });

    CardCode.addEventListener('keyup', function(e){
        $(this).tooltip({
            title: "enter the 3 digit code at the back of ur card e.g 237"
        })
        if(! RegexCardCode.test(e.target.value)){
            e.target.classList.add('is-invalid');
            e.target.classList.remove('is-valid');
        }else{
            $(this).tooltip('dispose');
            e.target.classList.remove('is-invalid');
            e.target.classList.add('is-valid');
        }
    });

    ExpiringDate.addEventListener('keyup', function(e){
        $(this).tooltip({
            title: "enter a valid card expiring date e.g 02/22"
        })
        if(!regexForExpiringDate.test(e.target.value)){
            e.target.classList.add('is-invalid');
            e.target.classList.remove('is-valid');
        }else{
            $(this).tooltip('dispose');
            e.target.classList.remove('is-invalid');
            e.target.classList.add('is-valid');
        }
    });

    function loadDataToServer(){
        var postUsers = {
            UserName : UserName.value,
            PhoneNumber : PhoneNumber.value,
            EmailAddress : EmailAdress.value,
            Select : Select.value,
            DeliveryType : DeliveryType.value,
            Adress : Address.value,
            Item : Items.value,
            CardNumber : CardNumber.value,
            ExpiringDate : ExpiringDate.value,
            CardName : CardName.value,
            CardCode : CardCode.value,
       }

        $.ajax({
            method : 'POST',
            url : '/users/postUsers',
            dataType : 'json',
            data : postUsers,
            success : function(){
                console.log('Successfully registered');
                signupForm.reset();
                PhoneNumber.classList.remove('is-valid');
                PhoneNumber.classList.remove('is-invalid');
                EmailAdress.classList.remove('is-valid');
                EmailAdress.classList.remove('is-invalid');
                CardNumber.classList.remove('is-valid');
                CardNumber.classList.remove('is-invalid');
                ExpiringDate.classList.remove('is-valid');
                ExpiringDate.classList.remove('is-invalid');
                CardCode.classList.remove('is-valid');
                CardCode.classList.remove('is-invalid');
                UserName.focus();
                UserName.blur();
                alert_success.style.display = 'block';
                setTimeout(function() {
                    $('#alert-success').fadeOut(); //or fadeOut
                  }, 5000);
            },
            error : function(){
                console.log('A User Already Has This Email Adress !! Try Another One');
                EmailAdress.value = '';
                EmailAdress.classList.add('is-invalid');
                EmailAdress.focus();
                EmailAdress.blur()
                alert_danger.style.display = 'block';
                setTimeout(function() {
                    $('#alert-danger').fadeOut(); //or fadeOut
                  }, 5000);
            } 
        });

    }
   $(document).on('keypress', function(event){ 
        if(event.keyCode === 13){
            event.preventDefault();
            if(checkIfUserNameIsEmpty() && checkIfPhoneNumberIsEmpty() && checkIfEmailAddressIsEmpty() && checkIfSelectIsEmpty() && checkIfDeliveryTypeIsEmpty() && checkIfAdressIsEmpty() && checkIfItemIsEmpty() && checkIfCardNumberIsEmpty() && checkIfExpiringDateIsEmpty() && checkIfCardNameIsEmpty() && checkIfCardCodeIsEmpty() && checkIfCheckBoxIsCheck()){
                if(validatePhoneNumber() && validateCardNumber() && validateEmailAddress() && validateExpiringDate() && validateCardCode()){
                    loadDataToServer()
                   // history.go(0);
               }
            }
        }
    });
    button.on('click', function(e){
        e.preventDefault();
        if(checkIfUserNameIsEmpty() && checkIfPhoneNumberIsEmpty() && checkIfEmailAddressIsEmpty() && checkIfSelectIsEmpty() && checkIfDeliveryTypeIsEmpty() && checkIfAdressIsEmpty() && checkIfItemIsEmpty() && checkIfCardNumberIsEmpty() && checkIfExpiringDateIsEmpty() && checkIfCardNameIsEmpty() && checkIfCardCodeIsEmpty() && checkIfCheckBoxIsCheck()){
            if(validatePhoneNumber() && validateCardNumber() && validateEmailAddress() && validateExpiringDate() && validateCardCode()){
                loadDataToServer()
               // history.go(0);
           }
        }
    });
   function checkIfUserNameIsEmpty(){
       if(UserName.value === '' || UserName.value.trim() === ''){
       UserName.classList.remove('is-valid');
        UserName.classList.add('is-invalid');
        UserName.focus();
        return false;
       }else{
        UserName.classList.remove('is-invalid');
        UserName.classList.remove('is-valid');
           return true;
       }
   }
   function checkIfPhoneNumberIsEmpty(){
        if(PhoneNumber.value === '' || PhoneNumber.value.trim() === ''){
            PhoneNumber.classList.remove('is-valid');
            PhoneNumber.classList.add('is-invalid');
            PhoneNumber.focus();
            return false;
        }else{
            PhoneNumber.classList.remove('is-invalid');
            PhoneNumber.classList.remove('is-valid');
             return true;
        }
   }

   function checkIfEmailAddressIsEmpty(){
       if(EmailAdress.value === '' || EmailAdress.value.trim() === ''){
            EmailAdress.classList.remove('is-valid');
            EmailAdress.classList.add('is-invalid');
            EmailAdress.focus();
            return false;
       }else{
        EmailAdress.classList.remove('is-invalid');
        EmailAdress.classList.remove('is-valid');
        return true;
       }
   }

   function checkIfSelectIsEmpty(){
    if(Select.value === '' || Select.value.trim() === ''){
        Select.classList.remove('is-valid');
        Select.classList.add('is-invalid');
        Select.focus();
        return false;
    }else{
        Select.classList.remove('is-invalid');
        Select.classList.remove('is-valid');
        return true;
    }
}
 function checkIfDeliveryTypeIsEmpty(){
     if(DeliveryType.value === '' || DeliveryType.value.trim() === ''){
        DeliveryType.classList.remove('is-valid');
        DeliveryType.classList.add('is-invalid');
        DeliveryType.focus();
        return false;
     }else{
        DeliveryType.classList.remove('is-invalid');
        DeliveryType.classList.remove('is-valid');
        return true;
     }
 }

 function checkIfAdressIsEmpty(){
     if(Address.value === '' || Address.value.trim() === ''){
        Address.classList.remove('is-valid');
        Address.classList.add('is-invalid');
        Address.focus();
        return false;
     }else{
         Address.classList.remove('is-invalid');
         Address.classList.remove('is-valid');
         return true;
     }
 }

 function checkIfItemIsEmpty(){
    if(Items.value === '' || Items.value.trim() === ''){
        Items.classList.remove('is-valid');
        Items.classList.add('is-invalid');
        Items.focus();
       return false;
    }else{
        Items.classList.remove('is-invalid');
        Items.classList.remove('is-valid');
        return true;
    }
}

function checkIfCardNumberIsEmpty(){
    if(CardNumber.value === '' || CardNumber.value.trim() === ''){
        CardNumber.classList.remove('is-valid');
        CardNumber.classList.add('is-invalid');
        CardNumber.focus();
       return false;
    }else{
        CardNumber.classList.remove('is-invalid');
        CardNumber.classList.remove('is-valid');
        return true;
    }
}

function checkIfExpiringDateIsEmpty(){
    if(ExpiringDate.value === '' || ExpiringDate.value.trim() === ''){
        ExpiringDate.classList.remove('is-valid');
        ExpiringDate.classList.add('is-invalid');
        ExpiringDate.focus();
       return false;
    }else{
        ExpiringDate.classList.remove('is-invalid');
        ExpiringDate.classList.remove('is-valid');
        return true;
    }
}

function checkIfCardNameIsEmpty(){
    if(CardName.value === '' || CardName.value.trim() === ''){
        CardName.classList.remove('is-valid');
        CardName.classList.add('is-invalid');
        CardName.focus();
       return false;
    }else{
        CardName.classList.remove('is-invalid');
        CardName.classList.remove('is-valid');
        return true;
    }
}

function checkIfCardCodeIsEmpty(){
    if(CardCode.value === '' || CardName.value.trim() === ''){
        CardCode.classList.remove('is-valid');
        CardCode.classList.add('is-invalid');
        CardCode.focus();
       return false;
    }else{
        CardCode.classList.remove('is-invalid');
        CardCode.classList.remove('is-valid');
        return true;
    }
}

function checkIfCheckBoxIsCheck(){
    if($('input[name ="form-check-input"]').is(":checked")){ 
        var ensureCheked = document.getElementById('checkBox');
        ensureCheked.classList.remove('is-invalid');
        ensureCheked.classList.remove('is-valid');
        return true
    }else{
        var ensureCheked = document.getElementById('checkBox');
        ensureCheked.classList.add('is-invalid');
        ensureCheked.classList.remove('is-valid');
        return false;
        }
    }

});

/* 
PhoneNumber.addEventListener('mouseenter', function(){
        $(this).tooltip({
            title: "enter valid phone number eg 07033345695"
        })
    });
    PhoneNumber.addEventListener('mouseleave', function(){
        $(this).tooltip('dispose');
    });

    EmailAdress.addEventListener('mouseenter', function(){
        $(this).tooltip({title: "enter valid a valid email address e.g ugoform@gmail.com"});
    });

    EmailAdress.addEventListener('mouseleave', function(){
        $(this).tooltip('dispose');
    });

    CardNumber.addEventListener('mouseenter', function(event){
        $(this).tooltip({title: "enter a valid credit card number"});
    });

    CardNumber.addEventListener('mouseleave', function(){
        $(this).tooltip('dispose');
    });

    ExpiringDate.addEventListener('mouseenter', function(){
        $(this).tooltip({title: "enter the expiring date of your card"});
    });

    ExpiringDate.addEventListener('mouseleave', function(){
        $(this).tooltip('dispose');
    });

    CardCode.addEventListener('mouseenter', function(){
        $(this).tooltip({title: "enter the three digit numbers at the back of your card e.g 233"});
    });

    CardCode.addEventListener('mouseleave', function(){
        $(this).tooltip('dispose');
    });

*/