// 'jqueryish' features for DOM manipulation
function $(selector) {
  let els = typeof selector === 'string' ?
    document.querySelectorAll(selector) :
    selector.els || [selector];
  let el = els.length ? els[0] : '';
  function toDomEls(x) {
    let temp = document.createElement('div');
    temp.innerHTML = x;
    return temp.children;
  }
  return {
    els,
    attr: (x, y) => y ? el ? el.setAttribute(x, y) : ''
      : el ? el.getAttribute(x) : '',
    html: x => typeof x !== 'undefined' ?
      el ? (el.innerHTML = x) : '' : el ? el.innerHTML : '',
    append: x => !el ? '' : typeof x !== 'string' ?
      el.append(x) : el.append(...toDomEls(x)),
    width: x => x ? (el.style.width = x) :
      el.getBoundingClientRect().width,
    removeClass: x => el && x.split(' ')
      .forEach(c => el.classList.remove(c)),
    addClass: x => el && x.split(' ')
      .forEach(c => el.classList.add(c)),
    click: x =>
      els.forEach(el => el.addEventListener('click', x.bind(el)))
  }
}