import Color from "../../components/Color/Color";
import Header from "../../components/Header/Header";
import "./DetailProduct.css";
const DetailProduct = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="img">
          <img src="https://bizweb.dktcdn.net/thumb/large/100/415/697/products/z3946752659768-27ec2196ece0fe332bf2895e26336de3.jpg?v=1670584956000"></img>
        </div>
        <div className="info">
          <div>Title</div>
          <div>SKU</div>
          <div>350,000₫</div>
          <div>Màu sắc:</div>
          <Color />
        </div>
      </div>
    </>
  );
};
export default DetailProduct;
