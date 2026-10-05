"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">FleetLane</p>
        <h1>Drivers</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"name":"T. Ng","route":"R-14","hos":"1.4h","risk":"High","status":"On route"},{"name":"P. Fox","route":"R-10","hos":"1.1h","risk":"High","status":"On route"},{"name":"E. Bloom","route":"R-08","hos":"2.9h","risk":"Med","status":"On route"},{"name":"C. Vale","route":"R-07","hos":"6.5h","risk":"Low","status":"On route"}]} columns={[{"key":"name","label":"Driver"},{"key":"route","label":"Route"},{"key":"hos","label":"HOS"},{"key":"risk","label":"Risk"},{"key":"status","label":"Status"}]} searchKeys={["name","route","hos","risk","status"]} />
</section>
    </div>
  );
}
