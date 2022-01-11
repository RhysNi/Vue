//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Detail from '../pages/Detail';
import Message from '../pages/Message';

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]
        },

    ]
})