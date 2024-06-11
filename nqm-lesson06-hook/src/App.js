import React, { useState } from 'react';
import './App.css';
import ListStudent from './components/NqmListStudent';
import NqmTaskOrEdit from './components/NqmTaskOrEdit';

function App() {
    // Mock data
    const listStudents = [
        { id: 2210900039, name: "nguyễn quang mạnh", age: 25, isActive: true },
        { id: 1, name: "Học lập trình frontend", age: 22, isActive: true },
        { id: 2, name: "Học lập trình reactjs", age: 23, isActive: false },
        { id: 3, name: "Lập trình với Frontend - Reactjs", age: 24, isActive: true },
        { id: 4, name: "Lập trình Fullstack (PHP, Java, NetCore)", age: 26, isActive: false },
    ]

    const [students, setStudents] = useState(listStudents);
    const [editingStudent, setEditingStudent] = useState(null);

    const handleSubmit = (student) => {
        if (editingStudent !== null) {
            setStudents(prev => prev.map((task, index) => index === editingStudent.index ? student : task));
            setEditingStudent(null);
        } else {
            setStudents(prev => [...prev, student]);
        }
    }

    const handleEditStudent = (index) => {
        setEditingStudent({ ...students[index], index });
    }

    const handleRemoveStudent = (index) => {
        setStudents(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="container border">
            <h1>nguyễn quang mạnh</h1>
            <hr />
            <div>
                {/*danh sach list tasks*/}
                <ListStudent renderListStudents={students} onEditStudent={handleEditStudent} onRemoveStudent={handleRemoveStudent} />
            </div>
            <div>
                <NqmTaskOrEdit onSubmit={handleSubmit} editingStudent={editingStudent} />
            </div>
        </div>
    );
}

export default App;
