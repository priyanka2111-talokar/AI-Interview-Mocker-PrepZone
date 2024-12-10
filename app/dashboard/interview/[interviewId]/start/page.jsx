"use client"
import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({params}) {

    const [interviewData,setInterviewData]=useState();
    const [mockInterviewQuestion,setMockInterviewQuestion]=useState();
    const [activeQuestionIndex,setActiveQuestionIndex]=useState(0);
    useEffect(()=>{
        GetInterviewDetails();
    },[]);
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId));
            
            const jsonMockPesp=JSON.parse(result[0].jsonMockResp);
            console.log(jsonMockPesp)
            setMockInterviewQuestion(jsonMockPesp);
           
        if (result.length > 0) {
            setInterviewData(result[0]);
        }
    }
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Questions */}
             <QuestionsSection 
             mockInterviewQuestion={mockInterviewQuestion}
               activeQuestionIndex={activeQuestionIndex}/>
            {/* video and audio*/}
              <RecordAnswerSection
              mockInterviewQuestion={mockInterviewQuestion}
              activeQuestionIndex={activeQuestionIndex}
              interviewData={interviewData}
              />
        </div>
        <div className='flex justify-end gap-6'> 
         {activeQuestionIndex>0&& <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
          {activeQuestionIndex!=mockInterviewQuestion?.length-1&& <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
          {activeQuestionIndex==mockInterviewQuestion?.length-1&& 
           <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
          <Button>End Interview</Button>
          </Link>}
        </div>
    </div>
  )
}

export default StartInterview