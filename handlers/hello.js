import handler from '../libs/handler';

export const main = handler( async (event, context) => {
  return {
    message: `Hello! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
  };
});

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 500)
);
