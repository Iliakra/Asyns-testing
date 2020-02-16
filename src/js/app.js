import json from './parser';
import read from './reader';

  (async () => {
    try {
      const data = await read();
      const value = await json(data);
      return value;
    } catch (e) {
      return new Error('Ошибка обработки днных!')
    }
  })();