# iGuess

## Run app

`$ yarn install`

`$ react-native eject`

### iOS

`$ react-native run-ios`

### Android

`$ touch android/local.properties`

Paste your Android SDK Path inside `local.properties` like below:
Windows: `sdk.dir = C:/Users/USERNAME/AppData/Local/Android/sdk`
macOS: `sdk.dir = /Users/USERNAME/Library/Android/sdk`
linux: `sdk.dir = /home/USERNAME/Android/Sdk`

Finally:

`$ react-native run-android`

## Folder structure


```
.
├── App.js
├── App.test.js
├── README.md
├── app.json
├── index.js
├── list-tree.md
├── list.md
├── package.json
├── src
│   ├── assets
│   ├── components
│   ├── containers
│   ├── scene
│   ├── store
│   │   ├── middlewares
│   │   ├── modules
│   └── theme
├── yarn-error.log
└── yarn.lock
```
