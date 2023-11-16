import { labMember } from "./labMember.js";
import { fetchJson } from "./base.js";

const labMembers = {
    data: function () {
        return {
            members: {},
        }
    },
    props: {
        "memberUrls": Object,
    },
    components: {
        "lab-member": labMember,
    },
    template:
        `
        <div class="lab-members">
            <div v-for="(members, category) in members" :class="category" :key="category">
                <h2>{{category}}</h2>
                <div>
                    <lab-member v-for="member in members" :member="member" :key="member.email"></lab-member>
                </div>
            </div>
        </div>
        `,
    methods: {
        fetchMembers: async function () {
            const result = {};
            for (const category in this.memberUrls) {
                const currentMembers =
                    await fetchJson(this.memberUrls[category]);
                result[category] = currentMembers;
            }
            this.members = result;
        },
    },
    created: async function () {
        this.fetchMembers();
    }
}

export { labMembers };