const BITQUERY_API_URL = 'https://graphql.bitquery.io';
const BITQUERY_API_KEY = 'BQYKKYwt4lhjLf8AxQmS58dcwUdqJw0c';

exports.getTransactions = async () => {
    const query = `
    {
  ethereum(network: bsc) {
    transfers(
      options: { desc: "amount", limit: 10, offset: 0 }
      currency: { is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" }
      amount: { gt: 100000 }
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      sender {
        address
        annotation
      }
      receiver {
        address
        annotation
      }
      currency {
        address
        symbol
      }
      amount
      amount_usd: amount(in: USD)
      transaction {
        hash
      }
      external
    }
  }
}`;

  const response = await fetch(BITQUERY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': BITQUERY_API_KEY,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  console.log(data);
  return data.data.ethereum.transfers;
}
