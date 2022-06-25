function CreateEmployee() {
    return(<div className="create-employee">
        <div className="employee-block" >
        <div>
            <h4>Add new Employee</h4>
        </div>
        <form className="w-100 d-flex align-items-center flex-column" >
            <div className="input-block" >
                <label className="input-label" >First Name :</label>
                <input className="input-field" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Last Name :</label>
                <input className="input-field" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Date of Joining :</label>
                <input className="input-field" type="date" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Department :</label>
                <input className="input-field" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Position :</label>
                <input className="input-field" type="text" required/>
            </div>
            <div className="input-block" >
                <label className="input-label" >Salary :</label>
                <input className="input-field" type="number" required/>
            </div>
            <button type="submit" className="form-btn" >Add Employee</button>
        </form>
        </div>

    </div>)
}

export default CreateEmployee