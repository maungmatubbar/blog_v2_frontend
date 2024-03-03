import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Form, Input, Table } from 'antd';
import { deleteCategory, getAllCategory } from './CategoryApi';
import { Breadcrumb } from 'antd';
import {  HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CategoryParamsInterface } from './CategoryInterface';
import { useEffect, useState } from 'react';
import CategoryCreateModal from './CategoryCreateModal';
import { RootState, useAppDispatch, useAppSelector } from '../../../store/store';
import { openCloseCategoryCreateModal } from './CategorySlice';
const Category = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const categoryState = useAppSelector((state:RootState)=>state.CATEGORY);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const [params, setParams] = useState<CategoryParamsInterface>({
    loading: true,
    page: 1,
    query: null,
    limit: 10,
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const {data,isLoading} = useQuery({
    queryKey: ['category_list',{currentPage,searchQuery}],
    queryFn: getAllCategory
  });
  const{mutate} = useMutation({
    mutationFn: async (data: any) => {
      return await deleteCategory(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["category_list"]);
    },
  })
  const columns =() => {
    const handleDelete = async (catId:string) => {
      console.log(catId);
      mutate(catId);
    }
    return (
      [
        {
          title: 'Category Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Action',
          key: 'action',
          render:(_:any,record:any) =>{
              return (
                <>
                  <div className='flex items-center gap-2'>
                  <Button className='bg-blue-500 hover:bg-blue-400 transition delay-150 text-white'>
                    Edit</Button>
                  <Button onClick={()=>handleDelete(record?._id)} className='bg-red-500 hover:bg-red-400 transition delay-150 text-white hover:border-white'>
                    Delete</Button>
                  </div>
               </>
              )
          }
        }
      ]
    )
  }
  const handleSearch = (data:any) => {
    setSearchQuery(data?.search??'');
  }

  useEffect(()=>{
    if(data?.status === 'success'){
      setParams((prev:CategoryParamsInterface)=>({
        ...prev,
        loading: false,
        page: data?.currentPage,
        query: null,
        total:  data?.total,
      }))
    }
  },[data])
 
  return (
    <>
       <Breadcrumb className='py-3'
        items={[
        {
            
            title:<Link to={'/dashboard'}><HomeOutlined /></Link>,
        },
        {
            href: '',
            title: (
            <>
                <span>Category List</span>
            </>
            ),
        },
        ]}
    />
    <div className='flex items-center justify-between py-3'>
      <Form onFinish={handleSearch} className='flex items-center gap-2'>
         <Form.Item name={'search'} className='m-0'>
            <Input />
         </Form.Item>
         <Button htmlType='submit' className='flex items-center text-[14px] text-white bg-primary-500 transition duration-300 hover:bg-primary-400'>
           <SearchOutlined/> Search
          </Button>
      </Form>
      <Button onClick={()=>dispatch(openCloseCategoryCreateModal(!categoryState?.createModal))} className='text-[14px] text-white bg-primary-500 transition duration-300 hover:bg-primary-400'>Create</Button>
    </div>
      <Table loading={isLoading} 
      columns={columns()}
      dataSource={data?.data} 
      pagination={{
        pageSize: params.limit,
        total: params.total,
        current: currentPage,
        onChange: (page) => {
          setParams((prev: CategoryParamsInterface) => ({
            ...prev,
            loading: true,
            page: currentPage,
          }));
          setCurrentPage(page);
        },
      }}
       />
       <CategoryCreateModal />
    </>
  )
}

export default Category;