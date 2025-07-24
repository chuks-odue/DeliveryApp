document.addEventListener('DOMContentLoaded', function() {
  const totalAmountElement = document.getElementById('total-amount');
  const urlParams = new URLSearchParams(window.location.search);
  const total = urlParams.get('total');

 if (totalAmountElement && total) {
  totalAmountElement.textContent = parseFloat(total).toFixed(2);
} else if (!totalAmountElement) {
    console.error('Element with id "total-amount" not found');
  } else {
    console.error('Total amount not found in URL parameters');
  }

  const paymentMethodSelect = document.getElementById('payment-method');
  const continueButton = document.getElementById('continue-button');
  const creditCardDetails = document.getElementById('credit-card-details');
  const payButton = document.getElementById('pay-button');

  if (paymentMethodSelect) {
    paymentMethodSelect.addEventListener('change', () => {
      if (paymentMethodSelect.value !== '') {
        continueButton.style.display = 'block';
        creditCardDetails.style.display = 'none';
        payButton.style.display = 'none';
      } else {
        continueButton.style.display = 'none';
        creditCardDetails.style.display = 'none';
        payButton.style.display = 'none';
      }
    });
  } else {
    console.error('Element with id "payment-method" not found');
  }

  if (continueButton) {
  continueButton.addEventListener('click', () => {
    if (paymentMethodSelect.value === 'credit-card') {
      creditCardDetails.innerHTML = `
        <label for="card-number">Card Number:</label>
        <input type="text" id="card-number" name="card-number">
        <label for="expiry-date">Expiry Date:</label>
        <input type="text" id="expiry-date" name="expiry-date">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv">
      `;
      creditCardDetails.style.display = 'block';
      continueButton.style.display = 'none';
      payButton.style.display = 'inline-block';
      goBackButton.style.display = 'inline-block';
    } else if (paymentMethodSelect.value === 'paypal') {
      creditCardDetails.innerHTML = `
        <label for="paypal-email">PayPal Email:</label>
        <input type="email" id="paypal-email" name="paypal-email">
      `;
      creditCardDetails.style.display = 'block';
      continueButton.style.display = 'none';
      payButton.style.display = 'inline-block';
      goBackButton.style.display = 'inline-block';
    } else if (paymentMethodSelect.value === 'bank-transfer') {
      creditCardDetails.innerHTML = `
        <label for="bank-name">Bank Name:</label>
        <input type="text" id="bank-name" name="bank-name">
        <label for="account-number">Account Number:</label>
        <input type="text" id="Bank-account-number">
        <label for="routing-number">Routing Number:</label>
        <input type="text" id="routing-number" name="routing-number">
      `;
      creditCardDetails.style.display = 'block';
      continueButton.style.display = 'none';
      payButton.style.display = 'inline-block';
      goBackButton.style.display = 'inline-block';
    }
  });
}

const goBackButton = document.getElementById('go-back-button');
if (goBackButton) {
  goBackButton.addEventListener('click', () => {
    creditCardDetails.style.display = 'none';
    creditCardDetails.innerHTML = '';
    payButton.style.display = 'none';
    goBackButton.style.display = 'none';
    continueButton.style.display = 'block';
    paymentMethodSelect.selectedIndex = 0;
  });
}

  if (payButton) {
    payButton.addEventListener('click', (e) => {
      e.preventDefault();
      // Process payment here
      alert('Payment successful!');
      
      window.location.href = 'index.html';
    });
  } else {
    console.error('Element with id "pay-button" not found');
  }
});