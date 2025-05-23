import React, { useState } from "react";

// Defining types for the order statistics state
type OrderStats = {
  dailyOrder: number;
  weeklyOrder: number;
  monthlyOrder: number;
};

const OrderStatsCard: React.FC = () => {
  // States for order statistics
  const [dailyOrder, setDailyOrder] = useState<number>(0);
  const [weeklyOrder, setWeeklyOrder] = useState<number>(7);
  const [monthlyOrder, setMonthlyOrder] = useState<number>(706);

  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-4 col-12">
      {/* Loading state display */}
      {loading && (
        <div
          className="LoaderDiv_DashboardRestaurantCommonClass"
          style={{
            opacity: 1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2147483647,
            display: "block", // Change from 'none' to 'block' when loading
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              top: 0,
              left: 0,
              width: "100% !important",
              height: "100% !important",
              zIndex: 999999999999999,
              opacity: 0.4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="../../Content/Images/Loader.gif"
              alt="Loading..."
              style={{ backgroundColor: "#ffffff", width: "50px" }}
            />
          </div>
        </div>
      )}

      {/* Order Stats Card */}
      <div className="wraps_dashbords graph_wrapsproduts" style={{ padding: "12px" }}>
        <h3 className="graph_heading">Order Statistics</h3>

        <div className="text_wrap_price mt-5">
          {/* Daily Order */}
          <div className="text_wraps">
            <p className="color_wrap-text">
              <span className="color_spns"></span>
              <span className="order_texts">Daily Order</span>
            </p>
            <p className="order_price" id="dailyOrderValue_OrderStats_Dashboard">
              {dailyOrder}
            </p>
          </div>

          {/* Weekly Order */}
          <div className="text_wraps">
            <p className="color_wrap-text">
              <span className="color_spns yellow"></span>
              <span className="order_texts">Weekly Order</span>
            </p>
            <p className="order_price" id="weeklyOrderValue_OrderStats_Dashboard">
              {weeklyOrder}
            </p>
          </div>

          {/* Monthly Order */}
          <div className="text_wraps">
            <p className="color_wrap-text">
              <span className="color_spns red"></span>
              <span className="order_texts">Monthly Order</span>
            </p>
            <p className="order_price" id="monthlyOrderValue_OrderStats_Dashboard">
              {monthlyOrder}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatsCard;
