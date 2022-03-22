import React from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
    return (
        <Card>
            <form>
                <h2>Please share your review✍🏻 .</h2>
                <div className='input-group'>
                    <input type='text' />
                    <Button> Submit </Button>
                </div>
            </form>
        </Card>
    );
}

export default FeedbackForm;