# react-template

## Teck Stack

- React
- Redux
- Redux Thunk
- React Router
- Styled Components

## Dependencies

- axios

## Tools

- eslint
- prettier

---

## Folder Structure

#### ./src/

###### /actions

> Naming Convention: [xxxAction].js

Includes:

1. actionCreators - `xxxAction.js`
2. actionTypes - `types.js`

All the action types defined in `types.js`.

```javascript
// userAction.js
import { CREATE_USER, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './types';
import * as api from '../apis';

export const createUser = (user) => ({ type: CREATE_USER, payload: user });

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const res = await api.fetchUser();
    dispatch({ type: FETCH_USER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
  }
};

// types.js
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
```

###### /apis

> Naming Convention: [endpoint].js

Various endpoints, use `axios` is prefered.  
Such as: `index.js`, `stripe.js`, `youtube.js`, `unsplash.js`

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const fetchUser = () => api.get('/users').then((res) => res.data);
```

###### /assets (Not imported yet)

Keep all the `icons`, `images`, `sounds`, `videos` etc.

###### /components

> Naming Convention: /components/[page]/[Component].js

All the components that are being used in app, separate by `pages`.  
If component needs to share between each others, put it into `shared`.  
Such as: `LoginHeader.js`, `LoginContent.js`, `LoginFooter.js`

```javascript
import LoginHeader from '/components/login/LoginHeader';
import LoginContent from '/components/login/LoginContent';
import LoginFooter from '/components/login/LoginFooter';
```

###### /constants (Not imported yet)

```javascript
// storageKeys.js
export const ACCESS_TOKEN = 'accessToken';
export const ACCESS_TOKEN_EXPIRE_TIME = 'accessTokenExpireTime';
export const USER_ID = 'userId';
export const USER_EMAIL = 'userEmail';
```

###### /contexts

> Naming Convention: [XxxContext].js

The first letter of context should be `capitaized`, due to the naming convention.

```javascript
// ThemeContext.js
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
```

###### /hooks (Not imported yet)

> Naming Convention: [useHooks].js

All the custom hooks.

Such as `useFetch.js`, `useWeather.js`

###### /pages

> Naming Convention: [XxxPage].js

Such as `LoginPage.js`, `SettingsPage.js`

###### /reducers

> Naming Convention: [xxxReducer].js

Such as: `authReducer.js`, `userReducer.js`

```javascript
// authReducer.js
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/types';

const initialState = {
  id: null,
  username: '',
  token: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return { id: payload.id, username: payload.username, token: payload.token };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAILURE:
      return initialState;
    default:
      return state;
  }
};
```

###### /services (Not imported yet)

This usually holds the instances of several services.

- push notifications
- google tracker
- etc.

###### /styles

> Naming Convention: [StyledPage].js

Includes:

1. `globalStyle.js`: Global styles.
2. `index.js`: Styles that need to shared with multiple pages.
3. `[StyledPage].js`: All the styles that each page needs.

Such as : `StyledLogin.js`, `StyledSettings.js`

```javascript
// StyledSettings.js
import styled from 'styled-components';

const StyledSettings = {};

StyledSettings.Header = styled.div`
  padding: 26px;
  align-items: center;
  justify-content: center;
`;

StyledSettings.HeaderText = styled.h3`
  margin-top: 6px;
`;

export default StyledSettings;
```

###### /translations (i18n)

Includes:

1. `index.js`: i18n helper functions
2. `[locale].json`: translation file
3. `TranslationProvider.js`: Need to wrap the whole app in `TranslationProvider.js`.

Such as: `en.json`, `zh.json`

> Naming Convention: [locale].json

###### /utils

All utility functions will be here.

###### App.js

Setup `Routes` and `Links` etc. here

###### index.js

> Entry Point

Setup `Redux Store`, `ContextProvider` etc.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/ThemeContext';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
```
