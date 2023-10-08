




// function checkbmi() {
//     let heighDatat = document.getElementById('height ')
//     let weightData = document.getElementById('weight')
//     let bmi = weight.value/ (height.value * height.value)
//     if (height.value == "" && weight.value == "") {
//         document.getElementById('result').innerText = "enter the data"
//     }
//     else if (weight.value == "") {
//         document.getElementById('result').innerText = "enter the weight"
//     }
//     else if (height.value == "") {
//         document.getElementById('result').innerText = "enter the height"
//     }
//     else if (bmi <= 18.5) {
//         document.getElementById('result').innerText = bmi.toFixed(0)
        
//     }
//     else if (bmi > 18.5 && bmi <= 24.9) {
//         document.getElementById('result').innerText = bmi.toFixed(0)

//     }
//     else if (bmi > 24.9 && bmi <= 29.9) {
//         document.getElementById('result').innerText = bmi.toFixed(0)
//     }
//     else if (bmi > 29.5 && bmi <=35) {
//         document.getElementById('result').innerText = bmi.toFixed(0)
//     }

//     else {
//         document.getElementById('result').innerText = bmi.toFixed(0)
//     }

// }
function split() {
    let amountData=document.getElementById('amount')
    let personData=document.getElementById('person')
    let bill=(amount.value/personData.value).toFixed(2)
    document.getElementById('result').innerText=bill
    console.log(bill)
}