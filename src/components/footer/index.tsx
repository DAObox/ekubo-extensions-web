import { GetStarted } from "@/components/footer/GetStarted";
import { Links } from "./Links";

export function Footer() {
  return (
    <div className="bg-background-purple">
      <GetStarted />
      <Links />
    </div>
  );
}