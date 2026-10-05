"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">FleetLane</p>
        <h1>Routes</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"route":"R-14","driver":"T. Ng","stops":41,"drift":"+16m","hos":"1.4h","status":"Drifting"},{"route":"R-10","driver":"P. Fox","stops":44,"drift":"+14m","hos":"1.1h","status":"Drifting"},{"route":"R-18","driver":"M. Hayes","stops":42,"drift":"+12m","hos":"3.1h","status":"Drifting"},{"route":"R-08","driver":"E. Bloom","stops":39,"drift":"+6m","hos":"2.9h","status":"Watch"},{"route":"R-07","driver":"C. Vale","stops":34,"drift":"0m","hos":"6.5h","status":"On time"}]} columns={[{"key":"route","label":"Route"},{"key":"driver","label":"Driver"},{"key":"stops","label":"Stops"},{"key":"drift","label":"Drift"},{"key":"hos","label":"HOS"},{"key":"status","label":"Status"}]} searchKeys={["route","driver","stops","drift","hos","status"]} />
</section>
    </div>
  );
}
