"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"OTD",values:[94.6,93.8,95.1,94],suffix:"%"},{label:"$/stop",values:[4.82,4.9,4.7,5],suffix:""},{label:"Routes",values:[64,66,62,68],suffix:""},{label:"HOS risk",values:[7,8,5,9],suffix:""},{label:"Fail rate",values:[1.8,2,1.5,1.9],suffix:"%"},{label:"Dwell",values:[6.4,6.8,5.9,7.1],suffix:"m"}];
const ACTIVITY=["R-14 drift +16m","V-12 surge online","HOS risk ×7","Geofence CORE alert","OTD 94.6%"];
const ROWS=[{route:"R-07",driver:"C. Vale",stops:34,otd:"100%",drift:"0m",hos:"6.5h",status:"On time"},{route:"R-08",driver:"E. Bloom",stops:39,otd:"92%",drift:"+6m",hos:"2.9h",status:"Watch"},{route:"R-09",driver:"N. Kim",stops:35,otd:"95%",drift:"+3m",hos:"4.1h",status:"On time"},{route:"R-10",driver:"P. Fox",stops:44,otd:"87%",drift:"+14m",hos:"1.1h",status:"Drifting"},{route:"R-11",driver:"R. Shah",stops:37,otd:"98%",drift:"0m",hos:"5.9h",status:"On time"},{route:"R-12",driver:"K. West",stops:40,otd:"93%",drift:"+5m",hos:"2.6h",status:"Watch"},{route:"R-13",driver:"L. Diaz",stops:33,otd:"96%",drift:"+1m",hos:"4.8h",status:"On time"},{route:"R-14",driver:"T. Ng",stops:41,otd:"85%",drift:"+16m",hos:"1.4h",status:"Drifting"},{route:"R-15",driver:"S. Park",stops:36,otd:"99%",drift:"0m",hos:"6.2h",status:"On time"},{route:"R-18",driver:"M. Hayes",stops:42,otd:"88%",drift:"+12m",hos:"3.1h",status:"Drifting"},{route:"R-16",driver:"J. Ruiz",stops:45,otd:"91%",drift:"+8m",hos:"2.0h",status:"Watch"},{route:"R-17",driver:"A. Cole",stops:38,otd:"97%",drift:"+2m",hos:"5.4h",status:"On time"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>MAP CYBER HUD</p><h1>Dispatch board</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Phosphor HUD — sector density, route drift, HOS-aware recovery.</p></header>
<div className="video-film"><img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600&q=80" alt="Fleet"/><div className="cap">HUD FILM · SECTOR SWEEP</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<section className="sector" aria-label="Sector status">
<div><strong>NORTH</strong><div>96% stable</div><Meter value={96}/></div>
<div><strong>CORE</strong><div>88% · 3 drifting</div><Meter value={88}/></div>
<div><strong>SOUTH</strong><div>94% stable</div><Meter value={94}/></div>
</section>
<svg viewBox="0 0 640 160" className="panel" style={{width:"100%",height:160}} aria-label="Synthetic sector map">
  <rect width="640" height="160" fill="#071018"/>
  <g stroke="#39ff14" strokeOpacity=".35" fill="none"><line x1="0" y1="40" x2="640" y2="40"/><line x1="0" y1="80" x2="640" y2="80"/><line x1="0" y1="120" x2="640" y2="120"/></g>
  <path d="M40 120 C120 40,200 140,280 70 S440 30,600 90" stroke="#00f0ff" strokeWidth="2" fill="none"/>
  <path d="M20 40 C140 90,220 20,340 100 S500 130,620 50" stroke="#39ff14" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
  <circle cx="120" cy="70" r="4" fill="#39ff14"/><circle cx="280" cy="70" r="4" fill="#39ff14"/><circle cx="400" cy="55" r="4" fill="#00f0ff"/><circle cx="520" cy="85" r="4" fill="#39ff14"/>
</svg>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+5}/></FadeIn>)}</div>
<div className="grid-2"><section className="panel"><h2>OTD trend</h2><TrendArea/></section><section className="panel"><h2>Cost mix</h2><MixBars/></section></div>
<section className="panel"><h2>Route board</h2><FilterTable rows={ROWS} columns={[{key:"route",label:"Route"},{key:"driver",label:"Driver"},{key:"stops",label:"Stops"},{key:"otd",label:"OTD"},{key:"drift",label:"Drift"},{key:"hos",label:"HOS"},{key:"status",label:"Status"}]} searchKeys={["route","driver","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
