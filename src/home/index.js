import withStyles from '@material-ui/core/styles/withStyles';
import Axios from 'axios';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FeaturedCars from './FeatureCar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
	mainGrid: {
		marginTop: theme.spacing(3),
	},
}));

const sections = [
	{ title: 'Personal', url: '#' },
	{ title: 'Business', url: '#' }
];

const featuredCars = [
	{
		title: 'UnSplash-13',
		image: require('../static/images/unsplash-1.jpg'),
	},
	{
		title: 'UnSplash-2',
		image: require('../static/images/unsplash-2.jpg'),
	},
];

const sidebar = {
	title: 'Search Filter',
	description: '',
	social: [
		{ name: 'GitHub', icon: GitHubIcon },
		{ name: 'Twitter', icon: TwitterIcon },
		{ name: 'Facebook', icon: FacebookIcon },
	],
};

class App extends React.Component {
	onChange = (event, page) => {
		const { page: { currentPage, rowsPerPage }, deals } = this.state;
		
		const start = currentPage * rowsPerPage;
		const end = start + rowsPerPage;
		this.setState(prevState => {
			return {
				dealsOnPage: deals.slice(start, end),
				page: {
					...prevState.page,
					currentPage: page
				}
			}
		})
	};
	
	state = {
		deals: [],
		dealsOnPage: [],
		page: {
			currentPage: 0,
			rowsPerPage: 20,
			rowsPerPageOptions: [20, 40],
			totalItems: 0,
			onChange: this.onChange
		}
	};
	
	constructor(props) {
		super(props);
		this.fetchCars();
	}
	
	fetchCars() {
		const data = {
			"type":"personal",
			"modelID":"x2 xdrive18 suv",
			"page":"1"
		};
		Axios.post('https://leasing.deals/get-all-deals', data)
			.then(resp => resp.data)
			.then(response => {
				const deals = response.deals;
				
				this.setState(prevState => {
					const start = prevState.page.currentPage * prevState.page.rowsPerPage;
					const end = start + prevState.page.rowsPerPage;
					return {
						deals,
						dealsOnPage: deals.slice(start, end),
						page: {
							...prevState.page,
							totalItems: deals.length
						}
					}
				});
			});
	}
	
	render() {
		const { classes } = this.props;
		const { dealsOnPage, page } = this.state;
		
		return (
			<React.Fragment>
				<CssBaseline/>
				<Container maxWidth="lg">
					<Header title="Search Your Deals" sections={sections}/>
					<main>
						<Grid container spacing={4}>
							{featuredCars.map(post => (
								<FeaturedCars key={post.title} post={post}/>
							))}
						</Grid>
						<Grid container spacing={5} className={classes.mainGrid}>
							<Sidebar
								title={sidebar.title}
								description={sidebar.description}
								archives={sidebar.archives}
								social={sidebar.social}
							/>
							<Main title="Car Models List" deals={dealsOnPage} page={page} />
						</Grid>
					</main>
				</Container>
				<Footer title="Footer" description="Something here to give the footer a purpose!"/>
			</React.Fragment>
		);
	}
}

export default withStyles(useStyles)(App);
