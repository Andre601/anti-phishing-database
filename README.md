[jsdelivr]: https://www.jsdelivr.com/

[issue]: https://github.com/Andre601/anti-scam-database/issues/new?template=report_domain.yml
[pr]: https://github.com/Andre601/anti-scam-database/pulls

# Anti-Scam Database
Welcome to the Anti-Scam Database!

This repository tries to be a source for moderation bots and other tools to prevent scams from happening.

## What is a scam?
> Please read this Wikipedia page for a more official description: https://en.wikipedia.org/wiki/Confidence_trick   
> The below summary is in no way an official description!

A scam is - in most basic terms - an attempt of someone (The "scammer") to abuse a person's trust, naivity or greedyness to gain access to money or sensitive information (login data, adresses, etc.).  
In most cases will the scammed person get redirected to a fake login page to use their login info there, which would then be abused to gain access to their account and continue the scam towards others (The so called "snowball effect").

## How does this repository help?
This repository hosts JSON files which contain known domains that are used in scam-attacks alongside other information that might be useful.  
Please read the info about the [file structure](#file-structure) for more info.

## Repository structure
The repository is structured like this:

```
 |
 |- database/
     |
     |- summary.json
     |
     |- <year>/
         |
         |- <domain>.<tld>-<dd>.<mm>.json
```

| File/Folder                     | Description                                                                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `database`                      | Folder containing all JSON files with the info.                                                                                                         |
| `<year>`                        | Folder named after the current year (i.e. `2021`). Used to further distinguish the different domains for when they where added.                         |
|                                 |                                                                                                                                                         |
| `summary.json`                  | File containing all domains from the different years and days. Recommended to use if you want the newest info.                                          |
| `<domain>.<tld>-<dd>.<mm>.json` | The file with the information in it. The name is based on the domain used, followed by the day of month and month at which it was PRed to the database. |

## File structure
Each JSON file has the exact same file structure to make it easier for moderation bots and similar to get the information.

Here is an example:  
```json
{
  "domain": "somescam.com",
  "affected_platforms": [
    "someplatform"
  ],
  "description": "This domain is used for scams in someplatform."
}
```

| key                  | Description                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`             | The domain without HTTP(S), subdomains and/or sub-pages that is used for the scam. You should always assume that subdomains and/or subpages are used too. |
| `affected_platforms` | List of known platforms where this scam is either posted on or that are used in the scam itself.                                                          |
| `description`        | A summary of what the scam is about and how it is used.                                                                                                   |

## How to use this repository
The easiest way to use this repository is to simply go to https://raw.githubusercontent.com/Andre601/anti-scam-database/main/database/summary.json to get the content of the `summary.json`

Alternatively could you also use [jsDelivr] to access the repository. The URL would be https://cdn.jsdelivr.net/gh/Andre601/anti-scam-database@main/database/summary.json

You can, of course, also access the separate files directly, but this may require to do so through the GitHub API.

## How to help
You can help this repository by either [reporting a domain][issue] or [PRing it yourself][pr].
