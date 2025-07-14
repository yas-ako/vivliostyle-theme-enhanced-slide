module.exports = {
  language: 'en',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
  entry: [
    'example/title.md',
    'example/chapter1.md'
  ],
  output: [
    'book.pdf',
  ],
};
