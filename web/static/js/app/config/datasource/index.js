// web/tsx/app/config/datasource/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(DataSourceIndexView, null));
};
var DataSourceIndexView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-body"
  }, /* @__PURE__ */ React.createElement(DataSourceGridView, null))));
};
var DataSourceGridView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid"
  }, /* @__PURE__ */ React.createElement(DataSourceSearchFormView, null), /* @__PURE__ */ React.createElement(DataSourceGridToolView, null), /* @__PURE__ */ React.createElement(DataSourceGridTableView, null), /* @__PURE__ */ React.createElement(DataSourceGridPageView, null)));
};
var DataSourceSearchFormView = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-grid-search"
  }, /* @__PURE__ */ React.createElement(arco.Form, null, /* @__PURE__ */ React.createElement(arco.Grid.Row, {
    guides: [1, 1]
  }, /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u6570\u636E\u6E90\u7C7B\u578B",
    field: "msgType"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u72B6\u6001"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "oracle",
    value: "oracle"
  }, "Oracle"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "mysql",
    value: "mysql"
  }, "MySQL"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "postgresql",
    value: "postgresql"
  }, "Postgresql"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "mariadb",
    value: "mariadb"
  }, "Mariadb")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u4E3B\u673A",
    field: "host"
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u4E3B\u673A\u5730\u5740"
  }))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u7AEF\u53E3",
    field: "port"
  }, /* @__PURE__ */ React.createElement(arco.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u7AEF\u53E3"
  }))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u8FDE\u63A5\u72B6\u6001",
    field: "connStatus"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8FDE\u63A5\u72B6\u6001"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "1",
    value: "1"
  }, "\u5DF2\u8FDE\u63A5"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "0",
    value: "0"
  }, "\u672A\u8FDE\u63A5")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
    span: 7
  }, /* @__PURE__ */ React.createElement(arco.Form.Item, {
    label: "\u6570\u636E\u72B6\u6001",
    field: "dataStatus"
  }, /* @__PURE__ */ React.createElement(arco.Select, {
    placeholder: "\u8BF7\u9009\u62E9\u6570\u636E\u72B6\u6001"
  }, /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "1",
    value: "1"
  }, "\u5DF2\u542F\u7528"), /* @__PURE__ */ React.createElement(arco.Select.Option, {
    key: "0",
    value: "0"
  }, "\u672A\u542F\u7528")))), /* @__PURE__ */ React.createElement(arco.Grid.Col, {
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
var DataSourceGridToolView = () => {
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
var DataSourceGridTableView = () => {
  const data = [{}];
  const columns = [
    {
      title: "\u6570\u636E\u5E93\u7C7B\u578B",
      dataIndex: "databaseType",
      width: 120
    },
    {
      title: "\u4E3B\u673A",
      dataIndex: "host",
      width: 120
    },
    {
      width: 120,
      title: "\u7AEF\u53E3",
      dataIndex: "port"
    },
    {
      title: "\u6570\u636E\u5E93",
      dataIndex: "database",
      width: 120
    },
    {
      title: "\u6A21\u5F0F",
      dataIndex: "schema"
    },
    {
      title: "\u7528\u6237\u540D",
      dataIndex: "username"
    },
    {
      title: "TLS",
      dataIndex: "tls"
    },
    {
      title: "\u8FDE\u63A5\u72B6\u6001",
      dataIndex: "connStatus"
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
var DataSourceGridPageView = () => {
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
