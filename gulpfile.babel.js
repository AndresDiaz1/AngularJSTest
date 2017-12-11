import eslint from 'gulp-eslint';
import fs from 'fs';
import gulp from 'gulp';
import lodash from 'lodash';
import path from 'path';
import rename from 'gulp-rename';
import template from 'gulp-template';
import webpack from 'webpack';
import yargs from 'yargs';

import eslintrc from './.eslintrc';

const root = 'client';

const resolveToComponents = (glob = '') => path.join(root, 'app/components', glob); // app/components/{glob}

const blankTemplates = path.join(__dirname, 'generator', 'component/**/*.**');

gulp.task('component', () => {
  const cap = val => val.charAt(0).toUpperCase() + val.slice(1);
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(blankTemplates)
    .pipe(template({
      name,
      upCaseName: cap(name),
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('lint', () =>
  gulp.src([
    'client/app/**/*.js',
    '!client/app/**/*.spec.js',
  ])
    .pipe(eslint(eslintrc))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()),
);
