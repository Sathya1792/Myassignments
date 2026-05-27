

function browserlauncher(browser) {
    if (browser === "chrome") {
        return"chrome is launched";


    } else if (browser === "firefox") {
        return "firefox is launched";
    } else if (browser === "edge") {
        return "edge is launched";
    } else {
        return "invalid browser";
    }
}

console.log(browserlauncher("chrome"));



function runtestcase(runtest) {
    switch (runtest) {
        case "smoke":
            return "running smoke test";
        case "regression":
            return "running regression test";
        default:
            return "invalid test type";
    }
}

console.log(runtestcase("smoke"));
