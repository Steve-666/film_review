项目运行说明：
（1）分别建立数据表film,review和fav,然后使用datasource文件夹下的film.json导入film数据。
（2）只需要初始化 film 并导入数据内容， 其他数据库只需要在云数据库里创建文件夹，项目运行中会自动构建数据结构。

项目更新记录：
2020/02/13
（1）修复cloudfunctions/getSubmittedReviewList/index.js 13行中的硬编码。
（2）修复miniprogram/pages/film-review-list/film-review-list.js 36行数据结构问题。
（3）修复miniprogram/pages/film-review-preview/film-review-preview.js 中myaudio未定义的错误。