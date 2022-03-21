import React, { useState } from 'react';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Button from './components/shared/Button';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Want to delete?✂️✂️✂️')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;