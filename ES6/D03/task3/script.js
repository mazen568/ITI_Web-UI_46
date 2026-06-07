//fetch btrgf3 promise w then btexecute lma ykon feh success
//then 3ndha callback fn w bykon mb3ot feha response b3d kda bn3ml return response.json, da byrg3lna promise tani
fetch("https://jsonplaceholder.typicode.com/users").
then(response => response.json()).
then(data => {
    console.log(data);
    
    let table = document.createElement("table");
    table.border = "1"; 

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

  ["name", "email", "city"].forEach(prop => {
    let th = document.createElement("th");
    th.textContent = prop;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");

  data.forEach(user => {
    let tr = document.createElement("tr");

    let nameTd = document.createElement("td");
    nameTd.textContent = user.name;

    let emailTd = document.createElement("td");
    emailTd.textContent = user.email;

    let cityTd = document.createElement("td");
    cityTd.textContent = user.address.city;

    tr.append(nameTd, emailTd, cityTd);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});   
