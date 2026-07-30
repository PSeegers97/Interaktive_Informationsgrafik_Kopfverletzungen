import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    route("Haftungsausschluss", "routes/disclaimer.tsx"),
    route("Schaedel-Hirn-Trauma", "routes/tbi.tsx"),
    route("Uebersicht", "routes/overview.tsx"),
    route("Ablauf", "routes/process.tsx"),
    route("Symptome", "routes/symptoms.tsx"),
    route("Trainer", "routes/trainer.tsx"),
    route("Arzt", "routes/doctor.tsx"),
    route("Behandlung", "routes/therapy.tsx"),
    route("Langzeitfolgen", "routes/time.tsx"),
] satisfies RouteConfig;
