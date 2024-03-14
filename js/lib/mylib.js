//получить элемент по селектору. Имя функции - $(selector).
const $ = function (selector) {
  return document.querySelector(selector);
};
////***********************************************////

//Работа с классами у элементов.

/*1-Проверка на наличие класса у элемента.
Если у элемента класс есть то возвращает - true, 
если нет то - false.
*/
function findClassName(element, className) {
  return element.classList.contains(className);
}
//2-Добавляет класс элементу.
function addClass(element, className) {
  return element.classList.add(className);
}
//3-Удаляет класс у элемента.
function delClass(element, className) {
  return element.classList.remove(className);
}
//4-Подключает класс если его нет и убирает если есть.
function toggleClass(element, className) {
  return element.classList.toggle(className);
}
////***********************************************////

// Работа с идентификатором элемента
//Добавляем id к элементу
function addId(element, id) {
  return (element.id = id);
}
////***********************************************////

// Работа с атрибутами элемента
//Добавление атрибута к документу
function addId(element, nameAttribure, valueAttr) {
  return element.setAttribure(nameAttribure, valueAttr);
}
////***********************************************////
