function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://smartcity-pakpoon-api.herokuapp.com/employee/employeeAll");
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        var trHTML = ''; 
        const objects = JSON.parse(this.responseText);
        for (let object of objects) {
          trHTML += '<tr>'; 
          trHTML += '<td scope="row" colspan="5">'+object['prefix']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['name']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['lastname']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['sex']+'</td>';
          trHTML += '<td scope="row" colspan="10">'+object['age']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['weight']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['height']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['affiliation']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['position']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['division']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['cotton']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['congenital_disease']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['sick']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['covid1']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['covid2']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['smoke_often1']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['smoke_often2']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['exercise1']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['exercise2']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['exercise3']+'</td>';
          trHTML += '<td scope="row" colspan="5">'+object['job_position']+'</td>'
          trHTML += '<td scope="row" colspan="5">'+object['exercise3']+'</td>';
          trHTML += "</tr>";
        }
        document.getElementById("mytable").innerHTML = trHTML;
      }
    };
  }
  
  loadTable();