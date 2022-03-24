
import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';
import { MdOutlineRateReview } from "react-icons/md";

function FeedbackForm() {
    const [text, setText] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(true);
    console.log(btnDisabled);

    const handleChangeText = (e) => {
        console.log('I am from handler');
        if (text === '') {
            console.log('I am from 1st if');
            setBtnDisabled(true);
        }

        console.log(text);

        if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
        } else {
            console.log('I am from last if block');
            setBtnDisabled(false);
        }
    };

    return (
        <Card>
            <form>
                <h2>Submit your review here. <MdOutlineRateReview style={{ color: "red" }} /> </h2>
                <div className='input-group'>
                    <input
                        type='text'
                        onChange={handleChangeText}
                        placeholder='Write your review'
                    />
                    <Button isDisabled={btnDisabled}> Submit </Button>
                </div>
                <h1>{text}</h1>
            </form>
        </Card>
    );
}

export default FeedbackForm;
