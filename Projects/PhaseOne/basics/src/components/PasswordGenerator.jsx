import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [PassWord, setPassWord] = useState("");
  const [copy,setCopy] = useState('copy');


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass)
    setPassWord(pass);
    setCopy('copy')
  }, [length, numberAllowed, charAllowed, setPassWord]);

  const copyToclipboard = useCallback(()=>{
    passWordRef.current?.select()
    window.navigator.clipboard.writeText(PassWord)
    setCopy('copied')
  },[PassWord])

  useEffect(() => {
  passwordGenerator()
  }, [length,charAllowed,numberAllowed,passwordGenerator])
  

  const passWordRef = useRef(null);

  return (
    <>
      <h1 className="text-yellow-400 text-center text-3xl font-extrabold mt-12">PassWord MAte</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={PassWord}
            className="outline-none bg-white w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passWordRef}
          />
          <button className="outline-none duration-400 hover:bg-blue-900 bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToclipboard}
          >
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-grab"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev )}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="characterInput"
              onChange={() => { setCharAllowed((prev) =>  !prev)}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <button className="bg-green-400 h-auto w-auto flex flex-wrap mx-44 rounded-2xl"
        onClick={passwordGenerator}>Submit</button>
      </div>
    </>
  );
}

export default PasswordGenerator;
