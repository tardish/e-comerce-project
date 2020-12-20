import { Table, Input, } from 'antd';
import React, {useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import _ from 'lodash'
import './admin.css';


export default function Admin() {
    const [data, setData] = useState([])
    const [inputFieldName, setInputFieldN] = useState("")
    const [inputFieldImage, setInputFieldI] = useState("")
    const [inputFieldDes, setInputFieldD] = useState("")
    const [inputFieldPrice, setInputFieldP] = useState("")
    const [inputFieldStock, setInputFieldS] = useState("")
    const [inputFieldCate, setInputFieldC] = useState("")
    const fetchProduct = async () => {
        const httpResponse = await axios.get("http://localhost:8000/products");
        setData(httpResponse.data);
    };
    useEffect(() => { fetchProduct(); }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 150,
        },
        {
            title: 'Product Name',
            dataIndex: 'productname',
            width: 150,
        },
        {
            title: 'Product Image',
            dataIndex: 'productimage',
            width: 300,
        },
        {
            title: 'Descriptions',
            dataIndex: 'Descriptions',
            width: 300,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            width: 100,
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            width: 100,
        },
        {
            title: 'Sort',
            dataIndex: 'category',
            width: 100,
            filters: [
                {
                    text: 'Brown',
                    value: 'Brown',
                },
                {
                    text: 'Black',
                    value: 'Black',
                },
            ],
            onFilter: (value, record) => record.category.indexOf(value) === 0,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <button onClick={() => deleteData(data.id)}>Delete</button>,
        },
    ];

    const addData = async() => {
        const newData = [...data];
        await  newData.push({
            id: _.uniqueId(),
            productname: inputFieldName,
            productimage: inputFieldImage,
            Descriptions: inputFieldDes,
            price: inputFieldPrice,
            stock: inputFieldStock,
            category: inputFieldCate,
        });
        await   setData(newData);
        await  reset()
    }
    const deleteData = (id) => {
        const newData = [...data];
        const targetIndex = newData.findIndex(data => data.id === id);
        newData.splice(targetIndex, 1);
        setData(newData);
    }

const reset = () =>{
    setInputFieldN('')
    setInputFieldI('')
    setInputFieldD('')
    setInputFieldP('')
    setInputFieldS('')
    setInputFieldC('')
}


    return <div>
              <Navbar/>
        <div> <div className="Addform">
            <div >Add Product</div>
            <div className="Add" ><Input name="Name" value={inputFieldName} onChange={(e) => setInputFieldN(e.target.value)} placeholder="Product Name" /></div>
            <div className="Add"><Input name="Image"  value={inputFieldImage} onChange={(e) => setInputFieldI(e.target.value)} placeholder="Product Image" /></div>
            <div className="Add"><Input name="Des"  value={inputFieldDes} onChange={(e) => setInputFieldD(e.target.value)} placeholder="Descriptions" /></div>
            <div className="Add"><Input name="Price"  value={inputFieldPrice} onChange={(e) => setInputFieldP(e.target.value)} placeholder="Price" /></div>
            <div className="Add"><Input name="Stock"  value={inputFieldStock} onChange={(e) => setInputFieldS(e.target.value)} placeholder="Stock" /></div>
            <div className="Add"><Input name="Cate"  value={inputFieldCate} onChange={(e) => setInputFieldC(e.target.value)} placeholder="Category" /></div>
            <div className="buttonA"><button onClick={addData}> ADD</button></div>
            <div className="buttonA" ><button onClick={reset}> Reset</button></div>
        </div></div>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 550 }} />
    </div>;

}
