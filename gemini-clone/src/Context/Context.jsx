import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
 
  const [input,setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultDate, setResultDate] = useState("");
  


  const onSent = async (prompt) => {
    await runChat(input)
  };
  // onSent("what is react?")

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    
    showResult,
    loading,
    resultDate,
    input,
    setInput
  }
  return (
    <Context.Provider value={contextValue}>
      {props.children}
      </Context.Provider>
  );
};

export default ContextProvider;
