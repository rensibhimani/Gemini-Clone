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
  
const delayPara = (index,nextWork) => {
  
}

  const onSent = async (prompt) => {
    setResultDate("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
   const response = await runChat(input)
   setResultDate(response)
   setLoading(false)
   setInput("")

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
