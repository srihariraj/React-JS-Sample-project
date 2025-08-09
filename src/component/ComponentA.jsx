import { useEffect, useState } from 'react';
import '../css/main.css';
import '../css/ComponentA.css';
function ComponentA() {



    const [text, setText] = useState('');

    function loadData() {
        fetch('http://localhost:8000/myname')
            .then(response => response.json())
            .then(data => {
                setText(data.name);
                console.log('Name fetched:', data.name);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
                setText('Error fetching data');
            });
    }
    return (
        <div>
            <button onClick={() => { loadData() }}>LOAD DATA</button>
            <h1>{text}</h1>
        </div>
    );
}

export default ComponentA;