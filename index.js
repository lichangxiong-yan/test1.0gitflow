// 0-1 学习gitflow流程
// git init  初始化仓库 

// git config -l 查看当前git 的配置

// git config user.name "xxx" 配置名字

// git config user.email "xx@xxxx.com" 配置邮箱

// git status 查看当前文件 存在暂存区的文件

// git add index.js  将暂存区的index.js 文件添加到 工作区

// git commit -m ''初始化项目，添加index.js文件“   本次提交的说明

// git log index.js  查看index.js文件提交的记录

// 1. 把已有的项目纳入git管理
// cd XXX //xxx 是项目代码所在文件夹
// git init //初始化 git仓库 ，会生成.git 文件夹
// 2. 新建的项目直接用 git管理
// cd xxx //xxx 是某个文件夹
// git init xxx // xxx文件夹 ，初始化git仓库，并且在该目录下创建和项目名称同名

// git 工作流程
// git仓库： 工作区-----》 暂存区 ----》版本历史区 -----》远端
// - 工作区、暂存区、历史区 都是在计算机本地。远端是在互联网云端
// - 在计算机本地修改代码的地方叫工作区，工作区的代码是未被追踪的。
// - 通过 `git add xxx(文件,如果是所有文件可以用 . 表示)` 可以把工作区修改的代码,提交到暂存区。
// - 通过 `git commit // -m '提交信息'` 命令，可以把暂存区代码提交到版本历史区。
// - 通过 `git push` 命令可以把已经提交的提示版本提交到远端


//gitflow流程
// master 用于保存上线版本代码
// develop 用于保存相对稳定版本代码，所有的feature 分支都从该分支创建
// feature/* 用于开发新的功能， 不同的功能创建不同的功能分支
// release/* 用于代码上线前准备(测试、文档完善、bug修复)，该分支从develop分支创建
// bugfix/*  用于修复不紧急的bug
// hotfix/*  用于修复紧急的bug