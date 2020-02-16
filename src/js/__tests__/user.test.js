/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Character, {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

test('Class Bowman extend Character', () => {
  const newBowman = new Bowman();
  const received = newBowman;
  const expected = {
    life: 1, level: 0, health: 15, attack: 25, defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Function levelUp works correctly', () => {
  const newBowman = new Bowman();
  newBowman.levelUp();
  const received = newBowman;
  const expected = {
    life: 1, level: 1, health: 100, attack: 30, defence: 30,
  };
  expect(received).toEqual(expected);
});


test('Function levelUp throws Error', () => {
  const newSword = new Swordsman();
  expect(() => {
    newSword.levelUp();
  }).toThrow(new Error('нельзя повысить левел умершего!'));
});
