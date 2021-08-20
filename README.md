# Anti-Scam Database
The Anti-Scam database is a collection of URLs of known scam-attempts.

## What is "Scam"?
> See the Wikipedia article for a more in-depth explanation: https://en.wikipedia.org/wiki/Confidence_trick  
> The below description is **no official description of the term "scam" and is given without warranty or guarantee of accuracy!**

A "scam" in the most laymen term is an attempt of abusing someones trust, naivity or greed into making them give away personal information, signing a contract or similar.  
The most common case is where a person sends a link to someone, where the link itself fakes the appearance of a popular site (Facebook, Steam, Discord, etc.) in an attempt to gain the user's login-data to then use that account to continue the scam (Also known as snowball-system).

## How does this repository work?
The repository has the following structure:

```
root
 |
 |- README.md
 |
 |- database/
     |
     |- summary.json
     |
     |- <year>/
         |
         |- <dd-mm-<num>>.json
```
The `database` folder contains the different subfolders for each year, but also a `summary.json` which contains all known urls combined into a single JSON file.  
Each file has the format `dd-mm-num.json` where `dd` is the day of its addition, `mm` is the month and `num` a increasing number, in case more than one domain has been added on the same day.

The date is determined by CET/CEST and can therefore be different from your time when you reported it.

You can now use either https://raw.githubusercontent.com/Andre601/anti-scam-database/main/database/ or use jsdelivr (more recommended) to get the latest files of the repository for yourself.  
All files have the same structure, so it should be easy for you to handle them.

## Adding and removing a domain
If you found a domain that is used for scamming or one domain no longer exists or is no longer used in scam-attempts should you open an [issue] to report it to us.  
We always try to keep the database as up-to-date as possible, but we need your help for this, so never hesitate to report a URL or even [PR it yourself][pr] if you know the structure of the JSON files.
