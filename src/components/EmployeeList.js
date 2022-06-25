import { useEffect, useState } from "react"
import { empApi, empEndpoint } from "../axios/axios"
import EmployeeCard from "./EmployeeCard"
import {toast} from 'react-toastify'

function EmployeeList() {
    const [employeeData, setEmployeeData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const [search, setSearch] = useState('')
    const searchEmployee = () => {
        const searchResult = originalData.filter(data => data.firstName.toLowerCase().includes(search.toLowerCase()) || 
        data.lastName.toLowerCase().includes(search.toLowerCase()) || data.empId.includes(search))
        setEmployeeData(searchResult)
    }
    useEffect(() =>{
        searchEmployee()  
    },[search])
    useEffect(()=>{
        getEmployees()
    },[])
    const getEmployees =() =>{
        empApi.get(empEndpoint.get)
            .then(res => {
                setEmployeeData(res.data.data)
                setOriginalData(res.data.data)
            })
            .catch(err => {
                toast.warning('No Employees Found',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
            })
    }
    return(<div>
        <div className="my-3" >
            <input type="text" className="search-input" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Employee"/>
        </div>
        <div className="grid-view">
            { employeeData.length ? employeeData.map((employee,index)=> <EmployeeCard key={index} employee={employee} />) :<div>
                No Matching Data
                </div>}
        </div>
    </div>)
}

export default EmployeeList