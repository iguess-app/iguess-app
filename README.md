# iGuess

## Run app

`$ yarn install`

`$ react-native eject`

### iOS

`$ react-native run-ios`

### Android

`$ touch android/local.properties`

Paste your Android SDK Path inside `local.properties` like below:
Windows: `sdk.dir = C:/Users/__USERNAME__/AppData/Local/Android/sdk`
macOS: `sdk.dir = /Users/__USERNAME__/Library/Android/sdk`
linux: `sdk.dir = /home/__USERNAME__/Android/Sdk`

Finally:

`$ react-native run-android`

## Folder structure


```
.
├── App.js
├── App.test.js
├── README.md
├── app.json
├── assets
│   ├── images
│   │   └── index.js
│   └── package.json
├── index.js
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── Button.js
│   │   ├── GameCard.js
│   │   ├── GameList.js
│   │   ├── Guess.js
│   │   ├── Input.js
│   │   ├── NavBar.js
│   │   ├── Scene.js
│   │   ├── SelectedLine.js
│   │   ├── ServerError.js
│   │   ├── SettingsButton.js
│   │   ├── Team.js
│   │   └── package.json
│   ├── helpers
│   │   ├── index.js
│   │   └── package.json
│   ├── index.js
│   ├── scenes
│   │   ├── About.js
│   │   ├── Core.js
│   │   ├── Home.js
│   │   ├── Lines.js
│   │   ├── Settings.js
│   │   ├── SignIn.js
│   │   ├── SignUp.js
│   │   ├── Support.js
│   │   ├── Terms.js
│   │   ├── index.js
│   │   └── package.json
│   ├── store
│   │   ├── create.js
│   │   ├── middlewares
│   │   │   └── logging.js
│   │   ├── modules
│   │   │   ├── authentication
│   │   │   │   ├── actionTypes.js
│   │   │   │   ├── actions.js
│   │   │   │   └── reducer.js
│   │   │   ├── flags
│   │   │   │   ├── actionTypes.js
│   │   │   │   ├── actions.js
│   │   │   │   └── reducer.js
│   │   │   ├── games
│   │   │   │   ├── actionTypes.js
│   │   │   │   ├── actions.js
│   │   │   │   └── reducer.js
│   │   │   └── package.json
│   │   ├── package.json
│   │   └── reducers.js
│   └── theme
│       ├── index.js
│       └── package.json
└── yarn.lock
```

**app.json**: Info about the app.

**assets**: Assets like images and fonts.

**assets/images/index.js**: Map all png files to import images easily in code.

### **src: code!!!**

**src/index.js**: app Kernel.

**src/theme**: Centralize the theme of the app, like: colors, background.

**src/scenes**: Scenes of the app, include a main component and other minor components created with `styled-components`, these minor components wasn't exported to components folder because generally they aren't used again.

**src/components**: Reusable components.

**src/store**: Redux.

**src/helpers**: Helper functions.