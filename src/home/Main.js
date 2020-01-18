import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CarListItem from './CarListItem';

export default function Main(props) {
	const { deals, title } = props;
	
	return (
		<Grid item xs={12} md={8}>
			<Typography variant="h6" gutterBottom>
				{title}
			</Typography>
			<Divider />
			{deals.map(car => <CarListItem car={car} /> )}
		</Grid>
	);
}

Main.propTypes = {
	deals: PropTypes.array,
	title: PropTypes.string,
};
