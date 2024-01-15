async function promise() {

  console.log('Start ...');
  const start = new Date();

  await Promise.all([

    new Promise((resolve, reject) => {
      setTimeout(resolve, 10000, 'expensiveCalculation1');
      console.log(456)
    }),

    new Promise((resolve, reject) => {
      setTimeout(reject, 2000, 'expensiveCalculation2');
    }),

    new Promise((resolve, reject) => {
      setTimeout(resolve, 10000, 'expensiveCalculation3');
    }),

  ])

    .then(result => {
      console.info('Result:', result);
    })
    
    .catch(e => {
      console.error('Error:', e)
    });

  const end = new Date();
  console.log('End ...');

  console.info(end - start);
}

promise();
