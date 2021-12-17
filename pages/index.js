import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = e => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const text = feedbackInputRef.current.value;

    const data = { email, text };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Feedback</label>
          <textarea
            ref={feedbackInputRef}
            type='text'
            id='feedback'
            rows={5}
          ></textarea>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
