import React from 'react';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Button from './components/shared/Button';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [feedback, setFeedback] = React.useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure ✂️✂️✂️?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </div>
  );
}

export default App;
