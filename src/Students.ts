import type { Student } from "./utils/data"

export const fetchstudent= async()=>{
const respons= await fetch('https://reactresult-seven.vercel.app'+ process.env.PORT+'/')
return await respons.json()

}

export const getStudent = async(data:Student) => {
    console.log('output')
    const respons=await fetch(respons+data.id, {
      method: 'get',
        headers:{
            'Content-Type':'application/json'
        }
        
    })
    console.log(respons.status)
    return  respons.json()
}



export const creatStudent=async(data: Student) =>{
    const respons=await fetch(respons, {
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })
    console.log(respons)
    return await respons.json()
}


{/*export const getStudent=async(id: number) =>{
   // console.log(id)
    const respons=await fetch('http://localhost:3000/${id}')
   // console.log(id+id)
    return await respons.json()
   // console.log(id)
}

*/}


//method: 'POST',
//headers: {'Content-Type': 'application/json'},
//body: JSON.stringify(data);
