import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as Colors from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import EuroIcon from '@material-ui/icons/Euro';

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
		width: 200,
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
	pink: {
		color: Colors.pink.A200
	},
	payType: {
		marginLeft: 12,
	}
}));

export default function CarListItem({ car }) {
	const classes = useStyles();
	
	return (
		<Card elevation={0} className={classes.card}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<GridList cols={2}>
						<GridListTile>
							<Typography component="b" variant="h6">{car.model}</Typography>
							<Typography variant="body2" color="textSecondary">{car.derivative}</Typography>
							<Typography component="b" variant="body2">
								<b className={classes.pink}>
									{car.engine_type} | {car.engine_size} | {car.transmission}
								</b>
							</Typography>
						</GridListTile>
						<GridListTile>
							<Typography component="span" variant="body2" >
								Lease Type <b className={classes.pink}>{car.contract_type}</b>
							</Typography>
							
							<Divider />
							
							<Grid container direction="row" alignItems="center">
								<Grid item>
									<SvgIcon fontSize="small" component={EuroIcon} />
								</Grid>
								<Grid item>{car.monthly_rental}</Grid>
								<Grid item className={classes.payType}>
									<Typography variant="body2" component="p" color="textSecondary">
										<small> |   Per month, inc, VAT</small>
									</Typography>
								</Grid>
							</Grid>
							
							<Grid container direction="row" alignItems="center">
								<Grid item>
									<SvgIcon fontSize="small" component={EuroIcon} />
								</Grid>
								<Grid item>{car.initial_rental}</Grid>
								<Grid item className={classes.payType}>
									<Typography variant="body2" component="p" color="textSecondary">
										<small> |   Initial rental  </small>
									</Typography>
								</Grid>
							</Grid>
							
							<Typography variant="subtitle2" component="h6" color="textSecondary">
								Payment for {car.months} months.
							</Typography>
						</GridListTile>
					</GridList>
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
