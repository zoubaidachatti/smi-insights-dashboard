import {
  SalesByCategory,
  SalesByCountry,
  SalesByGifting,
  SalesByInfluencers,
  SalesByOS,
  SalesByPartOfDay,
  SalesByProduct,
} from "../../Data/salesData";
import "../../styles/analysis.css";
import BarsChart from "../charts/BarsChart";
import PChart from "../charts/PChart";
import PieLegend from "../charts/PieLegend";
const Analysis = () => {
  return (
    <div className="analysis">
      <div className="title"> In-Depth Analysts</div>
      <div className="analysis-content">
        <div className="left-analysis">
          <div className="analysis-title">
            <h4>Sales by part of the day</h4>
            <p>see more</p>
          </div>
          <div className="pie-comonent">
            <div className="p-chart-container">
              <PChart data={SalesByPartOfDay} />
            </div>
            <PieLegend data={SalesByPartOfDay} />
          </div>
        </div>
        <div className="right-analysis">
          <div className="bar-card">
            <div className="analysis-title">
              <h4>Sales by OS</h4>
              <p>see more</p>
            </div>
            <div className="b-chart-container">
              <BarsChart data={SalesByOS} />
            </div>
          </div>
          <div className="bar-card">
            <div className="analysis-title">
              <h4>Sales by Category</h4>
              <p>see more</p>
            </div>
            <div className="b-chart-container">
              <BarsChart data={SalesByCategory} />
            </div>
          </div>
        </div>
      </div>
      {/* ************************ */}
      <div className="analysis-content">
        <div className="right-analysis h33">
          <div className="bar-card">
            <div className="analysis-title">
              <h4>Sales by influencers</h4>
              <p>see more</p>
            </div>
            <div className="h-bar-chart">
              <div className="sales-influence">
                <div className="inf-grp">
                  {SalesByInfluencers.map((inf, ind) => {
                    return (
                      <div className="inf-block" key={"inf_" + ind}>
                        <div
                          style={{ backgroundColor: inf.color }}
                          className="inf-img"
                        >
                          <img src={inf.src} alt={inf.title} />
                        </div>
                        <p className="inf-name">{inf.title}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="data-div">
                  {SalesByInfluencers.map((inf, ind) => {
                    return (
                      <div key={ind + "data_inf"}>
                        <div className="percentage-bar">
                          {inf.amount}
                          <div
                            className="percentage"
                            style={{ width: inf.percentage + "%" }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bar-card">
            <div className="analysis-title">
              <h4>Sales by product</h4>
              <p>see more</p>
            </div>
            <div className="h-bar-chart">
              <div className="sales-influence">
                <div className="inf-grp">
                  {SalesByProduct.map((inf, ind) => {
                    return (
                      <div className="inf-block" key={"inf_" + ind}>
                        <div className="inf-img">
                          <img src={inf.src} alt={inf.title} />
                        </div>
                        <p className="inf-name">{inf.title}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="data-div">
                  {SalesByProduct.map((inf, ind) => {
                    return (
                      <div key={ind + "data_inf"}>
                        <div className="percentage-bar">
                          {inf.amount}
                          <div
                            className="percentage"
                            style={{ width: inf.percentage + "%" }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-analysis margin-r left-a">
          <div className="analysis-title">
            <h4>Sales by country</h4>
            <p>see more</p>
          </div>
          {/* **** */}
          <div>
            {" "}
            {SalesByCountry.map((sale, ind) => {
              return (
                <div className="sale-group" key={"salegpc" + ind}>
                  <p className="sale-title">{sale.title}</p>
                  <div
                    className="percentage-line"
                    style={{ backgroundColor: sale.bg }}
                  >
                    <div
                      className="percentage-line-top"
                      style={{
                        backgroundColor: sale.color,
                        width: sale.percentage + "%",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*  */}
          <hr className="line-hr" />
          {/* **** */}
          <div className="analysis-title">
            <h4>Sales by gifting and Paid Compaigns</h4>
            <p>see more</p>
          </div>

          {/*  */}
          <div>
            {SalesByGifting.map((sale, ind) => {
              return (
                <div className="sale-group" key={"salegpc" + ind}>
                  <p className="sale-title">{sale.title}</p>
                  <div
                    className="percentage-line"
                    style={{ backgroundColor: sale.bg }}
                  >
                    <div
                      className="percentage-line-top"
                      style={{
                        backgroundColor: sale.color,
                        width: sale.percentage + "%",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
