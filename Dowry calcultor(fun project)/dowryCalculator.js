function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let netWorthParam = getQueryParam('networth');
if (netWorthParam) {
    document.getElementById('netWorth').value = parseFloat(netWorthParam);
} else {
    alert('Please calculate your net worth first.');
}

document.getElementById('calculateNetWorthButton').addEventListener('click', function() {
    window.location.href = 'networth.html';
});

document.getElementById('dowryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let salary = parseFloat(document.getElementById('salary').value);
    let age = parseInt(document.getElementById('age').value);
    let netWorth = parseFloat(document.getElementById('netWorth').value);
    let jobType = document.getElementById('jobType').value;

    if (isNaN(salary) || isNaN(age) || isNaN(netWorth)) {
        document.getElementById('result').innerHTML = "<p>Please enter valid inputs!</p>";
        return;
    }

    let minDowry = (salary * 3) + (netWorth * 0.01) - (age * 100);
    let maxDowry = (salary * 6) + (netWorth * 0.02) - (age * 200);

    if (jobType === 'government') {
        minDowry *= 1.3;  
        maxDowry *= 1.3;
    } else if (jobType === 'private') {
        minDowry *= 1.1;  
        maxDowry *= 1.1;
    } else if (jobType === 'business') {
        minDowry *= 1.2;  
        maxDowry *= 1.2;
    }

    if (minDowry < 0) minDowry = 0;
    if (maxDowry < 0) maxDowry = 0;

    document.getElementById('result').innerHTML = `<p>Minimum Dowry: ₹${minDowry.toFixed(2)}</p><p>Maximum Dowry: ₹${maxDowry.toFixed(2)}</p>`;
});
