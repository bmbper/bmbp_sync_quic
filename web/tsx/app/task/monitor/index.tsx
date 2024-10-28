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
                        <arco.Form.Item label="任务名称" field="host">
                            <arco.Input placeholder="请输入任务名称"/>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="主题名称" field="host">
                            <arco.Input placeholder="请输入主题名称"/>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="库表名称" field="host">
                            <arco.Input placeholder="请输入主题名称"/>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="中间件类型" field="msgType">
                            <arco.Select placeholder="请选择状态">
                                <arco.Select.Option key={"kafka"} value={"kafka"}>
                                    KAFKA
                                </arco.Select.Option>
                                <arco.Select.Option key={"activeMq"} value={"activeMq"}>
                                    ActiveMq
                                </arco.Select.Option>
                                <arco.Select.Option key={"rabbitMq"} value={"rabbitMq"}>
                                    RabbitMq
                                </arco.Select.Option>
                                <arco.Select.Option key={"rocketMq"} value={"rocketMq"}>
                                    RocketMq
                                </arco.Select.Option>
                            </arco.Select>
                        </arco.Form.Item>
                    </arco.Grid.Col>
                    <arco.Grid.Col span={7}>
                        <arco.Form.Item label="数据库类型" field="connType">
                            <arco.Select placeholder="请选择连接类型">
                                <arco.Select.Option key={"http"} value={"http"}>
                                    HTTP
                                </arco.Select.Option>
                                <arco.Select.Option key={"https"} value={"https"}>
                                    HTTPS
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
            title: '任务名称',
            dataIndex: 'middleType',
            width: 120
        },
        {
            title: '主题名称',
            dataIndex: 'middleType',
            width: 120
        },
        {
            title: '库表名称',
            dataIndex: 'middleType',
            width: 120
        },
        {
            title: '开始时间',
            dataIndex: 'connType',
            width: 120
        },
        {
            title: '接收消息总数',
            dataIndex: 'host',
        },
        {
            title: '入库消息总数',
            dataIndex: 'port',
        },
        {
            title: '异常数据总数',
            dataIndex: 'username',
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
