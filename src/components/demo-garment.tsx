import { useId } from "react";
import type { CatalogItem, FitMode } from "@/types";

/** Local product illustrations. These are never presented as generated VTO results. */
export function DemoGarment({ item, color, fitMode = "regular", className = "", label }: {
  item: CatalogItem; color?: string; fitMode?: FitMode; className?: string; label: string;
}) {
  const id = useId().replace(/:/g, "");
  const fill = color || item.colors[0]?.hex || "#C19A6B";
  const width = fitMode === "fitted" ? .93 : fitMode === "relaxed" ? 1.07 : 1;
  const stroke = "#34372c";
  return <svg className={`demo-garment ${className}`} viewBox="0 0 360 440" role="img" aria-label={label} data-category={item.category} data-color={fill} data-fit={fitMode}>
    <defs>
      <linearGradient id={`${id}-fabric`} x1="0" x2="1" y1="0" y2="1"><stop stopColor={fill} /><stop offset=".5" stopColor={fill} /><stop offset="1" stopColor={fill} stopOpacity=".75" /></linearGradient>
      <radialGradient id={`${id}-back`}><stop stopColor="#fffef9" /><stop offset="1" stopColor="#e9e8de" /></radialGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-30%" width="180%" height="180%"><feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#263824" floodOpacity=".14" /></filter>
    </defs>
    <rect width="360" height="440" fill={`url(#${id}-back)`} />
    <circle cx="180" cy="205" r="140" fill="none" stroke="#d9decd" strokeWidth=".6" />
    <path d="M35 385H325M180 35V395" stroke="#d9decd" strokeWidth=".6" strokeDasharray="3 6" />
    <ellipse cx="180" cy="378" rx="88" ry="9" fill="#344a2310" />
    <g transform={`translate(180 220) scale(${width} 1) translate(-180 -220)`} fill={`url(#${id}-fabric)`} stroke={stroke} strokeOpacity=".45" strokeWidth="1.2" strokeLinejoin="round" filter={`url(#${id}-shadow)`}>
      {item.category === "outerwear" && <>
        <path d="M147 69L117 87 72 115 55 263 91 269 116 164 106 364 254 364 244 164 269 269 305 263 288 115 243 87 213 69Z" />
        <path d="M147 69L179 99 213 69 229 107 205 123 218 141 170 200 134 142 153 124 130 108Z" fill={fill} />
        <path d="M180 100L170 200V364M118 236L149 242M215 242L246 236M116 196L111 328M244 196L249 328" fill="none" />
        <path d="M113 202H247V218H113Z" fill={fill} /><rect x="170" y="201" width="23" height="18" rx="2" fill="none" />
        {[175, 238, 281, 321].map(y => <g key={y}><circle cx="161" cy={y} r="3" fill={stroke} fillOpacity=".55" /><circle cx="201" cy={y} r="3" fill={stroke} fillOpacity=".55" /></g>)}
      </>}
      {item.category === "tops" && <>
        <path d="M150 95L116 111 63 150 86 290 117 283 110 180 124 326Q180 342 236 326L250 180 243 283 274 290 297 150 244 111 210 95Z" />
        <path d="M150 95L180 115 210 95 223 129 198 147 180 120 162 147 137 129Z" fill={fill} /><path d="M180 121V332M131 175L143 303M229 175L216 303M86 276L116 270M244 270L274 276" fill="none" />
        {[164, 196, 228, 260, 292].map(y => <circle key={y} cx="180" cy={y} r="2" fill={stroke} />)}
      </>}
      {item.category === "dresses" && <>
        {/* Pantalon Denim / Gris sombre */}
        <path d="M136 215H224L238 366 189 366 180 252 171 366 122 366Z" fill="#364052" stroke={stroke} strokeWidth="1" />
        {/* Top Rouge Rubis au centre */}
        <path d="M152 108H208L216 220H144Z" fill="#9B111E" stroke={stroke} strokeWidth="1" />
        {/* Veste Crème gauche */}
        <path d="M142 85L118 105 74 135 58 258 96 264 116 168 112 250 148 250 144 108Z" fill={fill} stroke={stroke} strokeWidth="1.2" />
        {/* Veste Crème droite */}
        <path d="M218 85L242 105 286 135 302 258 264 264 244 168 248 250 212 250 216 108Z" fill={fill} stroke={stroke} strokeWidth="1.2" />
        {/* Col et revers de la veste */}
        <path d="M142 85L180 120 218 85 228 128 180 152 132 128Z" fill={fill} stroke={stroke} strokeWidth="1" />
        <line x1="180" y1="252" x2="180" y2="366" stroke="#222" strokeWidth="1" />
      </>}
      {item.category === "bottoms" && <>
        <path d="M123 79H237L248 174 233 366 189 366 180 213 171 366 127 366 112 174Z" /><path d="M123 96H237M180 98V167M137 108L127 169M223 108L233 169M146 111L151 356M214 111L209 356M129 355H171M189 355H232" fill="none" /><circle cx="180" cy="87" r="2" fill={stroke} />
      </>}
      {item.category === "sunglasses" && <g strokeWidth="8" strokeOpacity=".9"><path d="M63 183Q111 155 159 183L151 239Q112 264 78 238ZM201 183Q249 155 297 183L282 238Q248 264 209 239Z" fill="#273c3f" fillOpacity=".8" stroke={fill} /><path d="M159 188Q180 174 201 188M60 183L39 161M300 183L321 161" fill="none" stroke={fill} /><path d="M89 190L124 180M226 190L259 180" stroke="#fff" strokeWidth="3" strokeOpacity=".25" /></g>}
      {item.category === "jewelry" && <g fill="none" stroke={fill} strokeWidth="5" strokeOpacity="1">{Array.from({ length: 19 }, (_, index) => {
        const angle = Math.PI * index / 18;
        const x = 180 - 91 * Math.cos(angle); const y = 134 + 150 * Math.sin(angle);
        return <ellipse key={index} cx={x} cy={y} rx="12" ry="7" transform={`rotate(${90 - index * 10} ${x} ${y})`} />;
      })}<path d="M89 134Q180 82 271 134" strokeWidth="2" /></g>}
    </g>
  </svg>;
}
