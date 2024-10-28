// web/tsx/app/home/index/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(HomeIndexView, null));
};
var HomeSate = {};
var HomeIndexView = () => {
  React.useEffect(() => {
    setInterval(() => {
      axios.get("/monitor/host").then((resp) => {
        HomeSate.cpuChart.updateData("cpu-view", resp.data.cpu);
        HomeSate.memChart.updateData("mem-view", [{ type: "\u5185\u5B58\u5360\u7528", value: resp.data.memory.used_percent.toFixed(2) }]);
      });
    }, 900);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    style: { width: "100%", height: "400px" }
  }, /* @__PURE__ */ React.createElement(CpuUserView, null), /* @__PURE__ */ React.createElement(MemUseView, null));
};
var CpuUserView = () => {
  React.useEffect(() => {
    const spec = {
      type: "line",
      title: {
        text: "CPU\u4F7F\u7528\u7387"
      },
      axes: [{
        orient: "left",
        min: 0,
        max: 100
      }],
      data: {
        id: "cpu-view",
        values: []
      },
      xField: "label",
      yField: "value"
    };
    HomeSate.cpuChart = new VChart.default(spec, { dom: "cpu-view" });
    HomeSate.cpuChart.renderSync();
  });
  return /* @__PURE__ */ React.createElement("div", {
    id: "cpu-view",
    style: { width: "100%", height: "400px" }
  });
};
var MemUseView = () => {
  React.useEffect(() => {
    const spec = {
      type: "gauge",
      title: {
        text: "\u5185\u5B58\u5360\u7528"
      },
      axes: [{
        orient: "angle",
        min: 0,
        max: 100
      }],
      name: "0-100",
      data: [
        {
          id: "mem-view",
          values: [
            {
              type: "\u5185\u5B58\u5360\u7528",
              value: 0
            }
          ]
        }
      ],
      categoryField: "type",
      valueField: "value",
      outerRadius: 0.8,
      innerRadius: 0.5,
      startAngle: -180,
      endAngle: 0
    };
    HomeSate.memChart = new VChart.default(spec, { dom: "mem-view" });
    HomeSate.memChart.renderSync();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    id: "mem-view",
    style: { width: "50%", height: "400px" }
  });
};
