

let exportData = []

new gridjs.Grid({
  columns: [
    "ลำดับ",
    "วันที่",
    "สังกัด",
    "ตำแหน่ง",
    "กอง",
    "ฝ่าย",
    "ชื่อ - นามสกุล",
    "เลขบัตรประชาชน",
    "ชื่อเล่น",
    "สถานะ",
    "เพศ",
    "เบอร์โทรติดต่อ",
    "อายุ",
    "ที่อยู่",
    "สิทธิการรักษาพยาบาล",
    "น้ำหนัก",
    "ส่วนสูง",
    "รอบเอว",
    "BMI",
    "สัดส่วน",
    "โรคประจำตัว",
    "โรคอื่นๆ",
    "การบาดเจ็บจากการทำงาน",
    "แผนกปฏิบัติงาน" ,
    "ข้อมูลพฤติกรรมการสูบบุหรี่",
    "ข้อมูลพฤติกรรมการดื่มแอลกลอฮอร์" ,
    "ข้อมูลโรคติดเชื้อโควิด" ,
    "ติดมาแล้วจำนวนกี่ครั้ง",
    "ข้อมูลฉีดวัคซีน" ,
    "ท่านเคยเจ็บป่วยด้วยโรคจากการทำงาน",
    {
      name: "คะแนนประเมินความเครียด",
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
    {
      name: "คะแนนประเมินความจำ",
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
    url: "https://smartcity.onrender.com/employee/employeeAll",
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
          "วันที่" : employee.created,
          "สังกัด" : employee.affiliation,
          "ตำแหน่ง": employee.position,
          "กอง": employee.division,
          "ฝ่าย": employee.cotton,
          "ชื่อ - นามสกุล" :`${employee.prefix}${employee.name}  ${employee.lastname}`,
          "เลขบัตรประชาชน" : employee.IDcard,
          "ชื่อเล่น" : employee.nickname,
          "สถานะ" : employee.status,
          "เพศ": employee.sex,
          "เบอร์โทรติดต่อ" : employee.tel,
          "อายุ": employee.age,
          "ที่อยู่": employee.address,
          "สิทธิการรักษาพยาบาล": employee.treatmentrights,
          "น้ำหนัก" : employee.weight,
          "ส่วนสูง": employee.height,
          "รอบเอว" : employee.waistline,
          "BMI": employee.BMI,
          "สัดส่วน" : employee.proportion,
          "โรคประจำตัว" : employee.congenital_disease,
          "โรคอื่นๆ": employee.other_congenital_disease,
          "การบาดเจ็บจาดการทำงาน" : employee.accident,
          "แผนกปฏิบัติงาน" : employee.job_position,
          "ข้อมูลพฤติกรรมการสูบบุหรี่" : employee.smoke_often1,
          "ข้อมูลพฤติกรรมการดื่มแอลกลอฮอร์" : employee.drinking_alcohol2,
          "ข้อมูลโรคติดเชื้อโควิด" : employee.covid1,
          "ติดมาแล้วจำนวนกี่ครั้ง" : employee.covid12,
          "ข้อมูลฉีดวัคซีน" : employee.covid2,
          "ท่านเคยเจ็บป่วยด้วยโรคจากการทำงาน" : employee.sick,
          "คะแนนประเมินความเครียด" : isNaN(Strain)?"-":Strain,
          "คะแนนประเมินความสุข" : isNaN(happy)?"-":happy,
          "คะแนนประเมินความจำ": isNaN(memory)?'-':memory
        })
        return [
          i + 1,
          employee.created,
          employee.affiliation,
          employee.position,
          employee.division,
          employee.cotton,
          `${employee.prefix}${employee.name}  ${employee.lastname}`,
          employee.sex,
          employee.age,
          employee.weight,
          employee.height,
          employee.BMI,
          employee.proportion,
          employee.congenital_disease,
          employee.other_congenital_disease,
          employee.accident,
          employee.job_position,
          employee.smoke_often1,
          employee.drinking_alcohol2,
          employee.covid1,
          employee.covid2,
          employee.sick,
          Strain,
          happy,
          memory
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


