import {
    c as e,
    r as t,
    w as o,
    o as s,
    a,
    b as n,
    u as r,
    d as i,
    e as m,
    f as c,
    K as p,
    g as _,
    h as l,
    T as u,
    i as d,
    j as E,
    k as h,
    l as f,
    B as I,
    D as P,
    P as A,
    F as L,
    m as T,
    R as g,
    n as V,
    C as v,
    p as w,
    S as y,
    q as D,
    s as O,
    t as R,
    v as C,
    x as j,
    G as b,
    y as S,
    I as x,
    z as k,
    A as H,
    E as F,
    H as X
} from "./vendor.24e2e329.js";

const N = ["Index", "Home", "TabIndex", "TabMe", "TabNews", "TabSchool", "TabGroup"], q = {
    expose: [], setup(d) {
        const E = r(), h = i(), f = e((() => E.state.viewCache.include)), I = t("");
        return o((() => h.name), ((e, t) => {
            N.includes(e) && N.includes(t) ? I.value = "" : I.value = "slide"
        })), (e, t) => {
            const o = m("RouterView");
            return s(), a(o, null, {
                default: n((({Component: t}) => [c(u, {name: I.value}, {
                    default: n((() => [(s(), a(p, {
                        exclude: [],
                        include: _(f),
                        max: 20
                    }, [(s(), a(l(t), {key: e.$route[_("fullPath")]}))], 1032, ["include"]))])), _: 2
                }, 1032, ["name"])])), _: 1
            })
        }
    }
};
let B;
const $ = {}, M = function (e, t) {
    if (!t) return e();
    if (void 0 === B) {
        const e = document.createElement("link").relList;
        B = e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
    }
    return Promise.all(t.map((e => {
        if (e in $) return;
        $[e] = !0;
        const t = e.endsWith(".css"), o = t ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${e}"]${o}`)) return;
        const s = document.createElement("link");
        return s.rel = t ? "stylesheet" : B, t || (s.as = "script", s.crossOrigin = ""), s.href = e, document.head.appendChild(s), t ? new Promise(((e, t) => {
            s.addEventListener("load", e), s.addEventListener("error", t)
        })) : void 0
    }))).then((() => e()))
}, J = window.sessionStorage, U = window.JSON;
var G = {
    get(e) {
        let t = J.getItem(e);
        return /^{.*}$/.test(t) && (t = U.parse(t)), t
    },
    set: (e, t) => (typeof t == typeof {} && (t = U.stringify(t)), J.setItem(e, t)),
    remove: e => J.removeItem(e),
    removeAllHistory() {
        const e = [];
        for (let t = 0, o = J.length; t < o; t++) {
            const o = J.key(t);
            o && o.startsWith("/") && e.push(o)
        }
        for (let t = 0, o = e.length; t < o; t++) J.removeItem(e[t])
    },
    clear() {
        J.clear()
    }
};
var W = d({
    state: {context: {user: {}, navigations: []}},
    getters: {getContext: e => e.context},
    actions: {
        updateContext({commit: e}, t) {
            e("updateContext", t)
        }, updateUser({commit: e}, t) {
            e("updateUser", t)
        }
    },
    mutations: {
        updateContext(e, t) {
            e.context = t
        }, updateUser(e, t) {
            e.context.user = t
        }, resetContext(e) {
            e.context = {user: {}}
        }
    },
    modules: {
        loadingState: {
            namespaced: !0, state: {isLoading: !1}, mutations: {
                updateLoading(e, t) {
                    e.isLoading = t
                }
            }
        },
        viewCache: {
            namespaced: !0,
            state: {include: ["Home"]},
            getters: {getInclude: e => e.include},
            mutations: {
                removeCacheView(e, t) {
                    e.include = e.include.filter((e => e !== t))
                }, removeAllCacheView(e) {
                    e.include = []
                }, addCacheView(e, t) {
                    e.include.push(t)
                }
            }
        },
        testInfo: {
            mutations: {
                testInfo(e, t) {
                    e.testInfo = t, localStorage.setItem("testInfo", JSON.stringify(t))
                }
            }, getters: {testInfo: e => e.testInfo}, actions: {
                TEST_INFO(e, t) {
                    e.testInfo = t
                }
            }
        }
    },
    strict: !1,
    plugins: []
});
const z = document.querySelector("#app"), K = (e, t) => {
    !1 !== e.meta.keepAlive && (W.getters["viewCache/getInclude"].includes(e.name) || W.commit("viewCache/addCacheView", e.name)), ((e, t) => {
        const o = e.fullPath, s = t.fullPath, a = G.get(o);
        a && a.history ? (a.history = !1, G.set(o, a)) : G.set(s, {history: !0}), N.includes(e.name) && G.removeAllHistory()
    })(e, t)
}, Q = E("/"), Y = [{
    path: "/",
    name: "Home",
    component: () => M((() => import("./Home.058423df.js")), ["./Home.058423df.js", "./Home.7cd2c871.css", "./vendor.24e2e329.js", "./vendor.b245b960.css", "./web-quetison.0cde22e4.js"]),
    meta: {title: "前端从入门到放弃"}
}, {
    path: "/answer/:questionBankType",
    name: "answer",
    component: () => M((() => import("./Answer.57f8258d.js")), ["./Answer.57f8258d.js", "./Answer.eb216927.css", "./AnswerOption.d7cbb6d1.js", "./AnswerOption.5e3561df.css", "./vendor.24e2e329.js", "./vendor.b245b960.css", "./web-quetison.0cde22e4.js"]),
    props: e => ({questionBankType: e.params.questionBankType}),
    meta: {title: "前端从入门到放弃"}
}, {
    path: "/complete",
    name: "Complete",
    component: () => M((() => import("./Complete.2de680cc.js")), ["./Complete.2de680cc.js", "./Complete.6cacdf18.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "前端从入门到放弃"}
}, {
    path: "/viewAnswer",
    name: "ViewAnswer",
    component: () => M((() => import("./ViewAnswer.6bfaf260.js")), ["./ViewAnswer.6bfaf260.js", "./ViewAnswer.883cb89d.css", "./vendor.24e2e329.js", "./vendor.b245b960.css", "./AnswerOption.d7cbb6d1.js", "./AnswerOption.5e3561df.css"]),
    meta: {title: "前端从入门到放弃"}
}, {
    path: "/lottery",
    name: "Lottery",
    component: () => M((() => import("./Lottery.7a4fb664.js")), ["./Lottery.7a4fb664.js", "./Lottery.dcdb72ca.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "抽奖系统"}
}, {
    path: "/lotteryTicket",
    name: "LotteryTicket",
    component: () => M((() => import("./LotteryTicket.4ecb530c.js")), ["./LotteryTicket.4ecb530c.js", "./LotteryTicket.433b58f0.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "彩票"}
}, {
    path: "/scratchCardPage",
    name: "ScratchCardPage",
    component: () => M((() => import("./ScratchCardPage.29fd4bb8.js")), ["./ScratchCardPage.29fd4bb8.js", "./ScratchCardPage.4f52e9b3.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "刮刮乐"}
}, {
    path: "/map",
    name: "Map",
    component: () => M((() => import("./Map.d724cfe6.js")), ["./Map.d724cfe6.js", "./Map.a8d0b1a5.css", "./ECharts.42a9825f.js", "./ECharts.ce7ee98a.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "彩票"}
}, {
    path: "/echartDome",
    name: "EchartDome",
    component: () => M((() => import("./EchartDome.932143a5.js")), ["./EchartDome.932143a5.js", "./ECharts.42a9825f.js", "./ECharts.ce7ee98a.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "test"}
}, {
    path: "/mySwiper",
    name: "MySwiper",
    component: () => M((() => import("./MySwiper.1b865319.js")), ["./MySwiper.1b865319.js", "./MySwiper.874b99eb.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]),
    meta: {title: "Swiper"}
}, {
    component: () => M((() => import("./Forbidden.3e4d8bfc.js")), ["./Forbidden.3e4d8bfc.js", "./Page.328e6e95.js", "./Page.be93b67e.css", "./XHeader.be2769ba.js", "./XHeader.e48d623b.css", "./vendor.24e2e329.js", "./vendor.b245b960.css", "./XFooter.f2c6ec8b.js", "./XFooter.894085d1.css", "./ListEmpty.19d4b61d.js", "./ScrollView.dff493b9.js"]),
    name: "Forbidden",
    meta: {title: "无权访问", keepAlive: !1}
}, {
    path: "/:catchAll(.*)",
    component: () => M((() => import("./NotFound.996b5919.js")), ["./NotFound.996b5919.js", "./Page.328e6e95.js", "./Page.be93b67e.css", "./XHeader.be2769ba.js", "./XHeader.e48d623b.css", "./vendor.24e2e329.js", "./vendor.b245b960.css", "./XFooter.f2c6ec8b.js", "./XFooter.894085d1.css", "./ListEmpty.19d4b61d.js", "./ScrollView.dff493b9.js"]),
    name: "NotFound",
    meta: {title: "404找不到页面", keepAlive: !1}
}];
Y.map((e => {
    e.path || (e.path = `/${e.name.charAt(0).toLowerCase()}${e.name.slice(1)}`)
}));
const Z = h({history: Q, routes: Y});
Z.beforeEach(((e, t, o) => {
    ((e, t) => {
        const o = e.fullPath, s = t.name, a = G.get(o);
        a && a.history && (N.includes(s) || W.commit("viewCache/removeCacheView", s))
    })(e, t), o()
})), Z.beforeResolve(((e, t, o) => {
    (e => {
        const t = e.fullPath, o = G.get(t);
        o && o.history ? z.classList.add("transition-reverse") : z.classList.remove("transition-reverse")
    })(e), o()
})), Z.afterEach(((e, t) => {
    K(e, t), e.meta.title ? document.title = e.meta.title : document.title = ""
})), Z.onError((e => {
    console.error(e)
}));
var ee = {
    install(e) {
        e.component("AppFooter", f((() => M((() => import("./AppFooter.ee167704.js")), ["./AppFooter.ee167704.js", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("AppHeader", f((() => M((() => import("./AppHeader.78065ae8.js")), ["./AppHeader.78065ae8.js", "./AppHeader.13f58b11.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("DataListX", f((() => M((() => import("./DataListX.5fe48ce4.js")), ["./DataListX.5fe48ce4.js", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("InlineCalendar", f((() => M((() => import("./InlineCalendar.376a5cd6.js")), ["./InlineCalendar.376a5cd6.js", "./InlineCalendar.e226b027.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("ListEmpty", f((() => M((() => import("./ListEmpty.19d4b61d.js")), ["./ListEmpty.19d4b61d.js", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("Page", f((() => M((() => import("./Page.328e6e95.js")), ["./Page.328e6e95.js", "./Page.be93b67e.css", "./XHeader.be2769ba.js", "./XHeader.e48d623b.css", "./vendor.24e2e329.js", "./vendor.b245b960.css", "./XFooter.f2c6ec8b.js", "./XFooter.894085d1.css", "./ListEmpty.19d4b61d.js", "./ScrollView.dff493b9.js"])))), e.component("PageContent", f((() => M((() => import("./PageContent.5b318d86.js")), ["./PageContent.5b318d86.js", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("Picture", f((() => M((() => import("./Picture.7e6fc910.js")), ["./Picture.7e6fc910.js", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("Preloader", f((() => M((() => import("./Preloader.faccfc35.js")), ["./Preloader.faccfc35.js", "./Preloader.22d3b466.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("ScrollView", f((() => M((() => import("./ScrollView.dff493b9.js")), ["./ScrollView.dff493b9.js", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("XFooter", f((() => M((() => import("./XFooter.f2c6ec8b.js")), ["./XFooter.f2c6ec8b.js", "./XFooter.894085d1.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("XHeader", f((() => M((() => import("./XHeader.be2769ba.js")), ["./XHeader.be2769ba.js", "./XHeader.e48d623b.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"])))), e.component("XProgressBar", f((() => M((() => import("./XProgressBar.402e1901.js")), ["./XProgressBar.402e1901.js", "./XProgressBar.4b660249.css", "./vendor.24e2e329.js", "./vendor.b245b960.css"]))))
    }
};
const te = {
    install(e) {
        e.use(I), e.use(P), e.use(A), e.use(L), e.use(T), e.use(g), e.use(V), e.use(v), e.use(w), e.use(y), e.use(D), e.use(O), e.use(R), e.use(C), e.use(j), e.use(b), e.use(S), e.use(x), e.use(k), e.use(H), e.use(F)
    }
}, oe = X(q);
oe.use(Z), oe.use(W), oe.use(te), oe.use(ee);
const se = sessionStorage.getItem("user-info") || "{}";
W.commit("testInfo", JSON.parse(se)), Z.isReady().then((() => oe.mount("#app"))).catch((e => {
    console.error(e)
}));
