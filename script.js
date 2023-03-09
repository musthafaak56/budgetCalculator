//setitem redirect to login
function signup(){
    uname1=sInputUsername.value;
    userid1=sInputUserid.value;
    pword1=sInputPassword.value;

    nameUpper=uname1.charAt(0).toUpperCase()+uname1.slice(1);

    var budgetObj={
        uname: nameUpper,
        uId: sInputUserid.value,
        pword: sInputPassword.value,
        balanceAmount: 0,
        tincome: 0,
        texpense: 0,
        incomesLists:[],
        expensesLists:[]
    };
    

    var storedMemberString = localStorage.getItem(budgetObj.uId);
    if (storedMemberString !== null && storedMemberString !== undefined) 
    {
        var storedMemberObj = JSON.parse(storedMemberString);
        if (storedMemberObj.uId === budgetObj.uId) 
        {
        alert('Member already exists');
        return;
        }
    }
    else
    {
        var budgetUserString=JSON.stringify(budgetObj);
        localStorage.setItem(budgetObj.uId,budgetUserString);
        alert('Registered Successfully!');
        // window.location.replace("0login.html")
        window.location.href="1login.html";
        //or
        // window.location.href="0login.html";
    }
}
function showpassword(){
    const passwordInput=document.getElementById("sInputPassword");;
    console.log(`Before if`,passwordInput);
    console.log(`Before if type`,passwordInput.type);
    if(passwordInput.type==="password")
    {
        passwordInput.type="text";
        console.log(`After if`,passwordInput);
        // document.getElementById("showBtn").textContent = `show`;
        showBtn.innerHTML=`<i class="fa fa-eye-slash"></i>`;
    }
    else
    {
        passwordInput.type="password";
        // document.getElementById("showBtn").textContent = `hide`;
        showBtn.innerHTML=`<i class="fa fa-eye">`;
    }
}

function toLoginPage(){
    window.location.replace("1login.html");
}