(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    11: function (e, i, a) {
      "use strict";
      a.r(i);
      var s = a(1),
        c = a.n(s),
        r = a(3),
        n = a.n(r),
        t = a(4),
        l = (a(9), a(0)),
        o = function (e) {
          var i = e.food,
            a = e.foods,
            s = e.setFoods,
            c = e.index;
          return Object(l.jsx)("div", {
            className: "container",
            children: Object(l.jsxs)("div", {
              className: "card",
              children: [
                Object(l.jsx)("div", {
                  className: "remove",
                  onClick: function () {
                    var e = a.filter(function (e, i) {
                      return i !== c;
                    });
                    s(e);
                  },
                  children: Object(l.jsx)("img", {
                    src: "images/delete.png",
                    alt: "",
                    width: "50px",
                    height: "50px",
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "img-container",
                  children: Object(l.jsx)("img", { src: i.url, alt: "" }),
                }),
                Object(l.jsx)("div", { className: "title", children: i.name }),
                Object(l.jsxs)("div", {
                  className: "calorie",
                  children: ["Calories: ", i.calories],
                }),
              ],
            }),
          });
        };
      var d = function () {
        var e = Object(s.useState)([
            { name: "Pizza", calories: "56", url: "images/image1.jpg" },
            { name: "Burger", calories: "69", url: "images/image2.jpg" },
            { name: "Coke", calories: "500", url: "images/image3.jpg" },
            { name: "Brownie", calories: "180", url: "images/image4.jpg" },
            { name: "Fried Rice", calories: "90", url: "images/image5.jpg" },
            { name: "Pani Puri", calories: "10", url: "images/image6.jpg" },
          ]),
          i = Object(t.a)(e, 2),
          a = i[0],
          c = i[1];
        return Object(l.jsxs)("div", {
          className: "App",
          children: [
            Object(l.jsx)("header", { children: "Foodpedia" }),
            Object(l.jsx)("div", {
              className: "wrap",
              children: Object(l.jsx)("main", {
                children: a.map(function (e, i) {
                  return Object(l.jsx)(
                    o,
                    { food: e, foods: a, setFoods: c, index: i },
                    i
                  );
                }),
              }),
            }),
          ],
        });
      };
      n.a.render(
        Object(l.jsx)(c.a.StrictMode, { children: Object(l.jsx)(d, {}) }),
        document.getElementById("root")
      );
    },
    9: function (e, i, a) {},
  },
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.fa62712e.chunk.js.map
