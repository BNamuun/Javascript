indexVal = [];
const DateTime = [];
const dateP = [];
const TimeArr = [];
const TimeP = [];
const loadCharacters = async () => {
  try {
    const res = await fetch(
      "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json#"
    );
    let data = await res.json();
    // console.log(data);
    data.map((item) =>
      // cosnt DateVal =  DateTime.push((item)[0])
      indexVal.push(item[1])
    );
    indexVal.shift();
    console.log({ indexVal });
    const ctx = document.getElementById("myChart");

    data.map((item1) =>
      // cosnt DateVal =  DateTime.push((item)[0])
      DateTime.push(item1[0])
    );
    DateTime.shift();
    console.log({ DateTime });
    for (let i = 0; i < DateTime.length; i++) {
      const pp = new Date(DateTime[i]);
      const kkk = pp.toLocaleDateString("en-us", { month: "short" });
      const MonthD = pp.getMonth(pp);
      const DayD = pp.getDate(pp);
      console.log(MonthD);
      let hour = pp.getHours();
      let minS = pp.getMinutes();
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minS < 10) {
        minS = "0" + minS;
      }
      const DateDD = kkk + " " + DayD;
      console.log({ DateDD });
      const JJ = hour + ":" + minS;
      TimeArr.push(DateDD + " " + JJ);
    }

    console.log(TimeArr);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: TimeArr.slice(-15),
        datasets: [
          {
            label: "Kp index",
            data: indexVal.slice(-15),
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//  console.log({nom})
loadCharacters();
