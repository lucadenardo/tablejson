let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("ok");
    let obj = JSON.parse(xhr.responseText);
    let tableRow = document.getElementsByTagName("tbody")[0];
  

    for (const user of obj) {
      let tr = document.createElement("tr");
      tableRow.appendChild(tr);
      
      let tdId = document.createElement("td");
      tr.appendChild(tdId);
      tdId.innerHTML = user.id;
      
      let tdName = document.createElement("td");
      tr.appendChild(tdName);
      tdName.innerHTML = user.name;
      
      let tdUsername = document.createElement("td");
      tr.appendChild(tdUsername);
      tdUsername.innerHTML = user.username;
      
      let tdEmail = document.createElement("td");
      tr.appendChild(tdEmail);
      tdEmail.innerHTML = user.email;
      
      let tdPhone = document.createElement("td");
      tr.appendChild(tdPhone);
      tdPhone.innerHTML = user.phone;
      
      let tdWeb = document.createElement("td");
      tr.appendChild(tdWeb);
      tdWeb.innerHTML = user.website;
     }
  }
}