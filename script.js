let tableBody = document.querySelector(".countriesTable");
let body = document.querySelector(".body");

fetch("https://www.freetestapi.com/api/v1/countries")
  .then((response) => response.json())
  .then((data) => {
    data.map((data) => {
      let row = document.createElement("tr");
      row.innerHTML = `
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.capital}</td>
      <td>${data.currency}</td>
      <td>${data.population}</td>
      <td>${data.density}</td>
      <td>${data.land_area}</td>`;
      body.appendChild(row);
    });
  });
