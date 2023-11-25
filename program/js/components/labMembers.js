import { labMember } from "./labMember.js";
import { fetchJson } from "./base.js";

const labMembers = {
    data: function () {
        return {
            members: [],
            categories: [
                "Professor",
                "Postdoctoral",
                "PhD",
                "Master",
                "Undergraduate",
            ]
        }
    },
    props: {
        "membersUrlBase": String,
    },
    components: {
        "lab-member": labMember,
    },
    methods: {
        fetchMembers: async function () {
            const result = [];
            let url;
            for (const category of this.categories) {
                url = this.membersUrlBase + category + ".json";
                const currentMembers = await fetchJson(url);
                result.push(currentMembers);
            }
            this.members = result;
        },
    },
    created: async function () {
        this.fetchMembers();
    },
    template:
        `
        <div class="lab-members">
            <h1>Members</h1>
            <div v-for="(currentMembers, index) in members" :class="categories[index]" :key="categories[index]">
                <h2>{{ categories[index] }}</h2>
                <div>
                    <lab-member v-for="member in currentMembers" :member="member" :key="member.email"></lab-member>
                </div>
            </div>
        </div>
        `,
}

export { labMembers };