# vue-survey-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
npm run deploy:product
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## S3 Upload

aws s3 sync ./dist s3://insideharu.com

## S3 Delete

aws s3 sync ./dist s3://insideharu.com --delete
