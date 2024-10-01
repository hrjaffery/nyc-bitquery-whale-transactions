import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const WhaleTransactionsChart = () => {
  const [whaleData, setWhaleData] = useState([]);

  useEffect(() => {
    setInterval(() => {
        fetchWhaleTransactions();
    }, 10000);
  }, []);

  const fetchWhaleTransactions = async () => {
    const requestOptions = {
        method: "GET",
      };
      const apiLink = `http://localhost:5000/api/bitquery/track`;
      fetch(apiLink, requestOptions)
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        setWhaleData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const labels = whaleData.map((tx) => tx.sender.address);
  const amounts = whaleData.map((tx) => tx.amount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Transfer Amount (Whales)',
        data: amounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Top 10 Whale Transactions (Binance Network)</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WhaleTransactionsChart;
