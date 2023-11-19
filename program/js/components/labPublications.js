import { labPublication } from "./labPublication.js"
import { fetchJson, removeClassFromSiblings } from "./base.js";

const labPublications = {
    data: function () {
        return {
            publications: [],
            category: "International Conference"
        }
    },
    props: {
        publicationsUrlBase: String,
    },
    components: {
        "lab-publication": labPublication,
    },
    methods: {
        fetchPublications: async function () {
            const url = this.publicationsUrlBase + this.category + ".json";
            this.publications = await fetchJson(url);
        },
        togglePublications: async function (event) {
            removeClassFromSiblings(event.target, 'active');
            event.target.classList.add('active');
            this.category = event.target.textContent;
            await this.fetchPublications();
        },
    },
    created: async function () {
        this.fetchPublications();
    },
    template:
        `
        <div class="lab-publications">
            <h1>Publications</h1>
            <div class="control">
                <div class="button active" @click.stop="togglePublications">International Conference</div>
                <div class="button" @click.stop="togglePublications">International Journal</div>
                <div class="button" @click.stop="togglePublications">Domestic Conference</div>
                <div class="button" @click.stop="togglePublications">Domestic Journal</div>
            </div>
            <lab-publication v-for="publication in publications" :publication="publication"
                :key="publication.cite"></lab-publication>
        </div>
        `
}

export { labPublications };