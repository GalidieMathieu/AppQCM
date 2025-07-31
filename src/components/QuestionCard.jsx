import { useState } from "react";

export default function QuestionCard({ question, options, answer }) {
  const [selected, setSelected] = useState(null);

  function getButtonClass(opt, selected, answer) {
    if (!selected) return "";
    if (opt === answer) return "btn correct";
    if (opt === selected) return "btn incorrect";
    return "";
  }

 return (
    <div className="mb-6 pl-4">
      <h2 className="text-lg font-bold mb-2">{question}</h2>
      <div className="space-y-2 ml-4 flex flex-col ">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => setSelected(opt)}
            disabled={selected !== null}
            className={getButtonClass(opt, selected, answer)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}