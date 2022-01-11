//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Detail from '../pages/Detail';
import Message from '../pages/Message';

//创建一个路由器
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            },
                            meta: { isAuth: true, title: '详情' }
                        }
                    ],
                    meta: { isAuth: true, title: '消息' }

                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // beforeEnter: (to, from, next) => {
                    //      console.log('独享路由守卫',to,from)
                    //     //判断是否需要授权
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('name') === 'rhys') {
                    //             next()
                    //         } else {
                    //             alert('该用户无该功能查看权限')
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                }
            ],
            meta: { title: '主页' }
        },

    ]
})

// 全局后置路由守卫，初始化和每次路由切换之后被调用
// router.afterEach((to, from) => {
//     console.log(to, from);
//     if (to.meta.title) {
//         document.title = to.meta.title
//     } else {
//         document.title = 'RhysNi'

//     }
// })
export default router;