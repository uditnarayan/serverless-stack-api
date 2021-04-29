import handler from '../libs/handler';

export const main = handler( async (event, context) => {
  return {
    message: `Go Serverless v2.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
  };
});

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
