import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const firstNames = [
  'Aaren',
  'Aarika',
  'Abagael',
  'Abagail',
  'Abbe',
  'Abbey',
  'Abbi',
  'Abbie',
  'Abby',
  'Abbye',
  'Abigael',
  'Abigail',
  'Abigale',
  'Abra',
  'Ada',
  'Adah',
  'Adaline',
  'Adan',
  'Adara',
  'Adda',
];
const lastNames = [
  'Aaberg',
  'Aalst',
  'Aara',
  'Aaren',
  'Aarika',
  'Aaron',
  'Aaronson',
  'Ab',
  'Aba',
  'Abad',
  'Abagael',
  'Abagail',
  'Abana',
  'Abate',
  'Abba',
  'Abbate',
  'Abbe',
  'Abbey',
  'Abbi',
  'Abbie',
];

const headerJSON = (onCapsClick) => [
  { key: 'checkbox', title: 'Checkbox', checkbox: true },
  { key: 'name', title: 'Name', sortable: true, filterable: true },
  {
    key: 'nameCaps',
    title: 'Name Caps',
    cell: (row) => {
      return (
      <TouchableHighlight onPress={onCapsClick}>
        <Text>{row.name.toUpperCase()}</Text>
      </TouchableHighlight>
    )}
  },
  { key: 'score', title: 'Score', sortable: true },
];
const bodyJSON = [];

for (let i = 0; i < 50; i += 1) {
  const firstNameIdx = Math.floor(Math.random() * 20);
  const lastNameIdx = Math.floor(Math.random() * 20);

  bodyJSON.push({
    name: `${firstNames[firstNameIdx]} ${lastNames[lastNameIdx]}`,
    score: Math.floor(Math.random() * 101),
    checkable: Math.floor(Math.random() * 2) === 0,
  });
}

const headingCellStyle = { padding: 5, backgroundColor: '#DDD' };
const bodyCellStyle = { padding: 5 };
const filterTextStyle = { height: 40 };

const fcrAdgData = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (val) => {
  return {
    name: `Pond ${lastNames[val]}`,
    fcr: 1 * Math.round(Math.random() * 3),
    adg: 2 * Math.round(Math.random() * 3),
  };
});

const waterQualityData = [
  { prop: 'ph', value: '1.24', name: 'Kolam A' },
  { prop: 'do', value: '1.24', name: 'Kolam B' },
  { prop: 'suhu', value: '1.24', name: 'Kolam A' },
  { prop: 'salinitas', value: '1.24', name: 'Kolam C' },
  { prop: 'nitrit', value: '1.24', name: 'Kolam A' },
  { prop: 'amonia', value: '1.24', name: 'Kolam B' },
  { prop: 'alkalinitas', value: '1.24', name: 'Kolam A' },
  { prop: 'hardness', value: '1.24', name: 'Kolam C' },
  { prop: 'po4', value: '1.24', name: 'Kolam A' },
  { prop: 'tbc', value: '1.24', name: 'Kolam B' },
];

export {
  headerJSON,
  bodyJSON,
  headingCellStyle,
  bodyCellStyle,
  filterTextStyle,
  fcrAdgData,
  waterQualityData,
};
