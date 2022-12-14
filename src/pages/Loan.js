import React from 'react';
import Borrow from '../components/Borrow';
import Liquidity from '../components/AddLiquidity';
import PoolDetails from '../components/PoolDetails';

const Loan = () => {
    return ( 
        <div className='flex flex-col bg-slate-900 h-screen w-screen  items-center justify-center' >
            <PoolDetails/>
            <div className='flex flex-row w-[90%] h-fit justify-between' >
                <Borrow/>
                <Liquidity/>
            </div>
        </div>
     );
}
 
export default Loan;