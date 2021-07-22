/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
(this["webpackJsonpnew-app"] = this["webpackJsonpnew-app"] || []).push([
  [0],
  {
    11: function (e, t, a) {},
    14: function (e, t, a) {
      a.r(t);
      var c = a(1),
        r = a.n(c),
        s = a(5),
        n = a.n(s),
        i = a(2),
        o = (a(11), a.p + "static/media/search.svg"),
        h = a(4),
        u = a.n(h),
        l = a(6),
        d = function (e, t, a, r) {
          var s = Object(c.useState)(a),
            n = Object(i.a)(s, 2),
            o = n[0],
            h = n[1];
          return (
            Object(c.useEffect)(
              function () {
                e &&
                  e.trim() &&
                  (function () {
                    var e = Object(l.a)(
                      u.a.mark(function e() {
                        var a, c;
                        return u.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  t("fetching"),
                                  (e.next = 3),
                                  fetch(o, {
                                    method: "GET",
                                    headers: {
                                      "x-rapidapi-key":
                                        "687e7bd97cmsh2d161213064f85bp1ecaabjsn5a362592f237",
                                      "x-rapidapi-host":
                                        "contextualwebsearch-websearch-v1.p.rapidapi.com",
                                    },
                                  })
                                );
                              case 3:
                                return (a = e.sent), (e.next = 6), a.json();
                              case 6:
                                (c = e.sent),
                                  console.log(c),
                                  r(c),
                                  t("fetched");
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()();
              },
              [o]
            ),
            [h]
          );
        },
        j = a(0),
        p = function (e) {
          var t = e.setStatus,
            a = e.setSearchData,
            r = Object(c.useState)(""),
            s = Object(i.a)(r, 2),
            n = s[0],
            h = s[1],
            u = encodeURIComponent(n),
            l =
              "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=".concat(
                u,
                "&pageNumber=1&pageSize=10&autoCorrect=true"
              ),
            p = d(n, t, l, a),
            b = Object(i.a)(p, 1)[0];
          return Object(j.jsxs)("div", {
            className: "search-bar",
            children: [
              Object(j.jsx)("input", {
                className: "search-input",
                type: "text",
                placeholder: "Search text here (500 Searches/Day LIMIT)",
                onChange: function (e) {
                  h(e.target.value);
                },
              }),
              Object(j.jsx)("img", {
                src: o,
                alt: "",
                onClick: function () {
                  n && n.trim() && (b(l), console.log("Search request made"));
                },
              }),
            ],
          });
        },
        b = function (e) {
          var t = e.status,
            a = e.searchData;
          return a
            ? "fetching" === t
              ? Object(j.jsx)("div", {
                  style: { color: "white" },
                  children: "Waiting for results",
                })
              : Object(j.jsx)("div", {
                  className: "results-container",
                  children: Object(j.jsx)("div", {
                    className: "related-results",
                    children: a.relatedSearch.map(function (e, t) {
                      return Object(j.jsx)(
                        "div",
                        { className: "related-result", children: e },
                        t
                      );
                    }),
                  }),
                })
            : "fetching" === t
            ? Object(j.jsx)("div", {
                style: { color: "white" },
                children: "Waiting for results",
              })
            : Object(j.jsx)("div", {
                style: { color: "white" },
                children: "Search for something",
              });
        },
        f = a.p + "static/media/logo.png";
      var O = function () {
        var e = Object(c.useState)(null),
          t = Object(i.a)(e, 2),
          a = t[0],
          r = t[1],
          s = Object(c.useState)("idle"),
          n = Object(i.a)(s, 2),
          o = n[0],
          h = n[1];
        return Object(j.jsxs)("div", {
          className: "App",
          children: [
            Object(j.jsx)("header", {
              className: "App-header",
              children: Object(j.jsx)("img", { src: f, alt: "" }),
            }),
            Object(j.jsxs)("main", {
              children: [
                Object(j.jsx)(p, { setStatus: h, setSearchData: r }),
                Object(j.jsx)(b, { status: o, searchData: a }),
              ],
            }),
          ],
        });
      };
      n.a.render(
        Object(j.jsx)(r.a.StrictMode, { children: Object(j.jsx)(O, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[14, 1, 2]],
]);
//# sourceMappingURL=main.d127f1b7.chunk.js.map
