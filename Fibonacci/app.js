function generateFibonacci() {
    const numTerms = document.getElementById('numTerms').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (numTerms < 1) {
        resultDiv.textContent = 'Please enter a positive integer.';
        return;
    }

    let fibonacciSeries = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }

    const limitedSeries = fibonacciSeries.slice(0, numTerms);
    limitedSeries.forEach(term => {
        const termDiv = document.createElement('div');
        termDiv.textContent = term;
        termDiv.style.margin = '0 10px'; // Add some margin between terms
        resultDiv.appendChild(termDiv);
    });
}
