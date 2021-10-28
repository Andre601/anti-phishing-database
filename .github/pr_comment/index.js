const { Toolkit } = require("actions-toolkit");
const fetch = require("node-fetch");

Toolkit.run(
  async (tools) => {
    const template = await tools.readFile("./template.md");
    const { pull_request } = tools.context.payload;
    //tools.log.debug(pull_request);
    const file = require(__dirname + "/../../database/summary.json");
    let text = [];
    file.forEach((data) => {
      text.push(`• ${data.domain}`);
    });
    text = text.join("\n");
    text = template.replace("{content}", text);
    tools.log.debug(text);
    const body = {
      body: text,
      start_side: "LEFT",
      start_line: 0,
    };
    tools.log.debug(`Commenting on pr... API URL: ${pull_request._links.self.href}/comments`);
    const res = await fetch(`${pull_request._links.self.href}/comments`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    if (res.status !== 201) return tools.exit.failure(`Could not comment on the pr. Status: ${res.status}`);
    tools.exit.success("Successfully commented!");
  },
  {
    event: ["pull_request"],
    secrets: ["GITHUB_TOKEN"],
  }
);
