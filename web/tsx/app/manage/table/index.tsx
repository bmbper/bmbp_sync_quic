window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<KafkaIndexView/>);
};

const KafkaIndexView = () => {
    return (
        <>
            <div className="bmbp-full">
                <div className="bmbp-body">
                    <KafkaGridView/>
                </div>
            </div>
        </>
    );
}
const KafkaGridView = () => {
    return (<>
        <div className="bmbp-grid">
            <KafkaSearchFormView/>
            <KafkaGridToolView/>
            <KafkaGridTableView/>
            <KafkaGridPageView/>
        </div>
    </>)
}
const KafkaSearchFormView = () => {
    return (<>
        <div className="bmbp-grid-search">
            <arco.Form>
                <arco.Grid.Row guides={[1, 1]}>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="数据库类型" field="msgType">
                            <arco.Select placeholder="请选择数据库类型">
                                <arco.Select.Option key={"mysql"} value={"mysql"}>
                                    Mysql
                                </arco.Select.Option>
                                <arco.Select.Option key={"oracle"} value={"oracle"}>
                                    Oracle
                                </arco.Select.Option>
                                <arco.Select.Option key={"postgres"} value={"postgres"}>
                                    Postgres
                                </arco.Select.Option>
                            </arco.Select>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="表名称" field="connType">
                            <arco.Input placeholder="请输入表名称"/>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="动态表策略" field="msgType">
                            <arco.Select placeholder="请选择动态表策略">
                                <arco.Select.Option key={"0"} value={"0"}>
                                    原表存储
                                </arco.Select.Option>
                                <arco.Select.Option key={"1"} value={"1"}>
                                    按天存储
                                </arco.Select.Option>
                                <arco.Select.Option key={"2"} value={"2"}>
                                    按月存储
                                </arco.Select.Option>
                                <arco.Select.Option key={"3"} value={"3"}>
                                    按年存储
                                </arco.Select.Option>
                            </arco.Select>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="库表状态" field="connStatus">
                            <arco.Select placeholder="库表状态">
                                <arco.Select.Option key={"1"} value={"1"}>
                                    已创建
                                </arco.Select.Option>
                                <arco.Select.Option key={"0"} value={"0"}>
                                    未创建
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

const KafkaGridToolView = () => {
    return (<>
        <div className="bmbp-grid-toolbar">
            <arco.Button type="primary">新增</arco.Button>
            <arco.Button type="primary">批量启用</arco.Button>
            <arco.Button type="primary">批量停用</arco.Button>
            <arco.Button type="primary">批量删除</arco.Button>
        </div>
    </>)
}
const KafkaGridTableView = () => {
    const data = [{}];
    const columns = [
        {
            title: '数据库类型',
            dataIndex: 'middleType',
            width: 120
        },
        {
            title: '数据库名称',
            dataIndex: 'database',
            width: 120
        },
        {
            title: '库表描述',
            dataIndex: 'tableDesc',
        },
        {
            title: '基础表名称',
            dataIndex: 'tableName',
            width: 120
        },
        {
            title: '动态表策略',
            dataIndex: 'dynamicTable',
        },
        {
            title: '最新表名称',
            dataIndex: 'dynamicTable',
        },
        {
            title: '动态表数量',
            dataIndex: 'dynamicTable',
        },
        {
            title: '总数据量',
            dataIndex: 'dynamicTable',
        },
        {
            title: '操作',
            dataIndex: 'apikey',
            align: 'center',
            width: 240,
            render: (col, record, index) => {
                return (<div className={"bmbp-grid-table-action"}>
                    <arco.Button type="primary" icon={<arcoicon.IconEdit/>}></arco.Button>
                    <arco.Button type="primary" icon={<arcoicon.IconEye/>}></arco.Button>
                    <arco.Button type="primary" status="danger" icon={<arcoicon.IconDelete/>}></arco.Button>
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

const KafkaGridPageView = () => {
    return (
        <>
            <div className="bmbp-grid-pagination">
                <arco.Pagination disabled showTotal total={200} showJumper sizeCanChange/>
            </div>
        </>
    )
}
