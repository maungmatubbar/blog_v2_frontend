import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { getAllCategory } from './CategoryApi';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Category = () => {
  const {data,isLoading} = useQuery({
    queryKey: ['category_list'],
    queryFn: getAllCategory,
  });

  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];
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
      <Table loading={isLoading} dataSource={data?.data} columns={columns} />
    </>
  )
}

export default Category;