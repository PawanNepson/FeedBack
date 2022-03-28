import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {

    const [text, setText] = useState('');
    const [message, setMessage] = useState('Your review is precious✍🏻');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState('');

    const handleChangeText = (e) => {
        setText(e.target.value);

        if (text === '') {
            setBtnDisabled(true);
            setMessage("Share Your review with us!!!");
        } else if (text !== '' && text.trim().length <= 15) {
            setBtnDisabled(true);
            setMessage('Your text should be at least 15 character !');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 15) {
            const newFeedback = { rating, text };
            console.log(newFeedback)
            handleAdd(newFeedback);

            setText(" ");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Please type your feedback below.</h2>
                <RatingSelect select={(select) => setRating(select)} />
                <div className='input-group'>
                    <input
                        type='text'
                        onChange={handleChangeText}
                        placeholder='Write your review'
                    />
                    <Button isDisabled={btnDisabled} type='submit'>
                        {' '}
                        Sumbit{' '}
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;