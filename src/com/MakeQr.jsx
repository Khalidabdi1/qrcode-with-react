


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

  let [selectInput,setSelectValue]=useState("email")


  if(selectInput ==="email"){
    laba="Email";
    holder="m@example.com";
  }else if(selectInput ==="Url"){
        laba="Url";
    holder="https://example.com";
  }else if(selectInput==="Phone number"){
       laba="Phone number";
    holder="example : +201234567890";
  }else if(selectInput==="SMS"){
    laba="SMS";
    holder="example : +201234567890";
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
              <Label htmlFor="email">{laba}</Label>
              <Input
                id="email"
                type="email"
                placeholder={holder}
                required
                onChange={(value)=>{
                  console.log(value.target.value)
                }}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Type</Label>
               
              </div>

{/** start of select */}
    <Select onValueChange={(value)=>{
      console.log(value)
      setSelectValue(value)
           
      }} value={selectInput}>
          <SelectTrigger className="w-full " >
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
               {/** mailto:example@email.com */}
              <SelectItem value="email">email</SelectItem>
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
        <Button type="submit" className="w-full">
         Create a qrcode
        </Button>
        <Button variant="outline" className="w-full">
         Download QR Code
        </Button>
      </CardFooter>

    </Card>
    )
}