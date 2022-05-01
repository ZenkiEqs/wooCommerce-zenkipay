! function () {
    console.log(zenkipay_payment_args);
    var e = zenkipay_payment_args.cb_url,
        n = zenkipay_payment_args.cancel_url,
        t = zenkipay_payment_args.total_amount,
        r = zenkipay_payment_args.currency,
        a = zenkipay_payment_args.items,
        o = zenkipay_payment_args.order_id,
        s = zenkipay_payment_args.country,
        p = {
            style: {
                shape: "square",
                theme: "light"
            },
            pluginKey: zenkipay_payment_args.plugin_key,
            purchaseData: {
                country: s,
                currency: r,
                amount: 1 * t,
                items: a
            }
        };

    function c(n) {
        jQuery.post(e, n).success((function (e) {
            var n = JSON.parse(e).redirect_url;
            setTimeout(u, 1e3, n)
        }))
    }

    function u(e) {
        location.href = e
    }
    pbwPay.openModal(p, (function (e, t, r) {
        var a = {
                done: function (e) {
                    e.complete = "1", c(e)
                },
                cancel: function (e) {
                    setTimeout(u, 1e3, n)
                }
            },
            s = {
                order_id: o,
                complete: ""
            };
        e && e.postMsgType && "error" === e.postMsgType ? (s.complete = "0", c(s)) : r && r.postMsgType && a[r.postMsgType] && a[r.postMsgType](s)
    }))
}();
