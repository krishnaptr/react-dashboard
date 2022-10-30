import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.antaranews.com/cache/800x533/2022/04/06/CEFD6235-1BDC-4E22-B0DC-24D970FA09E8.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Septiani Dewi</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Rp 200.000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.antaranews.com/cache/800x533/2022/04/06/CEFD6235-1BDC-4E22-B0DC-24D970FA09E8.jpeg"
              alt=""
              className="widgetLgImg"
            />
             <span className="widgetLgName">Septiani Dewi</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Rp 200.000</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.antaranews.com/cache/800x533/2022/04/06/CEFD6235-1BDC-4E22-B0DC-24D970FA09E8.jpeg"
              alt=""
              className="widgetLgImg"
            />
             <span className="widgetLgName">Septiani Dewi</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Rp 200.000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.antaranews.com/cache/800x533/2022/04/06/CEFD6235-1BDC-4E22-B0DC-24D970FA09E8.jpeg"
              alt=""
              className="widgetLgImg"
            />
             <span className="widgetLgName">Septiani Dewi</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">Rp 200.000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
