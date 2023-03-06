//1. logout
function logout(){
    window.location="1login.html";
}

//getting details of login user
var detailsString=localStorage.getItem("userS");
var detailsObject=JSON.parse(detailsString);



welcomeUser.innerHTML=`<h2>Welcome ${detailsObject.uname}</h2>
                       <h6 class="mt-3">Your Total Balance is</h6>
                       <h3>₹${detailsObject.balanceAmount}/-</h3>
                       <div class="rw3 col-12 mt-3">
                       <!-- <h6 id="tincome">Income <i class="fa-solid fa-arrow-up-right-dots text-success" ></i> <br> ₹3,000</h6> -->
                       <h6 id="tincome"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>
                       <h6 id="texpense"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>
                       </div>`

//2. add income and edit total balance & total income
function addIncome(){

    console.log(detailsString);
    console.log(detailsObject);
    
    //storing to variables
    sourceIncome=srcInc.value;
    dateIncome=dateInc.value;
    amntIncome=amntInc.value;

    //checking
    console.log(sourceIncome);
    console.log(dateIncome);
    console.log(amntIncome);

    //creating an array of object
    incomeList=
    {
        source: sourceIncome,
        date: dateIncome,
        amount: amntIncome
    }

    detailsObject.incomesLists.push(incomeList)
    console.log(`after`,detailsObject);

    localStorage.setItem(detailsObject.uId, JSON.stringify(detailsObject));

    var gDetailsString = localStorage.getItem(detailsObject.uId);
    var gDetailsObject = JSON.parse(gDetailsString);

incomesDisplays.innerHTML=``;
detailsObject.tincome=0;

    for(let i=0;i<gDetailsObject.incomesLists.length;i++)
    {
        incomesDisplays.innerHTML+=`<div class="boxes2 rw5 p-2 mt-3 col-11 ms-sm-4" id="incomeDisplay">
                                 <div id="incicon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                                 <!-- <b class="exptext ms-2 fs-5">Income</b> -->
                                 <b class="typeText fs-4 ms-2">${i+1} ${gDetailsObject.incomesLists[i].source}</b>
                                 <b class="dateText  ms-3">${gDetailsObject.incomesLists[i].date}</b>
                                 <b class="fs-5 text-success ms-3 amountText">+₹${gDetailsObject.incomesLists[i].amount}/-</b>
                                 </div>`

                                 
                                 
                                 console.log(`gDetailsObject.incomesLists.amount`,gDetailsObject.incomesLists[i].amount);
                                 
                                 incomeamntInt = parseInt(gDetailsObject.incomesLists[i].amount);

                                 detailsObject.tincome+=incomeamntInt;
}


localStorage.setItem(detailsObject.uId+`incomeDisplayInnerElements`,incomesDisplays.innerHTML);

for(let details1 of detailsObject.incomesLists)
{
    detailsObject.balanceAmount =detailsObject.tincome-detailsObject.texpense;
}


// for(let j=0;j<detailsObject.incomesLists.length;j++)
// {
//     incomeamntInt=parseInt(detailsObject.incomesLists[j].amount)

//     detailsObject.balanceAmount =detailsObject.tincome-detailsObject.texpense;
//     detailsObject.tincome+=incomeamntInt;
// }


    welcomeUser.innerHTML=`<h2>Welcome ${detailsObject.uname}</h2>
                       <h6 class="mt-3">Your Total Balance is</h6>
                       <h3>₹${detailsObject.balanceAmount}/-</h3>
                       <div class="rw3 col-12 mt-3">
                       <!-- <h6 id="tincome">Income <i class="fa-solid fa-arrow-up-right-dots text-success" ></i> <br> ₹3,000</h6> -->
                       <h6 id="tincome"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>
                       <h6 id="texpense"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>
                       </div>`




}

// Retrieve updated innerHTML from localStorage and set it on incomesDisplays
var savedIncInnerHTML = localStorage.getItem(detailsObject.uId+'incomeDisplayInnerElements');

if (savedIncInnerHTML) {
  incomesDisplays.innerHTML = savedIncInnerHTML;
}

for(let details1 of detailsObject.incomesLists)
{
    detailsObject.tincome += parseInt(details1.amount);
    detailsObject.balanceAmount = detailsObject.tincome - detailsObject.texpense;
}

welcomeUser.innerHTML=`<h2>Welcome ${detailsObject.uname}</h2>
                   <h6 class="mt-3">Your Total Balance is</h6>
                   <h3>₹${detailsObject.balanceAmount}/-</h3>
                   <div class="rw3 col-12 mt-3">
                   <!-- <h6 id="tincome">Income <i class="fa-solid fa-arrow-up-right-dots text-success" ></i> <br> ₹3,000</h6> -->
                   <h6 id="tincome"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>
                   <h6 id="texpense"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>
                   </div>`




//3. add expenseand edit total balance & total income


function addExpense(){

    console.log(detailsString);
    console.log(detailsObject);
    
    //storing to variables
    sourceExpense=srcExp.value;
    dateExpense=dateExp.value;
    amntExpense=amntExp.value;

    //checking
    console.log(sourceExpense);
    console.log(dateExpense);
    console.log(amntExpense);

    //creating an array of object
    expenseList=
    {
        source: sourceExpense,
        date: dateExpense,
        amount: amntExpense
    }

    detailsObject.expensesLists.push(expenseList)
    console.log(`after`,detailsObject);

    localStorage.setItem(detailsObject.uId, JSON.stringify(detailsObject));

    var gDetailsString = localStorage.getItem(detailsObject.uId);
    var gDetailsObject = JSON.parse(gDetailsString);

expensesDisplays.innerHTML=``;
detailsObject.texpense=0;

    for(let i=0;i<gDetailsObject.expensesLists.length;i++)
    {
        // expensesDisplays.innerHTML+=`<div class="boxes2 rw5 p-2 mt-3 col-11 ms-sm-4" id="expenseDisplay">
        //                          <div id="expicon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
        //                          <!-- <b class="exptext ms-2 fs-5">Income</b> -->
        //                          <b class="typeText fs-4 ms-2">${i+1} ${gDetailsObject.expensesLists[i].source}</b>
        //                          <b class="dateText  ms-3">${gDetailsObject.expensesLists[i].date}</b>
        //                          <b class="fs-5 text-success ms-3 amountText">+₹${gDetailsObject.expensesLists[i].amount}/-</b>
        //                          </div>`
        expensesDisplays.innerHTML+=`<div class="boxes2 rw5 p-2 mt-3 col-11 ms-sm-4" id="expenseDisplay">
                                     <div id="expicon"><i class="fa-sharp fa-solid fa-money-bill"></i></div>
                                     <!-- <b class="exptext ms-2 fs-5">Expense</b> -->
                                     <b class="typeText fs-4 ms-2">${i+1} ${gDetailsObject.expensesLists[i].source}</b>
                                     <b class="dateText  ms-3">${gDetailsObject.expensesLists[i].date}</b>
                                     <b class="fs-5 text-danger ms-3 amountText">-₹${gDetailsObject.expensesLists[i].amount}/-</b>
                                     </div>`

                                 
                                 
                                 console.log(`gDetailsObject.expensesLists.amount`,gDetailsObject.expensesLists[i].amount);
                                 
                                 incomeamntInt = parseInt(gDetailsObject.expensesLists[i].amount);

                                 detailsObject.texpense+=incomeamntInt;

}


localStorage.setItem(detailsObject.uId+`expenseDisplayInnerElements`,expensesDisplays.innerHTML);

for(let details1 of detailsObject.expensesLists)
{
    detailsObject.balanceAmount =detailsObject.tincome-detailsObject.texpense;
}


// for(let j=0;j<detailsObject.expensesLists.length;j++)
// {
//     incomeamntInt=parseInt(detailsObject.expensesLists[j].amount)

//     detailsObject.balanceAmount =detailsObject.tincome-detailsObject.texpense;
//     detailsObject.tincome+=incomeamntInt;
// }


    welcomeUser.innerHTML=`<h2>Welcome ${detailsObject.uname}</h2>
                       <h6 class="mt-3">Your Total Balance is</h6>
                       <h3>₹${detailsObject.balanceAmount}/-</h3>
                       <div class="rw3 col-12 mt-3">
                       <!-- <h6 id="tincome">Income <i class="fa-solid fa-arrow-up-right-dots text-success" ></i> <br> ₹3,000</h6> -->
                       <h6 id="tincome"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>
                       <h6 id="texpense"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>
                       </div>`
                       
                       
}

welcomeUser.innerHTML=`<h2>Welcome ${detailsObject.uname}</h2>
                       <h6 class="mt-3">Your Total Balance is</h6>
                       <h3>₹${detailsObject.balanceAmount}/-</h3>
                       <div class="rw3 col-12 mt-3">
                       <!-- <h6 id="tincome">Income <i class="fa-solid fa-arrow-up-right-dots text-success" ></i> <br> ₹3,000</h6> -->
                       <h6 id="tincome"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>
                       <h6 id="texpense"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>
                       </div>`

// Retrieve updated innerHTML from localStorage and set it on expensesDisplays
var savedExpInnerHTML = localStorage.getItem(detailsObject.uId+'expenseDisplayInnerElements');

if (savedExpInnerHTML) {
  expensesDisplays.innerHTML = savedExpInnerHTML;
}

for(let details1 of detailsObject.expensesLists)
{
    detailsObject.tincome += parseInt(details1.amount);
    detailsObject.balanceAmount = detailsObject.tincome - detailsObject.texpense;
}