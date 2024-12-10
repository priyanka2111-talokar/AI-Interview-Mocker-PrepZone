import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {
    
    const textToSpeach=(text)=>{
        if('speechSynthesis' in window){
            const speech=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('sorry your browser does not support text to speech')
        }
     }
  return mockInterviewQuestion&& (


    
    <div className='p-5 border rounded-lg my-10 '>
        <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid gap-5'>
            {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
                <h2 className={`p-2 bg-slate-300 rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'bg-slate-500 text-white'}`}>Question #{index+1}</h2>
            ))}
        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
        <div className='border rounded-lg p-5 bg-slate-200 mt-20'>
            <h2 className='flex gap-2 items-center '>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionsSection