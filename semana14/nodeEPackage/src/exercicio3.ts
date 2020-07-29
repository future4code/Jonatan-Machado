import fs from 'fs';

export const createTask = (document: any, task: string) => {
  if (document === '' || task === '') {
    const error = 'empty parameter error';
    console.log(error);
    return error;
  } else if (document === undefined || task === undefined) {
    const error = 'undefined parameter error';
    console.log(error);
    return error;
  }
  fs.appendFileSync(document, task);
  return 'feito';
};

createTask(process.argv[2], process.argv[3]);
