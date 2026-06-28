async function testDatabase() {
  const statusElement = document.getElementById("status");
  const outputElement = document.getElementById("output");

  statusElement.innerText = "Testing...";
  statusElement.className = "";
  outputElement.innerText = "";

  const apiUrl = "https://api-static-db-test-fqdgfshcarb6dbfr.spaincentral-01.azurewebsites.net/api/testdb.php";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    outputElement.innerText = JSON.stringify(data, null, 2);

    if (data.status === "success") {
      statusElement.innerText = "✅ Database bereikbaar via API";
      statusElement.className = "success";
    } else {
      statusElement.innerText = "❌ Database test mislukt";
      statusElement.className = "error";
    }

  } catch (error) {
    statusElement.innerText = "❌ API call mislukt";
    statusElement.className = "error";
    outputElement.innerText = error.toString();
  }
}
