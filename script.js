const DomElement = function (selector, height, width, bg, fontSize, text) {
  console.log("DomElement run");
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.insText = text;
};

DomElement.prototype.crElement = function () {
  console.log("crElement run");
  const firstSym = this.selector.chartAt(0);
  const restSymb = this.selector.slice(1);

  let insContent = document.createElement("p");

  const bodyInter = document.querySelector("body");

  if (firstSym === ".") {
    insContent.innerHTML =
      `<div class="` +
      restSymb +
      `">Ваш текст: "` +
      this.insText +
      `", а DIV с классом ` +
      restSymb +
      ` </div>`;
  } else if (firstSymb === "#") {
    insContent.innerHTML =
      `<div id="` +
      restSymb +
      `">Ваш текст: ` +
      this.insText +
      `, а DIV  c Идентификатором  ` +
      restSymb +
      `</div>`;
  }

  const insStyle = insContent.querySelector("div");
  bodyInter.append(insContent);

  //Ниже задаю остальные свойства блока DIV с использованием CssText
  insStyle.style.cssText =
    "height: " +
    this.height +
    "px; width: " +
    this.width +
    "px; background: " +
    this.bg +
    "; font-size: " +
    this.fontSize +
    "px;";
};

//Создаем новый объект на основании DomElement
const newObject = new DomElement(
  "#block",
  150,
  150,
  "green",
  15,
  "первый клон"
);
newObject.crElement(); //Запускаем наследуемый метод создания объекта
console.log(newObject);
//Проверка возможности масштабирования объектов
const newObject1 = new DomElement(".block", 100, 100, "red", 15, "Второй клон");
newObject1.crElement();
