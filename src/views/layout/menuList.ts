
import { h } from 'vue'
import { NIcon, NImage, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const menuList: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
               previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
{
    label: '执行项目',
        key: 2,
            icon: () => h(
                NImage,
                {
                    previewDisabled:true,  src: 'svg\\主页svg\\Group-2.svg'
                }
            ),
                children: [
                    {
                        label: () =>
                            h(
                                RouterLink,
                                {
                                    to: {
                                        path: '/project',
                                        params: {
                                            lang: 'zh-CN'
                                        }
                                    }
                                },
                                '管理项目'
                            ),
                        key: 3,
                        icon: () => h(
                            NImage,
                            {
                                previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                            }
                        )

                    },
                    {
                        label: () =>
                            h(
                                RouterLink,
                                {
                                    to: {
                                        path: '/prototype',
                                        params: {
                                            lang: 'zh-CN'
                                        }
                                    }
                                },
                                '设计原型'
                            ),
                        key: 4,
                        icon: () => h(
                            NImage,
                            {
                                 previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                            }
                        )

                    },
                    {
                        label: () =>
                            h(
                                RouterLink,
                                {
                                    to: {
                                        path: '/graph',
                                        params: {
                                            lang: 'zh-CN'
                                        }
                                    }
                                },
                                '绘制图'
                            ),
                        key: 5,
                        icon: () => h(
                            NImage,
                            {
                                previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                            }
                        )

                    },

                    {
                        label: () => h(
                            RouterLink,
                            {
                                to: {
                                    path: '/document',
                                    params: {
                                        lang: 'zh-CN'
                                    }
                                }
                            },
                            "多人文档",
                        ),
                        key: 6,
                        icon: () => h(
                            NImage,
                            {
                                previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                            }
                        )
                    }
                ]
},
{
    label: () => h(
        RouterLink,
        {
            to: {
                path: '/trash',
                params: {
                    lang: 'zh-CN'
                }
            }
        },
        "回收站",
    ),
        key: 7,
            icon: () => h(
                NImage,
                {
                    previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
                }
            )
}
]
const menuList1: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-10.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-2.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
]
const menuList2: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-20.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
]
const menuList3: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-20.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-30.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
]
const menuList4: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-20.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-40.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
]
const menuList5: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-20.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-50.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
]
const menuList6: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-20.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-60.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-7.svg'
            }
        )
    }
]
const menuList7: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/group',
                        params: {
                            lang: 'zh-CN'
                        }
                    }
                },
                '管理团队'
            ),
        key: 1,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-1.svg'
            }
        )
    },
    {
        label: '执行项目',
        key: 2,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-2.svg'
            }
        ),
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/project',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '管理项目'
                    ),
                key: 3,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-3.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/prototype',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '设计原型'
                    ),
                key: 4,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-4.svg'
                    }
                )

            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                path: '/graph',
                                params: {
                                    lang: 'zh-CN'
                                }
                            }
                        },
                        '绘制图'
                    ),
                key: 5,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-5.svg'
                    }
                )

            },

            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/document',
                            params: {
                                lang: 'zh-CN'
                            }
                        }
                    },
                    "多人文档",
                ),
                key: 6,
                icon: () => h(
                    NImage,
                    {
                        previewDisabled:true,  src: 'svg\\主页svg\\Group-6.svg'
                    }
                )
            }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/trash',
                    params: {
                        lang: 'zh-CN'
                    }
                }
            },
            "回收站",
        ),
        key: 7,
        icon: () => h(
            NImage,
            {
                previewDisabled:true,  src: 'svg\\主页svg\\Group-70.svg'
            }
        )
    }
]
const menuLists = [menuList, menuList1, menuList2, menuList3, menuList4, menuList5,
    menuList6, menuList7]
export { menuList, menuLists }