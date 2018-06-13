// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC-RyrLeEyIidqauhu74f5ixmWT20Uw2bM",
    authDomain: "todolist-f405f.firebaseapp.com",
    databaseURL: "https://todolist-f405f.firebaseio.com",
    projectId: "todolist-f405f",
    storageBucket: "todolist-f405f.appspot.com",
    messagingSenderId: "324562887362"
  }
};
