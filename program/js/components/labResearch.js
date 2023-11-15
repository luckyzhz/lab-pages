const labResearch = {
    props: {
        "research": Object,
    },
    template:
        `
        <div class="lab-research">
            <h2>{{ research.field }}</h2>
            <div class="research-picture">
                <img :src="research.picture">
            </div>
            <div>
                <ul>
                    <li v-for="subfield in research.subfields" :key="Math.random()">
                        {{ subfield }}
                    </li>
                </ul>
            </div>
        </div>
        `
}

export { labResearch };