import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");

  const [recentPrompt, setRecentPrompt] = useState("");

  const [prevPrompt, setPrevPrompt] = useState([]);

  const [loading, setLoading] = useState(false)

  const [showResults, setShowResults] = useState(false);

  const [result, setResult] = useState("");

  const delayPara = (index, nextWord) =>{
    setTimeout(function () {
      setResult(prev => prev+nextWord)
    }, 75*index)
  }

  const newChat = () =>{
    setLoading(false)
    setShowResults(false)
  }
  const onSent = async (prompt) => {
    setResult("")
    setLoading(true);
    setShowResults(true)
    setRecentPrompt(input)
    setPrevPrompt(prev => [...prev, input])
    const response = await run(input);
    let responseArray = response.split("**")
    let newResponse ="";
    for(let i=0; i<responseArray.length; i++){
      if(i == 0 || i%2 !== 1){
        newResponse += responseArray[i]
      }
      else{
        newResponse += "<b>" + responseArray[i] + "</b>"
      }
    }
    let newResponse2 = newResponse.split("*").join("<br/>")
    let newResponseArray = newResponse2.split(" ");
    for(let i=0 ; i<newResponseArray.length; i++){
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord+ " ")
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    showResults,
    showResults,
    setShowResults,
    result,
    setResult,
    onSent,
    loading,
    setLoading,
    newChat,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
