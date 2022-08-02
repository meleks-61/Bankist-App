//   /////////////////////////////////////////////////
//   // Elements
//   const labelWelcome = document.querySelector('.welcome');
//   const labelDate = document.querySelector('.date');
//   const labelBalance = document.querySelector('.balance__value');
//   const labelSumIn = document.querySelector('.summary__value--in');
//   const labelSumOut = document.querySelector('.summary__value--out');
//   const labelSumInterest = document.querySelector('.summary__value--interest');
//   const labelTimer = document.querySelector('.timer');

//   const containerApp = document.querySelector('.app');
//   const containerMovements = document.querySelector('.movements');

//   const btnLogin = document.querySelector('.login__btn');
//   const btnTransfer = document.querySelector('.form__btn--transfer');
//   const btnLoan = document.querySelector('.form__btn--loan');
//   const btnClose = document.querySelector('.form__btn--close');
//   const btnSort = document.querySelector('.btn--sort');

//   const inputLoginUsername = document.querySelector('.login__input--user');
//   const inputLoginPin = document.querySelector('.login__input--pin');
//   const inputTransferTo = document.querySelector('.form__input--to');
//   const inputTransferAmount = document.querySelector('.form__input--amount');
//   const inputLoanAmount = document.querySelector('.form__input--loan-amount');
//   const inputCloseUsername = document.querySelector('.form__input--user');
//   const inputClosePin = document.querySelector('.form__input--pin');

//   /////////////////////////////////////////////////
//   // Functions

//   const displayMovements = function (movements, sort = false) {
//     containerMovements.innerHTML = '';

//     const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//     movs.forEach(function (mov, i) {
//       const type = mov > 0 ? 'deposit' : 'withdrawal';

//       const html = `
//         <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//         i + 1
//       } ${type}</div>
//           <div class="movements__value">${mov}€</div>
//         </div>
//       `;

//       containerMovements.insertAdjacentHTML('afterbegin', html);
//     });
//   };

//   const calcDisplayBalance = function (acc) {
//     acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//     labelBalance.textContent = `${acc.balance}€`;
//   };

//   const calcDisplaySummary = function (acc) {
//     const incomes = acc.movements
//       .filter(mov => mov > 0)
//       .reduce((acc, mov) => acc + mov, 0);
//     labelSumIn.textContent = `${incomes}€`;

//     const out = acc.movements
//       .filter(mov => mov < 0)
//       .reduce((acc, mov) => acc + mov, 0);
//     labelSumOut.textContent = `${Math.abs(out)}€`;

//     const interest = acc.movements
//       .filter(mov => mov > 0)
//       .map(deposit => (deposit * acc.interestRate) / 100)
//       .filter((int, i, arr) => {
//         // console.log(arr);
//         return int >= 1;
//       })
//       .reduce((acc, int) => acc + int, 0);
//     labelSumInterest.textContent = `${interest}€`;
//   };

//   const createUsernames = function (accs) {
//     accs.forEach(function (acc) {
//       acc.username = acc.owner
//         .toLowerCase()
//         .split(' ')
//         .map(name => name[0])
//         .join('');
//     });
//   };
//   createUsernames(accounts);

//   const updateUI = function (acc) {
//     // Display movements
//     displayMovements(acc.movements);

//     // Display balance
//     calcDisplayBalance(acc);

//     // Display summary
//     calcDisplaySummary(acc);
//   };

//   ///////////////////////////////////////
//   // Event handlers
//   let currentAccount;

//   btnLogin.addEventListener('click', function (e) {
//     // Prevent form from submitting
//     e.preventDefault();

//     currentAccount = accounts.find(
//       acc => acc.username === inputLoginUsername.value
//     );
//     console.log(currentAccount);

//     if (currentAccount?.pin === Number(inputLoginPin.value)) {
//       // Display UI and message
//       labelWelcome.textContent = `Welcome back, ${
//         currentAccount.owner.split(' ')[0]
//       }`;
//       containerApp.style.opacity = 100;

//       // Clear input fields
//       inputLoginUsername.value = inputLoginPin.value = '';
//       inputLoginPin.blur();

//       // Update UI
//       updateUI(currentAccount);
//     }
//   });

//   btnTransfer.addEventListener('click', function (e) {
//     e.preventDefault();
//     const amount = Number(inputTransferAmount.value);
//     const receiverAcc = accounts.find(
//       acc => acc.username === inputTransferTo.value
//     );
//     inputTransferAmount.value = inputTransferTo.value = '';

//     if (
//       amount > 0 &&
//       receiverAcc &&
//       currentAccount.balance >= amount &&
//       receiverAcc?.username !== currentAccount.username
//     ) {
//       // Doing the transfer
//       currentAccount.movements.push(-amount);
//       receiverAcc.movements.push(amount);

//       // Update UI
//       updateUI(currentAccount);
//     }
//   });

//   btnLoan.addEventListener('click', function (e) {
//     e.preventDefault();

//     const amount = Number(inputLoanAmount.value);

//     if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//       // Add movement
//       currentAccount.movements.push(amount);

//       // Update UI
//       updateUI(currentAccount);
//     }
//     inputLoanAmount.value = '';
//   });

//   btnClose.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (
//       inputCloseUsername.value === currentAccount.username &&
//       Number(inputClosePin.value) === currentAccount.pin
//     ) {
//       const index = accounts.findIndex(
//         acc => acc.username === currentAccount.username
//       );
//       console.log(index);
//       // .indexOf(23)

//       // Delete account
//       accounts.splice(index, 1);

//       // Hide UI
//       containerApp.style.opacity = 0;
//     }

//     inputCloseUsername.value = inputClosePin.value = '';
//   });

//   let sorted = false;
//   btnSort.addEventListener('click', function (e) {
//     e.preventDefault();
//     displayMovements(currentAccount.movements, !sorted);
//     sorted = !sorted;
//   });
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Elements

const loginEl = document.querySelector(".login__btn");
const userInputEl = document.querySelector(".login__input--user");
const pınInputEl = document.querySelector(".login__input--pin");
const messageEl = document.querySelector(".welcome");
const containerMov = document.querySelector(".movements");
const balanceEl =document.querySelector(".balance__value")
const summaryIn =document.querySelector(".summary__value--in")
const summaryOut =document.querySelector(".summary__value--out")
const summaryInt = document.querySelector(".summary__value--interest")
const transferTo=document.querySelector(".form__input--to")
const transferAmn=document.querySelector(".form__input--amount")
const transferBtn =document.querySelector(".form__btn--transfer")
//Functions

//displayMovements
const displayMovements = (acc) => {
  containerMov.innerHTML = "";
  acc.movements.forEach(function(mov, i) {
    console.log(mov)
    
    const typee = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
<div class="movements__type movements__type--${typee}">${i + 1}${typee}</div>
<div class="movements__date">3 days ago</div>
<div class="movements__value">${mov}</div>
</div>
`;
console.log(html)

    containerMov.insertAdjacentHTML('afterbegin', html);
  });
};


//createUserName
const createUserName = (accs) => {
  accs.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((e) => e[0])
      .join("");
  });
};


//calcPrintBalance

const calcPrintBalance = (acc)=>{
  acc.balance = acc.movements.reduce((acc,mov)=>  acc+mov,0)
  // const balance = acc.movements.reduce((acc,mov)=>  acc+mov,0)
  balanceEl.textContent=`${acc.balance}€`
  // acc.balance=balance

}
//calcPrintSummary
const calcPrintSummary =(acc)=>{
  const incomes=acc.movements.filter(mov => mov>0).reduce((acc,mov)=> acc+mov,0)
  summaryIn.textContent= `${incomes}€`

  const outcomes=Math.abs(acc.movements.filter(mov => mov<0).reduce((acc,mov)=> acc+mov,0))
  summaryOut.textContent= `${outcomes}€`
  
  const interest= acc.movements.filter(mov=>mov>0)
  .map(mov=>(mov*acc.interestRate)/100)
  .filter(mov=>mov>1)
  .reduce((acc,cur)=>acc+cur,0)
  summaryInt.textContent=`${interest}€`



}
//updatedUI
const updatedUI= (acc)=>{
   //display movements
   displayMovements(acc);

   //display balance
   calcPrintBalance(acc)

   //display summary
   calcPrintSummary(acc)

}






createUserName(accounts);
// accounts.forEach((e) => console.log(e.userName));
//EVENTS

let currentAcc;
loginEl.addEventListener("click", (e) => {
  e.preventDefault();
  currentAcc = accounts.find(
    (e) => e.userName === userInputEl.value.toLowerCase()
  );
  // console.log(currentAcc.pin)
  // console.log(pınInputEl.value)
  if (currentAcc?.pin === Number(pınInputEl.value)) {
    //Display UI and massege

    messageEl.textContent = ` Welcome back, ${currentAcc.owner.split(" ")[0]}`;
    // console.log(messageEl.textContent)

    //clear input fields
    userInputEl.value=pınInputEl.value=""
    pınInputEl.blur()
    //display movements,display balance,display summary
    updatedUI(currentAcc)

   
  }
});

//ımplementing Transfer
transferBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  const receiverAcc =accounts.find(acc=> acc.userName===transferTo.value)
  // console.log(receiverAcc)
  const amount =Number(transferAmn.value)
  transferTo.value =transferAmn.value="" 
  if(amount>0&& 
    amount<=currentAcc.balance&&
    receiverAcc&&
    receiverAcc?.userName!==currentAcc.userName 
     ){
      //transfer
      currentAcc.movements.push(-amount)
      receiverAcc.movements.push(amount)
      updatedUI(currentAcc)

  }

})

