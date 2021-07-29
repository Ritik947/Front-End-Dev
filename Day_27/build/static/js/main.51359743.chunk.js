(this["webpackJsonpnew-app"] = this["webpackJsonpnew-app"] || []).push([
  [0],
  {
    18: function (t, e, n) {},
    25: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(0),
        a = n.n(i),
        c = n(6),
        d = n.n(c),
        r = (n(18), n(12)),
        o = n(2),
        s = n(1);
      var l = function () {
        var t = Object(i.useState)(""),
          e = Object(r.a)(t, 2),
          n = e[0],
          a = e[1],
          c = Object(o.b)();
        return Object(s.jsxs)("form", {
          className: "input-wrapper",
          onSubmit: function (t) {
            t.preventDefault(),
              c(
                (function (t) {
                  return {
                    type: "ADD_TODO",
                    payload: { title: t, isEdit: !1 },
                  };
                })(n)
              ),
              a("");
          },
          children: [
            Object(s.jsx)("input", {
              type: "text",
              id: "todo-wrapper",
              placeholder: "Add todo here",
              value: n,
              onChange: function (t) {
                a(t.target.value);
              },
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
      var u = function () {
        var t = Object(o.c)(function (t) {
            return t.todo;
          }),
          e = Object(o.b)();
        return Object(s.jsx)("div", {
          className: "todo-list-container",
          children: t.length
            ? t.map(function (t, n) {
                return Object(s.jsxs)(
                  "div",
                  {
                    className: "todo-wrapper",
                    children: [
                      Object(s.jsx)("input", {
                        type: "text",
                        required: !0,
                        value: t.title,
                        onChange: function (t) {
                          return e(
                            ((i = n),
                            (a = t.target.value),
                            {
                              type: "UPDATE_TODO",
                              payload: { id: i, title: a },
                            })
                          );
                          var i, a;
                        },
                        disabled: t.isEdit ? "" : "disabled",
                      }),
                      Object(s.jsxs)("div", {
                        className: "btn-modify",
                        children: [
                          Object(s.jsx)("button", {
                            id: "btn-edit-todo",
                            value: t.isEdit ? "Done" : "Edit",
                            onClick: function (t) {
                              console.log(t.target.value);
                              var i = "Edit" === t.target.value;
                              e({
                                type: "EDIT_TODO",
                                payload: { id: n, isEdit: i },
                              });
                            },
                            children: t.isEdit ? "Done" : "Edit",
                          }),
                          Object(s.jsx)("button", {
                            id: "btn-delete-todo",
                            onClick: function () {
                              return e({ type: "REMOVE_TODO", payload: n });
                            },
                            children: "Delete",
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                );
              })
            : Object(s.jsx)("div", {
                className: "no-items",
                children: "Added todos will be listed here",
              }),
        });
      };
      var j = function () {
          return Object(s.jsxs)("div", {
            className: "App-container",
            children: [
              Object(s.jsx)("header", { children: "To-Do App" }),
              Object(s.jsxs)("main", {
                children: [Object(s.jsx)(l, {}), Object(s.jsx)(u, {})],
              }),
            ],
          });
        },
        p = n(5),
        b = n(13),
        O = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = arguments.length > 1 ? arguments[1] : void 0;
          return "ADD_TODO" === e.type
            ? [].concat(Object(b.a)(t), [e.payload])
            : "REMOVE_TODO" === e.type
            ? t.filter(function (t, n) {
                return n !== e.payload;
              })
            : "UPDATE_TODO" === e.type
            ? (t = t.map(function (t, n) {
                return e.payload.id === n
                  ? Object(p.a)(
                      Object(p.a)({}, t),
                      {},
                      { title: e.payload.title }
                    )
                  : t;
              }))
            : "EDIT_TODO" === e.type
            ? (t = t.map(function (t, n) {
                return e.payload.id === n
                  ? Object(p.a)(
                      Object(p.a)({}, t),
                      {},
                      { isEdit: e.payload.isEdit }
                    )
                  : t;
              }))
            : t;
        },
        h = n(4),
        v = Object(h.b)({ todo: O }),
        x = n(11),
        y = n.n(x),
        f = Object(h.c)(v, Object(h.a)(y.a));
      d.a.render(
        Object(s.jsx)(a.a.StrictMode, {
          children: Object(s.jsx)(o.a, {
            store: f,
            children: Object(s.jsx)(j, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.51359743.chunk.js.map
