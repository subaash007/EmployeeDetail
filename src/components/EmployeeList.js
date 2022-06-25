import { useEffect, useState } from "react"
import EmployeeCard from "./EmployeeCard"

function EmployeeList() {

    const [employeeData, setEmployeeData] = useState([])
    const [search, setSearch] = useState('')
    const searchEmployee = () => {
    }
    useEffect(() =>{
        searchEmployee()
    },[search])
    return(<div>
        <div>
            <input type="text" className="search-input" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Employee"/>
            <button className="form-btn search-btn" onClick={searchEmployee} >Search</button>
        </div>
        <div className="grid-view">
            { employeeData.length ? employeeData.map((employee,index)=> <EmployeeCard key={index} employee={employee} />) :<div>
                No Matching Data
                </div>}
        </div>
    </div>)
}

export default EmployeeList