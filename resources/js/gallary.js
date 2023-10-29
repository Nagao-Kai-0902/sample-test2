// 監視する領域（ブラウザの表示領域）
const scrollArea = document;

// 監視する対象（data-orderの値順にtargetObjectsに入れています）
const targetObjects = [];
const targetLists = document.querySelectorAll('.img-all img');
for (let index = 0; index < targetLists.length; index++) {
  targetObjects.push(document.querySelector('[data-order="' + (index + 1) + '"]'));
}

// IntersectionObserverの設定
const options = {
  root: scrollArea,
  threshold: 0.3
}

// コールバックの受け取り
const callback = (entries, observer) => {
  let transitionCounter = 0;
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      transitionCounter++;
      observerObject.unobserve(entry.target);

      setTimeout(() => {
        entry.target.classList.add('active');
      }, transitionCounter * 300);
    }
  });
};

// IntersectionObserverオブジェクトを作る
const observerObject = new IntersectionObserver(callback, options);

// 監視対象の監視を開始する
targetObjects.forEach(object => {
  observerObject.observe(object);
});