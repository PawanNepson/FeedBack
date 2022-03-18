import React from 'react';
import Card from './shared/Card';
import { MdDelete } from "react-icons/md";
function FeedbackItem({ item, handleDelete }) {
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
            <MdDelete onClick={() => handleDelete(item.id)} className='close ' color='red' size='2rem' />


        </Card>
    );
}

export default FeedbackItem;