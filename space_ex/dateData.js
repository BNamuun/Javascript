indexVal = []
const DateTime = []
const dateP = []
const Po =[]
const TimeP = []
const loadCharacters = async () => {
    try {
        const res = await fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json#')
        let data = await res.json();
        // console.log(data);
        data.map(item =>
        // cosnt DateVal =  DateTime.push((item)[0])
        indexVal.push((item)[1]))
        indexVal.shift();
        console.log({indexVal})
        const ctx = document.getElementById('myChart');
        
        data.map(item1 =>
            // cosnt DateVal =  DateTime.push((item)[0])
            DateTime.push((item1)[0]))
            DateTime.shift();
            DateTime.slice(11,15);
            // Po.push(new Date(dateP));
            // dateP.push(DateTime.getHours() + ':' + DateTime.getMinutes());
            
            new Chart(ctx, {
                type: 'bar',
            data: {
                labels: DateTime.slice(-10),
                datasets: [{
                    label: 'Kp index',
                    data: indexVal.slice(-10),
                    borderWidth: 2
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
        
    } catch (err) {
        console.log(err);
    }
};


//  console.log({nom}) 
loadCharacters()