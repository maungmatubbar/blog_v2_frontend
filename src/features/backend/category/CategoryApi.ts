const baseUrl = 'http://localhost:8000/api';
export const getAllCategory = async () => {
    const response = await fetch(`${baseUrl}/category/get-categories`)
                            .then(res=>res.json())
                            .then(data=>data as any[])
            return response;
}