import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import SvgIcon from '@material-ui/core/SvgIcon';
import EuroIcon from '@material-ui/icons/Euro';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
	sidebarAboutBox: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[200],
	},
	sidebarSection: {
		marginTop: theme.spacing(3),
	},
	empty: {
		width: '100%',
		marginTop: '12px',
		marginBottom: '12px',
	}
}));

function sliderValueText(value) {
	return <React.Fragment>
			<SvgIcon fontSize="small" component={EuroIcon} />{value}
		</React.Fragment>;
}

export default function Sidebar(props) {
	const classes = useStyles();
	const {
		description, social, title, handleChange, sliderValue, transmission,
		onChangeTransmission, engineType, onChangeEngineType
	} = props;
	
	return (
		<Grid item xs={12} md={4}>
			<Paper elevation={0} className={classes.sidebarAboutBox}>
				<Typography variant="h6" gutterBottom>
					{title}
				</Typography>
				<Typography>{description}</Typography>
				<Divider />
				
				<Typography id="range-slider" gutterBottom>Monthly rental Range</Typography>
				<Slider
					value={sliderValue}
					onChange={handleChange}
					valueLabelDisplay="auto"
					valueLabelFormat={sliderValueText}
					aria-labelledby="range-slider"
					getAriaValueText={sliderValueText}
					defaultValue={[50, 400]}
					min={50}
					max={950}
				/>
				
				<InputLabel id="demo-simple-select-label" className={classes.empty}>Transmission</InputLabel>
				<Select
					autoWidth={true}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={transmission}
					onChange={onChangeTransmission}
				>
					<MenuItem value="">--------------------</MenuItem>
					<MenuItem value="Automatic">Automatic</MenuItem>
					<MenuItem value="Manual">Manual</MenuItem>
				</Select>
				
				<InputLabel id="demo-simple-select-label" className={classes.empty}>Engine Type</InputLabel>
				<Select
					autoWidth={true}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={engineType}
					onChange={onChangeEngineType}
				>
					<MenuItem value="">--------------------</MenuItem>
					<MenuItem value="Diesel">Diesel</MenuItem>
					<MenuItem value="Petrol">Petrol</MenuItem>
				</Select>
			</Paper>
			<Typography variant="h6" gutterBottom className={classes.sidebarSection}>
				Social
			</Typography>
			{social.map(network => (
				<Link display="block" variant="body1" href="#" key={network.name}>
					<Grid container direction="row" spacing={1} alignItems="center">
						<Grid item>
							<network.icon />
						</Grid>
						<Grid item>{network.name}</Grid>
					</Grid>
				</Link>
			))}
		</Grid>
	);
}

Sidebar.propTypes = {
	archives: PropTypes.array,
	description: PropTypes.string,
	social: PropTypes.array,
	title: PropTypes.string,
	sliderValue: PropTypes.array,
	handleChange: PropTypes.func,
	transmission: PropTypes.string,
	onChangeTransmission: PropTypes.func,
	engineType: PropTypes.string,
	onChangeEngineType: PropTypes.func,
};
