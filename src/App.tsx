import QuestionCard from "./components/QuestionCard.jsx";
import questionsData from "./assets/question.json";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        {questionsData.map((q, i) => (
          <QuestionCard
            key={i}
            question={q.question}
            options={q.options}
            answer={q.answer}
          />
        ))}
      </div>
      <div className="w-4 h-2 bg-gray-500 rounded"></div>
    </div>
  );
}