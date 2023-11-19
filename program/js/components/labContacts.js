import { labContact } from "./labContact.js";
import { fetchJson } from "./base.js";

const labContacts = {
    data: function () {
        return {
            contacts: [],
        }
    },
    props: {
        contactsUrl: String,
    },
    components: {
        "lab-contact": labContact,
    },
    template:
        `
        <div class="lab-contacts">
            <h1>Contacts</h1>
            <div v-for="(contact, index) in contacts">
                <h2>Contact {{index + 1}}</h2>
                <lab-contact :contact="contact" :key="contact.embeddedMapUrl"></lab-contact>
            </div>
        </div>
        `,
    methods: {
        fetchContacts: async function () {
            this.contacts = await fetchJson(this.contactsUrl);
        }
    },
    created: async function () {
        this.fetchContacts();
    }
}

export { labContacts };