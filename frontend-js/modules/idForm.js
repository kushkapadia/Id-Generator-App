// import axios from 'axios'
import jsPDF from 'jspdf';
 import html2PDF from 'html2canvas';
import html2canvas from 'html2canvas';


{/* <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script> */}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script> 

export default class IdForm {
    constructor(){
        // alert("js ran !!!!");
        this.form = document.querySelector(".IDForm")
       
        // this.allFields = document.querySelectorAll("#registration-form .form-control")
        this.firstName = document.querySelector('.Name')
        this.EmergencyName1 = document.querySelector('.EName1')
        this.EmergencyName2 = document.querySelector('.EName2')
        this.EmergencyContacts1 = document.querySelector('.phone1')

        // this.EmergencyName2 = document.querySelector('.EName2')
        this.EmergencyContacts2 = document.querySelector('.phone2')

        this.parent = document.querySelector(".parent")
        this.bloodGroup = document.querySelector('.bg')
        this.birthDate = document.querySelector('.birthYear')
        this.pincode = document.querySelector('.pinCode')
        // this.display()
        this.events()
    }


    events(){

        this.form.addEventListener("submit", (e)=>{
        e.preventDefault()
    this.changeHTML()
  
            // alert(this.firstName)
            
        
          
        })

        // alert("This is running")
        }
    
    //methods
    // display(){
    //     alert("display ran!")
    //     console.log(this.firstName.value)
    //     console.log(this.EmergencyName1.value)
    //     html2pdf().from(this.firstName.value).save("document.pdf")
    // }

    changeHTML(){
        // let data = "amit"

// alert("Change html func ran")
// let elem =  `<div id="profile" class="main" >
//         <h1 class="text">This is a heading!</h1>
//         <p>Emergency tag</p>
//     </div>`

// let Pelem = document.getElementById("parent") 
this.parent.insertAdjacentHTML("beforeend" , `<div id="profile" class="main" >
       <div class="heading"><p>Emergency Id</p></div>
         <p>Cyclist:</p> 
         <img class="img1" src="/images/1.png" alt="">  
         <p id="cyclist-name" class="H-text">${this.firstName.value}</p>
         <br>
          <p><b>Blood Group: </b> ${this.bloodGroup.value} </p>
          <p><b>Birth Date: </b> ${this.birthDate.value} </p>

          <br>
         <div class="sub-heading"><p>Emergency Contact(s)</p></div>
         <p>${this.EmergencyName1.value + ":"}  ${this.EmergencyContacts1.value}</p>
         <p>${this.EmergencyName2.value + ":"}  ${this.EmergencyContacts2.value}</p>
     </div`)

this.parent.insertAdjacentHTML("beforeend", `<div id="back" class="main" >

  <p><strong></strong></p> 
  <img class="img2" src="/images/CyclingApp-QRcode.png" alt="">  
  
  <p>Pin Code: ${this.pincode.value}</p> 
</div `)

let element = document.getElementById("cyclist-name")
// console.log(element)

// element.innerHTML += `${this.firstName.value}`
this.downloadPdf()
    }


    downloadPdf(){
        // let options = {
        //     margin:1,
        //     image: {type: 'png', quality: 1},
        //     html2canvas: {scale: 2},
        //     jsPDF:{ unit: 'in', format: 'a4', orientation: 'portrait' }
        // }
    
        let element = document.getElementById("profile")
        let element2 = document.getElementById("back")
    // alert("Download Func ran!")

  // alert("the function ran!")

     //html2pdf().set(options).from(element).save("document.pdf")
    this.toPDF()

    // alert("the function ran!")
   }



   toPDF(){
    //    console.log(data)
    //    console.log(data.innerHTML)
       let element = document.getElementById("profile")
         let element2 = document.getElementById("back")
        let element3 = document.getElementById("parent")

       var doc = new jsPDF('2', 'pt', 'a4');
    //  html2canvas(element, {
    //      allowTaint: true,
    //      useCORS: true,
    //      quality: 1,
    //  }).then((canvas)=>{
    //      doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 245, 180)
    //     // doc.save("Test.pdf")
    // })

     html2canvas(element3 , {
         allowTaint: true,
         useCORS: true,
         quality: 1,
         

     }).then((canvas)=>{
        //  doc.addPage()
         doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 450, 400)
        doc.save("Test.pdf")
         
    })
    // doc.save("Test.pdf")

    //  html2canvas(element2, {
    //     allowTaint: true,
    //     useCORS: true,
    //     quality: 1,
    // }).then((canvas)=>{
    //     doc.addImage(canvas.toDataURL("image2/png"), 'PNG', 5, 5, 245, 180)
    // doc.save("Test.pdf")
    // })
        
}

     //  doc.text("text", 10, 10)
    //  doc.html(data.innerHTML, {
    //     'x': 15 ,
    //     'y': 15, 
    //      'width': 180
    //  })
   
}