interface IUserLogin {
    email:string,
    password: string
}
let headersList = {
    "Accept": "application/json",
    "Content-Type": "application/json"
   }
export const userLogin = async (data:IUserLogin) => {
   try{
        const response = await fetch(`http://localhost:8000/api/user/login`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: headersList
        }).then(res=>res.json())
        .then(data=>data as any[])
        return response;
   }
   catch(error){
    console.log(error);
   }
   
}
