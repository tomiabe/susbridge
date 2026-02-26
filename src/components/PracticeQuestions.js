const PracticeQuestions = () => {
  const questions = [
    '• "How do we turn ten years of reports into a strategy people can execute?"',
    '• "Which indicators actually matter for our climate commitments?"',
    '• "How do we talk about sustainability without sounding performative?"',
    '• "How do we make complex regulatory risks intelligible to non-technical leaders?"',
  ];

  return (
    <section className="practice-questions">
      <div className="container">
        <span className="section-label">WHAT THIS LOOKS LIKE IN PRACTICE</span>
        <div className="questions-list">
          {questions.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeQuestions;
