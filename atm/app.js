// List of users with account details
const users = [
    { name: 'Hamna', account: 4572657816, pin: 5656, balance: 70000 },
    { name: 'Areeba', account: 123456789, pin: 1237, balance: 800000 },
    { name: 'Esha Khan', account: 7865442675, pin: 5555, balance: 90000 },
    { name: 'Insharah chauhan', account: 7263786376, pin: 5645, balance: 60000 },
    { name: 'Anoosha Malik', account: 376478267, pin: 1234, balance: 50000 },
    { name: 'Aisha', account: 52356287, pin: 4555, balance: 632899 },
    { name: 'Fiza', account: 37628663, pin: 5656, balance: 4000 }
];


const loginForm = document.getElementById('login-form');
const cardNumberInput = document.getElementById('card-number');
const pinInput = document.getElementById('pin-number');
const proceedBtn = document.getElementById('proceed-btn');
const accountInfo = document.getElementById('account-info');
const userNameSpan = document.getElementById('user-name');
const accountBalanceSpan = document.getElementById('account-balance');
const transactionForm = document.getElementById('transaction-form');
const withdrawBtn = document.getElementById('withdraw-btn');
const depositBtn = document.getElementById('deposit-btn');
const amountInput = document.getElementById('amount');
const transactionMessage = document.getElementById('transaction-message');


let currentUser = null;

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = parseInt(cardNumberInput.value);
    const pin = parseInt(pinInput.value);

    currentUser = users.find(user => user.account === cardNumber && user.pin === pin);

    if (currentUser) {
       
        userNameSpan.textContent = currentUser.name;
        accountBalanceSpan.textContent = currentUser.balance;
        accountInfo.style.display = 'block';  
        loginForm.style.display = 'none';    
    } else {
        alert('Invalid card number or PIN!');
    }
});


withdrawBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);

    if (amount > 0 && currentUser.balance >= amount) {
        currentUser.balance -= amount;
        accountBalanceSpan.textContent = currentUser.balance;
        transactionMessage.textContent = `You have withdrawn $${amount}. New balance: $${currentUser.balance}`;
    } else if (amount <= 0) {
        transactionMessage.textContent = 'Amount must be greater than 0.';
    } else {
        transactionMessage.textContent = 'Insufficient balance.';
    }
});

depositBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);

    if (amount > 0) {
        currentUser.balance += amount;
        accountBalanceSpan.textContent = currentUser.balance;
        transactionMessage.textContent = `You have deposited $${amount}. New balance: $${currentUser.balance}`;
    } else {
        transactionMessage.textContent = 'Amount must be greater than 0.';
    }
});
