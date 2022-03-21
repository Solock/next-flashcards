import React, { useState} from 'react';

function CheckCard(props :any) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState("question")

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCount(count + 1);
    if (value === "answer 1") {
      setError(false);
    } else if (value === "answer 2" || value === "answer 3"){
      setError(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>RadioFlashCard</p>
        <div>
          <input type="radio" id="Choice1" name="answer" value="answer 1" onChange={(event) => setValue(event.target.value)}></input>
            <label htmlFor="Choice1">Answer 1</label>

          <input type="radio" id="Choice2" name="answer" value="answer 2" onChange={(event) => setValue(event.target.value)}></input>
            <label htmlFor="Choice1">Answer 2</label>

          <input type="radio" id="Choice3" name="answer" value="answer 3" onChange={(event) => setValue(event.target.value)}></input>
            <label htmlFor="Choice3">Answer 3</label>
            <div>
              <button type="submit">Envoyer</button>
            </div>
            {count <= 0 ? <></> : <div>{error ? <p>Wrong anwser !</p> : <p>Right anwser !</p>}</div>}
          </div>
      </form>
    </div>
  );
}

export default CheckCard
