import { labContacts, labMembers, labResearches } from "./components/components.js";

// Set all the urls needed
const contactUrl = `config/Contact/Contact.json`;
const researchUrl = `config/Research/Research.json`;
const memberCategories = [
    "Professor",
    "Postdoctoral",
    "Phd",
    "Master",
    "Undergraduate"
];
const memberUrls = function () {
    const base = `config/Members/`;
    const result = {};
    for (const category of memberCategories) {
        result[category] = base + category + ".json";
    }
    return result;
}();


// Configure routes information
const routes = [
    {
        path: "/contact",
        component: labContacts,
        props: {
            contactUrl: contactUrl,
        }
    },
    {
        path: "/research",
        component: labResearches,
        props: {
            researchUrl: researchUrl,
        }
    },
    {
        path: "/member",
        component: labMembers,
        props: {
            memberUrls: memberUrls,
        },
    },

];
const router = new VueRouter({
    routes: routes,
})

export { router };
