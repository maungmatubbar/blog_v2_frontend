"use client";
import { useMutation } from "@tanstack/react-query";
import { Form, Input } from "antd";
import { userLogin } from "./LoginApi";
import { useAppDispatch } from "../../../store/store";
import { updateLoggedInUserState } from "../../auth/loginSlice";
import { useNavigate } from "react-router-dom";
type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {mutate,data:loginData,status:loginStatus} = useMutation({
        mutationFn: async (data:any) => {
            return await userLogin(data);
        }
    });
    const handleLoginSubmit = async(value:{email:string, password:string}) => {
        mutate(value);
    }
    console.log()
    if(loginStatus === 'success'){
        console.log(loginData);
        let userData = {
            ...loginData?.user,
            success: loginData?.success,
            token: loginData?.token,
        }
        dispatch(updateLoggedInUserState(userData));
        localStorage.setItem('_u_token',loginData?.token);
        navigate("/dashboard");
    }
    
  return (
    <>
      <Form onFinish={handleLoginSubmit}>
        <Form.Item<FieldType>
          name="email"
          className="mb-4 rounded-0"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="py-3"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
          className="mb-4 rounded-0"
        >
          <Input.Password
            type="password"
            name="password"
            placeholder="Password"
            className="py-3"
          />
        </Form.Item>
        <div className="mb-10">
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-md border border-primary bg-blue-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
          />
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
