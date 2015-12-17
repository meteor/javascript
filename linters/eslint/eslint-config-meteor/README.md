# eslint-config-meteor

A [shared eslint configuration](http://eslint.org/docs/developer-guide/shareable-configs) with rules tailored for Meteor JS.

If you don't have `eslint` installed yet, please review the instructions [here](http://eslint.org/docs/user-guide/getting-started).  You'll need to install the following NPM dependencies:
```
  "eslint": "1.10.3",
  "babel-eslint": "4.1.3",
  "eslint-plugin-react": "3.6.3",  // optional, only needed if using react
  "eslint-config-meteor": "1.0.0"
```

Then create a `.eslintrc` file in your project root which extends the shared configuration, such as:

```
{
  "extends": "eslint-config-meteor"
}
```

or more simply (meaning the same thing)

```
{
  "extends": "meteor"
}
```

The current default configuration assumes an es6 codebase, which means you will get a lot of errors if you try to lint es5 code.

Along with the default configuration, we are also providing 2 more configuration options:

 * `es6-transitional` for projects that have mixed es6 & es5 code.  This just softens some errors to warnings for things that should be updated for es6.

 * `react` for projects that use ReactJS.

To use all of these options, your `.eslintrc` file would look like:

```
{
  "extends": [
    "meteor/es6",
    "meteor/react",
    "meteor/es6-transitional"
  ]
}
```
