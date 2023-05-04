import fetch from 'node-fetch';

const url = 'http://144.24.91.88:8880/api/v1/items';

(async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
    });
    
    const items = await response.json();
    
    for (const item of items) {
      const response2 = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*'
        },
        body: JSON.stringify({
          id: item.id,
          name: `${new Date().getTime()}-변경`,
          price: 10000
        })
      });

      const data = await response2.json();
      console.log('response2:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();