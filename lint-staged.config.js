module.exports = {
  '*.{js,jsx,ts,tsx,json}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check-types',
}
