
import './App.css'
import MakeQr from './com/MakeQr'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon ,ScanLine} from "lucide-react"
import { Terminal } from "lucide-react";
import { useState } from 'react';
import { useEffect,useRef } from "react";
import QRCodeStyling from "qr-code-styling";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function App() {
const ref=useRef(null)
  let [resvieData,setResivieData]=useState({text:""})
  // let[down,setDown]=useState(false)

  function getData(fromChild){
console.log(fromChild)
setResivieData(fromChild)
  }

  // function qr(){
 

  // }

  // function isDownload(){
     
  // }


  useEffect(()=>{
    if(!resvieData.text) return
       const qrcode= new QRCodeStyling({
      width:250,
      height:250,
      type:"svg",
      data:resvieData.format,
      image:"",
      dotsOptions:{
        color:"#EBEBEB",
        type:"rounded"
      },
      backgroundOptions:{
        color:"transparent"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 10
       }

    })


     if(ref.current){
      ref.current.innerHTML=""
      qrcode.append(ref.current)
    }

    if(resvieData.downlaod===true){
      function qrDownload(){
           qrcode.download({name:"qrcode",extension:"png"})
      }

      qrDownload()
    }
  
  },[resvieData])


  return (
    
    <div className="bg-background text-foreground min-h-screen  items-center justify-center flex flex-col lg:flex-row " style={{height:"100vh",width:"100vw"}}>
          
         
      <MakeQr data={getData} />
      
    
    {/** show qrcode */}
    
      <Card className="w-full max-w-sm  rounded-xl border border-border bg-card text-card-foreground shadow-sm  mt-2 ml-5 h-90  ">
              <CardHeader>
                <CardTitle>QRcode</CardTitle>
                <CardDescription>Scan qr</CardDescription>
                <CardAction><ScanLine /></CardAction>
              </CardHeader>

              <CardContent ref={ref} className="w-full  flex items-center justify-center">
                {/* <p>Card Content</p> */}


              </CardContent>

              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
     </Card>

   {/** show qrcode */}

    </div>
    
  )
}

export default App
