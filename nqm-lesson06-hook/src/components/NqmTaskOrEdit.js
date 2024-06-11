import React, { useState, useEffect } from 'react';

export default function NqmTaskOrEdit({ onSubmit, editingStudent }) {
    const studentObj = {
        id: 0,
        name: "",
        age: 0,
        isActive: false
    }
    const [student, setStudent] = useState(studentObj);

    // Update form state if editing task changes
    useEffect(() => {
        if (editingStudent !== null) {
            setStudent(editingStudent);
        } else {
            setStudent(studentObj);
        }
    }, [editingStudent]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setStudent(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(student);
        setStudent(studentObj); // Reset form
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>{editingStudent ? "Sửa Task" : "Thêm mới Task"}</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Task ID</label>
                        <input
                            type="text"
                            name='id'
                            value={student.id}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Task Name</label>
                        <input
                            type="text"
                            name='name'
                            value={student.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            name='age'
                            value={student.age}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name='isActive'
                                checked={student.isActive}
                                onChange={handleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Active</label>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Ghi lại</button>
                </form>
            </div>
        </div>
    )
}
