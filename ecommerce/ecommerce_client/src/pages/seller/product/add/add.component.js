import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Input,
    Layout,
    Col,
    Row,
    Button,
    Upload,
    Icon,
    Modal,
    Select,
    Form,
    Spin
} from 'antd';
import {
    SideNav,
    HeaderSeller,
    SearchSeller,
    Order
} from '../../../../components';
import { api } from '../../../../services';
import './add.component.scss';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export function ProductAdd({
    seller,
    product,
    category,
    brand,
    createProduct,
    getListBrand,
    getListCategory
}) {
    const { Content } = Layout;
    const { TextArea } = Input;
    const { Option } = Select;
    const initialInputValue = {
        nameValue: "",
        categoryValue: "",
        subCategoryValue: "",
        brandValue: "",
        priceValue: 1.00,
        sizeValue: ['S'],
        colorValue: [{
            code: "#ff5f6d",
            name: "Pink"
        }],
        quantityValue: 1,
        descriptionValue: "No decription"
    };

    const [sizes, setSizes] = useState(['S', 'M', 'L']);
    const [colors, setColors] = useState([
        {
            code: "#ff5f6d",
            name: "Pink"
        },
        {
            code: "rgba(255, 195, 113, 0.5)",
            name: "Pale yellow"
        },
        {
            code: "rgba(95, 109, 255, 0.5)",
            name: "Pale blue"
        },
        {
            code: "rgba(255, 161, 95, 0.5)",
            name: "Orange"
        },
        {
            code: "rgba(61, 61, 63, 0.5)",
            name: "Pale black"
        }
    ]);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [{
        nameValue,
        categoryValue,
        subCategoryValue,
        brandValue,
        priceValue,
        sizeValue,
        colorValue,
        quantityValue,
        descriptionValue
    },
        setInputValue
    ] = useState(initialInputValue);


    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };

    const handleChange = ({ fileList }) => {
        setFileList(fileList)
    };

    const handleUploadFile = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0)
    }

    const handleOnChangeInput = e => {
        const { name, value } = e.target;
        setInputValue(prevState => ({ ...prevState, [name]: value }));
    };

    const handleOnSelectCategory = (key) => {
        const item = category.items.find(item => item._id === key);

        setInputValue(prevState => ({ ...prevState, categoryValue: key }));
        setSubCategory(item.listSub);
    };

    const handleOnChangeSelectSubCategory = (key) => {
        setInputValue(prevState => ({ ...prevState, subCategoryValue: key }));
    };

    const handleOnChangeSelectBrand = (key) => {
        setInputValue(prevState => ({ ...prevState, brandValue: key }));
    };

    const handleOnChangeSelectMutiSize = (key) => {
        const arrayValue = key.map(item => sizes[Number(item)]);
        setInputValue(prevState => ({ ...prevState, sizeValue: arrayValue }));
    };

    const handleOnChangeSelectMutiColor = (key) => {
        const arrayValue = key.map(item => colors[Number(item)]);
        setInputValue(prevState => ({ ...prevState, colorValue: arrayValue }));
    };

    const handleFormSubmit = async (e) => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        e.preventDefault();

        const body = new FormData();
        fileList.forEach(item => {
            body.append('subImage', item.originFileObj);
        })
        body.append('name', nameValue);
        body.append('category', categoryValue);
        body.append('subCategory', subCategoryValue);
        body.append('brand', brandValue);
        body.append('price', priceValue);
        body.append('size', JSON.stringify(sizeValue));
        body.append('color', JSON.stringify(colorValue));
        body.append('quantity', quantityValue);
        body.append('description', descriptionValue);

       createProduct(body);
    }

    useEffect(() => {
        getListBrand();
        getListCategory();

    }, [])

    return (
        <Spin spinning={product.creating} delay={500} tip="Creating...">
            <div className="product-add-page">
                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>

                <Content className="body-page">
                    <Row>
                        <Col span={4} className="container-side-nav">
                            <SideNav selectDefault="4" />
                        </Col>

                        <Col span={20} className="container-content">
                            <HeaderSeller namePage="Products/Add" />

                            <Row className="container-props">
                                <Form onSubmit={handleFormSubmit} encType="multipart/form-data">
                                    <Form.Item className="container-photos">
                                        <Col className="name-props photos" span={3}><p>PHOTOS</p></Col>
                                        <Col span={20} offset={1}>
                                            <Upload
                                                customRequest={handleUploadFile}
                                                accept=".jpg"
                                                listType="picture-card"
                                                fileList={fileList}
                                                onPreview={handlePreview}
                                                onChange={handleChange}
                                                multiple={true}

                                            >
                                                {fileList.length >= 4 ? null : (
                                                    <div>
                                                        <Icon type="plus" />
                                                        <div className="ant-upload-text">Upload</div>
                                                    </div>
                                                )}
                                            </Upload>

                                            <p className="note">You can add up to 4 photos. The 1st photo will be set as cover (main photo).</p>
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-input">
                                        <Col className="name-props" span={3}><p>NAME</p></Col>
                                        <Col span={20} offset={1}>
                                            <Input
                                                className="input"
                                                placeholder="Enter name product..."
                                                value={nameValue}
                                                name="nameValue"
                                                onChange={handleOnChangeInput}
                                            />
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-select">
                                        <Col className="name-props" span={3}><p>CATEGORIES</p></Col>
                                        <Col span={20} offset={1}>
                                            <Select
                                                className="select"
                                                placeholder="Please select category"
                                                name="categoryValue"
                                                onChange={handleOnSelectCategory}
                                            >
                                                {category.items.map(item => {
                                                    return <Option key={item._id}>{item.name}</Option>;
                                                })}
                                            </Select>
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-select">
                                        <Col className="name-props" span={3}><p>SUB CATEGORIES</p></Col>
                                        <Col span={20} offset={1}>
                                            <Select
                                                className="select"
                                                placeholder="Please select sub category"
                                                name="subCategoryValue"
                                                onChange={handleOnChangeSelectSubCategory}
                                            >
                                                {subCategory.map(item => {
                                                    return <Option key={item._id}>{item.name}</Option>;
                                                })}
                                            </Select>
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-select">
                                        <Col className="name-props" span={3}><p>BRAND</p></Col>
                                        <Col span={20} offset={1}>
                                            <Select
                                                className="select"
                                                placeholder="Please select brand"
                                                name="brandValue"
                                                onChange={handleOnChangeSelectBrand}
                                            >
                                                {brand.items.map(item => {
                                                    return <Option key={item._id}>{item.name}</Option>;
                                                })}
                                            </Select>
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-input">
                                        <Col className="name-props" span={3}><p>PRICE($)</p></Col>
                                        <Col span={20} offset={1}>
                                            <Input className="input"
                                                value={priceValue}
                                                name="priceValue"
                                                placeholder="Enter price product..."
                                                onChange={handleOnChangeInput} />
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-select">
                                        <Col className="name-props" span={3}><p>SIZE</p></Col>
                                        <Col span={20} offset={1}>
                                            <Select
                                                className="select"
                                                mode="multiple"
                                                placeholder="Please select size"
                                                name="sizeValue"
                                                onChange={handleOnChangeSelectMutiSize}
                                            >
                                                {sizes.map((item, index) => {
                                                    return <Option key={index}>{item}</Option>;
                                                })}
                                            </Select>
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-select">
                                        <Col className="name-props" span={3}><p>COLORS</p></Col>
                                        <Col span={20} offset={1}>
                                            <Select
                                                className="select"
                                                mode="multiple"
                                                placeholder="Please select colors"
                                                name="colorValue"
                                                onChange={handleOnChangeSelectMutiColor}
                                            >
                                                {colors.map((item, index) => {
                                                    return <Option key={index}>{item.name}</Option>;
                                                })}
                                                {/* {['Pink', 'Pale yellow', 'Pale blue', 'Orange', 'Pale black']} */}
                                            </Select>
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-input">
                                        <Col className="name-props" span={3}><p>QUANTITY</p></Col>
                                        <Col span={20} offset={1}>
                                            <Input
                                                className="input"
                                                value={1}
                                                name="quantityValue"
                                                value={quantityValue}
                                                placeholder="Enter quantity product..."
                                                onChange={handleOnChangeInput} />
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-text-area">
                                        <Col className="name-props" span={3}><p>DESCRIPTION</p></Col>
                                        <Col span={20} offset={1}>
                                            <TextArea
                                                className="text-area"
                                                rows={4}
                                                value={descriptionValue}
                                                name="decriptionValue"
                                                placeholder="Enter description product..."
                                                onChange={handleOnChangeInput} />
                                        </Col>
                                    </Form.Item>

                                    <Form.Item className="container-btn">
                                        <Col span={4} offset={15}>
                                            <Button className="btn-secondary" type="primary">Cancel</Button>
                                        </Col>
                                        <Col span={4} offset={1}>
                                            <Button
                                                className="btn-primary"
                                                type="primary"
                                                htmlType="submit"
                                            >Complete</Button>
                                        </Col>
                                    </Form.Item>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </div >
        </Spin>
    );
}

export default ProductAdd;