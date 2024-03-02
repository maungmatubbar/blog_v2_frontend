import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, notification } from "antd";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../store/store";
import { openCloseCategoryCreateModal } from "./CategorySlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "./CategoryApi";
import type { NotificationArgsProps } from "antd";
import { useEffect } from "react";

type NotificationPlacement = NotificationArgsProps["message"];
const CategoryCreateModal = () => {
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
  const [api] = notification.useNotification();
  const categoryState = useAppSelector((state: RootState) => state.CATEGORY);
  const dispatch = useAppDispatch();
  const { mutate, data:cateogryData, status } = useMutation({
    mutationFn: async (data: any) => {
      return await createCategory(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["category_list"])
    }
  });
  const handleSubmit = async (data: { name: string }) => {
    mutate(data);
  };

  const openNotification = (message: NotificationPlacement) => {
    api.info({
      message: message,
    });
  };
  console.log(cateogryData)
  useEffect(()=>{
    if (cateogryData?.success) {
        openNotification(cateogryData?.message);
        form.resetFields();
        dispatch(openCloseCategoryCreateModal(!categoryState?.createModal));
      } else {
        console.log(cateogryData);
      }
  },[cateogryData?.success])
  return (
    <>
      <Modal
        open={categoryState?.createModal}
        title="Create New"
        footer={null}
        closeIcon={<CloseCircleOutlined />}
        onCancel={() =>
          dispatch(openCloseCategoryCreateModal(!categoryState?.createModal))
        }
      >
        <Form onFinish={handleSubmit}>
          <div className="flex items-center gap-3">
            <Form.Item
              name={"name"}
              className="w-[80%]"
              rules={[
                { required: true, message: "Please enter category name!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                htmlType="submit"
                className="bg-green-400 text-white"
                disabled={status ==='pending'}
              >
                {status ==='pending'?'Creating...':'Create'}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryCreateModal;
