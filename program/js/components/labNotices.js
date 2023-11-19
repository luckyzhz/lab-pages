import { fetchJson } from "./base.js";
import { labNotice } from "./labNotice.js";

const labNotices = {
    data: function () {
        return {
            notices: [],
            category: "Ongoing",
        }
    },
    props: {
        noticesUrlBase: String,
    },
    components: {
        "lab-notice": labNotice,
    },
    methods: {
        fetchNotices: async function () {
            const url = this.noticesUrlBase + this.category + ".json";
            this.notices = await fetchJson(url);
        },
        toggleNotices: async function (event) {
            this.category = event.target.textContent;
            await this.fetchNotices();
        }
    },
    created: async function () {
        this.fetchNotices();
    },
    template:
        `
        <div class="lab-notices">
            <h1>Notices</h1>
            <div class="control">
                <div class="button" @click.stop="toggleNotices">Ongoing</div>
                <div class="button" @click.stop="toggleNotices">Completed</div>
            </div>
            <div class="table-header">
                <div>Title</div>
                <div>Coordinator</div>
                <div>Date</div>
            </div>
            <lab-notice v-for="notice in notices" :notice="notice" :key="notice.title + notice.date"></lab-notice>
        </div>
        `
}

export { labNotices };