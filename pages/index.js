import * as React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import Layout from "../components/layout";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import CashType from "../components/cash-type";
import Details from "@/components/details";
import OtherMovements from '@/components/other-movements';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Index() {
	const [showDetails, setshowDetails] = useState(false);
	const [titleDetails, setstitleDetails] = useState(false);
	const [typeOtherMovement, settypeOtherMovement] = useState(0);
	const [value, setValue] = React.useState("01/01/2023");
	
	useEffect(() => {
		console.log("ok1")
	}, [])

	const handleClickDialogDetails = (state, title) => {
		setshowDetails(state);
		setstitleDetails(title);
	}

	return(
		<Layout>
			<Container maxWidth="xxl">
				<Typography variant="h5" sx={{mt: 1}} gutterBottom>CAJA Y BANCOS</Typography>

				<Grid container spacing={{xs: 1, lg: 2}} sx={{mb: 2}}>
					<Grid item xs={12} sm={4} lg>
						<Button variant="contained" size="small" fullWidth>CUENTAS POR COBRAR</Button>
					</Grid>
					<Grid item xs={12} sm={4} lg>
						<Button variant="contained" size="small" fullWidth>CUENTAS POR PAGAR</Button>
					</Grid>
					<Grid item xs={12} sm={4} lg>
						<Button variant="contained" size="small" fullWidth>TRANSFERENCIAS</Button>
					</Grid>
					<Grid item xs={12} sm={4} lg>
						<Button variant="contained" size="small" onClick={() => settypeOtherMovement(1)} fullWidth>OTROS INGRESOS</Button>
					</Grid>
					<Grid item xs={12} sm={4} lg>
						<Button variant="contained" size="small" onClick={() => settypeOtherMovement(2)} fullWidth>OTROS EGRESOS</Button>
					</Grid>
					<Grid item xs={12} sm={4} lg>
						<Button variant="contained" size="small" fullWidth>LETRA DE CAMBIO</Button>
					</Grid>
				</Grid>
				
				<Grid container spacing={{xs: 1, lg: 2}} sx={{mb: 1	}}>
					<Grid item xs={12} sm={3} lg>
						<TextField
							id="sucursal"
							select
							label="Sucursal"
							defaultValue="1"
							size="small"
							fullWidth
						>
							<MenuItem value="1">Cusco</MenuItem>
							<MenuItem value="2">Lima</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={12} sm={3} lg>
						<TextField
							id="cuenta"
							select
							label="Cuenta"
							defaultValue="1"
							size="small"
							fullWidth
						>
							<MenuItem value="1">Fernando</MenuItem>
							<MenuItem value="2">BCP</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={12} sm={3} lg>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="Desde"
								value={value}
								onChange={(newValue) => {
									setValue(newValue);
								}}
								renderInput={(params) => <TextField {...params} size="small" fullWidth/>}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} sm={3} lg>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label="Hasta"
								value="01/01/2023"
								onChange={(newValue) => {
									setValue(newValue);
								}}
								renderInput={(params) => <TextField {...params} size="small" fullWidth/>}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={12} sm={3} lg>
						<TextField
							id="moneda"
							select
							label="Moneda"
							defaultValue="1"
							size="small"
							fullWidth
						>
							<MenuItem value="1">Soles</MenuItem>
							<MenuItem value="2">Dolares</MenuItem>
						</TextField>
					</Grid>
					<Grid item xs={6} sm lg={1}>
						<Button variant="contained" color="primary" size="medium" sx={{height: '100%'}} fullWidth>BUSCAR</Button>
					</Grid>
					<Grid item xs={6} sm lg={1}>
						<Button variant="contained" color="success" size="medium" sx={{height: '100%'}} fullWidth>EXPORTAR</Button>
					</Grid>
				</Grid>
				
				
				<Grid container spacing={1.5}>
					<Grid item xs={12}>
						<Typography variant="h5" sx={{mb: 0, pb: 0, textAlign: "center"}}>MOVIMIENTOS CAJA - EFECTIVO</Typography>
					</Grid>

					<Grid container sx={{ bgcolor: "#4c5667", ml: 1.5, px: 1, color: '#FFFFFF' }}>
						<Grid item xs>
							<Typography variant="h6">SALDO INICIAL EFECTIVO</Typography>
						</Grid>
						<Grid item xs="auto">
							<Typography variant="h6">0.00</Typography>
						</Grid>
					</Grid>
					
					<CashType cash={{inOut: 1, acountType: 1}} handleClick={handleClickDialogDetails}></CashType>
          		<CashType cash={{inOut: 2, acountType: 1}} handleClick={handleClickDialogDetails}></CashType>

					<Grid container sx={{ bgcolor: "#4c5667", ml: 1.5, px: 1, mt: 1, color: '#FFFFFF' }}>
						<Grid item xs>
							<Typography variant="h6">SALDO FINAL EFECTIVO</Typography>
						</Grid>
						<Grid item xs="auto">
							<Typography variant="h6">0.00</Typography>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h5" sx={{mb: 0, pb: 0, textAlign: "center"}} gutterBottom>MOVIMIENTOS CAJA - NO EFECTIVO</Typography>
					</Grid>

					<CashType cash={{inOut: 1, acountType: 2}} handleClick={handleClickDialogDetails}></CashType>
          		<CashType cash={{inOut: 2, acountType: 3}} handleClick={handleClickDialogDetails}></CashType>

					<Grid container sx={{ bgcolor: "#4c5667", ml: 2, px: 1, mt: 1, color: '#FFFFFF' }}>
						<Grid item xs>
							<Typography variant="h6">SALDO FINAL NO EFECTIVO</Typography>
						</Grid>
						<Grid item xs="auto">
							<Typography variant="h6">0.00</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>

			<Details open={showDetails} close={() => setshowDetails(false)} type={titleDetails}></Details>
			<OtherMovements open={typeOtherMovement > 0} close={() => settypeOtherMovement(0)} type={typeOtherMovement}></OtherMovements>
		</Layout>
	);
}