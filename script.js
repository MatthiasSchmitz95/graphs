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
    apiDataDate.push(date.value);
    addPrice(apiDataDate);
}
async function addPrice(apiDataDate){
    let url = `https://data.nasdaq.com/api/v3/datasets/BCHAIN/MKPRU?start_date=${apiDataDate}&end_date=${apiDataDate}=2023-03-07&api_key=${API_KEY}`
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let course =responseAsJson['dataset']['data'][0][1];
    apiData.push(course);
    console.log(apiData,apiDataDate);
}


function drawChart() {
    const ctx = document.getElementById('myChart');
    const myChart =new Chart(ctx, {
        type: 'line',
        data: {
            labels: apiDataDate,
            datasets: [{
                label: '# of Votes',
                data: apiData,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
}

function updateChart(){
    myChart.update();
}

