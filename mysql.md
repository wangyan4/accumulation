### windows安装

mysql 安装包安装 配置环境变量

net start mysql

mysql -u root -p



### 修改密码 mysql8

net stop mysql

mysqld --console --skip-grant-tables --shared-memory

mysql -u root

update mysql.user set anthentication_string='' where user='root' and host ='localhost';

重新打开窗口

net start mysql

mysql -u root 

alert user root@loaclhost identified by 'root';

mysql -u root -p