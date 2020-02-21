/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import json from '../parser';
import read from '../reader';

jest.mock('../reader');

test('', async () => {
  expect.assertions(1);
  try {
    const data = await read.mockReturnValue((reject) => {
      throw new Error('Ошибка ввода!');
    });
    const value = await json(data);
    const result = JSON.parse(value);
    return result;
  } catch (e) {
    expect(e).toEqual(new Error('Ошибка ввода!'));
    done();
  }
});