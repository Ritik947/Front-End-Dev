(this["webpackJsonpnew-app"] = this["webpackJsonpnew-app"] || []).push([
  [0],
  {
    13: function (e, t, n) {},
    15: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(1),
        r = n.n(o),
        c = n(7),
        a = n.n(c),
        i = n(8),
        d = n(6),
        u = n(2),
        s = (n(13), n(0));
      var j = function (e) {
        var t = e.addFood,
          n = Object(o.useState)(""),
          r = Object(u.a)(n, 2),
          c = r[0],
          a = r[1],
          i = Object(o.useState)(""),
          d = Object(u.a)(i, 2),
          j = d[0],
          l = d[1];
        return Object(s.jsxs)("form", {
          className: "input-wrapper",
          onSubmit: function (e) {
            e.preventDefault(), t({ food: c, calorie: j }), a(""), l("");
          },
          children: [
            Object(s.jsx)("input", {
              type: "text",
              id: "food-wrapper",
              placeholder: "Food",
              onChange: function (e) {
                a(e.target.value);
              },
              value: c,
              required: !0,
            }),
            Object(s.jsx)("input", {
              type: "number",
              id: "calorie-wrapper",
              placeholder: "Calories",
              onChange: function (e) {
                l(e.target.value);
              },
              value: j,
              required: !0,
            }),
            Object(s.jsx)("button", {
              id: "btn-submit",
              type: "submit",
              children: Object(s.jsx)("img", {
                src: "images/plus.svg",
                alt: "",
                width: "20px",
                height: "20px",
              }),
            }),
          ],
        });
      };
      var l = function (e) {
        var t = e.index,
          n = e.food,
          r = e.updateFood,
          c = e.removeFood,
          a = Object(o.useState)(!1),
          i = Object(u.a)(a, 2),
          d = i[0],
          j = i[1];
        return Object(s.jsxs)("div", {
          className: "food-wrapper",
          children: [
            Object(s.jsx)("input", {
              type: "text",
              required: !0,
              value: n.food,
              onChange: function (e) {
                return r(t, { food: e.target.value });
              },
              disabled: d ? "" : "disabled",
            }),
            Object(s.jsx)("input", {
              type: "number",
              required: !0,
              value: n.calorie,
              onChange: function (e) {
                return r(t, { calorie: e.target.value });
              },
              disabled: d ? "" : "disabled",
            }),
            Object(s.jsxs)("div", {
              className: "btn-modify",
              children: [
                Object(s.jsx)("button", {
                  id: "btn-edit-food",
                  onClick: function () {
                    return j(!d);
                  },
                  children: d ? "Done" : "Edit",
                }),
                Object(s.jsx)("button", {
                  id: "btn-delete-food",
                  onClick: function () {
                    return c(t);
                  },
                  children: "Delete",
                }),
              ],
            }),
          ],
        });
      };
      var b = function () {
        var e = Object(o.useState)([]),
          t = Object(u.a)(e, 2),
          n = t[0],
          r = t[1],
          c = function (e, t) {
            r(
              n.map(function (n, o) {
                return o === e ? Object(d.a)(Object(d.a)({}, n), t) : n;
              })
            );
          },
          a = function (e) {
            r(
              n.filter(function (t, n) {
                return n !== e;
              })
            );
          };
        return Object(s.jsxs)("div", {
          className: "App-container",
          children: [
            Object(s.jsx)("header", { children: "Calorie Tracker" }),
            Object(s.jsxs)("main", {
              children: [
                Object(s.jsx)(j, {
                  addFood: function (e) {
                    r([].concat(Object(i.a)(n), [e]));
                  },
                }),
                Object(s.jsx)("div", {
                  className: "food-list-container",
                  children:
                    0 === n.length
                      ? Object(s.jsx)("div", {
                          className: "no-items",
                          children: "Add Food Items here",
                        })
                      : n.map(function (e, t) {
                          return Object(s.jsx)(
                            l,
                            { index: t, food: e, updateFood: c, removeFood: a },
                            t
                          );
                        }),
                }),
              ],
            }),
          ],
        });
      };
      a.a.render(
        Object(s.jsx)(r.a.StrictMode, { children: Object(s.jsx)(b, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[15, 1, 2]],
]);
//# sourceMappingURL=main.36ea4c56.chunk.js.map
