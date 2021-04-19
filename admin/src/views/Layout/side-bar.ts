const sideBar: Array<unknown> = [
    {
        title: '内容管理',
        key: 'm1',
        icon: 'el-icon-tickets',
        children: [
            {
                title: '文章管理',
                key: 'm1-1',
                link: '/article/article-list',
            },
            {
                title: '标签管理',
                key: 'm1-2',
                link: '/label/label-list',
            },
            {
                title: '分类管理',
                key: 'm1-3',
                link: '/category/category-list',
            }
        ]
    },
    {
        title: '运营管理',
        key: 'm2',
        icon: 'el-icon-s-marketing',
        children: [
            {
                title: 'Banner管理',
                key: 'm2-1',
                link: '/banner/banner-list',
            }
        ]
    }
]
module.exports = sideBar;