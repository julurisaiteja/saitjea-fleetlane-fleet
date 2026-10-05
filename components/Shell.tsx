"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Dispatch"],["/routes","Routes"],["/vehicles","Vehicles"],["/drivers","Drivers"],["/geofences","Geofences"],["/alerts","Alerts"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Route R-14 drifting","a":"R-14 +16m. Skip low-priority stop 22; handoff 2 parcels to R-11. HOS remaining 1.4h — avoid overtime."},{"q":"HOS risk cluster","a":"7 drivers under 2h. Lock long routes; prefer short urban loops for last wave."},{"q":"OTD soft in CORE","a":"CORE sector 88%. Open surge van V-12; densify stops north of river."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell">
      <div className="hud-frame">
        <header className="topbar">
          <div>
            <div className="brand">Fleet<span>Lane</span></div>
            <p style={{ margin: "0.25rem 0 0", fontSize: 10, color: "var(--muted)" }}>MAP CYBER · <LiveClock /></p>
          </div>
          <nav className="nav" aria-label="Primary">
            {NAV.map(([href, label]) => (
              <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
            ))}
          </nav>
        </header>
        <main className="main">{children}</main>
      </div>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="FleetLane" prompts={PROMPTS} />
    </div>
  );
}
