import {
    labCourses,
    labContacts,
    labMembers,
    labResearches,
    labGallery,
    labNotices,
    labPublications,
    labHome,
} from "./components/components.js";

// Set all the urls needed
const homeIntroductionUrl = `config/Home/introduction.txt`;
const homeCarouselImagesUrl = `config/Home/images.json`;
const coursesUrl = `config/Courses/Courses.md`;
const contactsUrl = `config/Contacts/Contacts.json`;
const researchUrl = `config/Research/Research.json`;
const galleryUrl = `config/Gallery/Gallery.json`;
const noticesUrlBase = `config/Notices/`;
const publicationsUrlBase = `config/Publications/`;
const membersUrlBase = `config/Members/`

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
        path: "/courses",
        component: labCourses,
        props: {
            coursesUrl: coursesUrl,
        }
    },
    {
        path: "/contacts",
        component: labContacts,
        props: {
            contactsUrl: contactsUrl,
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
