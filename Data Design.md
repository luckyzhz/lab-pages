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
    ""
]
```

- International Conference
- International Journal
- Domestic Conference
- Domestic Journal

## Courses

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

