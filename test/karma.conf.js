basePath = '../';

frameworks = ["jasmine"];

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/js/**/*.js',
  'test/lib/angular/angular-mocks.js',
  'test/unit/**/*.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = false;
