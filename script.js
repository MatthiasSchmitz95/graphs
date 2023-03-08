const API_KEY = 'Q4bshzEa7qBf6hVUGrVR';
let apiData = [];
let apiDataDate= [];

async function loadCourse() {
    let startDate = new Date().toISOString().split('T')[0] ;
    let endDate = new Date().toISOString().split('T')[0];
    let url = `https://data.nasdaq.com/api/v3/datasets/BCHAIN/MKPRU?start_date=${startDate}&end_date=${endDate}=2023-03-07&api_key=${API_KEY}`;
    
    
    let response = await fetch(url);
    let responseAsJson = await response.json();
    console.log(responseAsJson['dataset']['data'][0][1]);
    let course = responseAsJson['dataset']['data'][0][1];
    document.getElementById('course').innerHTML = `${course}`;
}

function addDate(){
    let date = document.getElementById('getDate');
    let datePrice = date.value;
    apiDataDate.push(datePrice);
    
    addPrice(apiDataDate);
}
async function addPrice(datePrice){
    let url = `https://data.nasdaq.com/api/v3/datasets/BCHAIN/MKPRU?start_date=${datePrice}&end_date=${datePrice}&api_key=${API_KEY}`
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let course =responseAsJson['dataset']['data'][0][1];
    apiData.push(course);
    console.log(apiData,apiDataDate);
}


function drawChart() {

    
}

function updateChart(){
    myChart.update();
}

