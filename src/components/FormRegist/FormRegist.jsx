// import { useDispatch, useSelector } from 'react-redux';

// import { register } from 'redux/auth/authOperations';
// import { Button, Form, Input } from 'antd';

// const FormRegist = () => {
//   const [form] = Form.useForm();
//   const { isLoading, error } = useSelector(state => state.auth);
//   const dispatch = useDispatch();

//   const onFinishing = values => {
//     const { name, email, password, confirm } = values;

//     if (password === confirm) {
//       dispatch(register({ name, email, password }));
//       !isLoading && !error && form.resetFields();
//     }
//   };

//   const formItemLayout = {
//     labelCol: {
//       span: 24,
//     },
//     wrapperCol: {
//       span: 24,
//     },
//   };

//   const tailFormItemLayout = {
//     wrapperCol: {
//       xs: {
//         span: 24,
//         offset: 0,
//       },
//       sm: {
//         span: 16,
//         offset: 4,
//       },
//     },
//   };

//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinishing}
//       size={'default'}
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       style={{
//         width: 300,
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         {/* <Input.Password /> */}
//         <Input.Password autoComplete="new-password" />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }
//               return Promise.reject(
//                 new Error('The new password that you entered do not match!')
//               );
//             },
//           }),
//         ]}
//       >
//         {/* <Input.Password /> */}
//         <Input.Password autoComplete="new-password" />
//       </Form.Item>

//       <Form.Item
//         name="name"
//         label="Name"
//         tooltip="What do you want others to call you?"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your name!',
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default FormRegist;

import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useState } from 'react';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { isLoading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, confirm } = formData;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
      </div>

      <div>
        <label htmlFor="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <button type="submit" disabled={isLoading}>
          Register
        </button>
      </div>

      {error && <p>{error}</p>}
    </form>
  );
};

export default FormRegister;
