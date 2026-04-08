import React, {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishList from './ListedWishList';
import ListedRead from './ListedRead';
import { IoIosArrowDown } from 'react-icons/io';


const ListedBooks = () => {

const [sortingType, setSortingType] = useState('');
console.log(sortingType)

    return (
    <div>
        <div className='flex justify-center items-center my-6'>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white m-1">Sort by <IoIosArrowDown/></div>
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>{setSortingType('Pages')}}><a>Pages</a></li>
                <li onClick={()=>{setSortingType('Rating')}}><a>Rating</a></li>
              </ul>
            </div>
        </div>

        <Tabs>

          <TabList>
            <Tab >Read Books</Tab>
            <Tab >Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ListedRead sortingType={sortingType}/>
          </TabPanel>

          <TabPanel>
            <ListedWishList sortingType={sortingType} />
           
          </TabPanel>
        </Tabs>
     </div>
    );
};

export default ListedBooks;
