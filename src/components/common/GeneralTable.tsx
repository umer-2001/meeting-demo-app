import { Table, ConfigProvider } from "antd";
import type { TableProps } from "antd";

const GeneralTable = ({
  columns,
  data,
  loading,
}: {
  columns: TableProps<any>["columns"];
  data: any[];
  loading: boolean;
}) => {
  return (
    <div className="datatable" style={{ overflowX: "auto", width: "100%" }}>
      <Table
        columns={columns}
        dataSource={data}
        // className="datatable"
        pagination={false}
        loading={loading}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default GeneralTable;
