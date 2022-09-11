import {useParams} from "react-router-dom";
import{doc,getDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
function Question(){
    let {id}=useParams();
    const [question, setQuestion] = useState([])
    async function getData(){
        const realID=id.slice(1)

        
        const docRef = doc(db, "question", realID);
        const docSnap =await getDoc(docRef);
        console.log(docSnap.data())
        setQuestion(docSnap.data())
    }
    useEffect(() => {  getData() }, [])
    return(
    // 
    <div>
        <h1>Title: {question.title}</h1>
        <h1>Description:  {question.description}</h1>
        <h1>Tags: {question.tags}</h1>
    </div>
    )
}
export default Question