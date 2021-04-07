import '../Common'
import Header from '../Header';
import '../../styles/Home/main.scss';
import '../../styles/Cart/main.scss';
import React, { useState } from 'react';


function Cart() {

  const [count, setCount] = useState(1);

  let [price,setPrice] =useState(799), [charge,setCharge]=useState(129)

  const countAction = (countL) => {
    if(!(count===1 && countL===-1)){
      const countLc = count+countL;
      setCount(countLc)
      
      setTimeout(
        () => {
              const chargeLc = countLc > 1 ? 0 : 129; setCharge(chargeLc);
              setTimeout( ()=>{ 
                              const priceLc = chargeLc + (799*countLc);  setPrice(priceLc) } 
                              ,10) }
        ,10)
      
    }
  }

  const proceed = () => {
    window.location.href = "/";
  }



  return (
    <div>
      <Header/>
     <div>  
        <div className="pb-5"></div>
        <div className="checkout-layout">
          <div className="checkout-container">
        <div className="cart-left-col">
          <div className="cart-items">
            <div className="  item-body " lastitem>
              <div className="item-image">
                <a href="/p/8351755/jogging-shoes/kalenji-run-100-men-s-running-shoes-grey">
                  <img className="img-fluid" src="https://contents.mediadecathlon.com/p207648/ed152355e8cb224d610830760a3349b9/p207648.jpg?f=150x150" alt="KALENJI RUN 100 MEN'S RUNNING SHOES - GREY" /></a>
              </div>
              <div className="right-content">
                <div className="right-top">
                  <div className="item-content">
                  <p>KALENJI RUN 100 MEN'S RUNNING SHOES - GREY</p>
                  <div className="item-ratings-size">
                  <div className="rating-box">4.14
                    <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4zMTYiIGhlaWdodD0iMjMuMTI2IiB2aWV3Qm94PSIwIDAgMjQuMzE2IDIzLjEyNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZkYjY1ZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMi4xNTgsMS4zMThsMy43NTcsNy42MTMsOC40LDEuMjIxLTYuMDc5LDUuOTI1LDEuNDM1LDguMzY3LTcuNTE0LTMuOTUtNy41MTQsMy45NSwxLjQzNS04LjM2N0wwLDEwLjE1Miw4LjQsOC45MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xLjMxOCkiLz48L3N2Zz4=" alt="Ratings" />
                    </span>
                  </div>
                  <div className="item-size">
                    Size: <strong>UK 7 - EU 41</strong>
                  </div>
                </div>
                </div>
                <div className="delete-btn ml-auto">
                  <button className=" btn-grey-lite-4 btn-sm  btn" type="button">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMy43MjciIGhlaWdodD0iMTkuMjE4IiB2aWV3Qm94PSIwIDAgMTMuNzI3IDE5LjIxOCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQyNDU1MztvcGFjaXR5OjAuNTt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0uNjg3LDE5LjIxOEEuNjg2LjY4NiwwLDAsMSwwLDE4LjUzMlY2LjE3OGEuNjg2LjY4NiwwLDEsMSwxLjM3MywwVjE3Ljg0NUgxMi4zNTRWNi4xNzhhLjY4Ni42ODYsMCwxLDEsMS4zNzIsMFYxOC41MzJhLjY4Ni42ODYsMCwwLDEtLjY4Ni42ODZabTIuNzQ1LTQuOFY3LjU1YS42ODYuNjg2LDAsMSwxLDEuMzczLDB2Ni44NjNhLjY4Ni42ODYsMCwxLDEtMS4zNzMsMFptMi43NDYtMS4zNzNWNy41NWEuNjg2LjY4NiwwLDEsMSwxLjM3MiwwdjUuNDkxYS42ODYuNjg2LDAsMCwxLTEuMzcyLDBabTIuNzQ1LTEuMzczVjcuNTVhLjY4Ni42ODYsMCwxLDEsMS4zNzMsMHY0LjExOGEuNjg2LjY4NiwwLDAsMS0xLjM3MywwWm0tLjY4Ny03LjU1SC42ODdhLjY4Ny42ODcsMCwxLDEsMC0xLjM3M0g0LjhWLjY4N0EuNjg3LjY4NywwLDAsMSw1LjQ5MSwwSDguMjM2YS42ODYuNjg2LDAsMCwxLC42ODcuNjg3VjIuNzQ1aDQuMTE4YS42ODcuNjg3LDAsMCwxLDAsMS4zNzNaTTYuMTc4LDIuNzQ1SDcuNTVWMS4zNzNINi4xNzhaIi8+PC9zdmc+" alt="Delete" />
                  </button>
                </div>
              </div>
              <div className="right-down">
                <div className="item-quantity">
                  <div className="qty-btns align-items-center">
                    <div className="mr-3">Qty</div>
                      <button className=" btn-grey-lite-3 btn-sm  btn" type="button" onClick={()=>countAction(-1)}>-</button>
                      <input type="text" className="form-control"  value={count?count:count}/>
                      <button className=" btn-grey-lite-3 btn-sm  btn" type="button" onClick={()=>countAction(1)}>+</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ml-auto">
                    <div className="d-flex align-items-center">
                      <span className="mr-3" />
                        <h4 className="mb-0">
                          <span className="currency">₹</span> {799*count}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-payment">
            <div className="secure d-flex align-items-center">
              <img className="mr-3 img-fluid" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy40MjciIGhlaWdodD0iNDMuODcxIiB2aWV3Qm94PSIwIDAgMzcuNDI3IDQzLjg3MSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2YyNjYwMDtzdHJva2U6I2YyNjYwMDt9LmJ7ZmlsbDojMDA4MWM2O3N0cm9rZTojMDA4MWM2O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTczNy41IC0yNC41KSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc1MCAzNykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIj48cGF0aCBjbGFzcz0iYSIgZD0iTS40MzMsMTkuNzExYS40NTEuNDUxLDAsMCwxLS4yNzctLjFBLjQ2LjQ2LDAsMCwxLDAsMTkuMjc3VjkuNzRhLjQzMy40MzMsMCwwLDEsLjM1NS0uNDMzbDExLjY1Mi0yLjFhLjQ0Mi40NDIsMCwwLDEsLjM1NS4wODcuNDUxLjQ1MSwwLDAsMSwuMTQ3LjMzOHY5LjUzN2EuNDMzLjQzMywwLDAsMS0uMzU1LjQzM0wuNTEyLDE5LjdaTS44NjcsMTAuMDd2OC42N2wxMC43NzctMS45MjVWOC4xNDVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjk1OCkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTMuMzEzLDguMzU4YS40MzMuNDMzLDAsMCwxLS40MzMtLjQzM1YzLjc2M2EzLjc2MywzLjc2MywwLDEsMSw3LjUyNSwwVjYuNjc2YS40NDIuNDQyLDAsMCwxLS40MzMuNDMzLjQzMy40MzMsMCwwLDEtLjQzMy0uNDMzVjMuNzYzYTIuOSwyLjksMCwwLDAtNS43OTIsMFY3LjkyNEEuNDMzLjQzMywwLDAsMSwzLjMxMyw4LjM1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjM4MyAwKSIvPjwvZz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczOCAyNSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMTguMjA5LDQyLjg1OUMxNi4zNTQsNDIuODU5LDAsMzUuNDE4LDAsOC43YS43MzkuNzM5LDAsMCwxLC41NjktLjczOUMuNjk1LDcuOTQ5LDEzLjMsNC45LDE3LjY3Ny4yMTlhLjczOS43MzksMCwwLDEsMS4wNzIsMGM0LjQsNC42OTMsMTcsNy43MywxNy4xMDgsNy43NmEuNzM5LjczOSwwLDAsMSwuNTY5LjczOUMzNi40MjYsMzUuNDE4LDIwLjA3MSw0Mi44NTksMTguMjA5LDQyLjg1OVpNMS40NzgsOS4yNzJDMS43MDcsMzQuMSwxNi41MjQsNDEuMzM3LDE4LjIxNiw0MS4zODFTMzQuNzMzLDM0LjEsMzQuOTQ4LDkuMjcyQzMyLjQ1Nyw4LjYzNiwyMi43LDUuOTA5LDE4LjIwOSwxLjc2MywxMy43MjMsNS45MDksMy45NjgsOC42MzYsMS40NzgsOS4yNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMDExKSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" alt="Security" />
              <div className="secure_content">
              <h6 className="text-uppercase mb-0">100% Secure transaction</h6>
              <p className="mb-0">Secure SSL encryption</p>
            </div>
          </div>
        <div className="cart-payment-icons">
          <div className="payment-icon">
            <img className="img-fluid" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODggNjA0KSIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfMyIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODggLTYwNCkiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzEwIiBkYXRhLW5hbWU9IlBhdGggMTAiIGQ9Ik0xNi4wNiw0LjUyMlYzLjJMMy4wODIsNS42OTFWNy4wMThabTAsMS42NTJMMy4wODIsOC42N3Y3LjI3NWwxMi45NzgtMi41Wk0yLjQzOSw0LjcxMywxNi41LDIuMDFhLjU0MS41NDEsMCwwLDEsLjY0My41MzFWMTMuOWEuNTQxLjU0MSwwLDAsMS0uNDM5LjUzMWwtMTQuMDYsMi43QS41NDEuNTQxLDAsMCwxLDIsMTYuNlY1LjI0NGEuNTQxLjU0MSwwLDAsMSwuNDM5LS41MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODguNSA2MDQuNSkiIGZpbGw9IiMzNzNkNDAiLz4KICA8L2c+Cjwvc3ZnPgo=" alt="Debit" />CREDIT/DEBIT<br />CARD
          </div>
          <div className="payment-icon"><img className="img-fluid" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTggNjAyKSIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfMiIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OTggLTYwMikiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxnIGlkPSJHcm91cF83IiBkYXRhLW5hbWU9Ikdyb3VwIDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5OS4yMDEgNjAzLjgwNikiPgogICAgICA8ZyBpZD0iR3JvdXBfMiIgZGF0YS1uYW1lPSJHcm91cCAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNTIgMC4wMTEpIj4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yIiBkYXRhLW5hbWU9IlBhdGggMiIgZD0iTTkuMzA4LjM1N2ExLDEsMCwwLDEsMS4xMjQsMGw2LjM2Miw0LjNhMS4xNjUsMS4xNjUsMCwwLDEsLjQ1LDEuMjY2LDEuMDY1LDEuMDY1LDAsMCwxLTEuMDEyLjgxM0gzLjUwOUExLjA2NSwxLjA2NSwwLDAsMSwyLjUsNS45MjNhMS4xNjUsMS4xNjUsMCwwLDEsLjQ0OC0xLjI2NVoiIGZpbGw9Im5vbmUiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTkuODcsMS4zMDloMGwtNi4zNjIsNC4zSDE2LjIzMkw5Ljg3LDEuMzA5aDBtMC0xLjEyNmExLDEsMCwwLDEsLjU2Mi4xNzRsNi4zNjIsNC4zYTEuMTQxLDEuMTQxLDAsMCwxLS41NjIsMi4wNzlIMy41MDlhMS4xNDEsMS4xNDEsMCwwLDEtLjU2Mi0yLjA3OUw5LjMwOC4zNTdBMSwxLDAsMCwxLDkuODcuMTgzWiIgZmlsbD0iIzM3M2Q0MCIvPgogICAgICA8L2c+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNNTYuNzg1LDQ4OC43MUg3MS4xMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NC45OTMgLTQ3Mi45MTcpIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNzNkNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzUiIGRhdGEtbmFtZT0iUGF0aCA1IiBkPSJNMCwwSDUuNTA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjEyOCAxMy44OTMpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNzNkNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzYiIGRhdGEtbmFtZT0iUGF0aCA2IiBkPSJNMCwwSDUuNTA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjIyMyAxMy44OTMpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNzNkNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzciIGRhdGEtbmFtZT0iUGF0aCA3IiBkPSJNMCwwSDUuNTA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4zMTkgMTMuODkzKSByb3RhdGUoLTkwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzczZDQwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="Net Banking" />
          NET BANKING</div>
          <div className="payment-icon"><img className="img-fluid" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMyIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MjkgNjA3KSIgZmlsbD0iI2ZmZiIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Ik1hc2tfR3JvdXBfMSIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MjkgLTYwNykiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxnIGlkPSJHcm91cF84IiBkYXRhLW5hbWU9Ikdyb3VwIDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYzNCA2MTApIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfOCIgZGF0YS1uYW1lPSJQYXRoIDgiIGQ9Ik04MjAuMjY1LDg1LjdsMy42LDcuMTUyTDgxNi4zLDEwMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTMuNjkgLTg1LjM5NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM3M2Q0MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzkiIGRhdGEtbmFtZT0iUGF0aCA5IiBkPSJNNzgxLjE3MSw4NS43bDMuNiw3LjE1Mkw3NzcuMiwxMDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzc3LjIgLTg1LjcpIiBmaWxsPSJub25lIiBzdHJva2U9IiMzNzNkNDAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="UPI" />
          UPI</div>
        </div>
      </div>
        <p className="mt-3 text-center mb-xl-0 copyright">© 2020 - Decathlon Sports India</p>
    </div>
    <div className="cart-right-col">
      <div id="order-summary-block" className="order-summary">
        <div className="summary-body"><h5>Order Summary</h5>
        <div className="summary-content">
        <p className="total-products">Total products (Inc GST) 
          <span>
            <span className="currency">₹</span>{799*count}
          </span>
        </p>
        <p className="voucher"> {charge>0? "Estimated Delivery":"Shipping Fee"}
          <span>
            <span className="currency"> {charge>0?"₹ "+charge:"Free"}</span> 
          </span>
        </p>
      </div>
      <div className="total-amount"><h6>Total <span><span className="currency">₹</span> {price}</span></h6>
      </div>
    </div>
  </div>
  <div className="proceed-to-checkout mb-4" onClick={proceed}>
    <button className="btn_ptc btn-yellow-gradient btn-md btn-stretched btn" type="button">
      <span className="mr-2">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4xNTUiIGhlaWdodD0iMjEuNDk5IiB2aWV3Qm94PSIwIDAgMjQuMTU1IDIxLjQ5OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzQyNDQ1Mzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMy40MzEsMTguNWEuODExLjgxMSwwLDAsMS0uNzc1LS41NzZMOS4xODgsNi41NDFBLjgxNC44MTQsMCwwLDEsOS45NjcsNS40OUgyOC43ODVBLjgxMS44MTEsMCwwLDEsMjkuNiw2LjN2OC45MjRhLjgxMS44MTEsMCwwLDEtLjY4Ni44MTFMMTMuNTUzLDE4LjVaTTExLjA2Miw3LjExMywxNCwxNi43NzlsMTMuOTctMi4yNTVWNy4xMTNabTE3LjcyMyw4LjExM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjQ0MSAtMy4yNjMpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMy43ODYsNDQuMDg1YTMuMDQyLDMuMDQyLDAsMSwxLDMuMDM4LTMuMDM4QTMuMDQyLDMuMDQyLDAsMCwxLDIzLjc4Niw0NC4wODVabTAtNC40NjJhMS40MiwxLjQyLDAsMSwwLDEuNDE2LDEuNDIsMS40MiwxLjQyLDAsMCwwLTEuNDE2LTEuNDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMzI4IC0yMi41ODUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00NS43NTYsNDQuMDg1YTMuMDQyLDMuMDQyLDAsMSwxLDMuMDM4LTMuMDM4QTMuMDQyLDMuMDQyLDAsMCwxLDQ1Ljc1Niw0NC4wODVabTAtNC40NjJhMS40MiwxLjQyLDAsMSwwLDEuNDE2LDEuNDIsMS40MiwxLjQyLDAsMCwwLTEuNDE2LTEuNDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUuMzg2IC0yMi41ODUpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik00LjYxOCw0LjE1YS44MTEuODExLDAsMCwxLS43NzEtLjU1NmwtLjU0LTEuNjIzTDEuMTc4LDMuMDIyQS44MTIuODEyLDAsMSwxLC40NTIsMS41N0wzLjQyMi4wODVBLjgxMS44MTEsMCwwLDEsNC41NTMuNTU2bC44MzYsMi41MzFBLjgxMS44MTEsMCwwLDEsNC42MTgsNC4xNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjAwMyAwKSIvPjwvZz48L3N2Zz4=" alt="Cart icon" /></span>
        PROCEED TO CHECKOUT
    </button>
  </div>
  <div className="cart-promise">
    <ul>
      <li style={{display: 'none'}}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Ni43ODkiIGhlaWdodD0iNTYuMTI4IiB2aWV3Qm94PSIwIDAgNTYuNzg5IDU2LjEyOCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2U3ZjNmOTt9LmJ7ZmlsbDojZjhmOWY5O30uY3tmaWxsOiMzNzNkNDA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDQuMDk2IC0xMjguNzMpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDQuMDk2IDEyOC43MykiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMjguNjg1IiBoZWlnaHQ9IjUxLjMzIiByeD0iOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODUsIC0wLjE3NCwgMC4xNzQsIDAuOTg1LCAwLCA0Ljk4MSkiLz48cmVjdCBjbGFzcz0iYiIgd2lkdGg9IjI4LjY4NSIgaGVpZ2h0PSI1MS4zMyIgcng9IjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTg1LCAwLjE3NCwgLTAuMTc0LCAwLjk4NSwgMjguNTQsIDAuNTk3KSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTQuMTQ2IDEzOC40OCkiPjxwYXRoIGNsYXNzPSJjIiBkPSJNMy43NjgsMTAuMjU2Yy44NzYtLjEyNiwxMy41ODktMi41NjgsMTcuNzc2LTMuMzc3djYuMzlhLjY2LjY2LDAsMCwwLC42NjQuNjY0LjcuNywwLDAsMCwuMzg1LS4xMjZsMTEuODUtOC40NjZhLjY2NC42NjQsMCwwLDAtLjE2Ni0xLjE2OEwyMi40MjYuMDMxYS42NjQuNjY0LDAsMCwwLS44ODIuNjN2NC44N2gtLjA3M2MtOC4yLDEuNTc5LTE3LjIwNSwzLjMxOC0xNy45MTUsMy40QTMuOTgxLDMuOTgxLDAsMCwwLDAsMTIuOTgzVjMwLjM5NEgxLjMyNlYxMi45ODNhMi42OTQsMi42OTQsMCwwLDEsMi40NDItMi43MjdabTE5LjEtOC42MjZMMzIuNjMxLDVsLTkuNzYsNi45NzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMiAwLjAwNikiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTM1LjY2NSwxMi4xOVYyOS42YTIuNzA3LDIuNzA3LDAsMCwxLTIuNDQyLDIuNzI3Yy0xLjEyOC4xNTktMTMuNzYxLDIuNTk0LTE3Ljc3NiwzLjM3MVYyOS4zMTVhLjY2NC42NjQsMCwwLDAtMS4wNDgtLjUzN2wtMTEuODUsOC41YS42NjUuNjY1LDAsMCwwLC4xNjYsMS4xNjhsMTEuODUsNC4xYS42NjMuNjYzLDAsMCwwLC4yMTkuMDQuNjI0LjYyNCwwLDAsMCwuMzg1LS4xMjYuNjY0LjY2NCwwLDAsMCwuMjc5LS41Mzd2LTQuODdIMTUuNmMzLjktLjc1NiwxNi43MDctMy4yMjUsMTcuODA5LTMuMzg0YTMuOTgxLDMuOTgxLDAsMCwwLDMuNTgzLTQuMDQxVjEyLjE5Wm0tMjEuNTQ0LDI4LjgtOS43Ni0zLjQxLDkuNzYtNi45NzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC43NjMgLTQuMDk4KSIvPjwvZz48L2c+PC9zdmc+" alt="Returns" />
        <p>Easy 90 days return</p>
      </li>
      <li xmlns="http://www.w3.org/1999/xhtml">
        <a href="https://www.decathlon.in/shop/decathlon-return-policy" target="_blank">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NC42IDU4IiBmaWxsPSIjNDI0NTUzIj48cGF0aCBkPSJNNS43IDE1LjVsMjYuOC01VjIwYTEgMSAwIDAgMCAxIDEgMS4xIDEuMSAwIDAgMCAuNi0uMkw1MiA4YTEgMSAwIDAgMC0uMi0xLjhsLTE4LTZhMSAxIDAgMCAwLTEuMyAxbC0uMSA3LjMtMjcgNUE2IDYgMCAwIDAgMCAxOS42djI2LjJoMlYxOS42YTQuMSA0LjEgMCAwIDEgMy43LTQuMXptMjguOC0xM2wxNC43IDVMMzQuNSAxOHptMTggOS43djI2LjJhNC4xIDQuMSAwIDAgMS0zLjcgNC4xbC0yNi44IDVWMzhhMSAxIDAgMCAwLTEuNi0uOEwyLjcgNTBhMSAxIDAgMCAwIC4zIDEuOEwyMSA1OGExIDEgMCAwIDAgLjMuMS45LjkgMCAwIDAgLjYtLjIgMSAxIDAgMCAwIC40LS44di03LjNoLjJsMjYuOC01YTYgNiAwIDAgMCA1LjQtNi4xVjEyLjJ6TTIwIDU1LjZsLTE0LjctNUwyMCA0MHoiLz48L3N2Zz4=" alt="Returns" />
          <p>Easy 90 days return</p>
        </a>
      </li>
      <li style={{display: 'none'}}>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Ni44IDU2LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2LjggNTYuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFN0YzRjk7fQoJLnN0MXtmaWxsOiNGOEY5Rjk7fQoJLnN0MntmaWxsOiMzNzNENDA7fQo8L3N0eWxlPgo8ZyBpZD0iR3JvdXBfOTM4OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5NS41MjkgLTEyNy41MTIpIj4KCTxnIGlkPSJHcm91cF85MzIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTUuNTI5IDEyNy41MTIpIj4KCQk8cGF0aCBpZD0iUmVjdGFuZ2xlXzQ5ODciIGNsYXNzPSJzdDAiIGQ9Ik03LjksMy42bDEyLjUtMi4yYzQuNC0wLjgsOC41LDIuMSw5LjMsNi41bDYuMSwzNC44YzAuOCw0LjQtMi4xLDguNS02LjUsOS4zbC0xMi41LDIuMgoJCQljLTQuNCwwLjgtOC41LTIuMS05LjMtNi41TDEuNCwxMi45QzAuNiw4LjUsMy41LDQuNCw3LjksMy42eiIvPgoJCTxwYXRoIGlkPSJQYXRoXzE5NjMwIiBjbGFzcz0ic3QxIiBkPSJNMzMuMywxLjRMNTIsNC43YzIuNiwwLjUsNC40LDMsNCw1LjZsMCwwbC03LjIsNDFjLTAuNSwyLjYtMyw0LjQtNS42LDRMMjQuNCw1MgoJCQljLTIuNi0wLjUtNC40LTMtNC01LjZsNy4yLTQxQzI4LjIsMi43LDMwLjcsMSwzMy4zLDEuNEMzMy4zLDEuNCwzMy4zLDEuNCwzMy4zLDEuNHoiLz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNDUuOCwxNTguNUMyNDUuOCwxNTguNSwyNDUuOCwxNTguNSwyNDUuOCwxNTguNWwwLTkuMWMwLTAuMy0wLjEtMC41LTAuNC0wLjdsLTkuNy01LjUKCQljLTAuMS0wLjEtMC4zLTAuMS0wLjUtMC4xbC01LjMsMC44di01LjdjMC0wLjItMC4xLTAuNC0wLjMtMC42Yy0wLjItMC4xLTAuNC0wLjItMC42LTAuMmwtMjUuNiw0LjRjLTAuNCwwLjEtMC42LDAuNC0wLjYsMC43djIyLjkKCQljMCwwLjIsMC4xLDAuNCwwLjMsMC42YzAuMSwwLjIsMC40LDAuMywwLjYsMC4zYzAsMCwwLjEsMCwwLjEsMGw0LjYtMC44YzAuNywxLjksMi42LDMuMyw0LjgsMy4zYzIuOCwwLDUuMS0yLjMsNS4yLTUuMWwxMy45LTIuNQoJCWMwLjgsMS44LDIuNiwzLjEsNC43LDMuMWMyLjgsMCw1LTIuMiw1LjEtNC45bDIuOS0wLjVjMCwwLDAsMCwwLjEsMGMwLjEsMCwwLjEsMCwwLjItMC4xYzAsMCwwLjEsMCwwLjEtMC4xYzAsMCwwLjEtMC4xLDAuMS0wLjEKCQljMCwwLDAtMC4xLDAuMS0wLjFjMCwwLDAtMC4xLDAuMS0wLjFDMjQ1LjgsMTU4LjYsMjQ1LjgsMTU4LjYsMjQ1LjgsMTU4LjV6IE0yMjguNCwxMzkuMXY1Ljd2Ni40bC0yNC4xLDQuMnYtMTIuMkwyMjguNCwxMzkuMXoKCQkgTTIwNC40LDE2NC44VjE1N2wyNC4xLTQuMnY3LjhsLTEwLjIsMS44Yy0wLjYtMi4xLTIuNi0zLjctNC45LTMuN2MtMi44LDAtNS4yLDIuMy01LjIsNS4yYzAsMC4xLDAsMC4yLDAsMC4zTDIwNC40LDE2NC44egoJCSBNMjEzLjMsMTY3LjVjLTIsMC0zLjctMS42LTMuNy0zLjdzMS42LTMuNywzLjctMy43czMuNywxLjYsMy43LDMuN1MyMTUuMywxNjcuNSwyMTMuMywxNjcuNXogTTIyOS45LDE2MC4zdi0xNC45bDUuMy0wLjhsOS4xLDUuMgoJCXY3LjlsLTIuMiwwLjRjLTAuNi0yLjMtMi42LTMuOS01LTMuOWMtMi44LDAtNS4yLDIuMy01LjIsNS4yYzAsMC4yLDAsMC40LDAuMSwwLjZMMjI5LjksMTYwLjN6IE0yMzcuMSwxNjMuMWMtMiwwLTMuNy0xLjYtMy43LTMuNwoJCXMxLjYtMy43LDMuNy0zLjdzMy43LDEuNiwzLjcsMy43UzIzOS4xLDE2My4xLDIzNy4xLDE2My4xeiIvPgo8L2c+Cjwvc3ZnPgo=" alt="Returns" /><p>
          Home Delivery at Your Doorstep</p>
      </li>
      <li xmlns="http://www.w3.org/1999/xhtml">
        <a href="https://www.decathlon.in/shop/decathlon-delivery">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OS4yOSA1Ny45OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0MjQ1NTM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyM2FjY2VzczwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkNhbHF1ZV8yIiBkYXRhLW5hbWU9IkNhbHF1ZSAyIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNC42NCw1OEMyMi4xMyw1OCwwLDQ3LjkzLDAsMTEuNzdhMSwxLDAsMCwxLC43Ny0xQy45NCwxMC43NiwxOCw2LjY0LDIzLjkyLjNhMSwxLDAsMCwxLDEuNDUsMGM1Ljk1LDYuMzQsMjMsMTAuNDYsMjMuMTUsMTAuNWExLDEsMCwwLDEsLjc3LDFDNDkuMjksNDcuOTMsMjcuMTYsNTgsMjQuNjQsNThaTTIsMTIuNTVDMi4zMSw0Ni4xNSwyMi4zNiw1NS45NCwyNC42NSw1NlM0Nyw0Ni4xNSw0Ny4yOSwxMi41NUM0My45MiwxMS42OSwzMC43Miw4LDI0LjY0LDIuMzksMTguNTcsOCw1LjM3LDExLjY5LDIsMTIuNTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjIuODEsMzUuNDFoMGExLDEsMCwwLDEtLjctLjNsLTYuODQtNi44NGExLDEsMCwxLDEsMS40MS0xLjQxTDIyLjgxLDMzLDM1LjcsMjAuMTFhMSwxLDAsMCwxLDEuNDIsMCwxLDEsMCwwLDEsMCwxLjQxTDIzLjUyLDM1LjExQTEsMSwwLDAsMSwyMi44MSwzNS40MVoiLz48L2c+PC9nPjwvc3ZnPg==" alt="Returns" />
          <p>Home Delivery at Your Doorstep</p>
        </a>
      </li>
      <li style={{display: 'none'}}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1Ni43ODkiIGhlaWdodD0iNTYuMTI4IiB2aWV3Qm94PSIwIDAgNTYuNzg5IDU2LjEyOCI+CiAgPGcgaWQ9Ikdyb3VwXzkzODgiIGRhdGEtbmFtZT0iR3JvdXAgOTM4OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwLjYxNiAtMTI3LjUxMikiPgogICAgPGcgaWQ9Ikdyb3VwXzkzMjIiIGRhdGEtbmFtZT0iR3JvdXAgOTMyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAuNjE2IDEyNy41MTIpIj4KICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV80OTg3IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSA0OTg3IiBkPSJNOCwwSDIwLjY4NWE4LDgsMCwwLDEsOCw4VjUxLjMzYTAsMCwwLDAsMSwwLDBIOGE4LDgsMCwwLDEtOC04VjhBOCw4LDAsMCwxLDgsMFoiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTg1LCAtMC4xNzQsIDAuMTc0LCAwLjk4NSwgMCwgNC45ODEpIiBmaWxsPSIjZTdmM2Y5Ii8+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfNDk4OCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgNDk4OCIgd2lkdGg9IjI4LjY4NSIgaGVpZ2h0PSI1MS4zMyIgcng9IjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTg1LCAwLjE3NCwgLTAuMTc0LCAwLjk4NSwgMjguNTQsIDAuNTk3KSIgZmlsbD0iI2Y4ZjlmOSIvPgogICAgPC9nPgogICAgPGcgaWQ9IkFzc2V0XzExY2MiIGRhdGEtbmFtZT0iQXNzZXQgMTFjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjMuNDM4IDEzNi44NjYpIj4KICAgICAgPGcgaWQ9IkNhbHF1ZV8yIiBkYXRhLW5hbWU9IkNhbHF1ZSAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTM3IiBkYXRhLW5hbWU9IlBhdGggMjEzNyIgZD0iTTE2LjA2NiwzNy44MTVDMTQuNDMsMzcuODE1LDAsMzEuMjQ4LDAsNy42NzFhLjY1Mi42NTIsMCwwLDEsLjUtLjY1MkMuNjEzLDcuMDEyLDExLjczNyw0LjMyNiwxNS42LjE5MmEuNjUyLjY1MiwwLDAsMSwuOTQ1LDBjMy44OCw0LjE0LDE1LDYuODIsMTUuMDk1LDYuODQ2YS42NTIuNjUyLDAsMCwxLC41LjY1MkMzMi4xMzksMzEuMjQ4LDE3LjcwOSwzNy44MTUsMTYuMDY2LDM3LjgxNVpNMS4zLDguMTc5Yy4yLDIxLjkwOSwxMy4yNzYsMjguMjkyLDE0Ljc2OSwyOC4zMzFTMzAuNjQ2LDMwLjA4OCwzMC44MzUsOC4xNzljLTIuMi0uNTYxLTEwLjgtMi45NjctMTQuNzY5LTYuNjI1QzEyLjEwOCw1LjIxMiwzLjUsNy42MTgsMS4zLDguMTc5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjAxMSkiIGZpbGw9IiMzNzNkNDAiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTM4IiBkYXRhLW5hbWU9IlBhdGggMjEzOCIgZD0iTTIwLjA2NSwyOS45ODNoMGEuNjUyLjY1MiwwLDAsMS0uNDU2LS4ybC00LjQ2LTQuNDZhLjY1Mi42NTIsMCwxLDEsLjkxOS0uOTE5bDQsNCw4LjQtOC40YS42NTIuNjUyLDAsMSwxLC45MjYuOTE5bC04Ljg2OCw4Ljg2MUEuNjUyLjY1MiwwLDAsMSwyMC4wNjUsMjkuOTgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMTkxIC02Ljg4NykiIGZpbGw9IiMzNzNkNDAiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="warranty" />
        <p>Minimum 2 years warranty</p>
      </li>
      <li xmlns="http://www.w3.org/1999/xhtml">
        <a href="https://www.decathlon.in/shop/decathlon-pick-up-in-store">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Ni4xOSA1Ni45NCI+PHBhdGggZD0iTTI4LjE0IDI0LjQzaDIzdjUuNzJoLTIzeiIgZmlsbD0iIzQyNDU1MyIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMi4yIDI1LjgzaDEuN3YuNjRoLS45M3YuNDhoLjh2LjY0aC0uOHYuNTNoLjkzdi42NGgtMS43di0yLjkzeiIvPjxwYXRoIGQ9Ik0zNy4zNiAyNS44MmwtMS4wOCAxLjhhLjkuOSAwIDAgMS0uNzIuNDUuNzYuNzYgMCAwIDEtLjgyLS43OS43OS43OSAwIDAgMSAuNzctLjc5IDEuMjQgMS4yNCAwIDAgMSAuODcuNDZsLjQtLjYyYTEuNjEgMS42MSAwIDAgMC0xLjI1LS41OCAxLjUzIDEuNTMgMCAwIDAtLjE4IDMuMDYgMS42NSAxLjY1IDAgMCAwIDEuMzktLjVoLjd2LjQ0aC43M1YyNS44em0uMDcgMS45SDM3bC40LS42N3ptMS40NyAxLjA1di0yLjI0aC0uNnYtLjdoMS45NHYuN2gtLjZ2Mi4yNGgtLjc2em0zLjA1LTEuMTNoLS43OHYxLjEzaC0uNzZ2LTIuOTVoLjc2djEuMTJoLjc4di0xLjEyaC43NnYyLjk1aC0uNzZ2LTEuMTN6bTEgMS4xM3YtMi45NWguNzZ2Mi4zaC45di42NmgtMS42NXoiLz48cGF0aCBkPSJNNDQuNiAyNi4yYTEuNTcgMS41NyAwIDAgMSAxLjEtLjQzIDEuNTQgMS41NCAwIDAgMSAxLjA3LjQ0IDEuNDggMS40OCAwIDAgMSAuNDYgMS4wOCAxLjUyIDEuNTIgMCAwIDEtMS41NCAxLjU1IDEuNTUgMS41NSAwIDAgMS0xLjA5LTIuNjRtMS4xIDEuOWEuOC44IDAgMSAwLS43OS0uODIuODEuODEgMCAwIDAgLjc5LjgyIi8+PHBhdGggZD0iTTQ3LjE2IDI4Ljc3di0yLjk1aC43TDQ5IDI3LjQ2di0xLjY0aC43NnYyLjk1aC0uNjdsLTEuMTYtMS42NHYxLjY0aC0uNzZ6bS0xNy42MiAwdi0yLjk1aDEuMDZhMS41NiAxLjU2IDAgMCAxIDEuMTYuMzYgMS40MyAxLjQzIDAgMCAxIC40NSAxLjEzIDEuNDIgMS40MiAwIDAgMS0uNDUgMS4wOSAxLjM0IDEuMzQgMCAwIDEtMS4wNi4zN3ptMS45Mi0xLjVhLjc2Ljc2IDAgMCAwLS44Ni0uODJoLS4zdjEuNjZoLjNjLjU4IDAgLjg2LS4yNi44Ni0uODQiLz48L2c+PHBhdGggZD0iTTU1LjIgMTkuNmgtOC4xdi01LjI1YS44OC44OCAwIDAgMCAuMDYtLjI4di0uMDVhLjg0Ljg0IDAgMCAwLS4wNy0uMzV2LS4wNWEuODEuODEgMCAwIDAtLjEtLjE4TDM3IC40YTEgMSAwIDAgMC0uOC0uMzlIMTFhMSAxIDAgMCAwLS44LjM5bC05Ljk1IDEzYS44MS44MSAwIDAgMC0uMS4xOHYuMDVBLjg0Ljg0IDAgMCAwIDAgMTR2MzUuMjVhMSAxIDAgMCAwIDEgMWgyMS43N2ExLjA3IDEuMDcgMCAwIDAgLjMyLS4wNnY1Ljc1YTEgMSAwIDAgMCAxIDFoLjE4bDMxLjEtNS40YTEgMSAwIDAgMCAuODMtMVYyMC42YTEgMSAwIDAgMC0xLTF6TTM1Ljc0IDJsOC40MyAxMUgyNC42VjJ6bS0yNC4zIDBIMjIuNnYxMUgzek0yNC4xIDE5LjZhMSAxIDAgMCAwLTEgMXYyNy43YS44My44MyAwIDAgMC0uMzItLjA3SDJWMTVoNDMuMXY0LjZ6bTE5LjUgMzEuOTNsLTcuOSAxLjM4VjQyLjA1aDcuOXptMTAuNi0xLjg0bC04LjYgMS41VjQxLjA1YTEgMSAwIDAgMC0xLTFoLTkuOWExIDEgMCAwIDAtMSAxdjEyLjJsLTguNiAxLjVWMjEuNmgyOS4xeiIgZmlsbD0iIzQyNDU1MyIvPjwvc3ZnPg==" alt="Returns" />
          <p>Drive through/Free Pickup in Stores</p>
        </a>
        </li>
      </ul>
    </div>
    <div className="cart-voucher">
      <div className=" voucher_btn btn btn-secondary">
        <div className="voucher-label">
          <span className="pr-3">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0Ny45MjkiIGhlaWdodD0iNDcuMzcxIiB2aWV3Qm94PSIwIDAgNDcuOTI5IDQ3LjM3MSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2U3ZjNmOTt9LmJ7ZmlsbDojZjhmOWY5O30uY3tmaWxsOiMzNzNkNDA7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNOCwwaDguMjA5YTgsOCwwLDAsMSw4LDhWNDMuMzIyYTAsMCwwLDAsMSwwLDBIOGE4LDgsMCwwLDEtOC04VjhBOCw4LDAsMCwxLDgsMFoiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTg1LCAtMC4xNzQsIDAuMTc0LCAwLjk4NSwgMCwgNC4yMDQpIi8+PHJlY3QgY2xhc3M9ImIiIHdpZHRoPSIyNC4yMDkiIGhlaWdodD0iNDMuMzIyIiByeD0iOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODUsIDAuMTc0LCAtMC4xNzQsIDAuOTg1LCAyNC4wODcsIDAuNTA0KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjQxNCA4LjEzMikiPjxwYXRoIGNsYXNzPSJjIiBkPSJNNS4zODMsMzIuMTExSDUuMjU0YS41MTcuNTE3LDAsMCwxLS40LS40MzFMMCwzLjk1MWEuNTE3LjUxNywwLDAsMSwuNDMxLS42MTRMMTkuMjkxLDBhLjUzOC41MzgsMCwwLDEsLjYyNC40MzFMMjMuOTg0LDIzLjVhLjU0OS41NDksMCwwLDEtLjEyOS40NjNsLTUuNjczLDYuMjY1YS41NDkuNTQ5LDAsMCwxLS42MTQuMTRsLTguMDItMy40NTVMNS44NTcsMzEuODY0QS41ODEuNTgxLDAsMCwxLDUuMzgzLDMyLjExMVptLTQuMjItMjcuOEw1LjczOCwzMC4yNDlsMy4yMjktNC4zMDZhLjU0OS41NDksMCwwLDEsLjYxNC0uMTA4bDguMDYzLDMuNDU1TDIyLjg3NSwyMy41LDE4Ljk0NiwxLjE2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMC4wMDgpIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik02LjY2MiwxMC43MzdhMy44MjEsMy44MjEsMCwwLDEsLjcxLTIuMjkzQTIuOCwyLjgsMCwwLDEsOS4xODEsNy4zYTEuODMsMS44MywwLDAsMSwxLjc2NS41NkEyLjY5MSwyLjY5MSwwLDAsMSwxMS42LDkuODU0di43NjRhMy45NTEsMy45NTEsMCwwLDEtLjcxLDIuMjcxLDIuOCwyLjgsMCwwLDEtMS44NDEsMS4xNDFBMS44NzMsMS44NzMsMCwwLDEsNy4zLDEzLjQzOWEyLjY3LDIuNjcsMCwwLDEtLjY1Ny0xLjk4MVpNOCwxMS4yODZhMi4yODIsMi4yODIsMCwwLDAsLjI1OCwxLjIzOC43NzUuNzc1LDAsMCwwLC44NS4zNDQsMS4yLDEuMiwwLDAsMCwuODI5LS42NjcsMi45MzksMi45MzksMCwwLDAsLjMyMy0xLjM0NnYtLjc2NGEyLjQsMi40LDAsMCwwLS4yNjktMS4yMzhBLjc1NC43NTQsMCwwLDAsOS4xODEsOC41YTEuMjE2LDEuMjE2LDAsMCwwLS44MjkuNjM1LDIuODc0LDIuODc0LDAsMCwwLS4zNDQsMS4zMTNabTEuMzM1LDkuNTI3LS45OC0uNDUyLDUuNzU5LTEyLjMuOTU4LjQ1MlpNMTIuMTYzLDE3LjlhMy45MjksMy45MjksMCwwLDEsLjcxLTIuMywyLjc1NiwyLjc1NiwwLDAsMSwxLjg1MS0xLjE0MUExLjgwOCwxLjgwOCwwLDAsMSwxNi40OSwxNWEyLjY5MSwyLjY5MSwwLDAsMSwuNjU3LDEuOTkxdi43NTRhMy45OTQsMy45OTQsMCwwLDEtLjcsMi4yOTMsMi44LDIuOCwwLDAsMS0xLjg4NCwxLjE0MSwxLjg2MiwxLjg2MiwwLDAsMS0xLjc4Ny0uNTQ5LDIuNjQ4LDIuNjQ4LDAsMCwxLS42NTctMS45OTFabTEuMzQ2LjUzOGEyLjA1NiwyLjA1NiwwLDAsMCwuMjgsMS4yMjcuNzY0Ljc2NCwwLDAsMCwuODQuMzU1LDEuMTczLDEuMTczLDAsMCwwLC44MjktLjY2NywyLjg2MywyLjg2MywwLDAsMCwuMzM0LTEuMzI0VjE3LjI2YTIuMjI4LDIuMjI4LDAsMCwwLS4yNjktMS4yMzguNzc1Ljc3NSwwLDAsMC0uODUtLjM1NSwxLjIyNywxLjIyNywwLDAsMC0uODI5LjY3OCwyLjg0MiwyLjg0MiwwLDAsMC0uMzU1LDEuMjgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41MTcgMC41NjMpIi8+PC9nPjwvc3ZnPg==" />
          </span>
        Apply Voucher Code
        </div>
        <div className="coupon" />
          <span className="next-arrow">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi41ODMiIGhlaWdodD0iNy4yMjMiIHZpZXdCb3g9IjAgMCAxMi41ODMgNy4yMjMiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiM0MjQ0NTM7c3Ryb2tlOiM0MjQ0NTM7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMjU5LCAwLjk2NiwgLTAuOTY2LCAwLjI1OSwgMTAuMTIyLCA1LjQzOSkiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTY2LCAwLjI1OSwgLTAuMjU5LCAwLjk2NiwgLTQuMjI2LCAtMy4xMDgpIj48cGF0aCBjbGFzcz0iYSIgZD0iTS4zODMsNi4xM2EuMzg0LjM4NCwwLDAsMS0uMjcxLS42NTVMNS40OTMuMDkyYS4zODQuMzg0LDAsMCwxLC41NDIuNTQyTC42NTQsNi4wMTZBLjM4NC4zODQsMCwwLDEsLjM4Myw2LjEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1LjQwMSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTUuNzY0LDYuMTQ5YS4zODQuMzg0LDAsMCwxLS4yNzEtLjExM0wuMTEyLjY1NEEuMzgzLjM4MywwLDEsMSwuNjU0LjExMkw2LjAzNSw1LjQ5M2EuMzg0LjM4NCwwLDAsMS0uMjcxLjY1NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L2c+PC9nPjwvc3ZnPg==" alt="Next arrow" />
          </span>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
