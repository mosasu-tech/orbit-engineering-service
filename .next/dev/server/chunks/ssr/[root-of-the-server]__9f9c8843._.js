module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/orbit-engineering-service-1/app/components/MapWithRouting.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapWithRouting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function MapWithRouting({ location }) {
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mapRef.current) {
            mapRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map('map', {
                center: [
                    location.lat,
                    location.lng
                ],
                zoom: 13
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapRef.current);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].marker([
            location.lat,
            location.lng
        ]).addTo(mapRef.current);
        mapRef.current.setView([
            location.lat,
            location.lng
        ], 13);
        // Fix blank map render
        setTimeout(()=>mapRef.current.invalidateSize(), 300);
    }, [
        location
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "map",
        className: "w-full h-[450px] rounded-xl shadow-lg"
    }, void 0, false, {
        fileName: "[project]/orbit-engineering-service-1/app/components/MapWithRouting.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
}),
"[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// lib/fetchGoogleSheet.ts
__turbopack_context__.s([]);
"use turbopack no side effects";
;
}),
"[project]/orbit-engineering-service-1/app/lib/data:b9957d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403b0062715340a2a1adb6b9a0058963d0cc0799ff":"getSheetData"},"orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts",""] */ __turbopack_context__.s([
    "getSheetData",
    ()=>getSheetData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getSheetData = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("403b0062715340a2a1adb6b9a0058963d0cc0799ff", __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getSheetData"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmV0Y2hHb29nbGVTaGVldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvZmV0Y2hHb29nbGVTaGVldC50c1xyXG4ndXNlIHNlcnZlcic7XHJcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gJ2dvb2dsZWFwaXMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNoZWV0RGF0YShzaGVldE5hbWU6IHN0cmluZykge1xyXG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkdPT0dMRV9BUElfS0VZO1xyXG4gIGNvbnN0IHNwcmVhZHNoZWV0SWQgPSBwcm9jZXNzLmVudi5HT09HTEVfU0hFRVRfSUQ7XHJcbiAgaWYgKCFhcGlLZXkgfHwgIXNwcmVhZHNoZWV0SWQpIHtcclxuICAgIGNvbnNvbGUud2FybignTWlzc2luZyBHT09HTEVfQVBJX0tFWSBvciBHT09HTEVfU0hFRVRfSUQnKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoeyB2ZXJzaW9uOiAndjQnLCBhdXRoOiBhcGlLZXkgfSk7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmdldCh7XHJcbiAgICBzcHJlYWRzaGVldElkLFxyXG4gICAgcmFuZ2U6IHNoZWV0TmFtZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm93cyA9IHJlcy5kYXRhLnZhbHVlcztcclxuICBpZiAoIXJvd3MgfHwgcm93cy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcclxuXHJcbiAgY29uc3QgaGVhZGVycyA9IHJvd3NbMF07XHJcbiAgcmV0dXJuIHJvd3Muc2xpY2UoMSkubWFwKChyb3cpID0+IHtcclxuICAgIGNvbnN0IG9iajogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gICAgaGVhZGVycy5mb3JFYWNoKChoLCBpKSA9PiB7XHJcbiAgICAgIG9ialtoIGFzIHN0cmluZ10gPSByb3dbaV0gPz8gJyc7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZUQUlzQiJ9
}),
"[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSheetData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$data$3a$b9957d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSheetData"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$data$3a$b9957d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/lib/data:b9957d [app-ssr] (ecmascript) <text/javascript>");
}),
"[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoreLocator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$components$2f$MapWithRouting$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/components/MapWithRouting.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orbit-engineering-service-1/app/lib/fetchGoogleSheet.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function StoreLocator() {
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadLocations() {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$lib$2f$fetchGoogleSheet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGoogleSheet"])();
            setLocations(data);
        }
        loadLocations();
    }, []);
    if (!locations.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading locations..."
    }, void 0, false, {
        fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
        lineNumber: 18,
        columnNumber: 33
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-6xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-4",
                children: "Find Our Offices"
            }, void 0, false, {
                fileName: "[project]/orbit-engineering-service-1/app/components/StoreLocator.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto pb-3 mb-4",
                children: locations.map((loc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orbit$2d$engineering$2d$service$2d$1$2f$app$2f$components$2f$MapWithRouting$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9f9c8843._.js.map