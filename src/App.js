import SideNav from "./SideNav";
import "./main.css";
import question from "./assets/svgs/question.svg";
import search from "./assets/svgs/search.svg";
import support from "./assets/svgs/support.svg";
import dropdown from "./assets/svgs/dropdown.svg";
import blackCaretDown from "./assets/svgs/blackCaretDown.svg";
import filter from "./assets/svgs/filter.svg";
import download from "./assets/svgs/download.svg";
import triangleDown from "./assets/svgs/triangleDown.svg";
import info from "./assets/svgs/info.svg";
import left from "./assets/svgs/chevronRight.svg";
import right from "./assets/svgs/chevronLeft.svg";
import { test } from "./constants/test";
import { useEffect, useState } from "react";

function App() {
  const [displayArray, setDisplayArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log({ test });
    if (toggle) {
      setDisplayArray(() => [...test].sort((a, b) => a?.date - b?.date));
    } else {
      setDisplayArray(() => [...test].sort((a, b) => b?.date - a?.date));
    }
  }, [toggle]);

  return (
    <div className="body-container">
      <SideNav />
      <div className="main-container">
        <div className="nav-container">
          <div className="nav-element">
            <div className="payments-container">
              <p className="payments">Payments</p>
              <div className="how-container">
                <img src={question} />
                <p className="how">How it works</p>
              </div>
            </div>
          </div>
          <div className="nav-element">
            <div className="input-container">
              <div className="search-container">
                <img src={search} />
              </div>
              <input
                className="search-input"
                placeholder="Search features, tutorials, etc."
              />
            </div>
          </div>
          <div className="nav-element">
            <div className="support-container">
              <img
                style={{ cursor: "pointer" }}
                src={support}
                width={40}
                height={40}
              />
              <img
                style={{ cursor: "pointer" }}
                src={dropdown}
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
        <div className="details-container">
          <div className="overview-container">
            <p className="overview">Overview</p>
            <div className="select-container">
              <div className="last-month">
                <p>Last Month</p>
                <img src={blackCaretDown} />
              </div>
            </div>
          </div>
          <div className="stats-container">
            <div className="stats">
              <p className="stats-title">Online orders</p>
              <p className="stats-value">231</p>
            </div>
            <div className="stats">
              <p className="stats-title">Amount received</p>
              <p className="stats-value">₹23,92,312.19</p>
            </div>
          </div>
          <p className="transactions">Transactions | This Month</p>
          <div className="table-container">
            <div className="search-sort">
              <div className="search-order-container">
                <img src={search} />
                <input
                  className="search-order"
                  placeholder="Search by order ID..."
                />
              </div>
              <div className="sort-container">
                <div
                  onClick={() => setToggle((prev) => !prev)}
                  className="sort"
                  role="button"
                >
                  <p>Sort</p>
                  <img src={filter} />
                </div>
                <div className="download">
                  <img src={download} />
                </div>
              </div>
            </div>
            <table cellSpacing={0} style={{ width: "100%" }}>
              <tr className="heading-row">
                <th className="left">Order ID</th>
                <th className="left">
                  <div style={{ display: "flex", gap: 4 }}>
                    <p>Order date</p>
                    <img
                      src={triangleDown}
                      style={{ transform: toggle && "rotate(180deg)" }}
                    />
                  </div>
                </th>
                <th className="right">Order amount</th>
                <th className="right">
                  <div
                    style={{
                      display: "flex",
                      gap: 4,
                      justifyContent: "flex-end",
                    }}
                  >
                    <p>Transaction fees</p>
                    <img src={info} />
                  </div>
                </th>
              </tr>
              {displayArray.map((object) => {
                return (
                  <tr className="data-row">
                    <td className="left order-id">{object.order_id}</td>
                    <td className="left others">
                      {object.date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="right others">{object.amount}</td>
                    <td className="right others">
                      {object.quantity.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <div className="pagination-container">
                <div className="previous" role="button">
                  <img src={left} />
                  Previous
                </div>
                <div className="pagination">
                  <div className="pagination-block">1</div>
                  <div className="pagination-block">...</div>
                  <div className="pagination-block active">10</div>
                  <div className="pagination-block">11</div>
                  <div className="pagination-block">12</div>
                  <div className="pagination-block">13</div>
                  <div className="pagination-block">14</div>
                  <div className="pagination-block">15</div>
                  <div className="pagination-block">16</div>
                  <div className="pagination-block">17</div>
                  <div className="pagination-block">18</div>
                </div>
                <div className="next" role="button">
                  Next
                  <img src={right} />
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
