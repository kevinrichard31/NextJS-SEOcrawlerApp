"use client";
import React from 'react'

interface newsProps {
  params: {
    id: "string"
  }
}

function page({params}:newsProps) {
  console.log(params)
  return (
    
    <div>page {params.id} </div>
  )
}

export default page