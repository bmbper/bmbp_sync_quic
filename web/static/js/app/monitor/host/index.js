// web/tsx/app/monitor/host/index.tsx
window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(MonitorHostView, null));
};
var MonitorHostView = () => {
  return /* @__PURE__ */ React.createElement("div", null, "Cpu");
};
