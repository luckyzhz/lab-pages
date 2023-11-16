import { labResearch } from "./labResearch.js";
import { fetchJson } from "./base.js";

const labResearches = {
    data: function () {
        return {
            researches: [],
        }
    },
    props: {
        researchUrl: String,
    },
    components: {
        "lab-research": labResearch,
    },
    template:
        `
        <div class="lab-researches">
            <lab-research v-for="research in researches" :research="research" :key="research.field">
            </lab-research>
        </div>
        `,
    methods: {
        fetchResearches: async function (url) {
            this.researches = await fetchJson(url);
        }
    },
    created: async function () {
        this.fetchResearches(this.researchUrl);
    }
}

export { labResearches };