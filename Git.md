### gitlab 配置ssh

https://www.cnblogs.com/hafiz/p/8146324.html

1. 打开git bash 命令窗口

2. 输入“ssh-keygen -t rsa -C [youremail@example.com](mailto:youremail@example.com)”

   windows默认生成的key在C盘家目录下

3. 配置全局的name和email

   `git config --global user.name your_count`

   `git ocnfig --global user.email your_email`

4. 连续3次回车 创建空密码key

5. `cat ~/.ssh/id_rsa.pub`查看公钥并复制

6. 到settings里面 添加ssh key 



#### .gitignore

```
# 忽略 .a 文件
*.a

# 但否定忽略 lib.a, 尽管已经在前面忽略了 .a 文件
!lib.a

# 仅在当前目录下忽略 TODO 文件， 但不包括子目录下的 subdir/TODO
/TODO

# 忽略 build/ 文件夹下的所有文件
build/

# 忽略 doc/notes.txt, 不包括 doc/server/arch.txt
doc/*.txt

# 忽略所有的 .pdf 文件 在 doc/ directory 下的
doc/**/*.pdf
```

### git commit log中文乱码

``` 
//待处理
```

# [git出现RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errfno 10054](https://www.cnblogs.com/qianshouxiuluo/p/11662616.html)

1.问题：git下载代码时，报“git出现RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errfno 10054”的问题，如下所示的截图

![img](https://img2018.cnblogs.com/blog/1832793/201910/1832793-20191012165127495-1172697860.png)

 

 2.解决步骤：

2.1 首先输入如下命令： 　　git config http.sslVerify "false"

2.2 如果输入上面命令提示报“ **fatal: not in a git directory** ”，则输入如下命令：git init

2.3 重新下载代码： git clone https://gitee.com......

2.4 如果还是git代码还是下载失败，则需要修改git缓存的大小为100MB，输入如下命令： git config --global http.postBuffer 100M
![img](https://img2018.cnblogs.com/blog/1832793/201910/1832793-20191012165654492-604506312.png)

 

 2.5 问题解决了。



# [解决$ git clone fatal: Authentication failed](https://www.cnblogs.com/zhuzhaoli/p/10687988.html)

今天在使用git clone克隆项目的时候报如下错误：

```
$ git clone XXXXXX
Cloning into 'XXXX'...
fatal: Authentication failed for 'XXXXXX'
```

在网上查找了一番，也使用如下命令进行了设置：

```
git config --global user.name
git config --global user.email
```

同时也清除了windows凭证管理器中记录的凭证，仍然不行，最后使用了如下命令解决：

```
git config --system --unset credential.helper
```