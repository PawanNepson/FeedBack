import React from 'react';
import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </Card>
    );
}

export default FeedbackItem;