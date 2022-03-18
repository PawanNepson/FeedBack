import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {

    if (!feedback || feedback.length === 0) {
        return <h1 style={{ color: "red", fontFamily: "cursive" }}>Not a single review Found🔎🔎🔎 </h1>;
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    );
}

export default FeedbackList;