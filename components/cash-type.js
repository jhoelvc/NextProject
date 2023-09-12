import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Origin from './cash-origin'

export default function CashType({ cash, handleClick }) {
	return (
		<>
			<Grid item xs={12} md={6}>
            <List
               subheader={
                  <Grid container sx={{ width: '100%', px: 2, pt: 0.5, bgcolor: "#00b19d", color: '#FFFFFF' }}>
                     <Grid item xs>
                        <Typography variant="h6">{`${cash.inOut === 1 ? 'INGRESOS' : 'EGRESOS'} ${cash.acountType === 1 ? 'EFECTIVO' : '(TARJETA - BANCO)'}`}</Typography>
                     </Grid>
                     <Grid item xs="auto">
                        <Typography variant="h6">0.00</Typography>
                     </Grid>
                  </Grid>
               }
               sx={{ width: '100%', bgcolor: '#FFFFFF' }}
               aria-label="contacts"
               dense
            >
               <Origin origin={{id: 1, inOut: cash.inOut, acountType: cash.acountType}} handleClick={handleClick}></Origin>
               <Divider />
               <Origin origin={{id: 2, inOut: cash.inOut, acountType: cash.acountType}} handleClick={handleClick}></Origin>
               <Divider />
               <Origin origin={{id: 3, inOut: cash.inOut, acountType: cash.acountType}} handleClick={handleClick}></Origin>
               <Divider />
               <Origin origin={{id: 4, inOut: cash.inOut, acountType: cash.acountType}} handleClick={handleClick}></Origin>
            </List>
         </Grid>
		</>
	);
}