import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	card: {
		display: 'flex',
		margin: 'auto',
	},
	cardDetails: {
		flex: 1,
	},
	cardMedia: {
		height: 300,
		width: '100%',
		objectFit: 'cover',
	},
});

export default function FeaturedCars(props) {
	const classes = useStyles();
	const { post } = props;
	
	return (
		<Grid item xs={12} md={6}>
			<CardActionArea component="a" href="#">
				<Card className={classes.card}>
					<CardMedia
						className={classes.cardMedia}
						image={post.image}
						title={post.imageTitle}
					/>
				</Card>
			</CardActionArea>
		</Grid>
	);
}

FeaturedCars.propTypes = {
	post: PropTypes.object,
};
