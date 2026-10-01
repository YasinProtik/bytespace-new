import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DvJwIeYa.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useAuth-XMFpjxcY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)({
	user: null,
	session: null,
	loading: true,
	displayName: "",
	initials: "",
	signOut: async () => {}
});
function AuthProvider({ children }) {
	const router = useRouter();
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event, next) => {
			setSession(next);
			setLoading(false);
			if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") router.invalidate();
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, [router]);
	const user = session?.user ?? null;
	const displayName = user?.user_metadata?.["full_name"] ?? user?.user_metadata?.["name"] ?? user?.email?.split("@")[0] ?? "";
	const initials = displayName.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
	const signOut = async () => {
		await supabase.auth.signOut();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			session,
			loading,
			displayName,
			initials,
			signOut
		},
		children
	});
}
var useAuth = () => (0, import_react.useContext)(AuthContext);
/** Only allow same-origin relative redirect targets. */
function safeRedirect(value) {
	if (!value || !value.startsWith("/") || value.startsWith("//")) return "/dashboard";
	return value;
}
//#endregion
export { safeRedirect as n, useAuth as r, AuthProvider as t };
