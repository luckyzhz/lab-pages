const labPublication = {
    props: {
        "publication": Object,
    },
    template:
        `
        <div class="lab-publicaton">
            <a :href="publication.link" target="_blank">
                {{ publication.cite }}
            </a>
        </div>
        `
}

export { labPublication };