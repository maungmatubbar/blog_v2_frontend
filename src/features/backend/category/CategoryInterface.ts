export interface CategoryListInterface {
    _id: string,
    name: string
}
export interface CategoryParamsInterface {
    loading: boolean,
    page: number;
    query: string | null;
    total:number,
    limit: number
}