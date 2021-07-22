# @stackhackerio/classless

@stackhackerio/classless is a kind of so-called Classless CSS, based on Tailwindcss, using @tailswindcss/forms and @tailswindcss/typography.

Install the plugin from npm:

```
$ npm install @tailwindcss/typography @tailwindcss/forms tailwindcss-classless
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // ...
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-classless'),
    // ...
  ],
}
```

## Demo

https://quicko.vercel.app/


## Development

We use [Vite](https://vitejs.dev/) for local development.

```
npm install
npm run dev
```

## License

@stackhackerio/classless is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
