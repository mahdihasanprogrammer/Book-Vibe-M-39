import React, { useContext } from 'react';
import { bookContext } from '../../context/BookProvider';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';


const PagesToRead = () => {

const {storedBooks} = useContext(bookContext);


    return (
      
     <div>
        {storedBooks.length > 0 && 
             <div className='p-15 bg-gray-200 rounded-2xl'>
            <BarChart width={600} height={300} data={storedBooks}>
                <XAxis dataKey={'bookName'} stroke='green' fontWeight={700} fill='red'/>
                <YAxis/>
                <Bar dataKey={'totalPages'} fill="#8884d8" stroke='green' />
                
                <Tooltip />
                
            </BarChart>
        </div>
        }
     </div>
    );
};

export default PagesToRead;