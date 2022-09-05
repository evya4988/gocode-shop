import React, { useState, useContext } from 'react'
// import 'antd/dist/antd.css'
import { Table, Form, Input } from 'antd'
import { Button } from 'antd/lib/radio'
import MyContext from '../../MyContext'
import styles from './AdminActions';

const Admin = () => {
    const { productsData, setProductsData } = useContext(MyContext);
    const [editingRow, setEditingRow] = useState(null);
    const [form] = Form.useForm();

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return <Form.Item
                        key={record.id}
                        name='title'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Title'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return <Form.Item
                        key={record.id}
                        name='image'
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please enter your Image'
                                },
                            ]}
                    >
                        <Input />
                    </Form.Item >
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return <Form.Item
                        key={record.id}
                        className={styles.description}
                        name='description'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Description'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Category',
            dataIndex: 'category',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return <Form.Item
                        key={record.id}
                        name='category'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Category'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (text, record) => {
                if (editingRow === record.id) {
                    return <Form.Item
                        key={record.id}
                        name='price'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Price'
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Actions',
            render: (_, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => {
                            setEditingRow(record.id);
                            form.setFieldsValue({
                                key:record.id,
                                title: record.title,
                                description: record.description,
                                price: record.price,
                                image: record.image,
                                category: record.category,
                            })
                        }}>Edit</Button>
                        <Button type="link" htmlType="submit">
                            Save
                        </Button >
                    </>
                )
            }
        }
    ]

    const onFinishHandler = (values) => {
        console.log({ values });
        const updatedDataSource = [...productsData];
        updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
        setProductsData(updatedDataSource);
        setEditingRow(null);
    }

    return (
        <>
            {/* form={form} */}
            <Form form={form} onFinish={onFinishHandler}>
                <Table  columns={columns} dataSource={productsData}></Table>
            </Form>
        </>
    )
}

export default Admin