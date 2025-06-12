//import { useState } from 'react'
import luxorg from './assets/luxor_g.jpg'
import luxor from './assets/luxor.jpg'
//import viteLogo from '/vite.svg'
import './App.css'
import ShowStudent from './components/ShowStudent'
import { useState } from 'react'
import { data } from './utils/data'
import { Paper } from '@mui/material'

function App() {
  //const [count, setCount] = useState(0)
  const [[],setStudents]=useState(data)
  return (
    <>
      <Paper  elevation={3} sx={{ width:400, padding:"15px", marginTop: "5px", flexDirection:"column" 
            , display:"flex", gap : "40px"}}>
      <div >
        <a href="" target="_blank">
          <img src={luxor} className="" width={'120px'} height={'180px'} alt="Vite logo" />
        </a>
        <a href="" target="_blank">
        <img src={luxorg} className="" width={'120px'} height={'180px'} alt="Vite logo" />
         {/*  <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h3>نتيجة الشهادة الاعداية - محافظة الأقصر</h3>
      <div className="card">
      <ShowStudent  students={[]} setStudents={setStudents} />     
      </div>
    </Paper>
    </>
  )
}

export default App
