import React from 'react'
import './style.css'
import Menu from './menuApi' 
import MenuCard from './menuCard'  
import Navbar from './Navbar'

const uniqueMenu = [...new Set(Menu.map((curr)=>{
    return curr.category;
})
),"All"];

const Restaurant = () => {

    const [menuData,setmenuData] = React.useState(Menu);
    const [menuUpdatedList,setUpdatedList] = React.useState(uniqueMenu);
    const filterItem = (category)=>{
        if(category==="All"){
            setmenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curr)=>{
            return curr.category === category;
        });
        setmenuData(updatedList);
    }
     return (
        <>
        <Navbar filterItem = {filterItem} menuUpdatedList={menuUpdatedList} />
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant;
