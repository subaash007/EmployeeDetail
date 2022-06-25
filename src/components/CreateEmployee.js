import { useState } from "react"
import { empApi, empEndpoint } from "../axios/axios"

function CreateEmployee() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfJoin, setDateOfJoin] = useState('')
    const [department, setDepartment] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')

    const addEmployee =(event) =>{
        event.preventDefault()
        const payload = {
            firstName: firstName,
            lastName: lastName,
            dateOfJoin: dateOfJoin,
            department: department,
            salary: salary,
            position: position,
        }
        empApi.post(empEndpoint.create,payload)
            .then(res => {
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(<div className="create-employee">
        <div className="employee-block" >
        <div>
            <h4>Add new Employee</h4>
        </div>
        <form className="w-100 d-flex align-items-center flex-column"  onSubmit={addEmployee} >
            <div className="input-block" >
                <label className="input-label" >First Name </label>
                <input className="input-field" value={firstName} onChange={(e)=> setFirstName(e.target.value)} minLength="3" placeholder="Enter First Name" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Last Name </label>
                <input className="input-field" value={lastName} onChange={(e)=> setLastName(e.target.value)} minLength="1" placeholder="Enter Last Name" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Date of Joining </label>
                <input className="input-field" value={dateOfJoin} onChange={(e)=> setDateOfJoin(e.target.value)} placeholder="DD/MM/YYYY" type="date" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Department </label>
                <input className="input-field" value={department} onChange={(e)=> setDepartment(e.target.value)} minLength="3" placeholder="Enter Department" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Position </label>
                <input className="input-field" value={position} onChange={(e)=> setPosition(e.target.value)} minLength="3" placeholder="Enter Position" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Salary </label>
                <input className="input-field" value={salary} onChange={(e)=> setSalary(e.target.value)} min="100" placeholder="Enter Salary" type="number" required/>
            </div>
            <button type="submit" className="form-btn" >Add Employee</button>
        </form>
        </div>

    </div>)
}

export default CreateEmployee