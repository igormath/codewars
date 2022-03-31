nbYear = (p0, percent, aug, p) => {
    let n = 0;

    do {
        p0 += Math.floor(p0 * (percent / 100)) + aug;
        n++;
    } while (p0 < p);

    return n;
}
