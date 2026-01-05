import { useLoad } from "./_state/useLoad.ts";
import { Fragment } from "react";

export default function App() {
  useLoad();

  return <Fragment />;
}
