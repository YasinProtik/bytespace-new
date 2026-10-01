import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DvJwIeYa.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as safeRedirect } from "./useAuth-XMFpjxcY.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./login-D7l4jX0u.mjs";
import { t as AuthLayout } from "./AuthLayout-DnwpWyJb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-OrouXJl2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var input = "w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary";
function LoginPage() {
	const { redirect } = Route.useSearch();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)("");
	const submit = async (e) => {
		e.preventDefault();
		setFormError("");
		setBusy(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setBusy(false);
		if (error) {
			const message = error.message === "Invalid login credentials" ? "Email or password is incorrect. If you just created this account, try creating it again with a stronger password." : error.message;
			setFormError(message);
			toast.error(message);
			return;
		}
		toast.success("Signed in successfully.");
		await navigate({
			to: safeRedirect(redirect),
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		heading: "Welcome back",
		intro: "Sign in to continue learning with ByteSpace.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold text-ink",
				children: "Sign in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: input,
						type: "email",
						required: true,
						placeholder: "Email",
						value: email,
						onChange: (e) => setEmail(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: input,
						type: "password",
						required: true,
						placeholder: "Password",
						value: password,
						onChange: (e) => setPassword(e.target.value)
					}),
					formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: formError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: busy,
						className: "w-full rounded-full bg-primary py-3 text-sm text-primary-foreground disabled:opacity-70",
						children: busy ? "Signing in…" : "Sign in"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center text-sm text-muted-foreground",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "text-primary",
						children: "Sign up"
					})
				]
			})
		]
	});
}
//#endregion
export { LoginPage as component };
