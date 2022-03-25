import { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    choiceA: "",
    choiceB: "",
    choiceC: "",
  });

  const inputs = [
    {
      id: 1,
      name: "choiceA",
      type: "text",
      placeholder: "ChoiceA",
      errorMessage:
        "ATLEAST ONE INPUT BOX must contain calculus in any case i.e CALCULUS, calculus, Calculus",
      label: "ChoiceA",
      required: true,
    },
    {
      id: 2,
      name: "choiceB",
      type: "text",
      placeholder: "ChoiceB",
      errorMessage:
        "ATLEAST ONE INPUT BOX must contain calculus in any case i.e CALCULUS, calculus, Calculus",
      label: "ChoiceB",
      required: true,
    },
    {
      id: 3,
      name: "choiceC",
      type: "text",
      placeholder: "ChoiceC",
      errorMessage:
        "ATLEAST ONE INPUT BOX must contain calculus in any case i.e CALCULUS, calculus, Calculus",
      label: "ChoiceC",
      required: true,
    },
  ];

  ////THOUGHTS/////

  //Think my issue for POST of the form is happening here. Want to say my body value that I have passed in is not the right one.
  //Think if I wanted to get the exact course that was typed into the input box upon submission.
  //I'd have to some how get access to this obj { ...values, [e.target.name]: e.target.value } OR
  //This value from mapping over my inputs value={values[input.name]}
  //Tried a new approach with useState here, but begining to think I might've over engineered a bit
  //Just didn't want the repeating useState's for each choice input, but that simpler approach might've left me with less errors.
  //Also, using a json-server with hardcoded dummy data was relatively new for me as well.
  //Thought was a quicker solution than initializing a new DB from scratch or using the Formik library.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:8000/values", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      let resJson = await response.json();
      if (resJson.status === 200) {
        setValues("");
        console.log("new form added");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      throw err;
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
