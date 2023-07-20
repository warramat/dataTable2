
let exportData = []

new gridjs.Grid({
  columns: [
    "ลำดับ",
    "วันที่",
    "userID",
    {
      name: "คะแนนประเมินความสุข",
      formatter: (cell) => {
        if(isNaN(cell)){
            return  gridjs.html(`<div>-</div>`);
        }
        if (Number(cell) < 30) {
          return gridjs.html(`<div style="color:#339900">${cell}</div>`);
        }else if(Number(cell) >= 30 && Number(cell)<= 50) {
          return gridjs.html(`<div style="color:#FFCC00">${cell}</div>`);
        } else {
            return gridjs.html(`<div style="color:#CC0000">${cell}</div>`);
        }
        }
    },
   
  ],
  server: {
    url: "https://smartcity.onrender.com/happy/happyAll/",
    then: (data) =>
      data.map((employee, i) => {
        let Strain = 0;
        for (let j = 1; j <= 20; j++) {
          Strain += Number(employee[`Strain${j}`]);
        }

        let happy = 0;
        for (let j = 1; j <= 15; j++) {
          happy += Number(employee[`happy${j}`]);
        }

        let memory = 0;
        for (let j = 1; j <= 14; j++) {
          memory += Number(employee[`memory${j}`]);
        }

        exportData.push({
          "ลำดับ": i + 1,
          "วันที่" : employee.updated,
          "UserID" : employee.userID,
          "คะแนนประเมินความสุข" : isNaN(happy)?"-":happy,
        })
        return [
          i + 1,
          employee.updated,
          employee.userID,
          happy,
        ];
      }),
  },
  search: {
    enabled: true,
  },
  sort: true,
  pagination: {
    enabled: true,
    limit: 1000,
    summary: false,
  },
}).render(document.getElementById("table"));



function  onExport() {
  const now  = new Date()
  const dataWS = XLSX.utils.json_to_sheet(exportData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, dataWS)
  XLSX.writeFile(wb,(now.toLocaleDateString('th')+" - "+now.toLocaleTimeString('th'))+'.xlsx')
}


