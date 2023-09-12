import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

 const IOSSwitch = styled((props) => (
   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
 ))(({ theme }) => ({
   width: 42,
   height: 26,
   padding: 0,
   '& .MuiSwitch-switchBase': {
     padding: 0,
     margin: 2,
     transitionDuration: '300ms',
     '&.Mui-checked': {
       transform: 'translateX(16px)',
       color: '#fff',
       '& + .MuiSwitch-track': {
         backgroundColor: theme.palette.mode === 'dark' ? '#0DA30F' : '#65C466',
         opacity: 1,
         border: 0,
       },
       '&.Mui-disabled + .MuiSwitch-track': {
         opacity: 0.5,
       },
     },
     '&.Mui-focusVisible .MuiSwitch-thumb': {
       color: '#33cf4d',
       border: '6px solid #fff',
     },
     '&.Mui-disabled .MuiSwitch-thumb': {
       color:
         theme.palette.mode === 'light'
           ? theme.palette.grey[100]
           : theme.palette.grey[600],
     },
     '&.Mui-disabled + .MuiSwitch-track': {
       opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
     },
   },
   '& .MuiSwitch-thumb': {
     boxSizing: 'border-box',
     width: 22,
     height: 22,
   },
   '& .MuiSwitch-track': {
     borderRadius: 26 / 2,
     backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
     opacity: 1,
     transition: theme.transitions.create(['background-color'], {
       duration: 500,
     }),
   },
 }));

 const columns = [
   { id: 'name', label: 'Name', minWidth: 170 },
   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
   {
     id: 'population',
     label: 'Population',
     minWidth: 170,
     align: 'right',
     format: (value) => value.toLocaleString('en-US'),
   },
   {
     id: 'size',
     label: 'Size\u00a0(km\u00b2)',
     minWidth: 170,
     align: 'right',
     format: (value) => value.toLocaleString('en-US'),
   },
   {
     id: 'density',
     label: 'Density',
     minWidth: 170,
     align: 'right',
     format: (value) => value.toFixed(2),
   },
 ];
 
 function createData(name, code, population, size) {
   const density = population / size;
   return { name, code, population, size, density };
 }
 
 const rows = [
   createData('India', 'IN', 1324171354, 3287263),
   createData('China', 'CN', 1403500365, 9596961),
   createData('Italy', 'IT', 60483973, 301340),
   createData('United States', 'US', 327167434, 9833520),
   createData('Canada', 'CA', 37602103, 9984670),
   createData('Australia', 'AU', 25475400, 7692024),
   createData('Germany', 'DE', 83019200, 357578),
   createData('Ireland', 'IE', 4857000, 70273),
   createData('Mexico', 'MX', 126577691, 1972550),
   createData('Japan', 'JP', 126317000, 377973),
   createData('France', 'FR', 67022000, 640679),
   createData('United Kingdom', 'GB', 67545757, 242495),
   createData('Russia', 'RU', 146793744, 17098246),
   createData('Nigeria', 'NG', 200962417, 923768),
   createData('Brazil', 'BR', 210147125, 8515767),
 ];

export default function Details(props) {
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
   };

	return (
		<>
         <Dialog
            fullScreen
            open={props.open}
            onClose={props.close}
            TransitionComponent={Transition}
            disableScrollLock
         >
            <AppBar sx={{ position: 'relative' }} color="primary" enableColorOnDark>
               <Toolbar>
                  <IconButton
                     edge="start"
                     color="inherit"
                     onClick={props.close}
                     aria-label="close"
                  >
                     <ArrowBackIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                     {props.title}
                  </Typography>
                  <FormControlLabel
                     control={<IOSSwitch sx={{ m: 1 }} />}
                     label="Vista detallada"
                     labelPlacement="start"
                  />
               </Toolbar>
            </AppBar>
            
            <Grid sx={{height: '100%', overflow: 'hidden', m: 2}}>
               <Paper sx={{ width: '100%', height: '100%', overflow: 'hidden'}}>
                  <TableContainer sx={{height: '93%'}}>
                     <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                           <TableRow>
                           {columns.map((column) => (
                              <TableCell
                                 key={column.id}
                                 align={column.align}
                                 style={{ minWidth: column.minWidth }}
                              >
                                 {column.label}
                              </TableCell>
                           ))}
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {rows
                           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                           .map((row) => {
                              return (
                                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                 {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                       <TableCell key={column.id} align={column.align}>
                                       {column.format && typeof value === 'number'
                                          ? column.format(value)
                                          : value}
                                       </TableCell>
                                    );
                                 })}
                                 </TableRow>
                              );
                           })}
                        </TableBody>
                     </Table>
                  </TableContainer>
                  <TablePagination
                     rowsPerPageOptions={[10, 20, 50]}
                     component="div"
                     count={rows.length}
                     rowsPerPage={rowsPerPage}
                     page={page}
                     onPageChange={handleChangePage}
                     onRowsPerPageChange={handleChangeRowsPerPage}
                     sx={{height: '7%'}}
                  />
               </Paper>
            </Grid>
         </Dialog>
		</>
	);
}