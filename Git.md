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

