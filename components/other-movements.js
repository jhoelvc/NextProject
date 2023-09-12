import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';

export default function OtherMovements(props) {
   const [textPerson, setTextPerson] = React.useState("");

   const handleClicEraseText = () => {
		setTextPerson("");
	}

   return (
      <>
         <Dialog 
            open={props.open} 
            onClose={props.close}
            maxWidth="md"
         >
            <DialogTitle>{`OTROS ${props.type === 1 ? 'INGRESOS' : 'EGRESOS'}`}</DialogTitle>
            <DialogContent>
               <Grid container spacing={1} sx={{mb: 2}}>
                  <Grid item xs={12} sx={{mt: 1}}>
                     <TextField
                        id="sucursal"
                        select
                        label="Tipo ingreso"
                        defaultValue="1"
                        size="small"
                        fullWidth
                     >
                        <MenuItem value="1">Cusco</MenuItem>
                        <MenuItem value="2">Lima</MenuItem>
                     </TextField>
                  </Grid>
                  <Grid item xs={12}>
                     <Grid container spacing={1}>
                        <Grid item xs>
                           <TextField
                              label="Nombre o razon social"
                              id="outlined-start-adornment"
                              InputProps={{
                                 endAdornment: <InputAdornment position="end">
                                    <IconButton
                                       onClick={handleClicEraseText}
                                       edge="end"
                                    >
                                       <CloseIcon />
                                    </IconButton>
                                 </InputAdornment>,
                              }}
                              size="small"
                              defaultValue="Jhoel Velasquez"
                              value={textPerson}
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs="auto">
                           <Button 
                              variant="contained" 
                              color="primary"
                              size="medium"
                              fullWidth
                              sx={{height: '100%'}}
                           >
                              <PersonAddIcon sx={{display: {xs: 'block', sm: 'none'}, mr: {xs: 0, sm: 1}}} />
                              <Typography sx={{display: {xs: 'none', sm: 'block'}}}>Cliente nuevo</Typography>
                           </Button>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        id="outlined-multiline-static"
                        label="Detalle de ingreso"
                        multiline
                        rows={3}
                        defaultValue=""
                        fullWidth
                     />
                  </Grid>
               </Grid>
            </DialogContent>
            <DialogActions>
               <FormControlLabel value="start" control={<Checkbox defaultChecked />} label="Imprimir" />
               <Button variant="contained" color="success" onClick={props.close}>Guardar</Button>
               <Button variant="contained" color="danger" onClick={props.close}>Cancelar</Button>
            </DialogActions>
         </Dialog>
      </>
   );
}