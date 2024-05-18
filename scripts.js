function calculateNextPeriod() {
    const lastPeriodDate = new Date(document.getElementById('last-period').value);
    const cycleLength = parseInt(document.getElementById('cycle-length').value);
    
    if (!isNaN(lastPeriodDate) && !isNaN(cycleLength)) {
        const nextPeriodDate = new Date(lastPeriodDate.getTime() + (cycleLength * 24 * 60 * 60 * 1000));
        document.getElementById('prediction-result').innerHTML = `Your next period is expected to start on: ${nextPeriodDate.toDateString()}`;
    } else {
        document.getElementById('prediction-result').innerHTML = 'Please enter valid information.';
    }
}
