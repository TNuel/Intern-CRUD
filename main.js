var selectedRow = null;



const interns = [
   

]

// console.log(interns[0].department); 
const getInterns =()=>{
    interns.forEach((intern, index) => {
        displayInterns(intern)
        
    });
}
//1. DISPLAY INTERNS

const displayInterns= (intern) =>{

    console.log(intern);
    
    var list = document.querySelector('.internList')
    let row = document.createElement('tr');
    console.log(list, row);
    
    row.innerHTML = ` <th>${intern.id}</th>
    <td>${intern.firstName} ${intern.lastName}</td>
    <td>${intern.salary}</td>
    <td>${intern.dept}</td>
    <td>
        <a onClick='onEdit(this)' id="onEdit"><i class="ri-pencil-line"></i></a>
        <a onClick='onDelete(this)' id="onDelete"><i class="ri-delete-bin-2-fill"></i></a>
    </td> `
    
    list.appendChild(row)

    // function clearfields(){
        document.querySelector('.firstName').value = "";
        document.querySelector('.lastName').value = "";
        document.querySelector('.salary').value = "";
        document.querySelector('.dept').value = "";
    // }
    // firstName.value = '';
    // lastName.value = '';
    // firstName.value = "";
    // lastName.value = "";
    // salary.value = "";
    // department.value = "";
}



document.querySelector('DOMContentLoaded', getInterns())


//2. ADD INTERNS
var btnSubmit = document.querySelector('.addInfo')
btnSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    const firstName = document.querySelector(".firstName").value;
    const lastName = document.querySelector(".lastName").value;
    const salary = document.querySelector(".salary").value;
    const department = document.querySelector(".dept").value;

    // displayInterns()

    // console.log(firstName);
    // console.log(lastName);
    // console.log(salary);
    // console.log(department);
    // console.log(interns)

    const newInterns = {
        "id": interns.length + 1, 
        "firstName" : firstName,
        "lastName": lastName,
        "salary": salary,
        "dept": department
    }

    //clear Field
  


    console.log(newInterns);
    interns.push(newInterns)

    displayInterns(newInterns);

    
    
    // console.log(displayInterns(newInterns))
  // console.log("form submitted");
//   firstName.innerHTML = "";
//   lastName.innerHTML = "";

})

/// delete intern
// document.querySelector('.internList').addEventListener('click',(e)=>{
//     console.log(e.target.id);
// }) 
 const internList = document.querySelector('.internList')
 internList.addEventListener('click',(e) =>{
     console.log('body pressed');
 })

 function onEdit(td) {
    //  document.getElementById('submit').innerText = 'Update'
    selectedRow = td.parentElement.parentElement;
    let name = selectedRow.cells[1].innerHTML
    console.log(name)
    var firstName = name.split('').slice(0,-1).join(' ');
    var lastName = name.split('').slice(-1).join(' ');

    //  document.getElementById("id").value = selectedRow.cells[0].innerHTML;
     document.getElementById('firstName').value = firstName;
     document.getElementById('lastName').value = lastName;
     document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
     document.getElementById('dept').value = selectedRow.cells[3].innerHTML;
 }


const addEmployee = document.querySelector(".addEmployee")
const  desc = document.querySelector(".desc")
const close = document.querySelector(".close")

addEmployee.addEventListener("click", ()=>{
    desc.style.display="flex"
})

close.addEventListener("click", ()=>{
    desc.style.display="none"
})

// DELETE FUNCTION

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        console.log(row)
        document.getElementById('tableList').deleteRow(row.rowIndex);
    }
}

// document.querySelector()