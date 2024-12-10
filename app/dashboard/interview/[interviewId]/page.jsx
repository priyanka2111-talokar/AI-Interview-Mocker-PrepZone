"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';

function Interview({ params }) {
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
        GetInterviewDetails();
    }, []);

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId));
        
        if (result.length > 0) {
            setInterviewData(result[0]);
        }
    }

    return (
        <div className='container mx-5 my-5 p-5'>
            <h2 className='font-bold text-3xl my-5 text-center'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                {interviewData ? (
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-5 p-5 rounded-lg border shadow-sm'>
                            <h2 className='text-lg'><strong>Job Role/Job Position:</strong> {interviewData.jobPosition}</h2>
                            <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc}</h2>
                            <h2 className='text-lg'><strong>Years of Experience:</strong> {interviewData.jobExperience}</h2>
                        </div>
                        <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100 shadow-sm'>
                            <h2 className='flex gap-2 items-center text-yellow-600'> <Lightbulb /> <strong>Information</strong></h2>
                            <h2 className='mt-2 text-yellow-600'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                        </div>
                    </div>
                ) : (
                    <div>Loading interview details...</div>
                )}

                <div className='flex flex-col items-center gap-5'>
                    {webCamEnabled ? 
                        <Webcam
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            mirrored={true}
                            className='rounded-lg shadow-sm'
                            style={{
                                height: 300,
                                width: 300
                            }}
                        /> :
                        <div className='flex flex-col items-center'>
                            <WebcamIcon className='h-72 w-72 p-10 bg-slate-300 rounded-lg border' />
                            <Button variant="ghost" className="w-full mt-3" onClick={() => setWebCamEnabled(true)}>Enable Webcam and Microphone</Button>
                        </div>
                    }
                </div>
            </div>
            <div className='flex justify-end items-end mt-10'>
                <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
                <Button className='px-10 py-3 text-lg'>Start Interview</Button>
                </Link>
                
            </div>
        </div>
    );
}

export default Interview;
