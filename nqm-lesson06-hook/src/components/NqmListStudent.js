import React from 'react'

export default function ListStudent({ renderListStudents, onEditStudent, onRemoveStudent }) {
    console.log(renderListStudents);

    // Render data
    let studentElement = renderListStudents.map((student, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.isActive ? "Active" : "Inactive"}</td>
                <td>
                    <button className='btn btn-success' onClick={() => onEditStudent(index)}>sửa</button>
                    <button className='btn btn-danger' onClick={() => onRemoveStudent(index)}>xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h2>danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {studentElement}
                </tbody>
            </table>
        </div>
    )
}
