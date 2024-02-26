const baseUrl = 'http://localhost:8000/api';
export const getAllCategory = async ({ queryKey }:any) =>
 {
    const [_key, { currentPage,searchQuery }] = queryKey
    const response = await fetch(`${baseUrl}/category/get-categories?page=${currentPage}&search=${searchQuery}`)
                            .then(res=>res.json())
                            .then(data=>data as any[])
            return response;
}