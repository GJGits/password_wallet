# Password Wallet

A password wallet to safely store your passwords.

## Project structure

The app is based on the [Electron framework](https://www.electronjs.org/). The [Node](https://nodejs.org/it/) version used during development is `v16.3.0`.

- view: this folder contains the view submodule of this application. This module is based on [Angular](https://angular.io/), the source code is then built and the resulting code is used as the renderer process and view into the Electron app. In the development process the usual commands of Angular are avaible, anyway to build the app use the command `ng build --configuration production --base-href ''` inside the `view` folder.

- core: this folder instead contains the main process code.

To build and transform the whole app into a native application the [electron-packager](https://github.com/electron/electron-packager) library has been used. Inside the project it is possible to find a file named `package-app`, this file is a shell script for linux that build the view and the core at once creating by default a folder named `password_wallet-<system name>`. In order to launch the application go into this folder and issue the command: `./password_wallet`.

## API

- accountExistsAndIsValid: `No data`. Returns an object containing a status field.
    - status === 400: an account does not exists and it has to be created.
    - status === 205: an account exists but the master key password has to be updated.
    - status === 200: an account exists and it is valid.

- setNewCredentials: `password: string`. Set the new master key password. Returns an object containing a status field equals to `200` or `500` if some error occurs, in this case also an error field is provided.

- signin: `password: string`. Authenticate user. Returns an object containing a status field equals to `200` or `500`, in this case also an error field is provided.