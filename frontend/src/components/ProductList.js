export const ProductList = ({ products }) => {
    console.log(products)
    return (
        <div>
            {products.map((product) => {
                return (
                    <div>
                        <p>{product.name}</p>
                        <p>{product.artist}</p>
                        <p>{product.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
