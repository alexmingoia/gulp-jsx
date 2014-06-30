# gulp-jsx

[![Build Status](https://secure.travis-ci.org/alexmingoia/gulp-jsx.png)](http://travis-ci.org/alexmingoia/gulp-jsx) 
[![NPM version](https://badge.fury.io/js/gulp-jsx.png)](http://badge.fury.io/js/gulp-jsx)
[![Dependency Status](https://david-dm.org/alexmingoia/gulp-jsx.png)](http://david-dm.org/alexmingoia/gulp-jsx)

[jsx-transform](https://github.com/alexmingoia/jsx-transform/) for
[Gulp](https://github.com/gulpjs/gulp/).

## Installation

```sh
npm install gulp-jsx
```

## Usage

```javascript
var gulp = require('gulp');
var jsx = require('gulp-jsx');

gulp.task('build', function() {
  return gulp.src('views/**/*.js')
    .pipe(jsx())
    .pipe(gulp.dest('dist'));
});
```

## BSD Licensed
