// 项目接口
export interface IProjs{
    // userId: number,   // 项目归属用户id
    // id: number,   // 项目id
    // title: string,   // 项目标题
    // introduce: string   // 项目介绍
    count: number,
    message: string,
    projs: {
        group_id: number,
        proj_id: number,
        proj_info: string,
        proj_name: string,
        status: number,
        user_id: number
    },
    success: boolean
}

// 项目查询接口
// export interface IQueryGoods extends IProjs, IPage{
// }

// 项目具体展示数据
export class ProjsData{
    // 被选择的数据, 查询时用
    // selected_data: IQueryGoods = {
    //     userId: 0,
    //     id: 0,
    //     title: "",
    //     introduce: "",
    //     current_page: 1,
    //     data_count: 0,
    //     single_page_size: 3
    // }
    // 展示的项目数据
    goods_list: IProjs[] = []
}