import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { columns } from "../../../../data/management_intercity";

interface Props {
  onAddTicket?: () => void;
}



const IntercityBusTicketSalesListPage: React.FC<Props> = ({ onAddTicket }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/useradmin-all-tripcar", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      });
      const result = await res.json();
      console.log("API result:", result, Array.isArray(result));
      setData(Array.isArray(result) ? result : []);
    } catch (e) {
      setData([]);
      console.error("Fetch error:", e);
    } finally {
      setLoading(false);
    }
  };
  fetchTickets();
}, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2>Danh Sách Vé Xe Liên Tỉnh Đã Đăng Bán</h2>
        {onAddTicket && (
          <Button type="primary" onClick={onAddTicket}>
            Đăng bán vé xe khách
          </Button>
        )}
      </div>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="tripCarId"
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export { IntercityBusTicketSalesListPage };