import CashType from "../components/cash-type";

export default function About({ caja = [] }) {
	return (
	  <>
		 <h1>ABOUT</h1>
		 <CashType caja={{id: 1, name: "INGRESOS VENTAS"}}></CashType>
	  </>
	)
 }
 