import {
    labCourses,
    labContacts,
    labMembers,
    labResearches,
    labGallery,
    labNotices,
    labPublications,
} from "./components/components.js";

// Set all the urls needed
const coursesUrl = `config/Courses/Courses.md`;
const contactUrl = `config/Contact/Contact.json`;
const researchUrl = `config/Research/Research.json`;
const galleryUrl = `config/Gallery/Gallery.json`;
const noticesUrlBase = `config/Notices/`;
const publicationsUrlBase = `config/Publications/`;
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
        path: "/courses",
        component: labCourses,
        props: {
            coursesUrl: coursesUrl,
        }
    },
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
    {
        path: "/gallery",
        component: labGallery,
        props: {
            galleryUrl: galleryUrl,
        },
    },
    {
        path: "/notices",
        component: labNotices,
        props: {
            noticesUrlBase: noticesUrlBase,
        },
    },
    {
        path: "/publications",
        component: labPublications,
        props: {
            publicationsUrlBase: publicationsUrlBase,
        },
    },
];
const router = new VueRouter({
    routes: routes,
})

export { router };
