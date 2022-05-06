let students =[
    {
        userName:"Habby",
        passWord:"hau2187"
    },
    {
        userName:"Halimah",
        passWord:"hal187"
    },
    {
        userName:"Habeeb",
        passWord:"ha2187"
    },
]

const userN = "Halimah"
const psw = 'hal187'



if(userN && psw){
    const main = students.find((user) => user.userName === userN )
    if(main.passWord === psw){
        console.log(`${main.userName} has logged in`)
    }else{
        console.log('password is not correct')
    }
  
}else{
   console.log('no userName or Password')
}