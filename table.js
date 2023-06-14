

let exportData = []

new gridjs.Grid({
  columns: [
    "ลำดับ",
    "วันที่",
    "สังกัด",
    "ประเภทการจ้างงาน",
    "ตำแหน่งงานที่ปฏิบัติ",
    "กอง",
    "คำนำหน้า",
    "ชื่อ - นามสกุล",
    "เลขบัตรประชาชน",
    "ชื่อเล่น",
    "สถานะ",
    "เพศ",
    "เบอร์โทรติดต่อ",
    "อายุ",
    "ที่อยู่",
    "สิทธิการรักษาพยาบาล",
    "สังกัดโรงพยาบาล",
     "สิทธิรักษาอื่นๆ",
    "น้ำหนัก",
    "ส่วนสูง",
    "รอบเอว",
    "BMI",
    "สัดส่วน",
    "โรคประจำตัว",
    "โรคอื่นๆ",
    "ท่านเคยเจ็บป่วยด้วยโรคจากการทำงาน",
    "ท่านเคยประสบอุบัติเหตุ/การบาดเจ็บจากการทำงานหรือไม่",
    "แผนก-ตำแหน่งงานที่ปฏิบัติงาน" ,
    "อายุการทำงาน....ปี...เดือน",
    "ทำงานกี่วันต่อสัปดาห์(วัน)",
    "ทำ OT หรือไม่",
    "ระยะเวลาที่ทำ OT (กี่ชม./สัปดาห์)",
    "บริโภคอาหารที่มีน้ำตาลสูงหรือไม่",
    "บริโภคอาหารที่มีไขมันสูงหรือไม่",
    "บริโภคอาหารที่มีโซเดียมสูงหรือไม่",
    "คุณเคยดื่มเครื่องดื่มแอลกอฮอล์ เช่น เบียร์ เหล้า ไวน์ หรือไม่" ,
    "คุณดื่มเครื่องดื่มแอลกอฮอล์ เช่น เบียร์ เหล้า ไวน์ บ่อยเพียงใด?",
    "ท่านสูบบุหรี่หรือไม่และบ่อยเพียงใด",
    "จำนวนมวนที่สูบต่อวัน (มวนต่อวัน)",
    "ท่านออกกำลังกายหรือเล่นกีฬาหรือไม่",
    "ท่านออกกำลังกายหรือเล่นกีฬาประเภทใด",
    "ระยะเวลาการออกกำลังกาย",
    "ความถี่ของการออกกำลังกาย",
    "ท่านเคยติดเชื้อโควิด-19 หรือไม่",
    "หากเคย จำนวนกี่ครั้ง",
    "ท่านได้รับวัคซีนมาแล้วจำนวนกี่ เข็ม" ,
    "ท่านมีภาระหนี้สินหรือมั้ย",
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
          "ประเภทการจ้างงาน": employee.position,
          "ตำแหน่งงานที่ปฏิบัติ" : employee.Employmenttype,
          "กอง": employee.division,
          "คำนำหน้า" : employee.prefix,
          "ชื่อ - นามสกุล" :`${employee.name}  ${employee.lastname}`,
          "เลขบัตรประชาชน" : employee.IDcard,
          "ชื่อเล่น" : employee.nickname,
          "สถานะ" : employee.status,
          "เพศ": employee.sex,
          "เบอร์โทรติดต่อ" : employee.tel,
          "อายุ": employee.age,
          "ที่อยู่": employee.address,
          "สิทธิการรักษาพยาบาล": employee.treatmentrights,
          "สังกัดโรงพย่าบาล" : employee.hospital,
          "สิทธิรักษาอื่นๆ" : employee.treatmentrights99,
          "น้ำหนัก" : employee.weight,
          "ส่วนสูง": employee.height,
          "รอบเอว" : employee.waistline,
          "BMI": employee.BMI,
          "สัดส่วน" : employee.proportion,
          "โรคประจำตัว" : employee.congenital_disease,
          "โรคอื่นๆ": employee.other_congenital_disease,
          "ท่านเคยเจ็บป่วยด้วยโรคจากการทำงาน" : employee.sick,
          "ท่านเคยประสบอุบัติเหตุ/การบาดเจ็บจากการทำงานหรือไม่" : employee.accident,
          "แผนก-ตำแหน่งงานที่ปฏิบัติงาน" : employee.job_position,
          "อายุการทำงาน....ปี...เดือน": employee.working_life,
          "ทำงานกี่วันต่อสัปดาห์(วัน)": employee.hours_work,
          "ทำ OT หรือไม่": employee.department,
          "ระยะเวลาที่ทำ OT (กี่ชม./สัปดาห์)": employee.ot,
          "บริโภคอาหารที่มีน้ำตาลสูงหรือไม่": employee.eating_behavior1,
          "บริโภคอาหารที่มีไขมันสูงหรือไม่" : employee.eating_behavior2,
          "บริโภคอาหารที่มีโซเดียมสูงหรือไม่": employee.eating_behavior3,
          "คุณเคยดื่มเครื่องดื่มแอลกอฮอล์ เช่น เบียร์ เหล้า ไวน์ หรือไม่" : employee.drinking_alcohol1,
          "คุณดื่มเครื่องดื่มแอลกอฮอล์ เช่น เบียร์ เหล้า ไวน์ บ่อยเพียงใด?": employee.drinking_alcohol2,
          "ท่านสูบบุหรี่หรือไม่และบ่อยเพียงใด": employee.smoke_often1,
          "จำนวนมวนที่สูบต่อวัน (มวนต่อวัน)": employee.smoke_often2,
          "ท่านออกกำลังกายหรือเล่นกีฬาหรือไม่" : employee.exercise1,
          "ท่านออกกำลังกายหรือเล่นกีฬาประเภทใด": employee.exercise2,
          "ระยะเวลาการออกกำลังกาย": employee.exercise3,
          "ความถี่ของการออกกำลังกาย": employee.exercise4,
          "ท่านเคยติดเชื้อโควิด-19 หรือไม่" : employee.covid1,
          "หากเคย จำนวนกี่ครั้ง"   : employee.covid12,
          "ท่านได้รับวัคซีนมาแล้วจำนวนกี่ เข็ม" : employee.covid2,
          "ท่านมีภาระหนี้สินหรือมั้ย" : employee.debt_information,
          "คะแนนประเมินความเครียด" : isNaN(Strain)?"-":Strain,
          "คะแนนประเมินความสุข" : isNaN(happy)?"-":happy,
          "คะแนนประเมินความจำ": isNaN(memory)?'-':memory
        })
        return [
          i + 1,
          employee.created,
          employee.affiliation,
          employee.position,
          employee.Employmenttype, 
          employee.division,
          employee.prefix,
          `${employee.prefix}${employee.name}  ${employee.lastname}`,
          employee.IDcard,
          employee.nickname,
          employee.status,
          employee.sex,
          employee.tel,
          employee.age,
          employee.address,
          employee.treatmentrights,
          employee.hospital,
          employee.treatmentrights99,
          employee.weight,
          employee.height,
          employee.waistline,
          employee.BMI,
          employee.proportion,
          employee.congenital_disease,
          employee.other_congenital_disease,
          employee.sick,
          employee.accident,
          employee.job_position,
          employee.working_life,
          employee.hours_work,
          employee.department,
          employee.ot,
          employee.eating_behavior1,
          employee.eating_behavior2,
          employee.eating_behavior3,
          employee.drinking_alcohol1,
          employee.drinking_alcohol2,
          employee.smoke_often1,
          employee.smoke_often2,
          employee.exercise1,
          employee.exercise2,
          employee.exercise3,
          employee.exercise4,
          employee.covid1,
          employee.covid12,
          employee.covid2,
          employee.debt_information,
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


