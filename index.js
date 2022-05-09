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
];
let value = 0;
let result = 0;
var validateStudent = () =>{
    for ( i=0; i<Infinity; i++) {
        
        var username =prompt("Enter studentName");
        var id = prompt("Enter validId");

        for(k=0;  k<students.length; k++){
            if(username ===students[k].userName && id === students[k].passWord){
                value ++;
                result = students[k]
            }
          
        }
        if(value > 0){
            console.log(result)
        }else{
            console.log("Invalid credentials")
        }

        var userExist = prompt("Enter N to exist or quit");
        if(userExist === 'n' || userExist==='N'){
            break;
        }else{
            continue;
        }
    }
}
validateStudent();