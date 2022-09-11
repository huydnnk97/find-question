import React from "react";
import './App.css'
import Homepage from "./Homepage";
import {Routes, Route} from 'react-router-dom'
import  Checkbox  from "./Checkbox"
import ListFiles from "./ListFiles";
import Question from "./Question";
function App(){
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}>
            <Route path="/add" element={<Checkbox/>}></Route>
            <Route path="/questions" element={<ListFiles/>}/>
            </Route>
            <Route path="/questions/:id" element={<Question></Question>}></Route>
        </Routes>
    )
}
export default App;