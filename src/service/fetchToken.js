import * as $ from "jquery";
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
		return $.post("/gw/auth/login", param, (res) => {
			const { status, response = {} } = res;
			if (status === 200) {
				const { result, code, message: msg } = response;
				if (code !== 0) {
					// message.error(msg);
					return Promise.reject(code);
				}
				Cookies.set("token", result.token);
				return Promise.resolve(result.userInfo);
			}
		});
	}
	return Promise.resolve();
};
