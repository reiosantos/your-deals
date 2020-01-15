import {red} from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const AppTheme = createMuiTheme({
	typography: {
		fontFamily: [
			'Roboto',
			'-apple-system',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Arial',
			'sans-serif'
		].join(','),
		useNextVariants: true
	},
	palette: {
		secondary: {
			main: '#26a69a',
			contrastText: '#fff'
		},
		primary: {
			main: '#26a69a',
			contrastText: '#fff'
		},
		error: {
			light: red[300],
			main: red[500],
			dark: red[500]
		}
	}
});

export default AppTheme;
