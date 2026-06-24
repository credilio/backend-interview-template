module.exports = {
  'package.json': 'sort-package-json',
  '*.{ts,tsx,js,json}': 'oxfmt --write',
  '*.{ts,tsx}': 'npm run lint:fix',
  '**/*.ts?(x)': () => 'tsgo -p tsconfig.json',
};
