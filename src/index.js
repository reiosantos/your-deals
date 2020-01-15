import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import './static/styles/index.scss';
import AppTheme from './static/themes';

ReactDOM.render(
	<MuiThemeProvider theme={AppTheme}>
		<Routes/>
	</MuiThemeProvider>, document.getElementById('root') || document.createElement('div')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
