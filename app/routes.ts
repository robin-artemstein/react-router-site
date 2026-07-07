import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("/about", "routes/About.tsx"),
    route("/pricing", "routes/Pricing.tsx"),
    route("/services", "routes/Services.tsx"),
    route("/contact", "routes/Contact.tsx")] satisfies RouteConfig;
