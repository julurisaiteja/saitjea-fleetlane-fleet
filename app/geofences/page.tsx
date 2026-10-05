"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">FleetLane</p>
        <h1>Geofences</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"fence":"CORE","alerts":3,"vehicles":18,"status":"Hot"},{"fence":"NORTH","alerts":0,"vehicles":22,"status":"Stable"},{"fence":"SOUTH","alerts":1,"vehicles":20,"status":"Watch"},{"fence":"DEPOT","alerts":0,"vehicles":6,"status":"Stable"}]} columns={[{"key":"fence","label":"Fence"},{"key":"alerts","label":"Alerts"},{"key":"vehicles","label":"Vehicles"},{"key":"status","label":"Status"}]} searchKeys={["fence","alerts","vehicles","status"]} />
</section>
    </div>
  );
}
