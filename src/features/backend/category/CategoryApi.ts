const baseUrl = 'http://localhost:8000/api';
let headersList = {
   "Accept": "application/json",
   "Content-Type": "application/json"
  }
export const getAllCategory = async ({ queryKey }:any) =>
 {
    const [_key, { currentPage,searchQuery }] = queryKey
    const response = await fetch(`${baseUrl}/category/get-categories?page=${currentPage}&search=${searchQuery}`)
                            .then(res=>res.json())
                            .then(data=>data as any[])
            return response;
}
export const createCategory = async (data:{name:string}) =>
 {
    try {
      const response = await fetch(`${baseUrl}/category/create`,{
      method: "POST",
      body: JSON.stringify(data),
      headers: headersList
  }).then(res=>res.json())
   .then(data=>data as any[])
   return response;
    }
    catch(error){
      console.log(error)
    }
}
export const deleteCategory = async (catId:string) =>
 {
    try {
          const response = await fetch(`${baseUrl}/category/delete-category/${catId}`,{
            method: 'DELETE'
          }).then(res=>res.json())
            .then(data=>data as any[])
            return response;
   
    }
    catch(error){
      console.log(error)
    }
}