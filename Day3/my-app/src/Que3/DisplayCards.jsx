import React from 'react'
import Cards from './Cards'

const DisplayCards = () => {
    const data1 = {
        Date:"28/10/2020",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_8hHZR03qyxQD-GBn8xxxdekgAxNE_R3Bg&usqp=CAU",
        type:"Case Study",
        gift:"Amazon Gift",
        pay:"Pay",
        medium:"Desktop-Mobile",
        color:"rgb(255,165,0)"
    }

    const data2 ={
        Date:"17 Sep 2020",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPM7k3EAVCEvBJCDelsy5u_rSCtyxh0e48Sg&usqp=CAU",
        gift:"Apple Gift",
        type:"Case Study",
        pay:"Payment",
        medium:"MacOS-Mobile",
        color:"rgb(245,245,245)"

    }
  return (
    <div>
        <Cards {...data1} mode = "yellow"/>
        <Cards {...data1} mode = "yellow"/>
        <Cards {...data2} mode = "gray"/>
      
    </div>
  )
}

export default DisplayCards
