const hours = document.querySelector('#hours');
const munite = document.querySelector('#munite');
const secend = document.querySelector('#secend');


const appm = document.querySelector('#appm');
const tarikh = document.querySelector('#date');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const den = document.getElementById('den');




setInterval(function () {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yer = date.getFullYear();

    let din = date.getDay();

    den.innerHTML = week(din);

    let hour = '';

    if (h == 0) {
        hour = 12;
    } else if (h > 0 && h <= 12) {
        hour = h;
    } else {
        hour = h - 12;
    }

    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    munite.innerHTML = m < 10 ? '0' + m : m;
    secend.innerHTML = s < 10 ? '0' + s : s;



    tarikh.innerHTML = dd < 10 ? '0' + dd : dd;
    month.innerHTML = mm < 10 ? '0' + mm : mm;
    year.innerHTML = yer;

    let pmm = '';

    if (h > 12) {
        pmm = 'PM';
    } else {
        pmm = 'AM';
    }

    appm.innerHTML = pmm;

}, 1000);



// counter-section
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const output = document.getElementById('out-put');

let counter = 0;

let somrat;
start.addEventListener('click', function () {

    somrat = setInterval(() => {
        output.innerHTML = counter;
        counter++;
    }, 100);


});

stop.addEventListener('click', function () {

    clearInterval(somrat);
});

reset.addEventListener('click', function () {
    counter = 0;
    output.innerHTML = counter;
    clearInterval(somrat);
})

// counter-section2

let startt = document.getElementById('startt');
let stopp = document.getElementById('stopp');
let countinput = document.getElementById('countinput');
let countout = document.getElementById('countout');
let countbar = document.getElementById('countbar');
let cntbar = document.getElementById('cntbar');

let count_value;
let countr;

// let pattern = /[0-9]{3}/;

startt.addEventListener('click', function () {

    count_value = countinput.value;

    countr = setInterval(() => {
        countout.innerHTML = count_value;
        countbar.innerHTML = count_value;

        let width = loader(countinput.value, count_value);

        cntbar.style.width = `${width}%`;

        if (width >= 50 && width <= 100) {
            cntbar.style.backgroundColor = 'green';
        } else if (width > 30 && width <= 50) {
            cntbar.style.backgroundColor = 'orange';
        } else if (width <= 30) {
            cntbar.style.backgroundColor = 'red';
        };

        if (count_value == 0) {
            clearInterval(countr);
        }

        count_value--;

    }, 1000);



})

countinput.value = '';




// todo

const todo = document.getElementById('todo');
const todo_add = document.getElementById('add');
const list = document.getElementById('list');
const option = document.getElementById('option');

todo_add.addEventListener('click', function () {
    let li = document.createElement('li');

    if (todo.value == "" || option.value == "") {
        alert(' all fields are required')
    } else {
        li.className = 'list-group-item';
        li.innerText = todo.value, option.value;
        list.appendChild(li);

        todo.value = '';
    }

})




//result

const check = document.querySelector('#check')
const rName = document.querySelector('#rname')
const rRoll = document.querySelector('#rroll')
const bMarks = document.querySelector('#bmarks')
const eMarks = document.querySelector('#emarks')
const mMarks = document.querySelector('#mmarks')
const sMarks = document.querySelector('#smarks')
const iMarks = document.querySelector('#imarks')
const rMarks = document.querySelector('#rmarks')
const bGrade = document.querySelector('#bgrade')
const eGrade = document.querySelector('#egrade')
const mGrade = document.querySelector('#mgrade')
const sGrade = document.querySelector('#sgrade')
const iGrade = document.querySelector('#igrade')
const rGrade = document.querySelector('#rgrade')
const bPoints = document.querySelector('#bpoints')
const ePoints = document.querySelector('#epoints')
const mPoints = document.querySelector('#mpoints')
const sPoints = document.querySelector('#spoints')
const iPoints = document.querySelector('#ipoints')
const rPoints = document.querySelector('#rpoints')
const svecha = document.querySelector('#svecha')
const totl = document.querySelector('#totl')
const totg = document.querySelector('#totg')
const finpo = document.querySelector('#finpo')
const fingr = document.querySelector('#fingr')
const totm = document.querySelector('#totm')




check.addEventListener('click', function(){
    const name =document.querySelector('#name')
    const roll =document.querySelector('#roll')
    const bangla =document.querySelector('#bangla')
    const english = document.querySelector('#english')
    const math = document.querySelector('#math')
    const science = document.querySelector('#science')
    const ict = document.querySelector('#ict')
    const reli =document.querySelector('#reli')
     

    const netMarks =((parseInt(bangla.value) + parseInt(english.value) + parseInt(math.value) + parseInt(science.value) + parseInt(ict.value)  + parseInt(reli.value)) / 6);
  

   if(name.value == '' || roll.value == '' || isNaN(parseInt(bangla.value)) || isNaN(parseInt(english.value))  || isNaN(parseInt(math.value)) || isNaN(parseInt(science.value))  || isNaN(parseInt(ict.value) ) || isNaN(parseInt(reli.value))){
        alert('all feild must be fill!');

    } else if(parseInt(bangla.value) < 33 || parseInt(english.value) < 33 || parseInt(math.value) < 33 || parseInt(science.value) < 33 || parseInt(ict.value) < 33 || parseInt(reli.value) < 33 ){
               
          //marksSubwise
          bMarks.innerHTML = bangla.value
          eMarks.innerHTML = english.value
          mMarks.innerHTML = math.value
          sMarks.innerHTML = science.value
          iMarks.innerHTML = ict.value
          rMarks.innerHTML = reli.value
          //gradeSubwise
          bGrade.innerHTML = gpa(bangla.value).grade
          eGrade.innerHTML = gpa(english.value).grade
          mGrade.innerHTML = gpa(math.value).grade
          sGrade.innerHTML = gpa(science.value).grade
          iGrade.innerHTML = gpa(ict.value).grade
          rGrade.innerHTML = gpa(reli.value).grade
          //pointsSubWise
          bPoints.innerHTML = gpa(bangla.value).points
          ePoints.innerHTML = gpa(english.value).points
          mPoints.innerHTML = gpa(math.value).points
          sPoints.innerHTML = gpa(science.value).points
          iPoints.innerHTML = gpa(ict.value).points
          rPoints.innerHTML = gpa(reli.value).points

          svecha.innerHTML = gpa(32).status
          totg.innerHTML = gpa(32).grade
          finpo.innerHTML = 0
          fingr.innerHTML = 'F'
          totl.innerHTML = 0
          totm.innerHTML = parseFloat(bangla.value) + parseFloat(english.value)  + parseFloat(math.value)  + parseFloat(science.value)  + parseFloat(ict.value) + parseFloat(reli.value)  
       

    }else{
          //marksSubwise
          bMarks.innerHTML = bangla.value
          eMarks.innerHTML = english.value
          mMarks.innerHTML = math.value
          sMarks.innerHTML = science.value
          iMarks.innerHTML = ict.value
          rMarks.innerHTML = reli.value
          //gradeSubwise
          bGrade.innerHTML = gpa(bangla.value).grade
          eGrade.innerHTML = gpa(english.value).grade
          mGrade.innerHTML = gpa(math.value).grade
          sGrade.innerHTML = gpa(science.value).grade
          iGrade.innerHTML = gpa(ict.value).grade
          rGrade.innerHTML = gpa(reli.value).grade
          //pointsSubWise
          bPoints.innerHTML = gpa(bangla.value).points
          ePoints.innerHTML = gpa(english.value).points
          mPoints.innerHTML = gpa(math.value).points
          sPoints.innerHTML = gpa(science.value).points
          iPoints.innerHTML = gpa(ict.value).points
          rPoints.innerHTML = gpa(reli.value).points


         //info
         rName.innerHTML = name.value
         rRoll.innerHTML = roll.value
         svecha.innerHTML = gpa(netMarks).status
        
         totl.innerHTML =  ((gpa(bangla.value).points + gpa(english.value).points + gpa(math.value).points + gpa(science.value).points + gpa(ict.value).points + gpa(reli.value).points) / 6 ).toFixed(2)

         totg.innerHTML  = gpa(netMarks).grade

         finpo.innerHTML = ((gpa(bangla.value).points + gpa(english.value).points + gpa(math.value).points + gpa(science.value).points + gpa(ict.value).points + gpa(reli.value).points) / 6 ).toFixed(2)

         fingr.innerHTML = gpa(netMarks).grade

         totm.innerHTML = parseFloat(bangla.value) + parseFloat(english.value)  + parseFloat(math.value)  + parseFloat(science.value)  + parseFloat(ict.value) + parseFloat(reli.value)   


    }

})