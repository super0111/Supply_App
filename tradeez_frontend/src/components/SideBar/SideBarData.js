import Product from "../../assests/images/product.svg";
import quotations from "../../assests/images/quotation.svg";
import Orders from "../../assests/images/order.svg";
import payment from "../../assests/images/payment.svg";
import account from "../../assests/images/account.svg";
export const buyerMenu = [
  {
    icon: <img className="nav_img" src={Product} alt="icon" />,
    iconTitle: "Product",
    to: "product",
  },
  {
    icon: <img className="nav_img" src={quotations} alt="icon" />,
    iconTitle: "Quotations",
    to: "quotations",
  },

  {
    icon: <img className="nav_order" src={Orders} alt="icon" />,
    iconTitle: "Orders",
    to: "orders",
  },
  {
    icon: <img className="nav_img" src={payment} alt="icon" />,
    iconTitle: "Payment",
    to: "payment",
  },
  {
    icon: <img className="nav_img" src={account} alt="icon" />,
    iconTitle: "My account",
    to: "account",
  },
];

export const sellerMenu = [
  {
    icon: <img className="nav_img" src={Product} alt="icon" />,
    iconTitle: "Product",
    to: "seller-products",
  },
  {
    icon: <img className="nav_img" src={quotations} alt="icon" />,
    iconTitle: "Enquires",
    to: "seller-enquires",
  },

  {
    icon: <img className="nav_order" src={Orders} alt="icon" />,
    iconTitle: "Orders",
    to: "seller-orders",
  },
  {
    icon: <img className="nav_img" src={payment} alt="icon" />,
    iconTitle: "Payment",
    to: "seller-payment",
  },
  {
    icon: <img className="nav_img" src={account} alt="icon" />,
    iconTitle: "My account",
    to: "seller-account",
  },
];
