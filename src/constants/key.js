/* eslint-disable prettier/prettier */

export const KEY = {
  SHIFT: 'shift',
  DEL: 'delete',
  BLANK: 'blank',
  SPACE: 'space',
  LANGUAGE: 'language',
  DONE: 'done',
};

export const CHARACTER_KEYS = [
  { type: 'character', value: { eng: { lower: 'q', upper: 'Q' }, special: { lower: '-', upper: '-' }, number: { lower: '1', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'w', upper: 'W' }, special: { lower: '/', upper: '/' }, number: { lower: '2', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'e', upper: 'E' }, special: { lower: ':', upper: ':' }, number: { lower: '3', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'r', upper: 'R' }, special: { lower: ';', upper: ';' }, number: { lower: '4', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 't', upper: 'T' }, special: { lower: '(', upper: '(' }, number: { lower: '5', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'y', upper: 'Y' }, special: { lower: ')', upper: ')' }, number: { lower: '6', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'u', upper: 'U' }, special: { lower: '₩', upper: '₩' }, number: { lower: '7', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'i', upper: 'I' }, special: { lower: '&', upper: '&' }, number: { lower: '8', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'o', upper: 'O' }, special: { lower: '@', upper: '@' }, number: { lower: '9', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'p', upper: 'P' }, special: { lower: '"', upper: '"' }, number: { lower: '-', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'a', upper: 'A' }, special: { lower: '[', upper: '[' }, number: { lower: '/', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 's', upper: 'S' }, special: { lower: ']', upper: ']' }, number: { lower: ':', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'd', upper: 'D' }, special: { lower: '{', upper: '{' }, number: { lower: ';', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'f', upper: 'F' }, special: { lower: '}', upper: '}' }, number: { lower: '(', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'g', upper: 'G' }, special: { lower: '#', upper: '#' }, number: { lower: ')', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'h', upper: 'H' }, special: { lower: '%', upper: '%' }, number: { lower: '$', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'j', upper: 'J' }, special: { lower: '^', upper: '^' }, number: { lower: '&', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'k', upper: 'K' }, special: { lower: '*', upper: '*' }, number: { lower: '@', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'l', upper: 'L' }, special: { lower: '+', upper: '+' }, number: { lower: '"', upper: '2' }, } },
  { type: 'command', value: KEY.SHIFT },
  { type: 'character', value: { eng: { lower: 'z', upper: 'Z' }, special: { lower: '`', upper: '`' }, number: { lower: '.', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'x', upper: 'X' }, special: { lower: '.', upper: '.' }, number: { lower: ',', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'c', upper: 'C' }, special: { lower: ',', upper: ',' }, number: { lower: '?', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'v', upper: 'V' }, special: { lower: '?', upper: '?' }, number: { lower: '!', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'b', upper: 'B' }, special: { lower: '!', upper: '!' }, number: { lower: '`', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'n', upper: 'N' }, special: { lower: '<', upper: '<' }, number: { lower: '1', upper: '2' }, } },
  { type: 'character', value: { eng: { lower: 'm', upper: 'M' }, special: { lower: '>', upper: '>' }, number: { lower: '1', upper: '2' }, } },
  { type: 'command', value: KEY.DEL },
];

export const LANGUAGE = {
  ENG: 'eng',
  SPECIAL: 'special',
  NUMBER: 'number',
};

export const KEYBOARD_KEYS = [
  CHARACTER_KEYS.slice(0, 10),
  CHARACTER_KEYS.slice(10, 19),
  CHARACTER_KEYS.slice(20, 27),
  [
    { type: 'command', value: KEY.LANGUAGE },
    { type: 'command', value: KEY.SPACE },
    { type: 'command', value: KEY.DONE },
  ],
];

export const MAX_INDEX = [
  { min: 1, max: 9 },
  { min: 1, max: 9 },
  { min: 1, max: 8 },
  { min: 1, max: 7 },
];

export const CAPSLOCK_STATUS = {
  ALWAYS: 2,
  ENABLE: 1,
  DISABLE: 0,
};
