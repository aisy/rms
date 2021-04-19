import { Button, Space, Table } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import LayoutHome from '../layouts/LayoutHome';

function Warehouse() {

  const dataDokumenArsip = [
    {
      key: 1,
      kode_dokumen: "INV-20210120140023",
      nama_dokumen: "Surat Cinta",
      tgl_dokumen: "2020-12-21",
    },
    {
      key: 2,
      kode_dokumen: "INV-20210120150023",
      nama_dokumen: "Surat Nikah",
      tgl_dokumen: "2020-12-21",
    },
    {
      key: 3,
      kode_dokumen: "INV-20210120160023",
      nama_dokumen: "KTP",
      tgl_dokumen: "2018-01-12",
    },
    {
      key: 4,
      kode_dokumen: "INV-20210120170023",
      nama_dokumen: "SIM",
      tgl_dokumen: "2012-04-20",

    },
    {
      key: 5,
      kode_dokumen: "INV-20210120180023",
      nama_dokumen: "Anpan",
      tgl_dokumen: "2020-12-21",
    }
  ];

  const columnDokumenArsip = [
    {
      title: "No.",
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: "Kode dokumen",
      dataIndex: 'kode_dokumen',
      key: 'kode_dokumen',
      onFilter: (value, record) => record.kode_dokumen.includes(value),
      sorter: (a, b) => a.kode_dokumen.length - b.kode_dokumen.length,
      // sortDirections: ['descend']
    },
    {
      title: "Nama dokumen",
      dataIndex: 'nama_dokumen',
      key: 'nama_dokumen',
      onFilter: (value, record) => record.nama_dokumen.includes(value),
      sorter: (a, b) => a.nama_dokumen.localeCompare(b.nama_dokumen),
      // sortDirections: ['descend']
    },
    {
      title: "Tgl dokumen",
      dataIndex: 'tgl_dokumen',
      key: 'tgl_dokumen'
    },
    {
      title: "Actions",
      render: () => (<ActionButton />)

    }
  ];

  const ActionButton = () => {
    return (
      <Space>
        <Link to={"/"}>
          <Button size={"small"} type={"primary"}>
            <EditFilled style={{ fontSize: 12 }} />
          </Button>
        </Link>
        <Link to={"/"}>
          <Button size={"small"} type={"primary"} danger>
            <DeleteFilled style={{ fontSize: 12 }} />
          </Button>
        </Link>
      </Space>
    );
  }

  return (
    <LayoutHome>
      <Table
        dataSource={dataDokumenArsip}
        columns={columnDokumenArsip}
        size={"small"}
        bordered={"true"}
      />
    </LayoutHome>
  )
}

export default Warehouse
