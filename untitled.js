document.getElementById('gradesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const math = parseFloat(document.getElementById('math').value);
    const english = parseFloat(document.getElementById('english').value);
    const average = ((math + english) / 2).toFixed(2);

    const table = document.getElementById('gradesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    const rowCount = table.rows.length;
    cell1.innerHTML = rowCount;
    cell2.innerHTML = math;
    cell3.innerHTML = english;
    cell4.innerHTML = average;

    updateAverages();
});

function updateAverages() {
    const table = document.getElementById('gradesTable');
    const rows = table.getElementsByTagName('tbody')[0].rows;
    let mathSum = 0, englishSum = 0, totalSum = 0;

    for (let i = 0; i < rows.length; i++) {
        mathSum += parseFloat(rows[i].cells[1].innerHTML);
        englishSum += parseFloat(rows[i].cells[2].innerHTML);
        totalSum += parseFloat(rows[i].cells[3].innerHTML);
    }

    const mathAverage = (mathSum / rows.length).toFixed(2);
    const englishAverage = (englishSum / rows.length).toFixed(2);
    const overallAverage = (totalSum / rows.length).toFixed(2);

    document.getElementById('mathAverage').innerHTML = mathAverage;
    document.getElementById('englishAverage').innerHTML = englishAverage;
    document.getElementById('overallAverage').innerHTML = overallAverage;
}