import React, { useState} from 'react';

function MentalCard(props :any) {
  const [question, setQuestion] = useState("Question 1")
  const [answer, setAnswer] = useState("Answer 1")
  const [show, setShow] = useState("question")

  return (

    <div className="card text-center">
      <div className="card-header">
        {props.question1}
      </div>

      <div className="card-body">
        <h5 className="card-title">{show === "question" ? question : answer}</h5>
        {show === "question" ? <button className="btn btn-primary" onClick={() => setShow("answer")}>Show answer</button> : <button className="btn btn-primary" onClick={() => setShow("question")}>Show question</button>}
      </div>
    </div>

    // <div>
    //   <h1>{props.question1}</h1>
    //   <p>{show === "question" ? question : answer}</p>
    //   {show === "question" ? <button onClick={() => setShow("answer")}>Show answer</button> : <button onClick={() => setShow("question")}>Show question</button>}
    // </div>
  );
}

export default MentalCard
