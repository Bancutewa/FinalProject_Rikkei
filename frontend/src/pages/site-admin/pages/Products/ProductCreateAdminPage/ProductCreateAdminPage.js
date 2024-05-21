import React, { useEffect } from 'react'
import { useState } from 'react';
import DetailProduct from '../../../../site-customer/components/molecules/DetailProduct/DetailProduct';
import { CreateProductsAPI, createProductsAPI, fetchProductsApi } from '../../../../../api/productsAPI';
import './style.css'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../../config/firebaseconfig/firebase.config';
import { fetchCategoriesApi } from '../../../../../api/categoryAPI';

const ProductCreateAdminPage = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    const fetchData = async () => {
        try {
            const fetchedProducts = await fetchProductsApi();
            setProducts(fetchedProducts.data.products);

            const fetchedCategories = await fetchCategoriesApi();
            console.log(fetchedCategories.data.categories.id);
            setCategories(fetchedCategories.data.categories);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Khởi tạo State 
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')

    const [imageFile, setImageFile] = useState(null);



    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };
    // Handle Event
    const onChangeProduct = async () => {
        if (!imageFile) {
            alert("Vui lòng chọn một hình ảnh.");
            return;
        }

        const storageRef = ref(storage, `productImages/${imageFile.name}`);

        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
            },
            (error) => {
                console.error("Error uploading image:", error);
                alert("Đã xảy ra lỗi khi tải lên hình ảnh.");
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setImage(downloadURL);

                const productUpdate = {
                    name: name,
                    price: price,
                    image: downloadURL,
                    description: description,
                    category: category,
                    quantity: quantity
                };

                try {
                    await createProductsAPI(productUpdate);
                    alert(`Đã thêm mới sản phẩm!`);
                } catch {
                    alert(`Không thể thêm sản phẩm`);
                }
            }
        );
    };
    return (
        <main className='content'>


            <div id="form">
                <h3>Chỉnh sửa sản phẩm</h3>
                <input type="hidden" id="ID" />
                <div className="input-group">
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="categorySelect">Danh mục</label>
                    <select id="categorySelect" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">===Chọn Danh Mục===</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="price">Giá cả</label>
                    <input type="text" id="price" placeholder="Giá cả" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="description">Miêu tả</label>
                    <input type="text" id="description" placeholder="Miêu tả" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="quantity">Số lượng còn trong kho</label>
                    <input type="text" id="quantity" placeholder="Số lượng còn trong kho" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="img">Hình ảnh:</label>
                    <input type="file" id="img" onChange={handleImageChange} />
                </div>
                <div className="">
                    <input type="submit" value="Thêm sản phẩm" onClick={onChangeProduct} />
                </div>
            </div>
        </main>
    );
}

export default ProductCreateAdminPage
