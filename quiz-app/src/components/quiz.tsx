function Quiz () {
    const questionBank = [

        {
            question: "What is the capital of England?",
            options: ["London", "Berlin", "Washington", "Paris"],
            answer: "London",
        },

        {
            question: "What is the capital of USA?",
            options: ["London", "Berlin", "Washington", "Paris"],
            answer: "Washington",
        },

        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Washington", "Paris"],
            answer: "Paris",
        },
    ]

    return (

    <div> 
        <h3>Question 1</h3>
        <p className="question">{questionBank[0].question}</p>

        {questionBank[0].options.map((option) => (
            <button className="btn btn-primary w-100">{option}</button>
        ))}

        <div className="d-flex justify-content-between align-items-end mt-4">
            <button className="btn btn-secondary">Prev</button>
            <button className="btn btn-secondary">Next</button>
        </div>

    </div>

    );
}

export default Quiz;