const data = {
    HeaderMenus : [
        {
            name:"Today's Deal",
            href: '/search?tag=todays-deal',
        },
        {
            name:"New Arrivals",
            href: '/search?tag=new-arrival',
        },
        {
            name:"Featured Products",
            href: '/search?tag=featured',
        },
        {
            name:"Best Sellers",
            href: '/search?tag=best-seller',
        },
        {
            name:"Browsing History",
            href: '/#browsing-history',
        },
        {
            name:"Customer Services",
            href: '/page/customer-services',
        },
        {
            name:"About Us",
            href: '/page/about-us',
        },
        {
            name:"Help",
            href:"/page/help",
        },
    ],
    carousels:[
        {
            title:"Most Popular Shoes for sale",
            buttonCaption: "Shop now",
            image:'/images/banner3.jpg',
            url:'/search?category=Shoes',
            isPublished: true,
        },
        {
            title:"Best sellers in T-Shirts",
            buttonCaption: "Shop now",
            image:'/images/banner1.jpg',
            url:'/search?category=T-Shirts',
            isPublished: true,
        },
        {
            title:"Best Deals on wrist watches",
            buttonCaption: "Shop now",
            image:'/images/banner2.jpg',
            url:'/search?category=Wrist Watches',
            isPublished: true,
        },
    ],
}

export default data