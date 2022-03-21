import React, { useState} from 'react';

function InputCard(props :any) {
  const [question, setQuestion] = useState("Question 1")
  const [answer, setAnswer] = useState(" ")
  const [show, setShow] = useState("question")
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCount(count + 1);
    if (answer === "Answer 1") {
      setError(true);
    } else {
      setError(false)
    }
  }

  return (

    <div className="card text-center">
      <div className="card-header">
        {props.question}
      </div>

      <div className="card-body">
        <h5 className="card-title">{show}</h5>
        <form onSubmit={handleSubmit}>
          <label>Enter your answer:
            <input
            type="text"
            onChange={(e) => setAnswer(e.target.value)}/>
          </label>
          {count <= 0 ? <></> : <div>{error ? <p>Right anwser !</p> : <p>Wrong anwser !</p>}</div>}
          <input className="btn btn-primary" type="submit" />
        </form>
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

