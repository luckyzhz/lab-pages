import { capitalize } from "./base.js";
// Template expressions are sandboxed and only have access to a [whitelist of globals](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9) such as `Math` and `Date`. You should not attempt to access user-defined globals in template expressions.

const labContact = {
    props: {
        "contact": Object,
    },
    methods: {
        // Register the function, so we can use it in `template`.
        capitalize: capitalize,
    },
    template:
        `
        <div class="lab-contact">
            <div class="lab-map">
                <iframe :src="contact.embeddedMapUrl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <ul>
                    <li v-for="(value, key) in contact.contactInfo" :key="key">
                        {{capitalize(key)}}: {{value}}
                    </li>
                </ul>
            </div>
        </div>
        `
};

export { labContact };