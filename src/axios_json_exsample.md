```javascript
 axios({
    url: axios.defaults.baseURL + "/post/" + url,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      offset: offset,
      length: 10,
      section: Block.section,
      order: order,
      tags: ttag,
      fliters: Block.searchText.trim().split(/\s+/),
      user_id: User.Id,
    },
    transformRequest: [
      function (data, headers) {
        let data1 = JSON.stringify(data);
        console.log(data1);
        return data1;
      },
    ],
  }).then(function (response) {
    // 处理成功情况
    console.log(response.data);
    if (clear) while (posts.length != 0) posts.pop();
    console.log(response.data);
    IfRead.value = true;
    if (response.data?.success) {
      count = response.data?.count;

      let i = 0;

      if (response.data.data != null) countt = response.data.data.length;
      console.log(countt);
      if (countt == 0) {
        message.success("没有帖子了");
      }
      if (response.data.data != null)
        for (i = 0; i < response.data.data.length; i++) {
          let temp = reactive({
            tags: response.data.data[i].tags.map((tag: any) => {
              return tag.name;
            }),
            title: response.data.data[i].post.title,
            watches: response.data.data[i].post.views,
            // comments: response.data[i].post.,
            comments: response.data.data[i].post.comment,
            ups: response.data.data[i].post.like,
            time:
              myDate.toLocaleString() + response.data.data[i].post.create_time,
            content: response.data.data[i].post.content,
            name: response.data.data[i].post.username,
            post_id: response.data.data[i].post.post_id,
            time_weeks: response.data.data[i].create_time_weeks,
            time_days: response.data.data[i].create_time_days,
            time_hours: response.data.data[i].create_time_hours,
            time_mins: response.data.data[i].create_time_mins,
            // user
            // create_time: "2022-06-03T11:23:11+08:00"
            // // dislike: 0
            // last_comment_time: "2022-06-03T11:23:11+08:00"

            // section: response.data.data[i].post.section,
            user_id: response.data.data[i].post.user_id,
            like_status: response.data.data[i].like_status,
            src: response.data.data[i].user.avatar_url,
          });
          // axios({
          //   url: axios.defaults.baseURL + "/user/info",
          //   method: "post",
          //   // headers: {
          //   //   "Content-Type": "application/json",
          //   // },
          //   data: {
          //     user_id: response.data.data[i].post.user_id
          //   },
          //   // transformRequest: [
          //   //   function (data, headers) {
          //   //     let data1 = JSON.stringify(data);
          //   //     console.log(data1);
          //   //     return data1;
          //   //   },
          //   // ],
          // }).then(function (response) {
          //   console.log(response.data)
          //   if (response.data.status) {
          //     if (response.data.data.avatar_url != "")
          //       temp.src = response.data.data.avatar_url
          //   }

          // })
          // if (response.data.data[i].image) {
          //   temp.src = response.data.data[i].image;
          // }
          if(response.data.data[i].user.avatar_url=="")temp.src="http://43.138.77.133:81/media/avatars/default.jpg"
          posts.push(temp);
        }

      console.log(posts);
      loading = false;
      // User.Name=modelRef.value.name,
      // User.Id=response.data.data.user_id,
    } else {
    }
  });
  ```