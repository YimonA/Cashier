import { BsArrowLeft } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/services/cashierSlice";

const SaleVoucher = () => {
  const nav=useNavigate();
  const dispatch=useDispatch();
  const tax = useSelector((state)=>state.cashierSlice.tax)
  const totalCost = useSelector((state)=>state.cashierSlice.totalCost)
  const taxCost = useSelector((state)=>state.cashierSlice.taxCost)
  const cartItems = useSelector((state)=>state.cashierSlice.cartItems)

  const nextSaleHandler=()=>{
    dispatch(clearCart());
    nav('/');
  }
  const printHandler = (areaId) => {
    var printContent = document.getElementById(areaId).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  };

  return (
    <div className="h-screen min-w-full bg-[--base-color] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-slate-800">
      <div className="container-fluid h-[45px] p-5 flex justify-between items-center bg-[--base-color] text-[--secondary-color] border-2 border-[--border-color]">
        <Link to={'/'}>
        <button className="text-[var(--secondary-color)] text-[14px] font-semibold flex justify-center items-center gap-3">
          <BsArrowLeft size={"1.3rem"} />
          Back
        </button></Link>
      </div>

      <div id="content" className="w-[500px] min-h-[400px] p-10  mx-auto my-5">
        <p className="text-[var(--secondary-color)] text-[27px] font-semibold px-10">
          Receive
        </p>
        {cartItems?.map((v) => {
          return (
            <div
              key={v?.product_id}
              className=" flex justify-between items-center border-b-2 border-[--border-color] px-10 py-5"
            >
              <div>
                <p className="text-[var(--secondary-color)] text-[16px] font-bold">
                  {v?.name}
                </p>
                <p className="text-[var(--gray-color)] text-[14px] font-bold">
                {v?.quantity} Qty / Unit Price {v?.sale_price} Ks
                </p>
              </div>
              <p className="text-[var(--secondary-color)] text-[16px] font-bold">
              {v?.quantity*v?.sale_price}
              </p>
            </div>
          );
        })}

        
        <div className="flex flex-col items-end border-b-2 border-[--border-color] px-10 py-5">
          <p className="text-[var(--secondary-color)] text-[14px] font-bold">
            Cost: {totalCost?.toFixed(2)}
          </p>
          <p className="text-[var(--gray-color)] text-[12px] font-base">
            Tax: {tax?.toFixed(2)}
          </p>
        </div>
        <p className="flex justify-end text-[var(--secondary-color)] text-[14px] font-bold border-b-2 border-[--border-color] px-10 py-5">
          Total: {taxCost?.toFixed(2)}
        </p>
      </div>
      {/* btn */}
      <div className=" h-[40px] flex justify-center gap-3 mb-10">
          <button onClick={nextSaleHandler}
            className={`text-[var(--secondary-color)] px-3 hover:text-[#8AB4F8] active:text-[#8AB4F8] btn-border-table-grid`}
          >
            Next Sale
          </button>
        <button
          className={`text-[#8AB4F8] px-3 hover:text-[#8AB4F8] active:text-[#8AB4F8] btn-border-table-grid`}
          onClick={() => printHandler("content")}
        >
          <BsPrinter />
        </button>
      </div>
    </div>
  );
};

export default SaleVoucher;
