const getClase = async () => {
    const response = await fetch('http://localhost:8000/api/clases');
    return response.json();
};

const Task = {
    getClase
};

export default Task;