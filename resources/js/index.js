/*企業理念　文字*/
// 交差を監視する要素を準備
const CPmsgh2 = document.querySelectorAll('.CP-msg h2');

// Intersection Observerの設定
const CPmsgsh2 = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const CPmsgh2Observer = new IntersectionObserver(intersect, CPmsgsh2);

// 対象の要素をそれぞれ監視する
CPmsgh2.forEach(target => {
	CPmsgh2Observer.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			CPmsgh2Observer.unobserve(entry.target);//監視を終了する
		}
	});
}



// 交差を監視する要素を準備
const CPmsgp = document.querySelectorAll('.CP-msg p');

// Intersection Observerの設定
const CPmsgps = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const CPmsgpObserver = new IntersectionObserver(intersect, CPmsgps);

// 対象の要素をそれぞれ監視する
CPmsgp.forEach(target => {
	CPmsgpObserver.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			CPmsgpObserver.unobserve(entry.target);//監視を終了する
		}
	});
}




/*企業理念 画像*/
// 交差を監視する要素を準備
const CPPhoto = document.querySelectorAll('.left-img img');

// Intersection Observerの設定
const CPPhotos = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const CPobserver = new IntersectionObserver(intersect, CPPhotos);

// 対象の要素をそれぞれ監視する
CPPhoto.forEach(target => {
	CPobserver.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			CPobserver.unobserve(entry.target);//監視を終了する
		}
	});
}




// 交差を監視する要素を準備
const CPPhotoright = document.querySelectorAll('.right-img img');

// Intersection Observerの設定
const CPPhotosright = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const CPobserverright = new IntersectionObserver(intersect, CPPhotosright);

// 対象の要素をそれぞれ監視する
CPPhotoright.forEach(target => {
	CPobserverright.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			CPobserverright.unobserve(entry.target);//監視を終了する
		}
	});
}





/*社長メッセージ*/
// 交差を監視する要素を準備
const targetCEO = document.querySelectorAll('.message-contents h2,.photo-ceo');

// Intersection Observerの設定
const optionCEO = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const observerCEO = new IntersectionObserver(intersect, optionCEO);

// 対象の要素をそれぞれ監視する
targetCEO.forEach(target => {
	observerCEO.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observerCEO.unobserve(entry.target);//監視を終了する
		}
	});
}




/* 社長メッセージ本文 */
const targetCEOp = document.querySelectorAll('.message-contents p');

// Intersection Observerの設定
const optionCEOp = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const observerCEOp = new IntersectionObserver(intersect, optionCEOp);

// 対象の要素をそれぞれ監視する
targetCEOp.forEach(target => {
	observerCEOp.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observerCEOp.unobserve(entry.target);//監視を終了する
		}
	});
} 





/*求める人物像　ReculuteMessage*/
const targetPerson = document.querySelectorAll('.person-back h1');

// Intersection Observerの設定
const optionPerson = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const observerPerson = new IntersectionObserver(intersect, optionPerson);

// 対象の要素をそれぞれ監視する
targetPerson.forEach(target => {
	observerPerson.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observerPerson.unobserve(entry.target);//監視を終了する
		}
	});
}





/*求める人物像　本文*/
const targetPersonMsg = document.querySelectorAll('.person h2,.person p');

// Intersection Observerの設定
const optionPersonMsg = {
	root: null,
	rootMargin: '15% 0%',
	threshold: 0
};

const observerPersonMsg = new IntersectionObserver(intersect, optionPersonMsg);

// 対象の要素をそれぞれ監視する
targetPersonMsg.forEach(target => {
	observerPersonMsg.observe(target);
});

// 交差したときに実行する関数
function intersect(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observerPersonMsg.unobserve(entry.target);//監視を終了する
		}
	});
}