# Acme Note Taking App

A SaaS platform to create and store notes seamlessly. This app is hosted in github pages and can be accessible via the URL - https://rahulc97.github.io/notes-app/

This UI is built using:
- react: https://facebook.github.io/react/
- -gatsbyjs: https://www.gatsbyjs.com/
- tailwindCss: https://tailwindcss.com/

## Development/Local running

To start developing this UI you there are some prerequisites:

- node.js ~ 18.20.4 `nvm use(18.20.4)`
- npm ~ 10.7.0

To develop/run the ui locally execute the following steps:

1. Install the prereqs mentioned above.
2. Check out the project from Github [notes-app](https://github.com/rahulc97/notes-app)
3. Run `npm install`
4. To run the local server (in dev mode) run `npm run dev`
5. Once its completed the page will be accessible in http://localhost:8000/

We are using github pages to host and build is deployed using  the github actions

### npm tasks

- `npm run deploy` To trigger the github actions to build and deploy the wbsite
- `npm run build` To build the project
- `npm run clean` Deletes the .cache and public directories
- `npm run test` To run the tests
