/**
 * 代理规则配置
 * name: 规则名称
 * gfw: 是否被墙，如果为 true 则默认使用代理，如果为 true 则默认不使用代理,可手动切换节点。
 * urls: 规则集链接,可在这个仓库查找 https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/Clash/README.md
 * payload: 规则集,如果使用 payload,则 urls 失效。
 * extraProxies: 额外代理,一般不需要,去广告可以加一个REJECT
 * 
 * ts类型,看得懂的可以看，看不懂的就算了。
 * {
 *   name: string,
 *   gfw?: boolean,
 *   urls?: string | string[],
 *   payload?: string | string[],
 *   extraProxies?: string | string[],
 * }[]
 */

/**
 * @type { {name: string,gfw?: boolean,urls?: string | string[],payload?: string | string[],extraProxies?: string | string[]}[] }
 */
const proxyGrepConfig = [
  { name: "ADGard", gfw: false, extraProxies: "REJECT", urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/AdvertisingLite/AdvertisingLite_Classical.yaml" },
  { name: "linux.do", gfw: false, payload: "DOMAIN-SUFFIX,linux.do" },
  // { name: "linux.do", gfw: false, payload: ["DOMAIN-SUFFIX,linux.do","DOMAIN-SUFFIX,linux.do"] },//例子，多个规则可以用数组 
  { name: "GitHub", gfw: false, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitHub/GitHub.yaml" },
  {
    name: "YouTube", gfw: true, urls: [
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
      "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTubeMusic/YouTubeMusic.yaml"
    ]
  },
  { name: "Google", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml" },
  { name: "OpenAi", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml" },
  { name: "Anthropic", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Anthropic/Anthropic.yaml" },
  { name: "Gemini", gfw: true, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.yaml" },
  { name: "Cloudflare", gfw: false, urls: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Cloudflare/Cloudflare.yaml" },
]


function main(config) {
  // GPL3.0 license. origin https://linux.do/t/topic/328932 (请保留此注释, author 按需修改)
  // author : picpi https://linux.do/t/topic/328932


  const proxies = config.proxies;
  //创建域名规则组
  function createRuleProviderUrl(url) {
    return {
      "type": "http",
      "interval": 86400,
      "behavior": "classical",
      "format": "yaml",
      "url": url
    }
  }
  //创建payload对应的规则
  function createPayloadRules(payload, name) {
    const rules = [];
    const payloads = Array.isArray(payload) ? payload : [payload];
    for (const item of payloads) {
      const p = item.split(",");
      let pushIndex = p.length;
      if (p[p.length - 1].toLocaleLowerCase() == "no-resolve") {
        pushIndex--;
      }
      p.splice(pushIndex, 0, name.replaceAll(",", "-"));
      rules.push(p.join(","));
    }
    console.log(rules);
    return rules;
  }
  //被墙默认规则
  function createGfwProxyGrep(name, addProxies) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
      "name": name,
      "type": "select",
      "proxies": [...addProxies, "自动选择(最低延迟)", "负载均衡", "DIRECT"],
      "include-all": true,
    }
  }
  //默认不被墙规则
  function createProxyGrep(name, addProxies) {
    addProxies = addProxies ? (Array.isArray(addProxies) ? addProxies : [addProxies]) : [];
    return {
      "name": name,
      "type": "select",
      "proxies": [...addProxies, "DIRECT", "自动选择(最低延迟)", "负载均衡"],
      "include-all": true,
    }
  }

  const proxyGroups = [];
  const proxyGfwGroups = [];
  const ruleProviders = {};
  const rules = [];
  for (const { name, gfw, urls, payload, extraProxies } of proxyGrepConfig) {
    if (gfw) {
      proxyGfwGroups.push(createGfwProxyGrep(name, extraProxies));
    } else {
      proxyGroups.push(createProxyGrep(name, extraProxies));
    }
    if (payload) {
      rules.push(...createPayloadRules(payload, name));
    } else {
      const urlList = urls ? (Array.isArray(urls) ? urls : [urls]) : [];
      for (const index in urlList) {
        const theUrl = urlList[index];
        const iName = `${name}-rule${index != 0 ? `-${index}` : ''}`;
        ruleProviders[iName] = createRuleProviderUrl(theUrl);
        rules.push(`RULE-SET,${iName},${name}`);
      }
    }
  }


  return {
    mode: "rule",
    "find-process-mode": "strict",
    "global-client-fingerprint": "chrome",
    "unified-delay": true, //更换延迟计算方式，去除握手等额外延迟
    "tcp-concurrent": true, //TCP 并发
    "geox-url": {
      geoip: "https://ghgo.xyz/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      geosite: "https://ghgo.xyz/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    },
    dns: {
      enable: true,
      ipv6: true,
      "enhanced-mode": "fake-ip",
      "fake-ip-filter": [
        "*",
        "+.lan",
        "+.local"
      ],
      nameserver: [
        "system",
        "114.114.114.114",
        "223.5.5.5",
        "https://dns.alidns.com/dns-query",//阿里云
        "https://doh.pub/dns-query",//腾讯
      ],
      fallback: [
        "https://1.0.0.1/dns-query",//Cloudflare
        "https://sky.rethinkdns.com",//rethinkdns
        "https://dns.alidns.com/dns-query",//阿里云
        "https://doh.pub/dns-query",//腾讯
      ],
      "fallback-filter": {
        geoip: true,
        "geoip-code": "CN",
        geosite: ["gfw"],
        domain: [
          '+.google.com',
          '+.facebook.com',
          '+.youtube.com',
        ]
      }
    },
    //代理
    proxies: proxies,
    "proxy-groups": [
      {
        "name": "国内网站",
        "type": "select",
        "proxies": ["DIRECT", "自动选择(最低延迟)", "负载均衡"],
        "include-all": true,
        "url": "https://www.baidu.com/favicon.ico"
      },
      ...proxyGroups,
      {
        "name": "国外网站",
        "type": "select",
        "url": "https://www.bing.com/favicon.ico",
        "proxies": ["DIRECT", "自动选择(最低延迟)", "负载均衡"],
        "include-all": true,
      },
      ...proxyGfwGroups,
      {
        "name": "被墙网站",
        "type": "select",
        "proxies": ["自动选择(最低延迟)", "负载均衡", "DIRECT"],
        "include-all": true,
      },
      {
        "name": "自动选择(最低延迟)",
        "type": "url-test",
        "tolerance": 20,
        "include-all": true,
        "url": "https://play-lh.googleusercontent.com/1UF2WCBNl4918bNk8JsILadL9-agIjRtMpdjuPgx2ohsxnQyspdWDwYMquW1-r8mSQOSjSLOY4g=w720-rw",
      },
      {
        "name": "负载均衡",
        "type": "load-balance",
        "include-all": true,
        "hidden": true,
        "strategy": "sticky-sessions",
        "url": "https://play-lh.googleusercontent.com/1UF2WCBNl4918bNk8JsILadL9-agIjRtMpdjuPgx2ohsxnQyspdWDwYMquW1-r8mSQOSjSLOY4g=w720-rw",
      }
    ],
    "rule-providers": ruleProviders,
    rules: [
      ...rules,
      "GEOSITE,gfw,被墙网站",
      "GEOIP,CN,国内网站",
      "MATCH,国外网站"
    ]
  };
}
