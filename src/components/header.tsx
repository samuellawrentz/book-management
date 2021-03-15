import React from "react"
import { useHistory } from "react-router"

export const Header = (props: any) => {
    const bhistory = useHistory();
    return (
        <header>
            <div className="header container">
                <div className="header flex">
                    <h1 onClick={()=>bhistory.push('/')} style={{cursor: "pointer"}}>Digital Library</h1>
                    <div className="action-buttons flex">
                        <div className="flex"><i className="fa fa-search"></i><input placeholder="Search Books" type="text" className="search" value={props.searchTerm} onChange={(e)=>props.setSearchTerm(e.target.value)}/></div>
                    </div>
                </div>
            </div>
        </header>
    )
}