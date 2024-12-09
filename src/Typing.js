import React from 'react'
import { useState, useRef, useEffect } from "react";

function Typing() {

const words = 'this is an awesome portfolio!' 


const [currentIndex, setCurrentIndex] = useState(0)
const [letterStatuses, setLetterStatuses] = useState([])
const [isFocused, setIsFocused] = useState(false);
const inputRef = useRef(null)

// if (inputRef.current) {
//     inputRef.current.value = ''
// }

const handleKeyUp = (e) => {
const inputValue = inputRef.current.value;
const lastChar = inputValue[inputValue.length - 1];
console.log(inputValue)
const newStatuses = [...letterStatuses];
const expectLetter = words[currentIndex]

const currentLetter = lastChar

if (expectLetter === currentLetter && letterStatuses[currentIndex] !== 'incorrect') {
    newStatuses[currentIndex] = 'correct'
    setCurrentIndex(currentIndex + 1)
}

else if (expectLetter === currentLetter && letterStatuses[currentIndex] === 'incorrect') {
    setCurrentIndex(currentIndex + 1)
}
else if (expectLetter !== currentLetter) {
    newStatuses[currentIndex] = 'incorrect'


}
setLetterStatuses(newStatuses)
}


useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isFocused) {
          inputRef.current.focus({ preventScroll: true });
          setIsFocused(true);
        }
        else if (!entry.isIntersecting && isFocused) {
          inputRef.current.blur();
          setIsFocused(false);
        }
      });
    });
  
    const target = document.querySelector('.inner-type');
    if (target) {
      observer.observe(target);
    }
  
    return () => {
      observer.disconnect();
    };
  }, [isFocused]);

const handleFocus = () => {
    setIsFocused(false)
}

    return (

<div>

    <div className=' inner-type w-3/4 mx-auto my-10 text-center'
    onClick={() => inputRef.current.focus()}
    >
{words.split('').map((letter, index) => {
    
    return (
        <div
    className={`inline text-xl ${index < currentIndex ? 
        (letterStatuses[index]==='correct'?
         'text-green-600':'text-red-700'
        ) : index === currentIndex ? 'border-b-2 border-slate-100 animate-blink' : 'text-black-500'
        }`}
         key={index}>
        {letter}
    </div>
    )
})}

    </div>


<input type='text'
ref={inputRef}
onChange={handleKeyUp}
onBlur={handleFocus}
className='block opacity-0'
placeholder='hello'
autoCapitalize='none'
>

</input>

</div>
)
}

export default Typing