var p = document.getElementById('PopUpConteiner');
var pb = document.getElementById('PopUpBody');
var pbg = document.getElementById('PopUpBackground');


function PopUp(){
    if (p.classList.contains("hidden")&&pbg.classList.contains("hidden")){
        p.classList.remove("hidden");
        pb.classList.remove("hidden");
        pbg.classList.remove("hidden");
        p.classList.remove("SlowHidden");
        pb.classList.remove("SlowHidden");
        pbg.classList.remove("SlowHidden");
    }else{
        setTimeout(()=>p.classList.add("hidden"),1000);
        pb.classList.add("SlowHidden");
        pbg.classList.add("SlowHidden");
        setTimeout(()=>pbg.classList.add("hidden"),300);
    }
};

document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
        setTimeout(()=>p.classList.add("hidden"),1000);
        pb.classList.add("SlowHidden");
        setTimeout(()=>pbg.classList.add("hidden"),300);
    }
});

pbg.addEventListener("mouseover", PopUp);


window.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById('SubmitButton');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    
    [].forEach.call( document.querySelectorAll('.phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            val_l = new_value; 
            new_value = new_value.slice(0, i);
            // console.log(i);
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58 || keyCode == 8) {
            this.value = new_value;
            if(this.value.length==18){
                button.classList.remove("disablePhone");
                buttonEnabler();
                //console.log(this.value.length);
            }else{
                button.classList.add("disablePhone");
                buttonEnabler();
                //console.log(this.value.length);
            }
        }
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    //input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
    input.addEventListener("keyup", mask, false);
    //input.addEventListener("mouseover", mask, false);
    //input.addEventListener("mouseout", mask, false);

  });

    
    function mailVal() {
        if (email.value) {
            button.classList.remove('disableEmail');
            buttonEnabler();
        }else{
            button.classList.add('disableEmail');
            buttonEnabler();
        }
    };
    email.addEventListener("keydown", mailVal);
    email.addEventListener("keyup", mailVal);
     
    function buttonEnabler(){
        if (button.classList.contains("disablePhone") || button.classList.contains("disableEmail")){

            button.setAttribute('disabled', '');
        }else{
            button.removeAttribute('disabled');   
        }
    }

    
    
});
