import {
    labHome,
    labResearches,
    labPublications,
    labCourses,
    labNotices,
    labMembers,
    labGallery,
    labContacts,
} from "./components/components.js";

// Set all the urls needed
const homeIntroductionUrl = `config/Home/introduction.txt`;
const homeCarouselImagesUrl = `config/Home/images.json`;
const researchUrl = `config/Research/Research.json`;
const publicationsUrlBase = `config/Publications/`;
const coursesUrl = `config/Courses/Courses.md`;
const noticesUrlBase = `config/Notices/`;
const membersUrlBase = `config/Members/`;
const galleryUrl = `config/Gallery/Gallery.json`;
const contactsUrl = `config/Contacts/Contacts.json`;

// Configure routes information
const routes = [
    {
        path: "/",
        component: labHome,
        props: {
            introductionUrl: homeIntroductionUrl,
            carouselImagesUrl: homeCarouselImagesUrl,
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
        path: "/publications",
        component: labPublications,
        props: {
            publicationsUrlBase: publicationsUrlBase,
        },
    },
    {
        path: "/courses",
        component: labCourses,
        props: {
            coursesUrl: coursesUrl,
        }
    },
    {
        path: "/notices",
        component: labNotices,
        props: {
            noticesUrlBase: noticesUrlBase,
        },
    },
    {
        path: "/members",
        component: labMembers,
        props: {
            membersUrlBase: membersUrlBase,
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
        path: "/contacts",
        component: labContacts,
        props: {
            contactsUrl: contactsUrl,
        }
    },
];

const router = new VueRouter({
    routes: routes,
})

export { router };
