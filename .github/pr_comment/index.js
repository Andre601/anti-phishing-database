const { Toolkit } = require("actions-toolkit");
const fetch = require("node-fetch");

Toolkit.run(
  async (tools) => {
    const pr = tools.inputs.pr_number;
    const template = tools.readFile("./template.md");
    const { pull_request } = tools.context.payload;
    const body = {
      body: template,
      start_side: "LEFT",
      start_line: 0,
    };
    tools.log.debug("Commenting on pr...");
    const res = await fetch(`${pull_request.self}/comments`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    if (res.status !== 201) return tools.exit.failure("Could not comment on the pr");
    tools.exit.success("Successfully commented!");
  },
  {
    event: ["pull_request"],
    secrets: ["GITHUB_TOKEN"],
  }
);
