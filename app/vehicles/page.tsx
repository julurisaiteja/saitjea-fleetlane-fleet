"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">FleetLane</p>
        <h1>Vehicles</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"V-12","type":"Surge van","sector":"CORE","fuel":"68%","status":"Online"},{"id":"V-03","type":"Sprinter","sector":"NORTH","fuel":"41%","status":"Online"},{"id":"V-08","type":"Cargo","sector":"SOUTH","fuel":"22%","status":"Refuel"},{"id":"V-19","type":"EV van","sector":"CORE","fuel":"81%","status":"Online"}]} columns={[{"key":"id","label":"Vehicle"},{"key":"type","label":"Type"},{"key":"sector","label":"Sector"},{"key":"fuel","label":"Fuel"},{"key":"status","label":"Status"}]} searchKeys={["id","type","sector","fuel","status"]} />
</section>
    </div>
  );
}
