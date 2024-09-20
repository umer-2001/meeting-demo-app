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
    <div className="!w-full">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={loading}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default GeneralTable;
