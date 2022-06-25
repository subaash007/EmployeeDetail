import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { empApi, empEndpoint } from "../axios/axios"
import {toast} from 'react-toastify'

function CreateEmployee() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfJoin, setDateOfJoin] = useState('')
    const [department, setDepartment] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')
    const [empId, setEmpId] = useState(null)

    const addEmployee =() =>{
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
                toast.success('Added New Employee',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
            })
            .catch(err => {
                toast.warning('Cannot save data',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
            })
    }
    const updateEmployee =() =>{
        const payload = {
            firstName: firstName,
            lastName: lastName,
            dateOfJoin: dateOfJoin,
            department: department,
            salary: salary,
            position: position,
        }
        const params = {
            id:empId
        }
        empApi.put(empEndpoint.update,{params},payload)
            .then(res => {
                toast.success('Updated Employee details',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
            })
            .catch(err => {
                toast.warning('Cannot update details',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                })
            })
    }
    const {id} = useParams();
    
    useEffect(() => {
        if(id){
            setEmpId(id)
            getEmployeeById(id)
        }
    },[id])
    const getEmployeeById = (id) =>{
        console.log(id);
        const params = {
            id:id
        }
        empApi.get(empEndpoint.getEmployeeByID,{params:params})
            .then(res => {
                const result = res.data.data;
                setFirstName(result.firstName)
                setLastName(result.lastName)
                setDepartment(result.department)
                setPosition(result.position)
                setDepartment(result.department)
                setDateOfJoin(result.dateOfJoin)
                setEmpId(result._id)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const submit =(event) =>{
        event.preventDefault()
        if(empId){
            updateEmployee()
        }
        else{
            addEmployee()
        }
    }

    return(<div className="create-employee">
        <div className="employee-block" >
        <div>
            <h4>{empId ? 'Edit Employee details':  'Add new Employee'}</h4>
        </div>
        <form className="w-100 d-flex align-items-center flex-column"  onSubmit={submit} >
            {empId ?
            <div className="input-block" >
                <label className="input-label" >Employee Id </label>
                <input className="input-field" value={empId} disabled placeholder="Enter First Name" type="text"/>
            </div> : ''}
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
            <button type="submit" className="form-btn" >{ empId ? 'Update' : 'Add Employee'}</button>
        </form>
        </div>
    </div>)
}

export default CreateEmployee