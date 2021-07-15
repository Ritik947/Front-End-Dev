(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    10: function (e, c, r) {
      "use strict";
      r.r(c);
      var s = r(1),
        n = r.n(s),
        a = r(3),
        i = r.n(a),
        t = (r(8), r(0)),
        j = function (e) {
          var c = [
              { name: "Pizza", calories: "56" },
              { name: "Burger", calories: "69" },
              { name: "Coke", calories: "500" },
              { name: "Brownie", calories: "180" },
              { name: "Fried Rice", calories: "90" },
              { name: "Pani Puri", calories: "10" },
            ],
            r = "images/image" + e.number + ".jpg";
          return Object(t.jsx)("div", {
            className: "container",
            children: Object(t.jsxs)("div", {
              className: "card",
              children: [
                Object(t.jsx)("div", {
                  className: "img-container",
                  children: Object(t.jsx)("img", { src: r, alt: "" }),
                }),
                Object(t.jsx)("div", {
                  className: "title",
                  children: c[e.number - 1].name,
                }),
                Object(t.jsxs)("div", {
                  className: "calorie",
                  children: ["Calories: ", c[e.number - 1].calories],
                }),
              ],
            }),
          });
        };
      var m = function () {
        return Object(t.jsxs)("div", {
          className: "App",
          children: [
            Object(t.jsx)("header", { children: "Foodpedia" }),
            Object(t.jsxs)("main", {
              children: [
                Object(t.jsx)(j, { number: "1" }),
                Object(t.jsx)(j, { number: "2" }),
                Object(t.jsx)(j, { number: "3" }),
                Object(t.jsx)(j, { number: "4" }),
                Object(t.jsx)(j, { number: "5" }),
                Object(t.jsx)(j, { number: "6" }),
              ],
            }),
          ],
        });
      };
      i.a.render(
        Object(t.jsx)(n.a.StrictMode, { children: Object(t.jsx)(m, {}) }),
        document.getElementById("root")
      );
    },
    8: function (e, c, r) {},
  },
  [[10, 1, 2]],
]);
//# sourceMappingURL=main.e482c3c0.chunk.js.map
