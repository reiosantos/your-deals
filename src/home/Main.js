import TablePagination from '@material-ui/core/TablePagination';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CarListItem from './CarListItem';

export default function Main(props) {
	const { deals, title, page } = props;
	
	return (
		<Grid item xs={12} md={8}>
			<Typography variant="h6" gutterBottom>{title}</Typography>
			<Divider />
			
			{deals.map(car => <CarListItem key={car._id} car={car} /> )}
			
			<TablePagination
				component="nav"
				page={page.currentPage}
				rowsPerPage={page.rowsPerPage}
				rowsPerPageOptions={page.rowsPerPageOptions}
				count={page.totalItems}
				onChangePage={page.onChange}
			/>
			
		</Grid>
	);
}

Main.propTypes = {
	deals: PropTypes.array,
	page: PropTypes.shape({
		currentPage: PropTypes.number,
		rowsPerPage: PropTypes.number,
		rowsPerPageOptions: PropTypes.number,
		totalItems: PropTypes.number,
		onChangePage: PropTypes.func,
	}),
	title: PropTypes.string,
};
