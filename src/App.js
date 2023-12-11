import React, { useState } from 'react';

import './App.css'
import backgrougImage from './assets/img.jpg'

import Header from './components/Header'

function App(){
    let [projects, setProjects] = useState(['Desenvolvimento','Front']);

    // useState retorna um array com 2 posição
        // Value
        // Function para atualizar

    function addProject(){
        // projects.push('Novo Projeto '+ Date.now());
        setProjects([... projects, 'Novo Projeto '+ Date.now()]);
    }
    return (
        <>
            {/* <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header> */}
            <Header title="Projects"/>
            <img src={backgrougImage}/>
            <ul>
                {projects.map(project => (
                    <li key={project}>{project}</li>
                ))}

                <button type="button" onClick={addProject}>Adicionar Projeto</button>
            </ul>
        </>
    );
}

export default App;