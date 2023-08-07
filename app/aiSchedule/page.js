'use client'

import { useState } from "react";
import "app/aiSchedule.css";
import FormInput from "app/FormInput";
import ContestList from "@/components/home/contest_list";
import { ChatLine, LoadingChatLine} from "@/components/home/chat-line";

const App = () => {
  const [values, setValues] = useState({
    codeforcesranking: "",
    title: "",
    time: "",
    time: "",
  });

  

  const inputs = [
    {
      id: 1,
      name: "codeforces ranking",
      type: "int",
      placeholder: "1600",
      errorMessage:
        "Ranking should contain only numbers!",
      label: "Codeforces Ranking",
      pattern:"^[0-9]*$",
      required: true,
    },
    {
      id: 2,
      name: "Title",
      type: "text",
      placeholder: "Expert",
      errorMessage: "Please enter codeforces title!",
      label: "Codeforces Title",
      required: true,
    },
    {
      id: 3,
      name: "Convinient time for learning theory",
      type: "Time",
      label: "Convinient time to learn theory",
      required: true,
    },
    {
      id: 4,
      name: "Convinient time for practicing",
      type: "Time",
      label: "Convinient time to practice",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex-1 w-full border-zinc-100 bg-white overflow-hidden flex">
      <div className="w-1/4 bg-black ">
      <ContestList />
    </div>

  <div className="mt-8 w-full md:w-2/3 mx-auto"> 
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>AI Schedule Generator</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button  className="form-button">Generate</button>
      </form>
    </div>
  
    </div>
  

    </div>
  );
};

export default App;