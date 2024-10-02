document.getElementById('netWorthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let cash = parseFloat(document.getElementById('cash').value) || 0;
    let investments = parseFloat(document.getElementById('investments').value) || 0;
    let realEstate = parseFloat(document.getElementById('realEstate').value) || 0;
    let vehicles = parseFloat(document.getElementById('vehicles').value) || 0;
    let otherAssets = parseFloat(document.getElementById('otherAssets').value) || 0;

    let mortgages = parseFloat(document.getElementById('mortgages').value) || 0;
    let carLoan = parseFloat(document.getElementById('carLoan').value) || 0;
    let creditCardDebt = parseFloat(document.getElementById('creditCardDebt').value) || 0;
    let otherLoans = parseFloat(document.getElementById('otherLoans').value) || 0;

    let totalAssets = cash + investments + realEstate + vehicles + otherAssets;
    let totalLiabilities = mortgages + carLoan + creditCardDebt + otherLoans;

    let netWorth = totalAssets - totalLiabilities;

    document.getElementById('netWorthResult').innerHTML = `<p>Your Net Worth: ₹${netWorth.toFixed(2)}</p>`;

    let proceedButton = document.getElementById('proceedButton');
    proceedButton.style.display = 'block';

    proceedButton.onclick = function() {
        let encodedNetWorth = encodeURIComponent(netWorth);
        window.location.href = `dowrycalculator.html?networth=${encodedNetWorth}`;
    };
});
 