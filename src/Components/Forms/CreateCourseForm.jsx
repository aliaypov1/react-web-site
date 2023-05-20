import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const CreateCourseForm = ({value, setValue,start}) => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="title"
      name="title"
      onChange={e => setValue({...value, title:e.target.value})}
      rules={[
        {
          required: true,
          message: 'Please input your title',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="description"
      name="description"
      onChange={e => setValue({...value, description:e.target.value})}
      rules={[
        {
          required: true,
          message: 'Please input your description!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="price"
      name="price"
      onChange={e => setValue({...value, price:e.target.value})}
      rules={[
        {
          required: true,
          message: 'Please input your price!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button  htmlType="submit" onClick={start}>
        опубликовать
      </Button>
    </Form.Item>
  </Form>
);
export default CreateCourseForm;