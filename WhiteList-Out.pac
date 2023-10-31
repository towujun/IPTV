var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+web-List", {
    "+web-List": function(url, host, scheme) {
        "use strict";
        return "+__ruleListOf_web-List";
    },
    "+__ruleListOf_web-List": function(url, host, scheme) {
        "use strict";

        if (/(?:^|\.)qq\.com$/.test(host)) return "+WebProxy";
        if (/(?:^|\.)iqiyi\.com$/.test(host)) return "+WebProxy";
        if (/(?:^|\.)youku\.com$/.test(host)) return "+WebProxy";

        return "DIRECT";
    },
    "+WebProxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 192.168.101.1:8580; DIRECT";
    }
});
