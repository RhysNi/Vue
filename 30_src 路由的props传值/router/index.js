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
                            path: 'detail/:id/:title',
                            component: Detail,
                            // props第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'RhysNi'}
                            
                            // props第二种写法，值为布尔值，若是布尔值为真，就会把路由组件收到的所有params参数以props的形式传给Detail组件
                            // props:true

                            // props第三种写法，值为function，
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