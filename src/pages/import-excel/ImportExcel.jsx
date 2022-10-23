import './importExcel.scss';
import React, { useState, useRef } from 'react';
import { Button, Typography, PageHeader, Modal, Upload, Table, Input, Space, Spin, message } from 'antd';
import { SearchOutlined, InboxOutlined } from '@ant-design/icons';
import { Animation } from '../../components/animation/Animation';
import { ExcelReadFunction } from '../../components/helper/excelRead';

export const ImportExcel = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataExcel, setDataExcel] = useState([]);
    const [columns, setColumns] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const { Paragraph } = Typography;
    const { Dragger } = Upload;
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
        confirm();
    };
    const handleReset = (clearFilters, confirm) => {
        clearFilters();
        setSearchText('');
        setSearchedColumn('');
        confirm();
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Buscar ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Buscar
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Resetear
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const props = {
        name: "file",
        multiple: true,
        accept: ".xlsx",
        maxCount: 1,
        beforeUpload: (file) => {
            return false;
        },
        onChange(info) {
            setLoading(true);
            // message.config({
            //     top: 80,
            // });
            // if (info["fileList"].length > excelUpload.length) {
            //     message.success(`${info.file.name} se ha seleccionado para cargar.`);
            // }
            // if (info["fileList"].length < excelUpload.length) {
            //     message.success(`${info.file.name} se ha quitado correctamente.`);
            // }
            ExcelReadFunction(info["file"]).then((response) => {
                let columnsInsert = [];
                let itemObject = response[0]['data'][0];
                for (const key of Object.keys(itemObject)) {
                    columnsInsert.push({
                        title: key,
                        dataIndex: key,
                        sorter: (a, b) => (isNaN(a[key]) && isNaN(b[key]) ? (a[key] || '').localeCompare(b[key] || '') : a[key] - b[key]),
                        ...getColumnSearchProps(key),
                    });
                };
                message.success('Se ha cargado correctamente', 2);
                setColumns(columnsInsert);
                setDataExcel(response[0]['data']);
                setModalVisible(false);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                message.error('Ha ocurrido un error al cargar', 2);
            });
        },
    };
    return (
        <Animation>
            <Spin spinning={loading} tip="Cargando...">
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        title="Importar excel"
                        extra={[
                            <Button key="3" type="primary" onClick={() => setModalVisible(!modalVisible)}>Cargar</Button>,
                            <Button key="2">Reestablecer</Button>,
                        ]}
                    >
                        <Paragraph>
                            Importar un excel para asi procesarla y verla en la tabla.
                        </Paragraph>
                    </PageHeader>
                </div>
                <Table
                    rowKey={record => JSON.stringify(record)}
                    size='small'
                    bordered={true}
                    columns={columns}
                    scroll={{ x: 2000 }}
                    dataSource={dataExcel}
                />
                <Modal
                    open={modalVisible}
                    onCancel={(e) => setModalVisible(false)}
                    title="Cargar archivos excel"
                    footer={[
                        <Button key="back" onClick={(e) => setModalVisible(false)}>
                            Cerrar
                        </Button>,
                    ]}
                >
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Haga clic o arrastre el archivo a esta área para cargarlo
                        </p>
                    </Dragger>
                </Modal>

            </Spin>
        </Animation>
    )
}