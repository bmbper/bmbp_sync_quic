const HomeState: any = {};
const HomeAction = {
    init: () => {
        /// 侧边菜单数据
        const [sideMenuData, setSideMenuData] = React.useState(AppMenuData);
        HomeState.siderMenuData = sideMenuData;
        HomeState.setSiderMenuData = setSideMenuData;
        /// 顶部应用导航数据
        const [navMenuData, setNavMenuData] = React.useState([]);
        HomeState.navMenuData = navMenuData;
        HomeState.setNavMenuData = setNavMenuData;
        /// 默认首页
        const [contentSrc, setContentSrc] = React.useState("/index.view");
        HomeState.contentSrc = contentSrc;
        HomeState.setContentSrc = setContentSrc;

        /// 面包屑
        const [breadcrumbData, setBreadcrumbData] = React.useState(["欢迎"]);
        HomeState.breadcrumbData = breadcrumbData;
        HomeState.setBreadcrumbData = setBreadcrumbData;

        /// 用户信息
        const [currentUser, setCurrentUser] = React.useState({});
        HomeState.currentUser = currentUser;
        HomeState.setCurrentUser = setCurrentUser;
        /// 选中菜单
        const [selectMenu, setSelectMenu] = React.useState({});
        HomeState.selectMenu = selectMenu;
        HomeState.setSelectMenu = setSelectMenu;
    },
    onClickSideMenu: (menu) => {
        if (menu.url && "#" != menu.url) {
            HomeState.setContentSrc(menu.url);
            HomeState.setSelectMenu(menu);
            HomeState.setBreadcrumbData(menu.namePath.split("/"));
        }
    },
};
export {HomeAction, HomeState};
