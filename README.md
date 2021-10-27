[contribute]: https://github.com/Andre601/anti-scam-database/blob/main/.github/CONTRIBUTING.md

[issue]: https://github.com/Andre601/anti-scam-database/issues/new?template=report_domain.yml
[pr]: https://github.com/Andre601/anti-scam-database/pulls

[anti-fish]: https://anti-fish.bitflow.dev/

# Anti-Phishing Database
Welcome to the Anti-Phishing Database

This repository aims to be a reliable source for known domains used in various phishing attacks.  
While the majority of domains are about Discord does it not mean it's only for those. Other domains may also be submitted for review.

## What is Phishing?
> The below explanation is NOT a 100% accurate one. It's a generalized summary of what phishing is.  
> Please see this Wikipedia article for a mor in-depth explanation: https://en.wikipedia.org/wiki/Phishing

Phishing is a form of social engineering where an attacker sends a spoofed message to someone else in an attempt to trick them to reveal their sensitive information such as login data (username and password).  
The most common type is domains mimicing login-pages and messages claiming you can "win" prizes or free subscriptions by linking your account. Doing so will give the attacker your login information and you'll become a victim, either being forced to pay to get your account back, or getting your account abused to further spread the phishing.

## How does this Repository help?
This repository contains JSON files which each has a known phishing domain listed.

Each file is structered the same way:  
```json
{
  "domain": ":domain",
  "affected_platforms": [
    ":platform"
  ]
}
```

In addition does this repository have a `summary.json` which contains all the separate domains in a single file.  
Moderation bots and services can use this repository to protect places such as Discord servers or similar. There are also other sources available that can help with this goal. Please see the [Other sources](#other-sources) section for more info.

## How to use
To use this database, simply connect to either https://cdn.jsdelivr.net/gh/Andre601/anti-scam-database@main/database/summary.json (prefered) or https://raw.githubusercontent.com/Andre601/anti-scam-database/main/database/summary.json to get the contents of the `summary.json` file.  
You can then use that content to check messages or similar for possible links.

Keep in mind that we ONLY contain the domain itself and NOT include and sub-domains or sub-pages (i.e. `subdomain.examplescam.com/subpage` is not included, but `examplescam.com` is).

## Repository structure
The repository currently has the following folder structure:  
```
<root>
  |
  |- .github/
  |    |
  |    |- ISSUE_TEMPLATE/
  |    |    |
  |    |    |- report_domain.yml
  |    |
  |    |- CONTRIBUTING.md
  |    |- PULL_REQUEST_TEMPLATE.md
  |
  |- database/
  |    |
  |    |- 2021/
  |    |    |
  |    |    |- <domain>.<tld>-<day>.<month>.json
  |    |
  |    |- summary.json
  |
  |- README.md


```
The `database` folder is the most important folder, as it contains both the `summary.json` and individual files about the different phishing links.  
Each separate file is stored in a folder named after the year they where added (Currently `2021`) and each file name follows the structure `<domain>.<tld>-<day>.<month>.json`.

## Contribute
Do you want to help expanding this repository? Great!  
Please make sure to read the [Contributing Guide][contribute] for all the ins and outs of submitting domains to this repository before making a [Pull request][pr].  
If you don't want to PR it can you still report it by [opening a new issue][issue].

## Other sources
This repository is not the only place to get information about phishing from. There are many other awesome places that you can check out too, which can be a great help.

### 🐟🐠 (Phishing Project)
A Discord server dedicated to finding and listing phishing domains before they are used on Discord.  
They regularely update their lists and have multiple methods of finding possible phishing domains.

> Due to them constantly deleting perma-invites will you need to contact me in order to get an invite. You can do so through my [Discord Server](https://discord.gg/6dazXp6).

### [anti-fish.bitflow.dev][anti-fish]
A website and API helping you to find possible phishing links in messages.  
All you have to do is send a POST request with proper JSON and the API will tell you what links it found and other useful info.

Please read their docs for proper usage.
