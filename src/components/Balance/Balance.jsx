import { useDispatch, useSelector } from "react-redux"
import { deposit, withdraw } from "../../redux/balanceSlice"
import { useState } from "react"


export default function Balance( ){
   const dispatch = useDispatch()
const balance= useSelector ((state) => state.balance.value )

const [value, SetValue] = useState();

    return(
        <div>
        <p>Balance: {balance}</p>
        <input type="number" value={value} onChange={(e)=>SetValue(Number(e.target.value))} />
        <button onClick={()=>dispatch(deposit(value))}>Deposit credits</button>
        <button onClick={()=> dispatch(withdraw(value))}>Withdraw credits</button>
        </div>
    )
}