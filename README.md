# Vinetos.fr

This is the project which contains the website of Vinetos.

## Install for dev

```sh
git clone https://github.com/Vinetos/Vinetos.fr
cd Vinetos.fr
npm install
npm start
```

As long as `npm start` is running, it will **watch** your changes. You can edit `_sass/main.scss` and `_javascript/main.js` at will. Changes are **immediately** compiled to their destinations, where `index.html` will pick them up upon reload in your browser.

Some controlling output is written to the `npm start` console in that process:

```sh
_javascript/main.js -> lib/main.js

=> changed: $HOME/projects/start-with-bulma/_sass/main.scss
Rendering Complete, saving .css file...
Wrote CSS to $HOME/projects/start-with-bulma/css/main.css
```

Use `npm run` to show all available commands:

```sh
Lifecycle scripts included in bulma-start:
  start
    npm-run-all --parallel css-watch js-watch

available via `npm run-script`:
  css-build
    node-sass _sass/main.scss css/main.css
  css-deploy
    npm run css-build && npm run css-postcss
  css-postcss
    postcss --use autoprefixer --output css/main.css css/main.css
  css-watch
    npm run css-build -- --watch
  deploy
    npm run css-deploy && npm run js-build
  js-build
    babel _javascript --out-dir lib
  js-watch
    npm run js-build -- --watch
```

If you want to learn more, follow these links: [Bulma homepage](http://bulma.io) and [Documentation](http://bulma.io/documentation/overview/start/).


## Copyright and license

Code copyright 2019 Chassignol Valentin. Code released under [the MIT license](https://github.com/Vinetos/Vinetos.fr/blob/master/LICENSE).
