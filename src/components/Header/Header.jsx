import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <Link to="/" className="itemLeftHeader">
          Trang chủ
        </Link>
        <Link to="/products" className="itemLeftHeader">
          Sản phẩm
        </Link>
        <Link to="/cart" className="itemLeftHeader">
          Giỏ hàng
        </Link>
        <Link to="/profile" className="itemLeftHeader">
          Profile
        </Link>
      </div>
      <div className="rightHeader">
        <input
          className="itemRightHeader"
          type="text"
          placeholder="#Tim kiem"
        ></input>
        <FiSearch
          className="itemRightHeader icon"
          style={{ fontSize: "25px", padding: "3 5px" }}
        />
      </div>
    </div>
  );
}
