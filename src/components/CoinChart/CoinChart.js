import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CoinChart.css";
import { createTheme } from "@mui/material/styles";
import { CircularProgress, ThemeProvider } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChart } from "../../store/actions/coin-action";
import { useParams } from "react-router";
// import { chartDays } from "../../store/apis/data";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CoinChart() {
  const [historicaData, setHistoricaData] = useState([]); // Initialize as an empty array
  const chart = useSelector((state) => state.chart);
  const dispatch = useDispatch();
  const { coinName: coin } = useParams();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  useEffect(() => {
    dispatch(fetchChart(coin));
  }, [dispatch, coin]);

  useEffect(() => {
    if (chart && chart.length > 0) {
      setHistoricaData(chart[0]);
    }
  }, [chart]);

  console.log("data: ", historicaData);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="chartMain">
        {!historicaData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicaData.map((coin) => {
                  let date = new Date(coin[0]);
                
                  return date.toLocaleDateString();
                }),
                
                datasets: [
                  {
                    label: `${coin} Price (Past 1 Year)`,
                    data: historicaData.map((coin) => coin[1]),
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    ticks: {
                      color: "white", // Set the X-axis labels (dates) to white
                    },
                  },
                  y: {
                    ticks: {
                      color: "white", // Set the Y-axis labels (prices) to white
                    },
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      color: "white", // Set the legend labels to white
                    },
                  },
                },
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </>
        )}
     
      </div>
    </ThemeProvider>
  );
}

export default CoinChart;
