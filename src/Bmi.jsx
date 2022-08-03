import React, { useState } from "react";
import fat from "./images/fat.png"
import healthy from "./images/healthy.png"
import thin from "./images/thin.png"

function Bmi(){
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState("")
    const [message, setMessage] = useState("")

    function handleWeight(event){
       var newWeight = event.target.value
        setWeight(newWeight)
    }

    function handleHeight(event){
        var newHeight = event.target.value
        setHeight(newHeight)
    }


    function calcBmi(event) {
        event.preventDefault()
        
        if (weight === 0  &&  height === 0){
            alert ("input data")
        } else {
            let bmi = (weight / (height * height) * 703)
            setBmi(bmi.toFixed(1))


        if (bmi < 25){
            setMessage("you are underweight")
        } else if (bmi >= 25 && bmi < 30){
            setMessage("you are healthy")
        } else {
            setMessage("you are overweight")
        }
        }

    }
    

    function reload(){
        window.location.reload()
    }
    
    let imgSrc;
            if (bmi < 1){
                imgSrc =null
            } else{
                if (bmi < 25) {
                    imgSrc = thin
                } else if (bmi >= 25 && bmi  <= 30){
                    imgSrc = healthy 
                } else {
                    imgSrc = fat
                }
            }
    
    return(
        <div >
        <div className="flex justify-center items-center h-[100vh] bg-[#1A132F]">
            <div className=" bg-slate-1 flex-col bg-white shadow-lg h-auto shadow-gray-400 rounded-lg">
                <div className="flex justify-center py-8 px-24 "> 
                    <h1 className="text-2xl font-bold "> BMI Calculator</h1>
                </div>
                <form onSubmit={calcBmi}>
                <div className="px-4">
                    <div className="flex flex-col">
                        <label  className="font-bold">Weight 'lbs' </label>
                        <input value={weight} onChange={handleWeight} className="mt-3 h-8 px-2 rounded-lg border-[1.5px] border-black"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Heigh 'in' </label>
                        <input value={height} onChange={handleHeight} className="mt-3 h-8 px-2 rounded-lg border-[1.5px] border-black" type="text" />
                    </div>
                    <div className="flex flex-col mt-3 mb-10">
                        <button onChange={calcBmi} className="mt-2 border-2 border-black rounded-xl bg-black text-white py-2">Submit</button>
                        <button onClick={reload} className="mt-3  border-2 py-2 bg-white rounded-xl">Reloadd</button>                    
                    </div>
                </div>
                </form>
                <div className="flex justify-center items-center flex-col ">
                        <div className="flex items-center flex-col">
                            <h1 className="text-2xl font-bold">Your BMI is: {bmi}</h1>
                            <p  className="font-bold">{message}</p>
                        </div>
                        <div>
                           <img className="w-auto h-[100px] mt-6 mb-6" src={imgSrc}></img>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Bmi