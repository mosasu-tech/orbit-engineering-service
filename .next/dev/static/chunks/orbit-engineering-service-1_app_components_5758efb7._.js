(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/orbit-engineering-service-1/app/components/MapWithRouting.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapWithRouting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MapWithRouting({ location }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapWithRouting.useEffect": ()=>{
            if (!mapRef.current) {
                mapRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map('map', {
                    center: [
                        location.lat,
                        location.lng
                    ],
                    zoom: 13
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapRef.current);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                location.lat,
                location.lng
            ]).addTo(mapRef.current);
            mapRef.current.setView([
                location.lat,
                location.lng
            ], 13);
            // Fix blank map render
            setTimeout({
                "MapWithRouting.useEffect": ()=>mapRef.current.invalidateSize()
            }["MapWithRouting.useEffect"], 300);
        }
    }["MapWithRouting.useEffect"], [
        location
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "map",
        className: "w-full h-[450px] rounded-xl shadow-lg"
    }, void 0, false, {
        fileName: "[project]/orbit-engineering-service-1/app/components/MapWithRouting.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(MapWithRouting, "9mn7MMe4fPaZ50ApsOpRWF2HbFg=");
_c = MapWithRouting;
var _c;
__turbopack_context__.k.register(_c, "MapWithRouting");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreLocator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$components$2f$MapWithRouting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/components/MapWithRouting.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/fetchGoogleSheet'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StoreLocator() {
    _s();
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreLocator.useEffect": ()=>{
            async function loadLocations() {
                const data = await fetchGoogleSheet();
                setLocations(data);
            }
            loadLocations();
        }
    }["StoreLocator.useEffect"], []);
    if (!locations.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading locations..."
    }, void 0, false, {
        fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
        lineNumber: 18,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-6xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-4",
                children: "Find Our Offices"
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto pb-3 mb-4",
                children: locations.map((loc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelected(index),
                        className: `px-6 py-2 rounded-full border shrink-0 transition ${selected === index ? "bg-black text-white" : "bg-white text-gray-600 border-gray-400"}`,
                        children: loc.name
                    }, index, false, {
                        fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$components$2f$MapWithRouting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                location: locations[selected]
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(StoreLocator, "jG55B1Zr1lCJYnGiLC+a+tdo1m0=");
_c = StoreLocator;
var _c;
__turbopack_context__.k.register(_c, "StoreLocator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=orbit-engineering-service-1_app_components_5758efb7._.js.map