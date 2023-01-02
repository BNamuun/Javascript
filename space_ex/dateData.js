indexVal = []
DateTime = []
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
const dataV = []
        data.map(item1 =>
            // cosnt DateVal =  DateTime.push((item)[0])
            DateTime.push((item1)[0]))
            DateTime.shift();
            console.log({datav}) 
    

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: indexVal,
                datasets: [{
                    label: '# of Votes',
                    data: indexVal,
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




loadCharacters()