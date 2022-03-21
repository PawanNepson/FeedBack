function FeedbackStats({ feedback }) {
    const average = 6.4;


    return (
        <div className='feedback-stats'>
            <h3>{feedback.length} reviews</h3>
            <h3>Average Rating ⭐: {average}</h3>
        </div>
    );
}

export default FeedbackStats;