// web/tsx/app/home/home/action.tsx
var HomeState = {};
var HomeAction = {
  init: () => {
    const [sideMenuData, setSideMenuData] = React.useState(AppMenuData);
    HomeState.siderMenuData = sideMenuData;
    HomeState.setSiderMenuData = setSideMenuData;
    const [navMenuData, setNavMenuData] = React.useState([]);
    HomeState.navMenuData = navMenuData;
    HomeState.setNavMenuData = setNavMenuData;
    const [contentSrc, setContentSrc] = React.useState("/index.view");
    HomeState.contentSrc = contentSrc;
    HomeState.setContentSrc = setContentSrc;
    const [breadcrumbData, setBreadcrumbData] = React.useState(["\u6B22\u8FCE"]);
    HomeState.breadcrumbData = breadcrumbData;
    HomeState.setBreadcrumbData = setBreadcrumbData;
    const [currentUser, setCurrentUser] = React.useState({});
    HomeState.currentUser = currentUser;
    HomeState.setCurrentUser = setCurrentUser;
    const [selectMenu, setSelectMenu] = React.useState({});
    HomeState.selectMenu = selectMenu;
    HomeState.setSelectMenu = setSelectMenu;
  },
  onClickSideMenu: (menu) => {
    if (menu.url && menu.url != "#") {
      HomeState.setContentSrc(menu.url);
      HomeState.setSelectMenu(menu);
      HomeState.setBreadcrumbData(menu.namePath.split("/"));
    }
  }
};

// web/tsx/app/home/home/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(BmbpHomeLayout, null));
};
var BmbpHomeLayout = () => {
  HomeAction.init();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-full"
  }, /* @__PURE__ */ React.createElement(arco.Layout, {
    className: "bmbp-full"
  }, /* @__PURE__ */ React.createElement(arco.Layout.Header, {
    className: "bmbp-layout-header"
  }, /* @__PURE__ */ React.createElement(BmbpHeaderTitle, null), /* @__PURE__ */ React.createElement(BmbpHeaderNav, null), /* @__PURE__ */ React.createElement(BmbpHeaderUser, null)), /* @__PURE__ */ React.createElement(arco.Layout, null, /* @__PURE__ */ React.createElement(arco.Layout.Sider, {
    className: "bmbp-layout-sider"
  }, /* @__PURE__ */ React.createElement(BmbpSideNavMenu, null)), /* @__PURE__ */ React.createElement(arco.Layout, null, /* @__PURE__ */ React.createElement(arco.Layout.Content, {
    className: "bmbp-layout-center"
  }, /* @__PURE__ */ React.createElement(BmbpCenterTitle, null), /* @__PURE__ */ React.createElement(BmbpCenterIFrame, null)), /* @__PURE__ */ React.createElement(arco.Layout.Footer, {
    className: "bmbp-layout-copy-right"
  }, AppCopyRight)))));
};
var BmbpHeaderTitle = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-header-title"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "bmbp-logo",
    src: AppIcon
  }), /* @__PURE__ */ React.createElement("span", {
    className: "bmbp-title"
  }, AppTitle));
};
var BmbpHeaderNav = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-header-center"
  });
};
var BmbpHeaderUser = () => {
  const userDropList = /* @__PURE__ */ React.createElement(arco.Menu, null, /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "1"
  }, "\u4E2A\u4EBA\u4E2D\u5FC3"), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "2"
  }, "\u4FEE\u6539\u5BC6\u7801"), /* @__PURE__ */ React.createElement(arco.Divider, {
    style: { margin: "2px 0" }
  }), /* @__PURE__ */ React.createElement(arco.Menu.Item, {
    key: "3"
  }, "\u9000\u51FA\u767B\u5F55"));
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-header-right"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arcoicon.IconQuestionCircle, {
    style: { fontSize: 20 }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arcoicon.IconLanguage, {
    style: { fontSize: 20 }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arcoicon.IconFullscreen, {
    style: { fontSize: 20 }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arco.Badge, {
    count: 9,
    dot: true,
    offset: [2, -2]
  }, /* @__PURE__ */ React.createElement(arcoicon.IconNotification, {
    style: {
      fontSize: 20,
      verticalAlign: -3
    }
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(arco.Dropdown, {
    droplist: userDropList,
    position: "br"
  }, /* @__PURE__ */ React.createElement(arco.Avatar, {
    size: 32
  }, "A"))));
};
var BmbpSideNavMenu = () => {
  const generateMenu = (menuArray) => {
    return menuArray.map((item) => {
      if (item.children && item.children.length > 0) {
        return /* @__PURE__ */ React.createElement(arco.Menu.SubMenu, {
          key: item.id,
          title: item.name,
          onClick: () => {
            HomeAction.onClickSideMenu(item);
          }
        }, generateMenu(item.children));
      } else {
        return /* @__PURE__ */ React.createElement(arco.Menu.Item, {
          key: item.id,
          onClick: () => {
            HomeAction.onClickSideMenu(item);
          }
        }, item.name);
      }
    });
  };
  return /* @__PURE__ */ React.createElement(arco.Menu, {
    className: "bmbp-layout-sider-menu"
  }, generateMenu(HomeState.siderMenuData));
};
var BmbpCenterTitle = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bmbp-layout-center-title"
  }, /* @__PURE__ */ React.createElement(arco.Breadcrumb, null, HomeState.breadcrumbData.map((item) => {
    return /* @__PURE__ */ React.createElement(arco.Breadcrumb.Item, null, item);
  })));
};
var BmbpCenterIFrame = () => {
  return /* @__PURE__ */ React.createElement("iframe", {
    src: HomeState.contentSrc,
    className: "bmbp-layout-center-iframe"
  });
};
