import { router } from "./router.js";

import { carousel } from "./components/carousel.js";



// router can access app's properties through ` router.app`
const app = new Vue({
    el: "#app",
    components: {
        // Components has been registered in routers
        // "lab-members": labMembers,
        "carousel": carousel
    },
    data: {
    },
    computed: {
    },
    methods: {
    },
    router: router,
});


// 响应式
// 获取和导航栏是否打开绑定的复选框
const toggleNav = document.querySelector("#toggle-nav");
// 从CSS获取断点变量的值
const breakpointTablet = getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-tablet').trim();
// 创建媒体查询
const mq = window.matchMedia(`(max-width: ${breakpointTablet})`);
// 定义处理媒体查询变化的函数
function handleBreakpointChange(e) {
    if (e.matches) {
        toggleNav.checked = false;
    } else {
        toggleNav.checked = true;
    }
}

// 监听媒体查询的变化
mq.addEventListener('change', handleBreakpointChange);
// 初始检查
handleBreakpointChange(mq);
