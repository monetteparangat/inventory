import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAccordionButton } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const productLoad = async () => {
        const response = await axios.get('/data.json')
            .then(response => {
                setProducts(response.data.products);
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });

        return response
    }

    useEffect(() => {
        productLoad();
    }, []);

    return (
        <div className="container-products">
            <div className="wrapper-table">
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4}>...loading</td>
                            </tr>
                        ) : (
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))
                        )}

                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Products;