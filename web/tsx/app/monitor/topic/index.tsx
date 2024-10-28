window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<MonitorHostView/>);
};

const MonitorHostView = () => {
    return <div className='bmbp-grid'>
        <SearchFormView/>
        <TableLineView/>
    </div>
}
const SearchFormView = () => {
    return (
        <>
            <div className="bmbp-grid-search">
                <arco.Form>
                    <arco.Grid.Row guides={[1, 1]}>
                        <arco.Grid.Col span={7}>
                            <arco.Form.Item label="中间件类型" field="msgType">
                                <arco.Select placeholder="请选择中间件类型">
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
                            <arco.Form.Item label="消息服务" field="msgType">
                                <arco.Select placeholder="请选择消息服务">
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
                            <arco.Form.Item label="消息主题" field="msgType">
                                <arco.Select placeholder="请选择表">
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

const TableLineView = () => {
    React.useEffect(()=>{
        const spec = {
            title: {
                text: '主题消费'
            },
            type: 'line',
            data: {
                values: [
                    {
                        time: '2:00',
                        value: 38
                    },
                    {
                        time: '4:00',
                        value: 56
                    },
                    {
                        time: '6:00',
                        value: 10
                    },
                    {
                        time: '8:00',
                        value: 70
                    },
                    {
                        time: '10:00',
                        value: 36
                    },
                    {
                        time: '12:00',
                        value: 94
                    },
                    {
                        time: '14:00',
                        value: 24
                    },
                    {
                        time: '16:00',
                        value: 44
                    },
                    {
                        time: '18:00',
                        value: 36
                    },
                    {
                        time: '20:00',
                        value: 68
                    },
                    {
                        time: '22:00',
                        value: 22
                    }
                ]
            },
            axes: [{orient: 'left',min:0,max:10000}],
            xField: 'time',
            yField: 'value',
            line: {
                style: {
                    curveType: 'monotone'
                }
            }
        };

        const vchart = new VChart.default(spec, { dom: "table-view" });
        vchart.renderSync();
    },[]);
    return (<>
        <div id={"table-view"} className={"bmbp-grid-table"}></div>
    </>)
}