(function () {
	if (window.console && window.console.log) {
		const log = (...args) => setTimeout(console.log.bind(console, ...args))
		log(
			'\n %c Leo\'s Blog %c https://runlin.live \n',
			'color:#FFFFFB;background:#ffa628;padding:5px 0;border-radius:.5rem 0 0 .5rem;',
			'background: #efefef;padding:5px 0 5px;border-radius:0 .5rem .5rem 0;'
		)
		log(
			`%c页面加载消耗了 ${(
				Math.round(performance.now() * 100) /
				100 /
				1000
			).toFixed(2)}s`,
			'background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;'
		)
		if (!localStorage.getItem('access')) {
			localStorage.setItem('access', new Date().getTime())
		}
		let _access = new Date(Number.parseInt(localStorage.getItem('access')))
		let access = `${_access.getFullYear()}年${_access.getMonth() +
			1}月${_access.getDate()}日`
		let i = 0
		if (!localStorage.getItem('hit')) {
			localStorage.setItem('hit', 0)
		} else {
			i = Number.parseInt(localStorage.getItem('hit'))
		}
		localStorage.setItem('hit', ++i)
		log(
			`这是你自 ${access} 以来第 ${i} 次在本站打开控制台，你想知道什么秘密嘛~`
		)
	}
})()
