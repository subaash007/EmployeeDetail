import { useEffect, useState } from "react"
import EmployeeCard from "./EmployeeCard"

function EmployeeList() {

    const [employeeData, setEmployeeData] = useState([{
        firstName: "Prathap",
        lastName: "S",
        empId:"1",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"14",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"16",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"43",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"134",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"342",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"143",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1234",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"12333",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"15552",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },])
    const [employeeData1, setEmployeeData1] = useState([{
        firstName: "Prathap",
        lastName: "S",
        empId:"1",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"14",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"16",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"43",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"134",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"342",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Man",
        lastName: "S",
        empId:"143",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Nandini",
        lastName: "S",
        empId:"1234",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "Subha",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Prathap",
        lastName: "S",
        empId:"1243",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Arjub",
        lastName: "S",
        empId:"12333",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },{
        firstName: "Subaash",
        lastName: "S",
        empId:"15552",
        salary:"12000",
        position:"Developer",
        department:"Web Development",
        dateOfJoining:"23/09/2020"
    },])
    const [search, setSearch] = useState('')
    const searchEmployee = () => {
        const result = employeeData1.filter(employee => employee.empId.includes(search) ||employee.firstName.includes(search) || employee.lastName.includes(search))
        setEmployeeData(result)
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