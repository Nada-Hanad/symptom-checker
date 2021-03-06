import { Line } from "react-chartjs-2";
import FadeIn from "react-fade-in";
import Chart from "./icons/chart";

const GlobalChart = ({ chartData }: any) => {
  var data = {
    labels: Object.keys(chartData?.cases) ?? [],
    datasets: [
      {
        label: "Cases",
        data: Object.values(chartData?.cases) ?? [],

        backgroundColor: "rgba(255, 99, 132,0.3)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1.5
      },
      {
        label: "Deaths",
        data: Object.values(chartData?.deaths) ?? [],

        backgroundColor: "rgba(0,0,0,0.3)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 1.5
      },

      {
        label: "Recovered",
        data: Object.values(chartData?.recovered) ?? [],

        backgroundColor: "rgba(12, 237, 125,0.3)",
        borderColor: "rgb(12, 237, 125)",
        borderWidth: 1.5
      }
    ]
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  return (
    <div className="globalChart">
      <FadeIn>
        <div className="title-chart">
          <Chart></Chart>
          <h2
            style={{
              paddingLeft: 20,
              fontFamily: "Poppins"
            }}
          >
            Variations of Covid-19
          </h2>
        </div>
        <div className="chart-content">
          <div className="chart">
            <Line
              style={{
                height: 400,
                width: 550
              }}
              data={data}
              options={options}
            />
          </div>
          <p
            style={{
              fontSize: 24,
              fontFamily: "Montserrat"
            }}
          >
            This chart shows the variations of total cases, deaths, and
            recovered in the past 30 days. You find above the key of the line
            chart. Hover over the desired data day to get the exact value of
            cases (resp deaths or recovered).
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default GlobalChart;
