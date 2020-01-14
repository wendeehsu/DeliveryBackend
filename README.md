# DeliveryBackend
backend for delivery management system (final project for "Databse Management 2019")

## 安裝
1. mariadb (https://mariadb.org/download/)
2. nodejs (https://nodejs.org/en/download/)

## Set up
1. 到 cmd 執行 
```
git clone https://github.com/wendeehsu/DeliveryBackend.git
```
執行完應該會多一個 DeliveryBackend 的資料夾
```
cd DeliveryBackend
```

2. 先登入 `root` 使用者
```
mysql -u root
```
如果是 mac，然後錯誤顯示說沒有權限就加 `sudo`:
```
sudo mysql -u root
```

3. 為資料庫建立一個使用者叫 `test` ，並給它最高權限 
```
MariaDB > CREATE USER 'test'@'localhost';
MariaDB > GRANT ALL PRIVILEGES ON *.* TO 'test'@'localhost' WITH GRANT OPTION;
MariaDB > FLUSH PRIVILEGES;
```
[指令參考](https://askubuntu.com/questions/766334/cant-login-as-mysql-user-root-from-normal-user-account-in-ubuntu-16-04)

4. 回到cmd，執行 sql
```
mysql -u test < CreateTable.sql
mysql -u test < InsertData.sql
```

5. 再次登入，如果table有建起來就成功了
```
mysql -u test
MariaDB [(none)] > show databases;
MariaDB [(none)] > use delivery_db;
MariaDB [(none)] > show tables;
MariaDB [delivery_db]> select * from User;
```

## 使用方式
1. 到 cmd 裡，進到 `DeliveryBackend` 的路徑下，執行：
```
npm install
```
2. 接著執行：
```
node server.js
```
3. 網頁打開： http://localhost:3000/api-docs/  就可以看到 api 了~
