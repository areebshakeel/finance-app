function currDate(){
    // setting  the current Date

        // Current Month
    var currDate=document.getElementById('curr-date')
    var taarikh=new Date().toString()
    var newDate=taarikh.split(' ');
   currDate.innerHTML=newDate[1]

        // Current Year
    var currYear=document.getElementById('curr-year')
    currYear.innerHTML=newDate[3]

   let data= JSON.parse( localStorage.getItem("userName"))
   
    var welcome=document.getElementById('user-name')
       

    welcome.innerHTML=data.user.toUpperCase()
    
}
currDate()
var userID=document.getElementById('user-name').innerHTML
function logOut(){
    location.replace("../login.html")
    

}

// Fetching Data from Local Storage
// var incomeSavedData=localStorage.getItem("incomeValues")
// console.log('local storage Value==>'+ incomeSavedData)

// getting the value of Account Type
var selectedAccount;
function selected(e) {
    
    selectedAccount=e.target.value
    
}
// getting the value of project type
var selectType;
function selectedType(e) {
        selectType=e.target.value
}

var selectProject;
function selectedProject(e){
    selectProject=e.target.value
}

function addIncome() {
    // adding the values to all the fields 


    var amount=document.getElementById('amount').value
    var incomeDate=document.getElementById('income-date').value
    var incomeTime=document.getElementById('income-time').value
    var incomeDescription=document.getElementById('income-description').value
    

    
        
    //creating object and pushing the values in an object

    var incomeValues={
        user:userID,
        accountValue:selectedAccount,
        amountValue:amount,
        dateValue:incomeDate,
        timeValue:incomeTime,
        descriptionValue:incomeDescription,
        typeValue:selectType,
        projectValue:selectProject

    }

    // converting object in to string and sending values to local Storage

    // var incomeData=JSON.stringify(incomeValues)
    // console.log(localStorage.setItem("incomeValues",incomeData))

    //Creating Tables for Income Data

    // Creating table-row
    var tHead=document.getElementById('table-header')
    var incomeTable=document.getElementById('income-table')
    
    var tableRow=document.createElement('TR')
    incomeTable.appendChild(tableRow)
    tableRow.setAttribute('ID', 'row1')
    
    incomeTable.appendChild(tableRow)
     var tableDate=document.createElement('TD')
     var tableTime=document.createElement('TD')
     var tableCategory=document.createElement('TD')
     var tableAmount=document.createElement('TD')
     var tableCurrency=document.createElement('TD')
     var tableDescription=document.createElement('TD')

    //  Creating a Delete Button
     var deleteButton=document.createElement('BUTTON')
     deleteButton.innerHTML="Delete"
    deleteButton.setAttribute('onClick','deleteIncome(event)')
    deleteButton.style.backgroundColor="RED"
    deleteButton.style.border="no border"


    //  adding date category & amount in a table
     tableDate.innerHTML=incomeValues.dateValue
     tableTime.innerHTML=incomeValues.timeValue
     tableCategory.innerHTML=incomeValues.projectValue
     tableAmount.innerHTML=incomeValues.amountValue
     tableCurrency.innerHTML=incomeValues.accountValue
     tableDescription.innerHTML=incomeValues.descriptionValue
     deleteButton.innerHTML="Delete" 
     deleteButton.setAttribute('class','btn btn-danger')


     tableRow.appendChild(tableDate)
     tableRow.appendChild(tableTime)
     tableRow.appendChild(tableCategory)
    tableRow.appendChild(tableAmount)
    tableRow.appendChild(tableCurrency)
    tableRow.appendChild(tableDescription)

// attaching the Delete as a Child of tableRow   
    tableRow.appendChild(deleteButton)

    firebase.firestore().collection('transactions').add({
        incomeValues
    }).then(function(){

        alert("Successfully done")
    })
    
}

function deleteIncome(e) {

    var deleteData=event.target.parentElement
    
    deleteData.remove()
    
}


