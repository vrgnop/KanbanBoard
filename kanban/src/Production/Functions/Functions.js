const Functions = {
  //Скрытие компонента при клике на другую область
  hideComponentClick(comp, func) {
    const onClickHideMenu = (e) => {
      if (!e.path.includes(comp)) {
        func(false);
      }
    };
    document.body.addEventListener("click", onClickHideMenu);
    return () => document.body.removeEventListener("click", onClickHideMenu);
  },

  //Скрытие компонента при нажатии на другую область
  hideComponentMouseDown(comp, func) {
    const onMouseDownHideMenu = (e) => {
      if (!e.path.includes(comp)) {
        func(false);
      }
    };
    document.body.addEventListener("mousedown", onMouseDownHideMenu);
    return () =>
      document.body.removeEventListener("mousedown", onMouseDownHideMenu);
  },

  //Иименение высоты TextArea при заполнении/удалении текста
  changeHeightTextArea(element, minusPX) {
    element.style.height = "auto";
    element.style.height = element.scrollHeight - minusPX + "px";
  },

  //Сохранение изменений в Local Storage
  saveLocaleStorage(items) {
    localStorage.setItem("localRemember", "true");
    localStorage.setItem(
      "items",
      localStorage.getItem("localRemember") ? JSON.stringify(items) : ""
    );
  },
};

export default Functions;
