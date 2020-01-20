import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Axios from 'axios';
import React from 'react';
import FeaturedCars from './FeatureCar';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
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
		unFilteredDeals: [],
		dealsOnPage: [],
		page: {
			currentPage: 0,
			rowsPerPage: 20,
			rowsPerPageOptions: [20, 40],
			totalItems: 0,
			onChange: this.onChange
		},
		sliderValue: [50, 400],
		transmission: '',
		engineType: ''
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
						unFilteredDeals: deals,
						dealsOnPage: deals.slice(start, end),
						page: {
							...prevState.page,
							totalItems: deals.length
						}
					}
				});
			});
	}
	
	afterUpdateState = () => {
		const { sliderValue: [min, max], unFilteredDeals, transmission, engineType } = this.state;
		const engineT = engineType.trim().toLowerCase();
		const transmissionT = transmission.trim().toLowerCase();
		
		const deals = unFilteredDeals.filter((deal) => {
			const { monthly_rental } = deal;
			
			if (engineT !== '' && transmissionT !== '') {
				return min <= monthly_rental && monthly_rental <= max && transmissionT === deal.transmission.toLowerCase() && engineT === deal.engine_type.toLowerCase();
			}
			if (engineT !== '') {
				return min <= monthly_rental && monthly_rental <= max && engineT === deal.engine_type.toLowerCase();
			}
			
			if (transmissionT !== '') {
				return min <= monthly_rental && monthly_rental <= max && transmissionT === deal.transmission.toLowerCase();
			}
			return min <= monthly_rental && monthly_rental <= max;
		});
		
		const { page: { currentPage, rowsPerPage } } = this.state;
		const start = currentPage * rowsPerPage;
		const end = start + rowsPerPage;
		
		this.setState(prevState => {
			return {
				deals,
				dealsOnPage: deals.slice(start, end),
				page: {
					...prevState.page,
					totalItems: deals.length,
					currentPage: 0
				}
			}
		})
	};
	
	handleChange = (event, newValue) => {
		this.setState({ sliderValue: newValue }, this.afterUpdateState)
	};
	
	onChangeTransmission = (event) => {
		const { value } = event.target;
		this.setState({ transmission: value }, this.afterUpdateState)
	};
	
	onChangeEngineType = (event) => {
		const { value } = event.target;
		this.setState({ engineType: value }, this.afterUpdateState)
	};
	
	render() {
		const { classes } = this.props;
		const { dealsOnPage, page, sliderValue, transmission, engineType } = this.state;
		
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
								handleChange={this.handleChange}
								sliderValue={sliderValue}
								onChangeTransmission={this.onChangeTransmission}
								transmission={transmission}
								onChangeEngineType={this.onChangeEngineType}
								engineType={engineType}
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
