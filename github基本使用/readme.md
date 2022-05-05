# B 站教程

https://www.bilibili.com/video/BV1qT4y1v7n1/?spm_id_from=333.788

怎么在 github 管理自己的代码

打开 git 界面
ssh-keygen -t rsa -C "1352760448@qq.com" 一直回车

cat ~/.ssh/id_rsa.pub 复制秘钥

在 用户 > settings > SSH and GPG keys

新增一个秘钥

然后输入
ssh -T git@github.com

成功即可

然后在源码那里 选择 ssh (一定选这个)

git clone ssh 地址

完成
