import { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './App.css'

function App() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    // language: 'en-US'
  });
  return (
    <>
    <div className="flex-col h-screen flex justify-center items-center bg-gray-800 text-white">
     <div className='flex justify-center items-center bg-gray-800 text-white'>
      <h1 className='text-4xl font-bold'>Speech To Text App</h1>
     </div>
      
     {/* main content transcript */}
      { !browserSupportsSpeechRecognition && <span>Browser doesn't support speech recognition.</span> }
      <div className="main-content my-6 border-2 border-gray-600 rounded-lg p-4 w-3/4 h-1/2 bg-gray-900">
           {transcript}
      </div>

      <div className="btn-style flex gap-3 mt-5">
       <button onClick={resetTranscript} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Reset</button>
        <button onClick={startListening} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Start</button>
        <button onClick={SpeechRecognition.abortListening} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Stop</button>
     </div>
   </div>
    </>
  )
}

export default App
