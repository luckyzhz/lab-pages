# Data Design

## Members

```json
[
    {
        "name": "",
        "email": "",
        "portrait": "",
        "website": "",
        "researchArea": [
            ""
        ],
        "resume": [
            {
                "time": "",
                "experience": ""
            }
        ]
    }
]
```

- Principal investigator
- Co-investigator
- Postdoctoral
- PhD
- Master
- Undergraduate
- Graduated

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

*The 'content' attribute might be a link to a markdown file.*

- Ongoing
- Completed
