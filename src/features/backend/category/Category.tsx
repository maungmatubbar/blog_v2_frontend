import { useQuery } from '@tanstack/react-query';
import { Button, Form, Input, Table } from 'antd';
import { getAllCategory } from './CategoryApi';
import { Breadcrumb } from 'antd';
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CategoryParamsInterface } from './CategoryInterface';
import { useEffect, useState } from 'react';
const Category = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [params, setParams] = useState<CategoryParamsInterface>({
    loading: true,
    page: 1,
    query: null,
    limit: 3,
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const {data,isLoading,isSuccess} = useQuery({
    queryKey: ['category_list',{currentPage,searchQuery}],
    queryFn: getAllCategory
  });
  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];
  const handleSearch = (value:string) => {
    setSearchQuery(value)
  }

  useEffect(()=>{
    if(isSuccess){
      setParams((prev:CategoryParamsInterface)=>({
        ...prev,
        loading: false,
        page: data?.currentPage,
        query: null,
        total:  data?.total,
      }))
    }
  },[])
 
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
      <Button className='text-[14px] text-white bg-primary-500 transition duration-300 hover:bg-primary-400'>Create</Button>
    </div>
      <Table loading={isLoading} 
      columns={columns}
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
    </>
  )
}

export default Category;