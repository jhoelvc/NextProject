import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

export default function CashOrigin({ origin, handleClick }) {
   let title = '';
   switch(origin.id) {
      case 1: title = `${origin.inOut === 1 ? 'VENTAS' : 'COMPRAS'}`; break;
      case 2: title = `CUENTAS X ${origin.inOut === 1 ? 'COBRAR' : 'PAGAR'}`; break;
      case 3: title = `TRANSFERENCIA ${origin.inOut === 1 ? 'INGRESO' : 'EGRESO'}`; break;
      case 4: title = `OTROS ${origin.inOut === 1 ? 'INGRESOS' : 'EGRESOS'}`; break;
   }

	return (
		<>
			<ListItem disablePadding>
            <ListItemText 
               primary={
                  <>
                     <Grid container sx={{ width: '100%', px: 2 }}>
                        <Grid item xs>
                           <Typography>{title}</Typography>
                        </Grid>
                        <Grid item xs="auto">
                           <Typography>0.00</Typography>
                        </Grid>
                     </Grid>
                     <Grid container sx={{ width: '100%', pl: 3, pr: 2, display: origin.acountType === 1 ? '' : 'none' }}>
                        <Grid item xs>
                           <Typography>Efectivo</Typography>
                        </Grid>
                        <Grid item xs={4}>
                           <Typography>0.00</Typography>
                        </Grid>
                        <Grid item xs="auto">
                           <Link href={{pathname: '/details', query: { inOut: origin.inOut, accountType: origin.acountType, originId: origin.id }}}>
                              <IconButton edge="end" color="success" sx={{py: 0, px: 1.5}}>
                                 <AddIcon />
                              </IconButton>
                           </Link>
                        </Grid>
                     </Grid>
                     <Grid container sx={{ width: '100%', pl: 3, pr: 2, display: origin.acountType > 1 ? '' : 'none' }}>
                        <Grid item xs>
                           <Typography>Tarjeta</Typography>
                        </Grid>
                        <Grid item xs={4}>
                           <Typography>0.00</Typography>
                        </Grid>
                        <Grid item xs="auto">
                           <IconButton edge="end" color="success" sx={{py: 0, px: 1.5}} onClick={event => handleClick(true, `${title} CON TARJETA`)}>
                              <AddIcon />
                           </IconButton>
                        </Grid>
                     </Grid>
                     <Grid container sx={{ width: '100%', pl: 3, pr: 2, display: origin.acountType > 1 ? '' : 'none' }}>
                        <Grid item xs>
                           <Typography>Banco</Typography>
                        </Grid>
                        <Grid item xs={4}>
                           <Typography>0.00</Typography>
                        </Grid>
                        <Grid item xs="auto">
                           <IconButton edge="end" color="success" sx={{py: 0, px: 1.5}} onClick={event => handleClick(true, `${title} CON BANCO`)}>
                              <AddIcon />
                           </IconButton>
                        </Grid>
                     </Grid>
                  </>
               }
            />
         </ListItem>
		</>
	);
}