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

- wallet_items: `No data`. Returns the list of cached wallet items. Secrets inside these objects are already decrypted so it is very important to pay attention on how these data are exposed.

- wallet_item_by_id: `id: number`. Returns the wallet item with the given id.

- delete_item: `id: number`. Delete the wallet item with the given id. This action is not reversible.

- add_or_update_item: `item: WalletItem`. Add to the wallet or update the already existing item.

## Run app with docker

In this project [docker](https://www.docker.com/) is used to set up the environments needed by each module. The docker version used is `Docker version 20.10.7, build f0df350`. For each module will be provided a custom image, at the moment the only avaiable public image is the one for the view submodule. The following are the links to the modules images, on each link you can find the documentation on how to use the relative image.
 
 - view: [view docker image](https://hub.docker.com/repository/docker/gjcode/gjcode-passwallet-view).

 - core: **not avaible yet**.

 ### VSCODE studio users:

 In the project there is a `.devcontainer` folder, this folder contains the setup for all the project, so it is possible to use it for both view and core modules. If you are familiar with [dev container](https://code.visualstudio.com/docs/remote/containers) this is, at the moment, the best way to work.