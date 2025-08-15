
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon ,QrCode} from "lucide-react"
import { Terminal } from "lucide-react";
import { useEffect,useRef } from "react";
import QRCodeStyling from "qr-code-styling";


import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

  let holder ;
  let laba ;
export default function MakeQr(){

  let [selectInput,setSelectValue]=useState({
     type:"Email",
     text:"",

    password:"",
    protocals:"",
    showAlert:false,
  })
  


  if(selectInput.type ==="Email"){
    laba="Email";
    holder="m@example.com";
  }else if(selectInput.type ==="Url"){
        laba="Url";
    holder="https://example.com";
  }else if(selectInput.type==="Phone number"){
       laba="Phone number";
    holder="example : +201234567890";
  }else if(selectInput.type==="SMS"){
    laba="SMS";
    holder="example : +201234567890";
  }else if(selectInput.type==="Wi-Fi"){
    laba="Wi-Fi Name";
    holder="example";
  }else if(selectInput.type==="Text"){
    laba="write any Test";
    holder=" hello world";
  }


  // create alert
  function handleAlert(){
    setSelectValue({...selectInput,showAlert:true})
    setTimeout(()=>{
    setSelectValue({...selectInput,showAlert:false})

    },2000)
  }
    return(
      
           <Card className="w-full max-w-sm  rounded-xl border border-border bg-card text-card-foreground shadow-sm  ">
      <CardHeader>
          <CardTitle>Create a qrcode</CardTitle>
          <CardDescription>
           Enter any value and choose the QRcode type.
          </CardDescription>
          <CardAction>
            {/* <Button variant="link">Sign Up</Button> */}
          </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{laba} </Label>
              <Input
                id="email"
                type="email"
                placeholder={selectInput.type==="Wi-Fi" ? "my-wifi":holder}
                required
                onChange={(value)=>{
                  console.log(value.target.value)
                  // selectInput({...})
                  setSelectValue({...selectInput,text:value.target.value})
                }}
              />
            </div>
            <div className="grid gap-2">
              

              {/** if user select wifi */}
                  
               {selectInput.type==="Wi-Fi"&& <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              
              </div> }


              {selectInput.type==="Wi-Fi" &&
                 <Input
                id="email"
                type="password"
                placeholder={holder}
                required
                onChange={(value)=>{
                  console.log(value.target.value)
                  setSelectValue({...selectInput,password:value.target.value})
                }}
              />
              }




              {selectInput.type==="Wi-Fi"&& <div className="flex items-center">
                <Label htmlFor="password">Protocals</Label>
               
              </div> }
              
             
{selectInput.type==="Wi-Fi"&&

<Select onValueChange={(value)=>{
      console.log(value)
      // setSelectValue({...selectInput,protocals:value})
           setSelectValue({...selectInput,protocals:value})
           
      }} value={selectInput.protocals} >
          <SelectTrigger className="w-full " >
            <SelectValue placeholder="Select a protocals" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>type of protocals </SelectLabel>
              
               {/** WIFI:T:WPA;S:MyNetwork;P:mypassword;;*/}
               {/** t = protocals , s =name of network , p = password*/}
              <SelectItem value="WEP">WEP</SelectItem>
               <SelectItem value="WPA">WPA</SelectItem>
               <SelectItem value="Empty if without password">Empty if without password</SelectItem>


            

              


            </SelectGroup>
          </SelectContent>
    </Select>


}
    

{/**  end ====if user select wifi ====*/}


<div className="flex items-center">
                <Label htmlFor="password">Type</Label>
               
 </div>

{/** start of select */}
    <Select onValueChange={(value)=>{
      console.log(value)
      setSelectValue({...selectInput,type:value})
           
      }} value={selectInput.type}>
          <SelectTrigger className="w-full " >
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
               {/** mailto:example@email.com */}
              <SelectItem value="Email">email</SelectItem>
              {/** https://example.com */}
              <SelectItem value="Url">Url</SelectItem>
              {/** tel:+201234567890 */}
              <SelectItem value="Phone number">Phone number</SelectItem>
               {/** sms:+201234567890 */}
              <SelectItem value="SMS">SMS</SelectItem>
               {/** WIFI:T:WPA;S:MyNetwork;P:mypassword;;*/}
               {/** t = protocals , s =name of network , p = password*/}
              <SelectItem value="Wi-Fi">Wi-Fi</SelectItem>
               {/**  any text */}
              <SelectItem value="Text">Text</SelectItem>

              


            </SelectGroup>
          </SelectContent>
    </Select>

{/** end of select */}



             

            </div>

          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={()=>{
          console.log("is click")
          handleAlert()
        }}>
         Create a qrcode
        </Button>
        <Button variant="destructive" className="w-full">
         Download QR Code
        </Button>
      </CardFooter>



{/** start of alert  */}
{selectInput.showAlert===true &&

       <Alert className="w-full max-w-sm rounded-xl border border-border bg-card text-card-foreground shadow-sm absolute left-0 bottom-0 m-5">
                <QrCode className="h-4 w-4 mr-2" />
                <AlertTitle>qrcode made !</AlertTitle>
                <AlertDescription>
              You can download the qrcode now
                </AlertDescription>
      </Alert>
}
    


      {/**  endstart of alert  */}
    </Card>
    )
}