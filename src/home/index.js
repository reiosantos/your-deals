import withStyles from '@material-ui/core/styles/withStyles';
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
		title: 'Featured post',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
	{
		title: 'Post title',
		date: 'Nov 11',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageText: 'Image Text',
	},
];

const models = [];

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
	render() {
		const { classes } = this.props;
		
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
							<Main title="Car Models List" posts={models}/>
						</Grid>
					</main>
				</Container>
				<Footer title="Footer" description="Something here to give the footer a purpose!"/>
			</React.Fragment>
		);
	}
}

export default withStyles(useStyles)(App);
