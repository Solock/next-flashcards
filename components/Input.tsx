import React, { useState} from 'react';

function InputCard(props :any) {
  const [question, setQuestion] = useState("Question 1")
  const [answer, setAnswer] = useState("Answer 1")
  const [show, setShow] = useState("question")
  const [error, setError] = useState(true);
  const [count, setCount] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCount(count + 1);
    if (answer === "Answer 1") {
      setError(false);
    } else {
      setError(true)
    }
  }

  return (

      <div className="card text-center">
      <div className="card-header">
        {props.question}
      </div>

      <div className="card-body">
        <h5 className="card-title">{show === "question" ? question : answer}</h5>
        {show === "question" ? <button className="btn btn-primary" onClick={() => setShow("answer")}>Show answer</button> : <button className="btn btn-primary" onClick={() => setShow("question")}>Show question</button>}
      </div>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <label>Enter your answer:
    //     <input
    //       type="text"
    //       onChange={(e) => setAnswer(e.target.value)}
    //     />
    //   </label>
    //   {count <= 0 ? <></> : <div>{error ? <p>Wrong anwser !</p> : <p>Right anwser !</p>}</div>}
    //   <input type="submit" />
    // </form>
  );
}

export default InputCard

