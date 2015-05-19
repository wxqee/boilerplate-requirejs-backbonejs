
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

Install `Grunt` command line tool for building.

```bash
$ npm install -g grunt-cli
```

Check `Grunt` installation completion.

```bash
C:\Users\xiwang> grunt --version
grunt-cli v0.1.13
grunt v0.4.5
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
Browser [http://localhost:8000/](http://localhost:8000/),
and debug over browser developer tools.

### Run Tests
Browser [http://localhost:8000/tests/tests.html](http://localhost:8000/tests/tests.html),
then you can see test results.

Or you can run tests with Grunt tool, over command line:

```bash
$ grunt test
```

Test cases can be found at `./tests/testcase/`, to be remember that edit `./tests/testsuite.js` every time when 
you add a new test case and want it to be run. 

## Release
Use `dist/` as application entry instead of `src/` for web page `PROJECT/index.html`.

### Build JS for PRODUCTION
Run command for distribution (src => dist).

```bash
$ grunt
```

### Edit Web Pages for PRODUCTION
for example, in JSP server, the HTML entry file should be located somewhere else, and you may use JSP feature to select:
* for PRODUCTION, use `dist/`
* for DEVELOPMENT, use `src/`

```html
<!-- index.html for PRODUCTION -->
<script src="dist/libs/require-2.1/require.js" data-main="dist/main"></script>

<!-- index.html for DEVELOPMENT -->
<script src="src/libs/require-2.1/require.js" data-main="src/main"></script>
```

### Files to RELEASE

* index.html
* dist
* -- other files you added --
