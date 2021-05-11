(function () {

	// I18N
	var replyBtnTxt;

	if (document.documentElement.lang === 'ja') {

		replyBtnTxt = '答える';

	} else if (document.documentElement.lang === 'zh-hans') {

		replyBtnTxt = '回复';

	} else {

		replyBtnTxt = 'Reply';

	}

	var commentFormWrap = document.querySelector('.comment-form-wrap');

	var commentsArray = Array.prototype.slice.call(document.querySelectorAll('[data-comment]'));

	commentsArray.forEach(function (comment, index) {

		var replyBtn = document.createElement('button');
		replyBtn.textContent = replyBtnTxt;
		replyBtn.style.alignSelf = 'flex-start';
		comment.appendChild(replyBtn)

	});

})();