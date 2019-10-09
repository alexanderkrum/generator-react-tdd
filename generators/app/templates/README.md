# React template alpha

My react setup for very basic react app with static analysis and pre-commit
hooks.

## Scripts

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "clean:test": "rm -rf coverage test",
    "test:ci": "CI=true yarn test --coverage --silent",
    "lint": "eslint src",
    "format": "yarn run prettier -- --write",
    "prettier": "prettier App.js \"**/src/**/*.+(js|jsx|json)\" \"**/__tests__/**/*.+(js|jsx|json)\"",
    "validate": "yarn lint && yarn prettier -- --list-different"
  }
```

## My development flow

I prefer to develop using TDD methodology. Hence, my steps for development.

0. It's optional but i suggest to branch here for the new feature or bug fix.
1. Start tests in an interactive mode
   ```bash
    $ yarn test
   ```
1. Write a failing test
   ```json
   it("missing sub header", () => {
     const { getByText } = render(<App />)
     expect(getByText("Missing"))
   })
   ```
1. Satisfy test and save
   > the saving will trigger a rerun of the test suite
1. Here you could branch

   4.1 Commit new tested piece of work

   > pre-commit hook will format and lint your changes

   4.2 If it's not enough work done yet. You could format and lint your work.

   ```bash
   $ yarn format
   $ yarn lint
   ```

1. Ready to push? Rebase your branch on the development branch.
1. Push to origin. Since you have rebased the pre-commit hook will run all test
   again to ensure everything still working ok.

## Configuration options

For the config you have got plenty of options. You can extend all the config
files. But for my taste it's the basic config is enough.

## Styles

No styles, if you want then create your own setup. I prefer to use inline styles
or styled-components.
