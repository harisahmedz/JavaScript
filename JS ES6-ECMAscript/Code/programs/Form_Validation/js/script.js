const from = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');
        const cpassword = document.getElementById('cpassword');

        const sendData= (sRate,count,usernam)=>{
            if (sRate===count){
                alert('Registration Successful');
                swal("Welcome! "+usernam, "Registration Successful", "success");
                location.href =`demo.html?username=${usernam}`
            }
        }
        //add Event
        const SuccesMsg = (usernameVal) =>{
            let formCon = document.getElementsByClassName('form-control');
            
            var count = formCon.length-1;
            for(i = 0; i < formCon.length; i++)
            {
                if(formCon[i].className === "form-control success"){
                    var sRate= 0+i;
                    sendData(sRate, count,usernameVal);
                }
                else{
                    return false;
                }
            }
        }

        form.addEventListener('submit', (event) =>{
            event.preventDefault();
            validate();
        });
        //email validation
        const isEmail = (emailVal) => {
            let atSymbol = emailVal.indexOf("@");
            if (atSymbol <1) return false;
            let dot = emailVal.lastIndexOf('.');
            
            if (dot <= atSymbol +2) return false;
            if (dot === emailVal-1) return false;
            return true;
        }
        //define the validate funxtion
        const validate = () =>{
            const usernameVal =username.value.trim();
            const emailVal = email.value.trim();
            const phoneVal = phone.value.trim();
            const passwordVal = password.value.trim();
            const cpasswordVal = cpassword.value.trim();
            //validate username
            if (usernameVal ===""){
                setErrorMsg(username, "username cannot be long");
            }
            else if(usernameVal.length <=2){
                setErrorMsg(username, "username minimum 3 character");
            }
            else{
                setSuccesMsg(username)
            }
//Email Validation
            if (emailVal ===""){
                setErrorMsg(email, "Email cannot be blank");
            }
            else if(!isEmail(emailVal)){
                setErrorMsg(email , "Not Valid Email");
            }
            else{
                setSuccesMsg(email);
            }
//Phone Validation
            if (phoneVal ===""){
                setErrorMsg(phone, "phone Number cannot be blank");
            }
            else if(phoneVal.length != 11){
                setErrorMsg(phone , "Not Valid Phone Number");
            }
            else{
                setSuccesMsg(phone);
            }
            //Pass Validation
            if (passwordVal ===""){
                setErrorMsg(password, "Password cannot be blank");
            }
            else if(passwordVal.length < 6){
                setErrorMsg(password , "Minium 6 Character");
            }
            else{
                setSuccesMsg(password);
            }
            //cPass Validation
            if (cpasswordVal ===""){
                setErrorMsg(cpassword, " Confirm Password cannot be blank");
            }
            else if(cpasswordVal != passwordVal){
                setErrorMsg(cpassword ,"Password Does Not Match");
            }
            else{
                setSuccesMsg(cpassword);
            }
            SuccesMsg(usernameVal);
        }
        function setErrorMsg(input, errorMsg){
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = "form-control error"
            small.innerText = errorMsg

        }
        function setSuccesMsg(input){
            const formControl = input.parentElement;
            formControl.className = "form-control success"
        }