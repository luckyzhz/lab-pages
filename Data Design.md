# Data Design

> - The 'content' attribute might be a link to a markdown file.
> - The 'link' attribute might use markdown syntax.

## Home

- Slides
- Notice
- News

## Research

```json
[
    {
        "field": "",
        "subfields": [
            ""
        ],
        "picture": ""
    }
]
```

## Publications

We might write a script to fetch the details of publications through their DOI.

```json
[
    {
        "cite": "",
        "link": ""
    }
]
```

- International Conference
- International Journal
- Domestic Conference
- Domestic Journal

## Courses

Use markdown file.

```json
[
    {
        "title": "",
        "content": ""
    }
]
```

## Notice

```json
[
    {
        "title": "",
        "coordinator": "",
        "date": "",
        "content": ""
    }
]
```

- Ongoing
- Completed

## News

```json
[
    {
        "title": "",
        "date": "",
        "link": ""
    }
]
```

The content attribute may link to a markdown table.

## Gallery

```json
[
    {
        "title": "",
        "images": [
            {
                "link": "",
                "caption": ""
            }
        ]
    }
]
```

## Members

```json
[
    {
        "name": "",
        "email": "",
        "title": "",
        "portrait": "",
        "website": "",
        "researchArea": [
            ""
        ]
    }
]
```

- Professor
- Postdoctoral
- PhD
- Master
- Undergraduate
- Graduated

## Contact

```json
[
    {
        "address": "",
        "tel": "",
        "email": "",
        "map": ""
    }
]
```

Google map embed link like this:

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406326.701186334!2d126.52673406092755!3d37.28500426097844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6ef2f5a7cb73%3A0x26b59cb3d9af4a46!2z5rGJ6Ziz5aSn5a2m5qChIEVSSUNB!5e0!3m2!1szh-CN!2skr!4v1700165528243!5m2!1szh-CN!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

We just need to fill in the `src` attribute to the `map` property.
