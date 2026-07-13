import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),                  // Maps to "/"
  route("about", "routes/About.tsx"),        // Maps to "/about"
  route("projects", "routes/Projects.tsx"),  // Maps to "/projects"
  route("services", "routes/Services.tsx"),  // Maps to "/services"
  route("contact", "routes/Contact.tsx"),    // Maps to "/contact"
] satisfies RouteConfig;