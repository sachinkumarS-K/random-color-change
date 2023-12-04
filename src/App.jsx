import { useRef, useState } from "react";


function App() {
  const myRef = useRef();
  const [color, setClr] = useState("");
  const [state, setState] = useState("");
  const [id , setId] = useState("")
  function startHandler() {
    const intervalId = setInterval(() => {
      const clr = generateColor();
           console.log(clr)
      myRef.current.style = `background-color:${clr}`;
    }, 1000);
    setId(intervalId);
  }

  function stopHandler(id) {
    clearInterval(id);
  }
  function generateColor() {
    
    let constt = "#";
    const options = "1234567890abcdef";
    for (let i = 0; i < 6 ; i++) {
      const idx = Math.floor(Math.random() * 16);
      constt += options.charAt(idx);
    }
    setClr(constt)
    return constt;
  }
   
  return (
    <div className="w-full h-screen grid place-items-center" ref={myRef}>
      
      {
        color
      }
      <div className="space-x-10">
        <button className="text-white rounded-[8px] border-1 px-[2em] py-[0.6em] bg-[#fda5a5] border-transparent " onClick={startHandler}>
          Start
        </button>
        <button className="rounded-[8px] text-white border-1 px-[2em] py-[0.6em] bg-[#fda5a5] border-transparent" onClick={()=> stopHandler(id)}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default App
