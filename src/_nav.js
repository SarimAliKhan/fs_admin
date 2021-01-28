export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Customers',
      url: '/users',
      icon: 'icon-drop',
    },
    
    {
      name: 'Products',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add Products',
          url: '/products/add',
          icon: 'icon-puzzle',
        },
        {
          name: 'All Products',
          url: '/products',
          icon: 'icon-puzzle',
        },
        {
          name: 'Deactivated',
          url: '/products/deactivate',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Purchase',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add Purchase',
          url: '/purchase/add',
          icon: 'icon-puzzle',
        },
        {
          name: 'All Purchases',
          url: '/purchase',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Orders',
      icon: 'icon-bag',
      children: [
        {
          name: 'Purchase Orders',
          url: '/orders/purchase',
          icon: 'icon-bag',
        },
        {
          name: 'Sale Orders',
          url: '/orders/sales',
          icon: 'icon-bag',
        },
        // {
        //   name: 'Declined Products',
        //   url: '/orders/decline',
        //   icon: 'icon-cursor',
        // },
      ],
    },
    {
      name: 'Attributes',
      icon: 'icon-star',
      children: [
        {
          name: 'Main Attributes',
          url: '/attributes',
          icon: 'icon-star',
        },
        {
          name: 'Sub Attributes',
          url: '/attributes/sub',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Categories',
      icon: 'icon-star',
      children: [
        {
          name: 'Main Categories',
          url: '/categories',
          icon: 'icon-star',
        },
      ],
    },
    // {
    //   name: 'Tags',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'All Tags',
    //       url: '/tags',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Simple Tags',
    //       url: '/tags/simple',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Premium Tags',
    //       url: '/tags/premium',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   name: 'Bulk Product Upload',
    //   url: '/products/bulk',
    //   icon: 'icon-calculator',
    // },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Content',
    },

    // {
    //   name: 'Product Discussion',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Product Reviews',
    //       url: '/reviews',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Comments',
    //       url: '/reviews/comments',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Report',
    //       url: '/reviews/comments',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Articles',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Categories',
    //       url: '/articles/category',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Posts',
    //       url: '/articles',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //       name: 'Up',
    //       url: '/product/updatedproduct'
    // },
    {
      name: "Gallery",
      url: '/gallery',
      icon: 'icon-star'
    },
    {
      name: "Stock",
      url: '/stock',
      icon: 'icon-star'
    },
  ],
};
