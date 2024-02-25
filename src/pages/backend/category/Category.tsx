import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { getAllCategory } from './CategoryApi';

const Category = () => {
  const {data,isLoading} = useQuery({
    queryKey: ['category_list'],
    queryFn: getAllCategory
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

      <Table loading={isLoading} dataSource={data?.data} columns={columns} />
    </>
  )
}

export default Category