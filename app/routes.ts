import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("Test", "routes/test.tsx"),
] satisfies RouteConfig;
