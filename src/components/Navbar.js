import React from 'react'

const Navbar = ({ filterItem , menuUpdatedList}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuUpdatedList.map((curr)=>{
                            return <button className="btn-group__item" onClick={() => filterItem(curr)}>{curr}</button>
                        })
                    }
                </div>
            </nav>
        </>
    )
}
export default Navbar
