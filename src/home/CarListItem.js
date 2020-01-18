import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		width: '100%',
// 		maxWidth: 360,
// 		backgroundColor: theme.palette.background.paper,
// 	},
// 	inline: {
// 		display: 'inline',
// 	},
// 	cardMedia: {
// 		height: '100%',
// 		width: '100%',
// 		objectFit: 'contain',
// 	},
// }));

const useStyles = makeStyles(theme => ({
	card: {
		display: 'flex',
		marginTop: '12px',
		padding: '16px',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 151,
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

export default function CarListItem({ car }) {
	const classes = useStyles();
	
	return (
		<Card elevation={0} className={classes.card}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						{car.model}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						{car.derivative}
					</Typography>
				</CardContent>
				<div className={classes.controls}>
					<Button variant="contained" color="primary" target="_blank" href={car.url}>Review Deal</Button>
				</div>
			</div>
			<CardMedia
				className={classes.cover}
				image={car.image_url}
				title={car.name}
			/>
		</Card>
	);
}
