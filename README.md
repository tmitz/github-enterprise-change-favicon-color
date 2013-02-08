# GitHub Enterprise change favicon color

for chrome extension

# Setting 

update manifest.json. "matches" input your github enterprise URL.
default value is everything.

```
{
    "manifest_version": 2,
    "name": "Github enterprise change favicon color",
    "description": "change favicon color your GitHub Enterprise",
    "version": "0.1",
    "background": {
        "page": "./background.html"
    },
    "options_page": "./options.html",
    "content_scripts": [{
        "matches": ["https://*/*"],
        "js": ["jquery-1.9.1.min.js", "favicon.js"],
        "run_at": "document_idle"
    }]
}
```

# Author

Tomohiro Mitsumune <tmitsumune@gmail.com>
