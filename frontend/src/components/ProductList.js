export const ProductList = ({ products }) => {
    console.log(products)
    return (
        <div>
            {products.map((product) => {
                return (
                    <div>
                        <img src={product.url} alt="product"/>
                        <p>{product.name}</p>
                        <p>{product.artist}</p>
                        <p>{product.price}</p>
                    </div>
                );
            })}
        </div>
    );
};
