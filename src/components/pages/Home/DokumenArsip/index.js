import React from 'react'
import { Card, Col, Dropdown, Table, Button, Menu } from 'antd';
import { DownOutlined, UnorderedListOutlined } from '@ant-design/icons';

import { FilterMenu, LayoutButton } from './style';

const dataDokumenArsip = [
  {
    key: 1,
    nama_dokumen: "dokumen1",
    tgl_dokumen: "2020-12-21",
  },
  {
    key: 2,
    nama_dokumen: "dokumen2",
    tgl_dokumen: "2020-12-21",
  },
  {
    key: 3,
    nama_dokumen: "dokumen3",
    tgl_dokumen: "2018-01-12",
  },
  {
    key: 4,
    nama_dokumen: "dokumen4",
    tgl_dokumen: "2012-04-20",

  },
  {
    key: 5,
    nama_dokumen: "dokumen5",
    tgl_dokumen: "2020-12-21",
  }
]

const DokumenArsip = () => {

  const columnDokumenArsip = [
    {
      title: "No.",
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: "Nama Dokumen",
      dataIndex: 'nama_dokumen',
      key: 'nama_dokumen'
    },
    {
      title: "Tgl Dokumen",
      dataIndex: 'tgl_dokumen',
      key: 'tgl_dokumen'
    },
  ];

  const menuFilterDokumenArsip = (
    <Menu>
      <Menu.Item key="1">
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <Col span={12}>
      <Card
        title="Dokumen Arsip"
      >
        <FilterMenu>
          <Dropdown overlay={menuFilterDokumenArsip}>
            <Button>
              Filter Dokumen Arsip <DownOutlined />
            </Button>
          </Dropdown>
        </FilterMenu>
        <Table
          dataSource={dataDokumenArsip}
          columns={columnDokumenArsip}
          pagination={false}
          bordered={true}
          size={"small"}
        />
        <LayoutButton>
          <Button shape={"round"} type={"primary"}>
            <UnorderedListOutlined /> detail
          </Button>
        </LayoutButton>
      </Card>
    </Col>
  )
}

export default DokumenArsip
