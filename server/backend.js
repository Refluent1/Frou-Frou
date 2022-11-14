document.addEventListener(`DOMContentLoaded`, () => {
  fetch(`http://localhost:3000/getAll`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  loadHtmlTable([]);
});
/**
 * 
 * @loadHtmlTable
 * Checks if there is any data in the search
 */
function loadHtmlTable(data) {
  const table = document.querySelector("table tbody");

  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }
}