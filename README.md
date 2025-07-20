# Vivliostyle Theme Enhanced Slide

[![npm: version](https://flat.badgen.net/npm/v/@yas-ako/vivliostyle-theme-enhanced-slide)](https://npmjs.com/package/vivliostyle-theme-enhanced-slide)
[![npm: total downloads](https://flat.badgen.net/npm/dt/@yas-ako/vivliostyle-theme-enhanced-slide)](https://npmjs.com/package/vivliostyle-theme-enhanced-slide)
![npm: license](https://flat.badgen.net/npm/license/@yas-ako/vivliostyle-theme-enhanced-slide)

スライド用テーマ

## Use

In `vivliostyle.config.js`:

```js
module.exports = {
  theme: 'vivliostyle-theme-enhanced-report',
};
```

If you want to add your CSS:

```js
module.exports = {
  theme: [
    '@yas-ako/vivliostyle-theme-enhanced-slide',
    // add your CSS
  ],
};
```

## Dev

### Files

```
vivliostyle-theme-enhanced-report
├── LICENSE
├── README.md
├── example
│   ├── assets                            // auto generated
│   │   └── Logo (Mark + Type).png        // auto generated
│   └── default.md                        // 🖋
├── package.json
├── theme.css                             // 🖋
└── vivliostyle.config.js
```

**example**: Contain sample manuscripts using your theme.

### Commands

Run `vivliostyle preview` to preview your `theme.css`.

To watch file changes, use `preview` script.

```bash
npm run preview
# or
yarn preview
```

You can specify your CSS file and manuscript file for preview in vivliostyle.config.js:

```js
module.exports = {
  language: 'en',
  theme: ['node_modules/@vivliostyle/theme-base', '.'],
  entry: [
      'example/default.md',
      // and more...
  ],
}
```

Run `vivliostyle-theme-scripts validate` before publishing your package.

```bash
npm run validate
# or
yarn validate
```
