import { useState, ChangeEvent, KeyboardEvent } from "react";



export default function UseTerminal() {
    const [username, setUsername] = useState<string>('');
    const [inputText, setInputText] = useState<string>(''); 
    const [isUsernameEntered, setIsUsernameEntered] = useState<boolean>(false); 
    const [showSplash, setShowSplash] = useState<boolean>(false); 
  
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setUsername(e.target.value);
    };
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setInputText(e.target.value);
    };
  
   
    const handleUsernameKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === 'Return' || e.key === 'Done') { 
        if (username.trim() !== '') {
          setIsUsernameEntered(true);
        }
      }
    };
  
    const handleServerKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' || e.key === 'Return' || e.key === 'Done') {
       if(inputText.trim()=="npm run start" || inputText.trim()==="npm start"){
          setShowSplash(true);
          localStorage.setItem("username",username)
       }else{
        setInputText("");
       }
       
      }
    };
   return {
    isUsernameEntered,
    handleUsernameKeyPress,
    handleInputChange,
    handleUsernameChange,
    setIsUsernameEntered,
    handleServerKeyPress,
    username,
    inputText,
    showSplash
    
   }
  }

