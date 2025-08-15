
import './App.css'
import MakeQr from './com/MakeQr'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import { Terminal } from "lucide-react";


function App() {

  return (
    
    <div className="bg-background text-foreground min-h-screen flex items-center justify-center" style={{height:"100vh",width:"100vw"}}>
          
         
      <MakeQr />
     
    
      
    </div>
    
  )
}

export default App
