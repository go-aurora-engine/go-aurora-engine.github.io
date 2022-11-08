export default {
    title: 'Aurora',
    description: 'Just playing around.',
    lang: 'cn-ZH',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        siteTitle: false,

        logo: 'https://img-1252940994.cos.ap-nanjing.myqcloud.com/logo.png',
        socialLinks: [
            {
                icon: {
                    svg:'<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></g></svg>'
                },
                link: 'https://gitee.com/aurora-engine/aurora'
            },
        ],
        // 导航栏配置
        nav:[
            {text:"指南",link:"/introduce/aurora"},
            {
                text:"v1.3.7",
                items:[
                    {text:"更新日志",link:"/update/update"}
                ],
            },

        ],

        // 侧边栏配置
        sidebar: [
            {
                text: '介绍',
                collapsible: true,
                items: [
                    { text: '什么是 Aurora ?', link: '/introduce/aurora' },
                    { text: '快速开始', link: '/introduce/start' },
                ]
            },
            {
                text: 'Web 服务',
                collapsible: true,
                items: [
                    { text: 'Get 请求', link: '/router/get' },
                    { text: 'Post 请求', link: '/router/post' },
                    { text: 'Group 分组', link: '/router/group' },
                    { text: '中间件',link:'/router/middleware'},
                    { text: '参数验证器', link: '/router/constraint'},
                    { text: '数据响应', link: '/router/response'},
                    { text: 'File 上传', link: '/router/file'},
                ]
            },
            {
                text: 'middleware',
                collapsible: true,
                items: [
                    { text: 'cors', link: '/middlewares/cors' },
                ]
            },
            {
                text: '静态资源',
                collapsible: true,
                items: [
                    { text: '视图解析', link: '/static/static' },
                ]
            },
            {
                text: '配置模块',
                collapsible: true,
                items: [
                    { text: 'Config', link: '/config/config' },
                    { text: 'Log', link: '/config/log' },
                    { text: '系统变量', link: '/config/sys' },
                    { text: 'Recover', link: '/config/recover' },
                ]
            },
            {
                text: '组件系统',
                collapsible: true,
                items: [
                    { text: '依赖管理', link: '/component/dep' },
                    { text: '容器生命周期', link: '/component/ioc' },
                    { text: '结构体接口', link: '/component/controller' },
                ]
            },
            {
                text: 'sql',
                collapsible: true,
                items: [
                    { text: 'orm', link: '/orm/orm' },
                    { text: 'sgo', link: '/orm/sgo' },
                ]
            },
            {
                text: 'Packages',
                collapsible: true,
                items: [
                    { text: 'Packages', link: '/pkgs/pkgs' },
                ]
            },
            {
                text: 'utils',
                collapsible: true,
                items: [
                    { text: 'sliceutils', link: '/utils/sliceutils' },
                    { text: 'maputils', link: '/utils/maputils' },
                    { text: 'stringutils', link: '/utils/stringutils' },
                    { text: 'timeutils', link: '/utils/timeutils' },
                    { text: 'uuidutils', link: '/utils/uuidutils' },
                    { text: 'jsonutils', link: '/utils/jsonutils' },
                ]
            },
            {
                text: '更新',
                collapsible: true,
                items: [
                    { text: 'Update', link: '/update/update' },
                ]
            }
        ]
    },

}