// web/tsx/app/task/task/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(KafkaIndexView, null));
};
var KafkaIndexView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-body"
  }, /* @__PURE__ */ React.createElement(KafkaGridView, null))));
};
var KafkaGridView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid"
  }, /* @__PURE__ */ React.createElement(KafkaSearchFormView, null), /* @__PURE__ */ React.createElement(KafkaGridToolView, null), /* @__PURE__ */ React.createElement(KafkaGridTableView, null), /* @__PURE__ */ React.createElement(KafkaGridPageView, null)));
};
var KafkaSearchFormView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid-search"
  }, /* @__PURE__ */ React.createElement(arco.Form, null, /* @__PURE__ */ React.createElement(arco.Grid.Row, {
    guides: [1, 1]
  }, /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u4EFB\u52A1\u540D\u79F0",
    field: "host"
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"
  }))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u4E3B\u9898\u540D\u79F0",
    field: "host"
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u4E3B\u9898\u540D\u79F0"
  }))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u5E93\u8868\u540D\u79F0",
    field: "host"
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u4E3B\u9898\u540D\u79F0"
  }))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u4E2D\u95F4\u4EF6\u7C7B\u578B",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u72B6\u6001"
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
    label: "\u6570\u636E\u5E93\u7C7B\u578B",
    field: "connType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u8FDE\u63A5\u7C7B\u578B"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "http",
    value: "http"
  }, "HTTP"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "https",
    value: "https"
  }, "HTTPS")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u6620\u5C04\u72B6\u6001",
    field: "connStatus"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u6620\u5C04\u72B6\u6001"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "1",
    value: "1"
  }, "\u5DF2\u6620\u5C04"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "0",
    value: "0"
  }, "\u672A\u6620\u5C04")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
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
var KafkaGridToolView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid-toolbar"
  }, /* @__PURE__ */ React.createElement(arco.Button, {
    type: "primary"
  }, "\u65B0\u589E"), /* @__PURE__ */ React.createElement(arco.Button, {
    type: "primary"
  }, "\u6279\u91CF\u542F\u7528"), /* @__PURE__ */ React.createElement(arco.Button, {
    type: "primary"
  }, "\u6279\u91CF\u505C\u7528"), /* @__PURE__ */ React.createElement(arco.Button, {
    type: "primary"
  }, "\u6279\u91CF\u5220\u9664")));
};
var KafkaGridTableView = () => {
  const data = [{}];
  const columns = [
    {
      title: "\u4EFB\u52A1\u540D\u79F0",
      dataIndex: "middleType",
      width: 120
    },
    {
      title: "\u4E2D\u95F4\u4EF6\u540D\u79F0",
      dataIndex: "connType",
      width: 120
    },
    {
      title: "\u4E3B\u9898\u540D\u79F0",
      dataIndex: "host"
    },
    {
      title: "\u6570\u636E\u5E93\u540D\u79F0",
      dataIndex: "port",
      width: 120
    },
    {
      title: "\u8868\u540D\u79F0",
      dataIndex: "username"
    },
    {
      title: "\u6620\u5C04\u72B6\u6001",
      dataIndex: "password"
    },
    {
      title: "\u4EFB\u52A1\u72B6\u6001",
      dataIndex: "apikey"
    },
    {
      title: "\u64CD\u4F5C",
      dataIndex: "apikey",
      align: "center",
      width: 240,
      render: (col, record, index) => {
        return /* @__PURE__ */ React.createElement("div", {
          className: "bmbp-grid-table-action"
        }, /* @__PURE__ */ React.createElement(arco.Button, {
          type: "primary",
          icon: /* @__PURE__ */ React.createElement(arcoicon.IconEdit, null)
        }), /* @__PURE__ */ React.createElement(arco.Button, {
          type: "primary",
          icon: /* @__PURE__ */ React.createElement(arcoicon.IconEye, null)
        }), /* @__PURE__ */ React.createElement(arco.Button, {
          type: "primary",
          status: "danger",
          icon: /* @__PURE__ */ React.createElement(arcoicon.IconDelete, null)
        }));
      }
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid-table"
  }, /* @__PURE__ */ React.createElement(arco.Table, {
    columns,
    data,
    pagination: false,
    border: true,
    borderCell: true,
    stripe: true
  })));
};
var KafkaGridPageView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid-pagination"
  }, /* @__PURE__ */ React.createElement(arco.Pagination, {
    disabled: true,
    showTotal: true,
    total: 200,
    showJumper: true,
    sizeCanChange: true
  })));
};
