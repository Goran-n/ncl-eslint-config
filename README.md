# ncl-eslint-config 

> Eslint shareable config for NCL ES6 styled javascript projects
>
## Installation

```
$ npm install --save-dev @nikic/eslint-config
```

## Usage
Extend your eslint config with : 
```js
{
  "extends": "@nikic/eslint-config"
}
```

```$xslt
v2.0.0 Scope changes

Note worthy changes

- ES 2020 is now default
- "no-console": Any form of console.log will now output an error in all enviroments. This is to ensure a logging library is always used.
- "no-const-assign": const rewrites will now be considered errors
- "max-len" - Default line length is now 110 characters. This should be wide enough for most laptops whilst keeping a good productivity level when on wider screens.
- "max-len" - Regex patterns now have no length limit.
- "node/no-mixed-requires" - Mixing import and require will now warn
- "node/no-process-env" - process.env usage will now throw an error in order to further promote global config usage.
- "node/no-process-exit" - Incorrect process.exit usage will now throw an error
- "no-undef-init" - Variables must have an initial value, can be undefined as long as its specified.

- "accessor-pairs" rule now recognizes class members by default.
- "array-callback-return" will now throw an error and now recognizes flatMap method.
- "computed-property-spacing" rule now recognizes class members by default.
- "func-names" rule now recognizes function declarations in default exports.
- "no-extra-parens" rule now recognizes parentheses in assignment targets.
- "no-dupe-class-members" rule now recognizes computed keys for static class members.
- "no-magic-number" rule now recognizes bigint literals.
- "radix" rule now recognizes invalid numbers for the second parameter of parseInt().
- "use-isnan" rule now recognizes class members by default.
- "yoda" rule now recognizes bigint literals.

The following rules have been added as tests

- "no-label-var" - To promote cleaner code
- ""

Debates

"no-use-before-define" - We can consider disabling tihs since babel is used for most projects. However 
I'm not sure if babel converts to pre es6 standards.

```
