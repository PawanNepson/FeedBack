import React from 'react';
import Card from './shared/Card';
import { FaTimesCircle } from 'react-icons/fa';

function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
            <FaTimesCircle onClick={() => handleDelete(item.id)} className='close ' color='purple' size='2rem' />


        </Card>
    );
}

export default FeedbackItem;