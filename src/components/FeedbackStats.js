function FeedbackStats({ feedback }) {
    let average =
        feedback.reduce((acc, cur) => {
            console.log(acc)//first ma yeso value 0
            console.log(cur)//yesko value chai object
            return acc + cur.rating;
        }, 0) / feedback.length;

    average = average.toFixed(2).replace(/[.,]0$/, '');

    return (
        <div className='feedback-stats'>
            <h3>{feedback.length} reviews</h3>
            <h3>Average Rating ⭐ {average}</h3>
        </div>
    );
}

export default FeedbackStats;