module.exports = {
  language: 'ja',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
  entry: [
    'example/_title.md',
    'example/chapter1.md'
  ],
  output: [
    'book.pdf',
  ],
};
