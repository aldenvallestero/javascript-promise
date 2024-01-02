async function promise() {

  const expensiveCalculation1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Expensive Calculation 1');
      resolve(1);
    }, 10000);
  });
  
  const expensiveCalculation2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Expensive Calculation 2');
      reject(2);
    }, 2000);
  });
  
  const expensiveCalculation3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Expensive Calculation 3');
      resolve(3);
    }, 10000);
  });

  const start = new Date();

  await Promise.all([
    expensiveCalculation1,
    expensiveCalculation2,
    expensiveCalculation3,
  ]).then(result => {
    console.info('Result:', result);
  }).catch(e => {
    console.error('Error:', e)
  });

  const end = new Date();

  console.info(end - start);
}

promise()
