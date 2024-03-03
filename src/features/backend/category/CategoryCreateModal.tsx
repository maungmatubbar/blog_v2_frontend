import { CloseCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, notification } from "antd";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../store/store";
import { openCloseCategoryCreateModal } from "./CategorySlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "./CategoryApi";
import { useEffect } from "react";

const CategoryCreateModal = () => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const categoryState = useAppSelector((state: RootState) => state.CATEGORY);
  const dispatch = useAppDispatch();
  const {
    mutate,
    data: cateogryData,
    status,
  } = useMutation({
    mutationFn: async (data: any) => {
      return await createCategory(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["category_list"]);
    },
  });
  const handleSubmit = async (data: { name: string }) => {
    mutate(data);
  };
  if (status === "success") {
    form.resetFields();
  }
  console.log(cateogryData);
  useEffect(() => {
    if (status === "success") {
      if (cateogryData?.success) {
        notification.success({
          message: cateogryData?.message,
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
        dispatch(openCloseCategoryCreateModal(!categoryState?.createModal));
      } else {
        console.log(cateogryData);
      }
     
    }
  }, [cateogryData?.success]);

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
        <Form form={form} onFinish={handleSubmit}>
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
                disabled={status === "pending"}
              >
                {status === "pending" ? "Creating..." : "Create"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryCreateModal;
