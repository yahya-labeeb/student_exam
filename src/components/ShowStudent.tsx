import { Button,  Paper, TextField } from "@mui/material"
import { type ChangeEvent, type Dispatch, type SetStateAction,  useState } from "react"
import { type Student } from "../utils/data"
import {  getStudent } from "../Students"

interface Props{
  students: Student[]
 
  setStudents: Dispatch<SetStateAction<Student[]>>
}
const initialstate={id:0, name:"" , age:"0", notes:""}
function ShowStudent({students}:Props){
  const [formdata, setformdata]=useState(initialstate)
  const [Mydata,setMydata]=useState(students)


  function handelchange(e:ChangeEvent<HTMLInputElement>){
    
      setformdata({...formdata,[e.target.name]:e.target.value})
       formdata.name= e.target.value
       
    }
    const handelSubmet=async()=>{
     const  mydata= await getStudent(formdata)
      students=mydata
      console.log(formdata.id)
      console.log(JSON.stringify(mydata))
      setMydata(students)
      }
   
 
     return(
  <>
       <Paper  elevation={2}  sx={{ width:'95%',height: '40px', padding:"15px", marginTop: "4px", flexDirection:"row" ,
        display:"flex", gap : "20%"   }}>
          <TextField  onChange={handelchange} size="small"  id="outlined-basic" label="رقم الجلوس" 
            name ="id" variant="outlined">  </TextField> 
          {/* {<p>{JSON.stringify(Mydata)}</p>}  */}
          
          <Button onClick={handelSubmet  } sx={{position:""}} color="success" variant ="contained">ابحث</Button>
    
        </Paper>  
         {        Mydata.length==0  ? 
         <>
        <Paper  elevation={0}  sx={{ width:'95%',height: '40px', padding:"15px", marginTop: "4px", flexDirection:"row" ,
            display:"flex", gap : "20%"   }}>
            <p> خطأ في عملية الادخال تأكد من الرقم</p> 
        </Paper></> 
             :
         Mydata.map((item)=>(
         <>
     
       { item ? 
       <>
        <Paper  elevation={0}  sx={{widows:'95%', height: '20px', padding:"5px", marginTop: "10px", flexDirection:"row" ,
        display:"flex", gap : "5px"   }}>
        <TextField sx={{width:"65%"  }} size="small" value={item.name}/>
        <TextField sx={{width:"30%" }} size="small" value={"الاسم"} />
        </Paper>
       {/*  <Paper  elevation={0}  sx={{ widows:'95%',height: '20px', padding:"5px", marginTop: "10px", flexDirection:"row" ,
            display:"flex", gap : "5px" }} >
        <TextField sx={{width:"65%"}} size="small" value={item.id}/>
        <TextField sx={{width:"30%" }} size="small"  value={"رقم الجلوس"} /> 
        </Paper>*/}
        <Paper  elevation={0}  sx={{ widows:'95%',height: '20px',  padding:"5px", marginTop: "10px", flexDirection:"row" ,
            display:"flex", gap : "5px"}}>
        <TextField sx={{width:"65%"}} size="small" value={item.age}/>
        <TextField sx={{width:"30%" }} size="small"  value={"المجموع الكلي"} />
        </Paper>
        <Paper  elevation={0}  sx={{ widows:'95%',height: '20px', padding:"5px", marginTop: "10px", flexDirection:"row" ,
            display:"flex", gap : "5px"}}>
        <TextField sx={{width:"65%"}} size="small" value={item.notes}/>
        <TextField sx={{width:"30%" }} size="small"  value={"النتيجة"} />
        </Paper>
        {/*<Paper  elevation={0}  sx={{ widows:'95%',height: '20px', padding:"5px", marginTop: "10px", flexDirection:"row" ,
            display:"flex", gap : "5px"}}>
         <TextField sx={{width:"65%"}} size="small" value={item.notes}/>
        <TextField sx={{width:"30%" }} size="small"  value={"ملاحظات"} /> 
        </Paper>*/}

        
        </>
        
            : <p>"error"</p>            }
        </>
       ))}
      
      
        
 </>
    )
}

export default ShowStudent
