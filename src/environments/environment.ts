// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
    firebase: {
        apiKey: "AIzaSyCUu2m2faPAjK5shxEnEF7Y7kZz0M85C5o",
        authDomain: "citylink-9412a.firebaseapp.com",
        databaseURL: "https://citylink-9412a.firebaseio.com",
        projectId: "citylink-9412a",
        storageBucket: "citylink-9412a.appspot.com",
        messagingSenderId: "380042811965"
    }
};
