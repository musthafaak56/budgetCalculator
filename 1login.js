//check //getitem //redirect to home
function login(){
    //1. fetch the input details from login page
    var loginUserId=logInputUserid.value;
    var loginPassword=logInputPassword.value;
    
console.log(loginPassword);

    if(loginUserId in localStorage)
    {
        memString=localStorage.getItem(loginUserId);
        memObj=JSON.parse(memString);

        // console.log(memObj.pword);
        
        //compare loginPassword
        if(loginPassword==memObj.pword)
        {
            alert('Login Successful');
            window.location="./1home.html";
            localStorage.setItem("userS",memString)
        }
        else
        {
            alert('Incorrect Password')
        }
    }
    else
    {
        alert('Incorrect User Id');
    }
}
function showpassword(){
    const varPassword=document.getElementById("logInputPassword");;
    console.log(`Before if`,varPassword);
    console.log(`Before if type`,varPassword.type);
    if(varPassword.type==="password")
    {
        varPassword.type="text";
        console.log(`After if`,varPassword);
        // document.getElementById("showBtn").textContent = `show`;
        showBtn.innerHTML=`<i class="fa fa-eye-slash"></i>`;
    }
    else
    {
        varPassword.type="password";
        // document.getElementById("showBtn").textContent = `hide`;
        showBtn.innerHTML=`<i class="fa fa-eye">`;
    }
}

function toSignupPage(){
    window.location.replace("index.html");
}