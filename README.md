
# Boilerplate RequireJS BackboneJS

## Prepare Development Environment

### Install Node.js
Install [Node.js](http://www.nodejs.org/) for you development environment.

After installation, you can check completion by querying versions:

**Windows**

```bash
C:\Users\xiwang> npm --version
2.7.4

C:\Users\xiwang> node --version
v0.12.2
```

### Install project dependencies (distribution tools)

```bash
$ cd requireBoilerplate/
$ npm install
```

## Development

### Start a HTTP Server

A HTTP server helps to develop and check result in seconds.

```bash
$ grunt server
```

### Run Application
Browser [localhost:8000/](http://localhost:8000/),
and debug over browser developer tools.

### Run Tests
Browser [localhost:8000/test/test.html](http://localhost:8000/test/test.html),
then you can see test results.

Test codes are located over dir `PROJECT/test/tests/**/*.js`,
and you may need to created some following `test/tests/TestCaseBoilerplate.js`.

## Release
Use `dist/` as application entry instead of `src/` for web page `PROJECT/index.html`.

for example, in JSP server, the HTML entry file should be located somewhere else, and you may use JSP feature to select:
* for PRODUCTION, use `dist/`
* for DEVELOPMENT, use `src/`

```html
<!-- index.html for PRODUCTION -->
<script src="dist/libs/require-2.1/require.js" data-main="dist/main"></script>

<!-- index.html for DEVELOPMENT -->
<script src="src/libs/require-2.1/require.js" data-main="src/main"></script>
```

### Build JS for PRODUCTION
Run command for distribution (src => dist).

```bash
$ grunt
```

### Files to RELEASE

* index.html
* dist
