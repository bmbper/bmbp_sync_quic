// web/tsx/app/manage/table/index.tsx
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
    label: "\u6570\u636E\u5E93\u7C7B\u578B",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u6570\u636E\u5E93\u7C7B\u578B"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "mysql",
    value: "mysql"
  }, "Mysql"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "oracle",
    value: "oracle"
  }, "Oracle"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "postgres",
    value: "postgres"
  }, "Postgres")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u8868\u540D\u79F0",
    field: "connType"
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u8868\u540D\u79F0"
  }))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u52A8\u6001\u8868\u7B56\u7565",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u52A8\u6001\u8868\u7B56\u7565"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "0",
    value: "0"
  }, "\u539F\u8868\u5B58\u50A8"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "1",
    value: "1"
  }, "\u6309\u5929\u5B58\u50A8"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "2",
    value: "2"
  }, "\u6309\u6708\u5B58\u50A8"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "3",
    value: "3"
  }, "\u6309\u5E74\u5B58\u50A8")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u5E93\u8868\u72B6\u6001",
    field: "connStatus"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u5E93\u8868\u72B6\u6001"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "1",
    value: "1"
  }, "\u5DF2\u521B\u5EFA"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "0",
    value: "0"
  }, "\u672A\u521B\u5EFA")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
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
      title: "\u6570\u636E\u5E93\u7C7B\u578B",
      dataIndex: "middleType",
      width: 120
    },
    {
      title: "\u6570\u636E\u5E93\u540D\u79F0",
      dataIndex: "database",
      width: 120
    },
    {
      title: "\u5E93\u8868\u63CF\u8FF0",
      dataIndex: "tableDesc"
    },
    {
      title: "\u57FA\u7840\u8868\u540D\u79F0",
      dataIndex: "tableName",
      width: 120
    },
    {
      title: "\u52A8\u6001\u8868\u7B56\u7565",
      dataIndex: "dynamicTable"
    },
    {
      title: "\u6700\u65B0\u8868\u540D\u79F0",
      dataIndex: "dynamicTable"
    },
    {
      title: "\u52A8\u6001\u8868\u6570\u91CF",
      dataIndex: "dynamicTable"
    },
    {
      title: "\u603B\u6570\u636E\u91CF",
      dataIndex: "dynamicTable"
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
