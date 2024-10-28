window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<HomeIndexView/>);
};
const HomeSate = {};
const HomeIndexView = () => {
    React.useEffect(() => {
        setInterval(() => {
            axios.get("/monitor/host").then(resp => {
                HomeSate.cpuChart.updateData('cpu-view', resp.data.cpu);
                HomeSate.memChart.updateData('mem-view', [{type: "内存占用", value: resp.data.memory.used_percent.toFixed(2)}]);
            })
        }, 900)
    }, []);
    return <div style={{width: "100%", height: "400px"}}>
        <CpuUserView/>
        <MemUseView/>
    </div>
}

const CpuUserView = () => {
    React.useEffect(() => {
        const spec = {
            type: 'line',
            title: {
                text: "CPU使用率"
            },
            axes: [{
                orient: 'left',
                min: 0,
                max: 100
            }],
            data: {
                id: 'cpu-view',
                values: []
            },
            xField: 'label',
            yField: 'value'
        };
        HomeSate.cpuChart = new VChart.default(spec, {dom: "cpu-view"});
        HomeSate.cpuChart.renderSync();
    })
    return <div id="cpu-view" style={{width: "100%", height: "400px"}}></div>
}
const MemUseView = () => {
    React.useEffect(() => {
        const spec = {
            type: 'gauge',
            title: {
                text: "内存占用"
            },
            axes: [{
                orient: 'angle',
                min: 0,
                max: 100
            }],
            name:"0-100",
            data: [
                {
                    id: 'mem-view',
                    values: [
                        {
                            type: '内存占用',
                            value: 0
                        }
                    ]
                }
            ],
            categoryField: 'type',
            valueField: 'value',
            outerRadius: 0.8,
            innerRadius: 0.5,
            startAngle: -180,
            endAngle: 0
        };
        HomeSate.memChart = new VChart.default(spec, {dom: "mem-view"});
        HomeSate.memChart.renderSync();
    }, []);
    return <div id="mem-view" style={{width: "50%", height: "400px"}}></div>
}