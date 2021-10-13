import {createRouter, createWebHashHistory} from 'vue-router';
import HelloWorld from "./components/HelloWorld";
import Resume from "./components/resume/Resume";

const routes = [
    {path: '/resume', component: Resume},
    {path: '/', component: HelloWorld},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
