let A = document.getElementById("date");
let B = document.getElementById("current");
let C = document.getElementById("raw");
let D = document.getElementById("years");
let E = document.getElementById("years-decimal");
let F = document.getElementById("years-months");
let G = document.getElementById("years-months-decimal");
let H = document.getElementById("years-months-days");
let I = document.getElementById("years-days");
let J = document.getElementById("months");
let K = document.getElementById("months-decimal");
let L = document.getElementById("months-days");
let M = document.getElementById("days");
let N = document.getElementById("days-decimal");
let O = document.getElementById("days-hours");
let P = document.getElementById("days-hours-minutes");
let Q = document.getElementById("days-hours-minutes-seconds");
let R = document.getElementById("hours");
let S = document.getElementById("hours-decimal");
let T = document.getElementById("hours-minutes");
let U = document.getElementById("hours-minutes-decimal");
let V = document.getElementById("hours-minutes-seconds");
let W = document.getElementById("minutes");
let X = document.getElementById("minutes-decimal");
let Y = document.getElementById("minutes-seconds");
let Z = document.getElementById("seconds");
let a, b, c, d, e, f, g, h, i, j, k, l, m, n;

setInterval(function () {
    a = new Date();
    b = new Date(Date.parse("16 Aug 2031 15:00:00 EST"));
    c = new Date(b.getTime() - a.getTime());
    d = (c / 1000 / 60 / 60 / 24 / 30.4167 / 12); // years
    e = (c / 1000 / 60 / 60 / 24 / 30.4167); // months
    f = (c / 1000 / 60 / 60 / 24); // days
    g = (c / 1000 / 60 / 60); // hours
    h = (c / 1000 / 60); // minutes;
    i = (c / 1000); // seconds;
    j = ((e) - (12 * Math.floor(d))); // month remainders
    k = ((f) - (30.4167 * Math.floor(e))); // day remainders
    l = ((g) - (24 * Math.floor(f))); // hour remainders
    m = ((h) - (60 * Math.floor(g))); // minute remainders
    n = ((i) - (60 * Math.floor(h))); // second remainders

    if (Math.floor(e) == 0) {
        e += 11;
    }

    if (Math.floor(f) == 0) {
        f += 364;
    }

    if (Math.floor(g) == 0) {
        g += 23;
    }

    if (Math.floor(h) == 0) {
        h += 59;
    }

    if (Math.floor(i) == 0) {
        i += 59;
    }

    A.innerText = "Current Date: " + new Date("16 Aug 2031 15:00:00 EST").toString();
    B.innerText = "Target Date: " + a.toString();
    C.innerText = "Milliseconds Remaining: " + c.getTime() + " ms";
    D.innerText = "Years Remaining: " + Math.round(d) + " yr";
    E.innerText = "Exact Years Remaining: " + d.toFixed(12) + " yr";
    F.innerText = "Years and Months Remaining: " + Math.floor(d) + " yr " + Math.round(j) + " mo";
    G.innerText = "Years and Exact Months Remaining: " + Math.floor(d) + " yr " + j.toFixed(12) + " mo";
    H.innerText = "Years, Months, and Days Remaining:  " + Math.floor(d) + " yr " + Math.floor(j) + " mo " + Math.round(k) + " d"
    I.innerText = "Years and Days Remaining: " + Math.floor(d) + " yr " + Math.round(k) + " d";
    J.innerText = "Months Remaining: " + Math.round(e) + " mo";
    K.innerText = "Exact Months Remaining: " + e.toFixed(12) + " mo";
    L.innerText = "Months and Days Remaining: " + Math.floor(e) + " mo " + Math.round(k) + " d";
    M.innerText = "Days Remaining: " + Math.round(f) + " d";
    N.innerText = "Exact Days Remaining: " + f.toFixed(12) + " d";
    O.innerText = "Days and Hours Remaining: " + Math.floor(f) + " d " + Math.round(l) + " hr";
    P.innerText = "Days, Hours, and Minutes Remaining: " + Math.floor(f) + " d " + Math.floor(l) + " hr " + Math.round(m) + " min";
    Q.innerText = "Days, Hours, Minutes, and Seconds Remaining: " + Math.floor(f) + " d " + Math.floor(l) + " hr " + Math.floor(m) + " min " + Math.round(n) + " sec";
    R.innerText = "Hours Remaining: " + Math.round(g) + " hr";
    S.innerText = "Exact Hours Remaining: " + g.toFixed(12) + " hr";
    T.innerText = "Hours and Minutes Remaining: " + Math.floor(g) + " hr " + Math.round(m) + " min";
    U.innerText = "Hours and Exact Minutes Remaining: " + Math.floor(g) + " hr " + m.toFixed(12) + " min";
    V.innerText = "Hours, Minutes, and Seconds Remaining: " + Math.floor(g) + " hr " + Math.floor(m) + " min " + Math.round(n) + " sec";
    W.innerText = "Minutes Remaining: " + Math.round(h) + " min";
    X.innerText = "Exact Minutes Remaining: " + h.toFixed(12) + " min";
    Y.innerText = "Minutes and Seconds Remaining: " + Math.floor(h) + " min " + Math.round(n) + " sec";
    Z.innerText = "Seconds Remaining: " + Math.round(i) + " sec";
}, 1);