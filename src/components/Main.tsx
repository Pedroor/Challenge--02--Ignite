import { SideBar } from "./SideBar";
import { Content } from "./Content";

export function Main() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <Content />
    </div>
  );
}
