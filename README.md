
# Boilerplate RequireJS BackboneJS

## Prepare Development Environment

### Install Node.js
Install [Node.js](http://www.nodejs.org/) for you development environment.


### Install project dependencies (distribution tools)
And then run commands below to install requirements.

```bash
$ npm install
```

### Check Environment Completion
Update **index.html** to use `dist/` instead of `src/` when loading file `require.js` and module `main`.

Start HTTP server and see **index.html** if works.

## Development

### Start a HTTP Server
```bash
$ grunt server
```

### Run App:develop
Browser [localhost:8000/](http://localhost:8000/), and debug over browser developer tools.

### Run App:test
Browser [localhost:8000/test/test.html](http://localhost:8000/test/test.html), then you can see test results.

Test codes are located over dir `PROJECT/test/tests/**/*.js`,
and you may need to created some following `test/tests/TestCaseBoilerplate.js`.

## Release
Use `dist/` as application entry instead of `src/`, within web page `PROJECT/index.html`.

for example, in JSP server, the HTML entry file is over some other folder, and you may use JSP feature to select:
* for PRODUCTION, use `dist/`
* for DEVELOPMENT, use `src/`

```html
<!-- index.html for PRODUCTION -->
<script src="dist/libs/require-2.1/require.js" data-main="dist/main"></script>

<!-- index.html for DEVELOPMENT -->
<script src="src/libs/require-2.1/require.js" data-main="src/main"></script>
```

###
Run command for distribution (src => dist).
```bash
$ grunt
```
