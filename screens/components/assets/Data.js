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

const headerJSON = [
  { key: 'checkbox', title: 'Checkbox', checkbox: true },
  { key: 'name', title: 'Name', sortable: true, filterable: true },
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

export { headerJSON, bodyJSON, headingCellStyle, bodyCellStyle, filterTextStyle };
