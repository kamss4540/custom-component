import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

(function () {
	// 1. 严格模式
	"use strict";

	// 2.1. 测试函数
	function test() {
		let matrix = [
			[2, 1, 3],
			[6, 5, 4],
			[7, 8, 9],
		];

		return minFallingPathSum(matrix);
	}

	function minFallingPathSum(matrix) {
		let n = matrix.length;
		let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
		for (let j = 0; j < n; j++) {
			dp[0][j] = matrix[0][j];
		}
		for (let i = 1; i < n; i++) {
			for (let j = 0; j < n; j++) {
				dp[i][j] = dp[i - 1][j];
				if (j > 0) {
					dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
				}
				if (j < n - 1) {
					dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1]);
				}
				dp[i][j] += matrix[i][j];
			}
		}
		let res = Number.MAX_VALUE;
		for (let j = 0; j < n; j++) {
			res = Math.min(res, dp[n - 1][j]);
		}
		return res;
	}

	// 2.2. 测试结果
	console.log(test());
})();
