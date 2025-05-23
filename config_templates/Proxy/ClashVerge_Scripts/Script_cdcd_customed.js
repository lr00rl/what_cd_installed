// Define main function (script entry)
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

const prependRule_for_openjobs_vpn = [
  "DOMAIN,openjobs-ai.com,DIRECT",
  "DOMAIN-SUFFIX,openjobs-ai.com,openjobs-vpn",
  "IP-CIDR,54.255.35.174/32,openjobs-vpn,no-resolve",
  "IP-CIDR,34.192.41.230/32,openjobs-vpn,no-resolve"
];

const prependRule_for_linuxdo = [
  // 将百度分流到直连
  "DOMAIN-SUFFIX,linux.do,linuxdo"
];

const prependRules_custom = prependRule_for_openjobs_vpn;

function main(config, profileName) {
  if (profileName == "建材市场") {
    // 覆盖原配置中的代理组
    config["proxy-groups"].push({
      ...groupBaseOption,
      "name": "openjobs-vpn",
      "type": "select",
      "proxies": ["3倍速率_日本20"]
    });
    config["proxy-groups"].push({
      ...groupBaseOption,
      "name": "linuxdo",
      "type": "select",
      "proxies": ["3倍速率_日本20"],
      "include-all": true,
    });
    // 把旧规则合并到新规则后面(也可以用其它合并数组的办法)
    let oldrules = config["rules"];
    config["rules"] = prependRules_custom.concat(oldrules);
  }
  return config;
}
