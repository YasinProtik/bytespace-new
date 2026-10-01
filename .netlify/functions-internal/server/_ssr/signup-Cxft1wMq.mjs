import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DvJwIeYa.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AuthLayout } from "./AuthLayout-DnwpWyJb.mjs";
import { t as Route } from "./signup-DFVdvRvM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-Cxft1wMq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var input = "w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-primary";
function SignupPage() {
	const { role } = Route.useSearch();
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)("");
	const submit = async (e) => {
		e.preventDefault();
		setFormError("");
		setBusy(true);
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: window.location.origin,
				data: {
					full_name: name,
					role: role || "student"
				}
			}
		});
		setBusy(false);
		if (error) {
			const message = error.message.toLowerCase().includes("weak") ? "Choose a stronger password that is not commonly used." : error.message;
			setFormError(message);
			toast.error(message);
			return;
		}
		if (data.session) {
			toast.success("Your account is ready.");
			await navigate({
				to: "/dashboard",
				replace: true
			});
			return;
		}
		toast.success("Check your email to confirm your account, then sign in.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		heading: role === "creator" ? "Become a creator" : "Join ByteSpace",
		intro: "Create an account to start learning and sharing your skills.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold text-ink",
				children: "Create account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: input,
						required: true,
						placeholder: "Full name",
						value: name,
						onChange: (e) => setName(e.target.value)
					}),
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
						minLength: 8,
						autoComplete: "new-password",
						placeholder: "Password (8+ characters)",
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
						children: busy ? "Creating…" : "Create account"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center text-sm text-muted-foreground",
				children: [
					"Already have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-primary",
						children: "Sign in"
					})
				]
			})
		]
	});
}
//#endregion
export { SignupPage as component };
