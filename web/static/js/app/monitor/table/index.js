// web/tsx/app/monitor/table/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(MonitorHostView, null));
};
var MonitorHostView = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid"
  }, /* @__PURE__ */ React.createElement(SearchFormView, null), /* @__PURE__ */ React.createElement(TableLineView, null));
};
var SearchFormView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid-search"
  }, /* @__PURE__ */ React.createElement(arco.Form, null, /* @__PURE__ */ React.createElement(arco.Grid.Row, {
    guides: [1, 1]
  }, /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u6570\u636E\u5E93\u7C7B\u578B",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u6570\u636E\u5E93\u7C7B\u578B"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "kafka",
    value: "kafka"
  }, "KAFKA"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "activeMq",
    value: "activeMq"
  }, "ActiveMq"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "rabbitMq",
    value: "rabbitMq"
  }, "RabbitMq"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "rocketMq",
    value: "rocketMq"
  }, "RocketMq")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u6570\u636E\u5E93\u540D\u79F0",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u6570\u636E\u5E93"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "kafka",
    value: "kafka"
  }, "KAFKA"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "activeMq",
    value: "activeMq"
  }, "ActiveMq"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "rabbitMq",
    value: "rabbitMq"
  }, "RabbitMq"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "rocketMq",
    value: "rocketMq"
  }, "RocketMq")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u6570\u636E\u5E93\u8868",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u8868"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "kafka",
    value: "kafka"
  }, "KAFKA"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "activeMq",
    value: "activeMq"
  }, "ActiveMq"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "rabbitMq",
    value: "rabbitMq"
  }, "RabbitMq"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "rocketMq",
    value: "rocketMq"
  }, "RocketMq")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 3
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, null, /* @__PURE__ */ React.createElement(arco.Space, null, /* @__PURE__ */ React.createElement(arco.Button, {
    type: "primary",
    style: { marginLeft: "8px" },
    onClick: () => {
    }
  }, "\u67E5\u8BE2"), /* @__PURE__ */ React.createElement(arco.Button, {
    onClick: () => {
    }
  }, "\u6E05\u7A7A"))))), /* @__PURE__ */ React.createElement(arco.Divider, {
    style: { margin: "0px 0 4px 0 " }
  }))));
};
var TableLineView = () => {
  React.useEffect(() => {
    const spec = {
      title: {
        text: "\u6570\u636E\u5165\u5E93"
      },
      type: "line",
      data: {
        values: [
          {
            time: "2:00",
            value: 38
          },
          {
            time: "4:00",
            value: 56
          },
          {
            time: "6:00",
            value: 10
          },
          {
            time: "8:00",
            value: 70
          },
          {
            time: "10:00",
            value: 36
          },
          {
            time: "12:00",
            value: 94
          },
          {
            time: "14:00",
            value: 24
          },
          {
            time: "16:00",
            value: 44
          },
          {
            time: "18:00",
            value: 36
          },
          {
            time: "20:00",
            value: 68
          },
          {
            time: "22:00",
            value: 22
          }
        ]
      },
      axes: [{ orient: "left", min: 0, max: 1e4 }],
      xField: "time",
      yField: "value",
      line: {
        style: {
          curveType: "monotone"
        }
      }
    };
    const vchart = new VChart.default(spec, { dom: "table-view" });
    vchart.renderSync();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "table-view",
    className: "bmbp-grid-table"
  }));
};
