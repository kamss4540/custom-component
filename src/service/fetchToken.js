import Cookies from "js-cookie";

export const fetchCIMToken = () => {
	if (process.env.NODE_ENV === "development") {
		const param = {
			nsKey: "default",
			authTicket: "develop-xzh",
			password: "a123456",
			authType: 0,
			isEncryption: false,
		};
		return window.$.post("/gw/auth/login", param, (res) => {
			const { status, response = {} } = res;
			if (status === 200) {
				const { result, code } = response;
				if (code !== 0) {
					return Promise.reject(code);
				}
				Cookies.set("token", result.token);
				return Promise.resolve(result.userInfo);
			}
		});
	}
	return Promise.resolve();
};
