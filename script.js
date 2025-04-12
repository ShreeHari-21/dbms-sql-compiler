function runSQL() {
  const query = document.getElementById('sqlInput').value;
  const resultBox = document.getElementById('result');

  // Simulate execution result
  if (query.toLowerCase().includes("select")) {
    resultBox.textContent = "Simulated Output:\n+----+--------+\n| ID | Name   |\n+----+--------+\n| 1  | Jace   |\n| 2  | Swamiji|\n+----+--------+";
  } else {
    resultBox.textContent = "Query accepted. (No real DB connected yet)";
  }
}
