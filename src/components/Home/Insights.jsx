import { InsightsData } from "../../Data/insightsData";
import "../../styles/insights.css";
const Insights = () => {
  return (
    <div className="insights">
      <div className="title">Main insights</div>
      <div className="insights-content">
        <div className="left-insight">
          {InsightsData.map((item, ind) => {
            return (
              <div className="insight-item" key={"insight_item" + ind}>
                <div
                  className="ins-img"
                  style={{ backgroundColor: item.color }}
                >
                  <img src={item.src} alt={item.title} />
                </div>
                <div>
                  <div className="ins-item-title">{item.title}</div>
                  <div className="ins-item-description">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-insight">
          <div className="ins-right-block">
            <div className="top-ins-card instagram-card">
              <div className="instagram-pic">
                <img src="/images/cards icons/instagram.png" alt="instagram" />
              </div>
            </div>
            <div className="bottom-ins-card">
              <div className="card-content">
                <div className="titre">Instagram</div>
                <div className="desc">Most popular social media</div>
              </div>
            </div>
          </div>

          <div className="ins-right-block">
            <div className="top-ins-card girl-smiling">
              <img src="/images/avatars/Image.png" alt="girl" />
            </div>
            <div className="bottom-ins-card">
              <div className="card-content">
                <div className="titre">Idee2look</div>
                <div className="desc">Most popular influencer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
