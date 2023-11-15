import { labResearch } from "./labResearch.js";

const labResearches = {
    props: {
        researches: Array,
    },
    components: {
        "lab-research": labResearch,
    },
    template:
        `
        <div class="lab-researches">
            <lab-research v-for="research in researches" :research="research" :key="Math.random()">
            </lab-research>
        </div>
        `
}

export { labResearches };