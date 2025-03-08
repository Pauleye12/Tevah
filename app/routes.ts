import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  //   index("routes/home.tsx"),
  //   route("about", "routes/about.tsx"),
  //   route("initiatives", "routes/initiatives.tsx"),
  //   route("blog", "routes/blog.tsx"),
  //   route("contact", "routes/contact.tsx"),
  // parent route
  route("/", "routes/AppWrapper.tsx", [
    // child routes
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("initiatives", "routes/initiatives.tsx"),
    route("blog", "routes/blog.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
