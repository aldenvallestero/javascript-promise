async function promise() {
  const expensiveCalculation1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 'expensiveCalculation1');
  });
  
  const expensiveCalculation2 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'expensiveCalculation2');
  });
  
  const expensiveCalculation3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 'expensiveCalculation3');
  });

  const promises = [
    expensiveCalculation1,
    expensiveCalculation2,
    expensiveCalculation3,
  ];

  console.log('Start ...');
  const start = new Date();

  await Promise.all(promises).then(result => {
    console.info('Result:', result);
  }).catch(e => {
    console.error('Error:', e)
  });

  const end = new Date();
  console.log('End ...');

  console.info(end - start);
}

promise()
