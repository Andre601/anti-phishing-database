const { Toolkit } = require("actions-toolkit");
const fetch = require("node-fetch");

Toolkit.run(
  async (tools) => {
    const res = await fetch(`http://api.phish.surf:5000/gimme-domains`, {
      headers: { "User-Agent": "Anti-Scam Database GitHub Action" }
    });
    if (res.status !== 200) return tools.exit.failure(`Could not retrieve latest domains from api.phish.surf:5000/gimme-domains. Site responded with ${res.status}`);
    
    
    const template = await tools.readFile("./template.md");
    const { pull_request } = tools.context.payload;
    //tools.log.debug(pull_request);
    const file = require(__dirname + "/../../database/summary.json");
    let text = [];
    file.forEach((data) => {
      text.push(`• ${data.domain}`);
    });
    text = text.join("\n");
    tools.exit.success("Successfully updated Database!");
  },
  {
    event: ["schedule"],
    secrets: ["GITHUB_TOKEN"],
  }
);
