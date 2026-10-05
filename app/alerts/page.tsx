"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">FleetLane</p>
        <h1>Alerts</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><div className="alert-list"><div className="alert"><span className="badge">CRIT</span> R-14 drifting +16m · HOS 1.4h</div><div className="alert"><span className="badge">WARN</span> 7 drivers under 2h HOS</div><div className="alert"><span className="badge">WARN</span> CORE sector OTD soft at 88%</div><div className="alert"><span className="badge">INFO</span> Surge van V-12 online</div></div></section><section className="panel"><h2>Signal density</h2><Heatmap seed={9}/></section>
    </div>
  );
}
