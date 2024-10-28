window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<DataSourceIndexView/>);
};

const DataSourceIndexView = () => {
    return (
        <>
            <div className="bmbp-full">
                <div className="bmbp-body">
                    <DataSourceGridView/>
                </div>
            </div>
        </>
    );
}
const DataSourceGridView = () => {
    return (<>
        <div className="bmbp-grid">
            <DataSourceSearchFormView/>
            <DataSourceGridToolView/>
            <DataSourceGridTableView/>
            <DataSourceGridPageView/>
        </div>
    </>)
}
const DataSourceSearchFormView = () => {
    return (<>
        <div className="bmbp-grid-search">
            <arco.Form>
                <arco.Grid.Row guides={[1, 1]}>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="数据源类型" field="msgType">
                            <arco.Select placeholder="请选择状态">
                                <arco.Select.Option key={"oracle"} value={"oracle"}>
                                    Oracle
                                </arco.Select.Option>
                                <arco.Select.Option key={"mysql"} value={"mysql"}>
                                    MySQL
                                </arco.Select.Option>
                                <arco.Select.Option key={"postgresql"} value={"postgresql"}>
                                    Postgresql
                                </arco.Select.Option>
                                <arco.Select.Option key={"mariadb"} value={"mariadb"}>
                                    Mariadb
                                </arco.Select.Option>
                            </arco.Select>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="主机" field="host">
                            <arco.Input placeholder="请输入主机地址"/>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="端口" field="port">
                            <arco.Input placeholder="请输入端口"/>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="连接状态" field="connStatus">
                            <arco.Select placeholder="连接状态">
                                <arco.Select.Option key={"1"} value={"1"}>
                                    已连接
                                </arco.Select.Option>
                                <arco.Select.Option key={"0"} value={"0"}>
                                    未连接
                                </arco.Select.Option>
                            </arco.Select>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="数据状态" field="dataStatus">
                            <arco.Select placeholder="请选择数据状态">
                                <arco.Select.Option key={"1"} value={"1"}>
                                    已启用
                                </arco.Select.Option>
                                <arco.Select.Option key={"0"} value={"0"}>
                                    未启用
                                </arco.Select.Option>
                            </arco.Select>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={3}>
                        <arco.Form.Item>
                            <arco.Space>
                                <arco.Button
                                    type="primary"
                                    style={{marginLeft: "8px"}}
                                    onClick={() => {

                                    }}
                                >
                                    查询
                                </arco.Button>
                                <arco.Button
                                    onClick={() => {

                                    }}
                                >
                                    清空
                                </arco.Button>
                            </arco.Space>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                </arco.Grid.Row>
                <arco.Divider style={{margin: "0px 0 4px 0 "}}/>
            </arco.Form>
        </div>
    </>)
}

const DataSourceGridToolView = () => {
    return (<>
        <div className="bmbp-grid-toolbar">
            <arco.Button type="primary">新增</arco.Button>
            <arco.Button type="primary">批量启用</arco.Button>
            <arco.Button type="primary">批量停用</arco.Button>
            <arco.Button type="primary">批量删除</arco.Button>
        </div>
    </>)
}
const DataSourceGridTableView = () => {
    const data = [{}];
    const columns = [
        {
            title: '数据库类型',
            dataIndex: 'databaseType',
            width: 120
        },
        {
            title: '主机',
            dataIndex: 'host',
            width: 120
        },
        {
            width: 120,
            title: '端口',
            dataIndex: 'port',
        },
        {
            title: '数据库',
            dataIndex: 'database',
            width: 120
        },
        {
            title: '模式',
            dataIndex: 'schema',
        },
        {
            title: '用户名',
            dataIndex: 'username',
        },
        {
            title: 'TLS',
            dataIndex: 'tls',
        },
        {
            title: '连接状态',
            dataIndex: 'connStatus',
        },
        {
            title: '操作',
            dataIndex: 'apikey',
            align: 'center',
            width: 240,
            render: (col, record, index) => {
                return (<div className={"bmbp-grid-table-action"}>
                    <arco.Button  type="primary" icon={<arcoicon.IconEdit />}></arco.Button>
                    <arco.Button  type="primary" icon={<arcoicon.IconEye />} ></arco.Button>
                    <arco.Button type="primary" status="danger"  icon={<arcoicon.IconDelete />} ></arco.Button>
                </div>)
            },
        },
    ];
    return (<>
        <div className="bmbp-grid-table">
            <arco.Table columns={columns} data={data} pagination={false} border borderCell stripe/>
        </div>
    </>)
}

const DataSourceGridPageView = () => {
    return (
        <>
            <div className="bmbp-grid-pagination">
                <arco.Pagination disabled showTotal total={200} showJumper sizeCanChange/>
            </div>
        </>
    )
}
