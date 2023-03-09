//1. logout
function logout(){
    window.location="1login.html";
}

//getting details of login user
var usersString=localStorage.getItem("userS");
var usersObject=JSON.parse(usersString);


var detailsString=localStorage.getItem(usersObject.uId)
var detailsObject=JSON.parse(detailsString)

// console.log(usersObject.uId);



//2. add income and edit total balance & total income
function addIncome(){

    // console.log(detailsString);
    // console.log(detailsObject);
    
    //storing to variables
    sourceIncome=srcInc.value;
    dateIncome=dateInc.value;
    amntIncome=amntInc.value;

    //checking
    // console.log(sourceIncome);
    // console.log(dateIncome);
    // console.log(amntIncome);

    //creating an array of object
    incomeList=
    {
        source: sourceIncome,
        date: dateIncome,
        amount: amntIncome
    }

    //pushing incomeList into incomesLists array
    detailsObject.incomesLists.push(incomeList)
    console.log(`after incomelist push=`,detailsObject);

    //setting the detailsObject into localstorage after push
    localStorage.setItem(detailsObject.uId, JSON.stringify(detailsObject));


    //reseting innerHTML to remove duplicate being displayed
incomesDisplays.innerHTML=``;

    for(let i=0;i<detailsObject.incomesLists.length;i++)
    {
        incomesDisplays.innerHTML+=`<div class="boxes2 rw5 p-2 mt-3 col-11 ms-sm-4" id="incomeDisplay">
                                 <div id="incicon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                                 <!-- <b class="exptext ms-2 fs-5">Income</b> -->
                                 <b class="typeText fs-4 ms-2">${i+1} ${detailsObject.incomesLists[i].source}</b>
                                 <b class="dateText  ms-3">${detailsObject.incomesLists[i].date}</b>
                                 <b class="fs-5 text-success ms-3 amountText">+₹${detailsObject.incomesLists[i].amount}/-</b>
                                 </div>`

                                   
                                 console.log(`detailsObject.incomesLists[i].amount=`,detailsObject.incomesLists[i].amount);
                                 
                        
}




localStorage.setItem(detailsObject.uId+`incomeDisplayInnerElements`,incomesDisplays.innerHTML);


// localStorage.setItem(detailsObject.uId+`welcomeUserInnerElements`,welcomeUser.innerHTML);


// Reload the current page
location.reload();
}

// Retrieve updated innerHTML from localStorage and set it on incomesDisplays
var savedIncInnerHTML = localStorage.getItem(detailsObject.uId+'incomeDisplayInnerElements');

if (savedIncInnerHTML) {
  incomesDisplays.innerHTML = savedIncInnerHTML;
}

// //income calculation and balance correction
// detailsObject.tincome=0;
// for (let i = 0; i < detailsObject.incomesLists.length; i++) {
//     detailsObject.tincome += parseInt(detailsObject.incomesLists[i].amount);
//     tincomeId.innerHTML=`<h6 id="tincomeId"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>`;
// }
// detailsObject.balanceAmount = detailsObject.tincome - detailsObject.texpense;
// balanceId.innerHTML=`<h3 id="balanceId">₹${detailsObject.balanceAmount}/-</h3>`;







//3. add expenseand edit total balance & total income





function addExpense(){

    // console.log(detailsString);
    // console.log(detailsObject);
    
    //storing to variables
    var sourceExpense=srcExp.value;
    var dateExpense=dateExp.value;
    var amntExpense=amntExp.value;

    //checking
    // console.log(sourceExpense);
    // console.log(dateExpense);
    // console.log(amntExpense);

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

    // var DetailsString = localStorage.getItem(detailsObject.uId);
    // var detailsObject = JSON.parse(DetailsString);

expensesDisplays.innerHTML=``;


    for(let i=0;i<detailsObject.expensesLists.length;i++)
    {
        expensesDisplays.innerHTML+=`<div class="boxes2 rw5 p-2 mt-3 col-11 ms-sm-4" id="expenseDisplay">
                                     <div id="expicon"><i class="fa-sharp fa-solid fa-money-bill"></i></div>
                                     <!-- <b class="exptext ms-2 fs-5">Expense</b> -->
                                     <b class="typeText fs-4 ms-2">${i+1} ${detailsObject.expensesLists[i].source}</b>
                                     <b class="dateText  ms-3">${detailsObject.expensesLists[i].date}</b>
                                     <b class="fs-5 text-danger ms-3 amountText">-₹${detailsObject.expensesLists[i].amount}/-</b>
                                     </div>`

                                 
                                 
                                 console.log(`detailsObject.expensesLists.amount`,detailsObject.expensesLists[i].amount);
                                 

    }


localStorage.setItem(detailsObject.uId+`expenseDisplayInnerElements`,expensesDisplays.innerHTML);


// //expense calculation and balance correction
// detailsObject.texpense=0;
// for (i = 0; i < detailsObject.expensesLists.length; i++) {
//     detailsObject.texpense += parseInt(detailsObject.expensesLists[i].amount);
//     texpenseId.innerHTML= `<h6 id="texpenseId"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>`;
// }
// detailsObject.balanceAmount = detailsObject.tincome - detailsObject.texpense;
// balanceId.innerHTML=`<h3 id="balanceId">₹${detailsObject.balanceAmount}/-</h3>`;


// Reload the current page
location.reload();                     
}



// //expense calculation and balance correction
// detailsObject.texpense=0;
// for (i = 0; i < detailsObject.expensesLists.length; i++) {
//     detailsObject.texpense += parseInt(detailsObject.expensesLists[i].amount);
//     texpenseId.innerHTML= `<h6 id="texpenseId"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>`;
// }
// detailsObject.balanceAmount = detailsObject.tincome - detailsObject.texpense;
// balanceId.innerHTML=`<h3 id="balanceId">₹${detailsObject.balanceAmount}/-</h3>`;


// Retrieve updated innerHTML from localStorage and set it on expensesDisplays
var savedExpInnerHTML = localStorage.getItem(detailsObject.uId+'expenseDisplayInnerElements');

if (savedExpInnerHTML) {
  expensesDisplays.innerHTML = savedExpInnerHTML;
}



// Using onload with the window object
window.onload = function() {
    welcomeUserId.innerHTML=`Welcome ${detailsObject.uname}`

        //income calculation 
detailsObject.tincome=0;
for (let i = 0; i < detailsObject.incomesLists.length; i++) {
    detailsObject.tincome += parseInt(detailsObject.incomesLists[i].amount);
}
tincomeId.innerHTML=`<h6 id="tincomeId"><i class="fa-regular fa-circle-up text-success"></i> Total Income <br> ₹${detailsObject.tincome}/-</h6>`;

//expense calculation 
detailsObject.texpense=0;
for (i = 0; i < detailsObject.expensesLists.length; i++) {
    detailsObject.texpense += parseInt(detailsObject.expensesLists[i].amount);
}
texpenseId.innerHTML= `<h6 id="texpenseId"><i class="fa-regular fa-circle-down text-danger"></i> Total Expense<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹${detailsObject.texpense}/-</h6>`;

//balance correction
detailsObject.balanceAmount = detailsObject.tincome - detailsObject.texpense;
balanceId.innerHTML=`<h3 id="balanceId">₹${detailsObject.balanceAmount}/-</h3>`;

};