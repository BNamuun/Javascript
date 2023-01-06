indexVal = [];
DateTime = [];
const loadCharacters = async () => {
  try {
    const res = await fetch(
      "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json#"
    );
    let data = await res.json();
    // console.log(data);
    data.map((item) => indexVal.push(item[1]));
    indexVal.shift();
    console.log({ indexVal });
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: indexVal,
        datasets: [
          {
            label: "# of Votes",
            data: indexVal,
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: (context) => {
                console.log(context.tick.value);
              },
            },
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

loadCharacters();
