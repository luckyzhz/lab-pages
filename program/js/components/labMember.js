const labMember = {
    props: {
        "member": Object,
    },
    template:
        `
        <div class="lab-member">
            <div class="member-portrait">
                <a :href="member.website" target="_blank">
                    <img :src="member.portrait">
                </a>
            </div>
            <div class="member-info">
                <h3>{{member.name}}</h3>
                <ul>
                    <li>📧 {{member.email}}</li>
                    <li>🌐
                        <a :href="member.website" target="_blank">
                            {{member.website}}
                        </a>
                    </li>
                    <li>💼 {{member.title}}</li>
                </ul>
            </div>
            <div class="member-research">
                <h4>Research Area</h4>
                <ul>
                    <li v-for="item in member.researchArea" :key="item">
                        💡 {{item}}
                    </li>
                </ul>
            </div>
        </div>
        `
}

export { labMember };