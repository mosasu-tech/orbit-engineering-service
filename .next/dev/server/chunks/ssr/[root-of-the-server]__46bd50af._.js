module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/orbit-engineering-service/node_modules/https-proxy-agent/dist/index.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__6f053543._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/orbit-engineering-service/node_modules/https-proxy-agent/dist/index.js [app-rsc] (ecmascript)");
    });
});
}),
"[project]/orbit-engineering-service/node_modules/node-fetch/src/index.js [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/14ef0_node-fetch_src_utils_multipart-parser_f50a42c2.js",
  "server/chunks/ssr/14ef0_c95264fa._.js",
  "server/chunks/ssr/[root-of-the-server]__87f6e720._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/orbit-engineering-service/node_modules/node-fetch/src/index.js [app-rsc] (ecmascript)");
    });
});
}),
];