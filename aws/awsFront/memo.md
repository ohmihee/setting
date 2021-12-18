# ssh -i "ingoo-webpc.pem" ubuntu@ec2-3-34-135-248.ap-northeast-2.compute.amazonaws.com

# nginx 

sudo apt-get install nginx
도중에 [y/n] 나오면 y눌러주세요.

이로서 설치는 끝
이제부터 환경설정

cd /etc/nginx

1. nginx.conf : 설정파일 (text파일)
2. sites-availabel : (폴더) 애는 설정파일 저장소입니다.
    ex ) 변수선언해서 내용을 입력만 받은상태 arr = [1,2,3,4,5,6,7,8,9]

3. sites-enabled : (폴더) 애는 설정파일을 실행시키는 아이입니다.
    ex ) arr[0] // 1 
         arr[2] // 3 
         arr[4] // 5 
  윈도우로 -> 바로가기로 만들어서 실행시킵니다. -> 심볼릭 링크 

  sties-availabel > 설정파일을만들고
  sites-enabled > 바로가기 셋팅하기

  nginx 실행 

  vi 많이쓸거임. 

  cp 폴더나 파일을 복사하는거고
  mv 폴더나 파일을 이동시키는거 

  unix , linux , window 
  유료    무료     유료
     <- 프리웨어
          
계정에 따른권한들이 잘설정되어있어요.

             소유권 그룹 
drwxr-xr-x  2 root root 4096 Jul 20 02:42 sites-available
drwxr-xr-x  2 root root 4096 Jul 20 02:42 sites-enabled
drwxr-xr-x  2 root root 4096 Jul 20 02:42 snippets
-rw-r--r--  1 root root  664 Feb  4  2019 uwsgi_params
-rw-r--r--  1 root root 3071 Feb  4  2019 win-utf

cp -r [기존디렉토리] [변경할디렉토리]

sudo cp -r /etc/nginx/sites-available/ /etc/nginx/sites-available-backup

sudo cp -r /etc/nginx/sites-enabled/ /etc/nginx/sites-enabled-backup
  
/etc/nginx 

cd sites-available
sudo rm default

cd ..
/etc/nginx  <-- 여기확인

cd sites-enabled
sudo rm default

cd ..
cd sites-available

sudo vi myapp.conf


server {
    listen 80; // 포트실행번호
    location / {  // uri 가뭐냐 "/"  
        root /home/ubuntu/www // 내가 실행시킬 파일 경로 
        index index.html index.htm; // 내가 실행시킬 파일명
        try_files $uri /index.html; // http://localhost:3000/about
    }
}

server {
    listen 80; 
    location / {  
        root /home/ubuntu/www;
        index index.html index.htm; 
        try_files $uri /index.html; 
    }
}

esc 누르고 :wq! Enter

sudo vi myapp.conf

cp [기존디렉토리] [변경할디렉토리]
mv [기존디렉토리] [변경할디렉토리]
ln -s [기존디렉토리] [바로가기만들디렉토리]

/etc/nginx/sites-available
myapp.conf

./myapp.conf

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf

/etc/nginx  or cd ..

cd ./sites-enabled 
ls -al
lrwxrwxrwx  1 root root   12 Jul 20 03:38 myapp.conf -> ./myapp.conf

cd ..

sudo nginx -t

/etc/nginx 
cd sites-enabeld
sudo rm myapp.conf

sudo ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf

/etc/nginx
sudo nginx -t

sudo systemctl restart nginx
sudo systemctl start nginx
sudo systemctl stop nginx

ps -ef | grep nginx 

# font 서버 접속후 명령어 

cd /etc/nginx

ls -al / sites-available 폴더확인 

cd sites-available 

ls -al  // myapp.conf 확인

sudo vi myapp.conf

/home/ubuntu/ www <-- 폴더생성 

www 안에들어가서 index.html 만들겁니다.

cp
mv
ln

mkdir [폴도명]

/

vi index.html

i <- insert mode 
내용입력후
esc
:wq!


ps -ef | grep nginx

퍼블릭 ip 로 브라우저에서 접속한번해보세요.


cd /etc/nginx/sites-enabled 
ls -al 
myapp.conf <-- 이아가 재대로 설정되어있느지 보셔야합니다.

cd ..
cd sites-available
ls -al 
myapp.conf 잘있는지 확인하시고

sudo vi myapp.conf

강제로 myapp.conf 오타를 만들었음

Job for nginx.service failed because the control process exited with error code.
See "systemctl status nginx.service" and "journalctl -xe" for details.

rm
mv
cp
ln
vi
cd
ls -al
ps -ef | grep [찾을프로세스명]
kill -9 [pid]
pwd 

폴더구조
cd ~
cd /
ls -al
drwxr-xr-x 10 root root 4096 Jul 20 03:14 .
drwxr-xr-x 95 root root 4096 Jul 20 06:08 ..
drwxr-xr-x  2 root root 4096 May 25 17:10 conf.d
-rw-r--r--  1 root root 1077 Feb  4  2019 fastcgi.conf
-rw-r--r--  1 root root 1007 Feb  4  2019 fastcgi_params
-rw-r--r--  1 root root 2837 Feb  4  2019 koi-utf
-rw-r--r--  1 root root 2223 Feb  4  2019 koi-win
-rw-r--r--  1 root root 3957 Feb  4  2019 mime.types
drwxr-xr-x  2 root root 4096 May 25 17:10 modules-available
drwxr-xr-x  2 root root 4096 Jul 20 02:42 modules-enabled
-rw-r--r--  1 root root 1490 Feb  4  2019 nginx.conf
-rw-r--r--  1 root root  180 Feb  4  2019 proxy_params
-rw-r--r--  1 root root  636 Feb  4  2019 scgi_params
drwxr-xr-x  2 root root 4096 Jul 21 01:12 sites-available
drwxr-xr-x  2 root root 4096 Jul 20 03:13 sites-available-backup
drwxr-xr-x  2 root root 4096 Jul 20 03:41 sites-enabled
drwxr-xr-x  2 root root 4096 Jul 20 03:14 sites-enabled-backup
drwxr-xr-x  2 root root 4096 Jul 20 02:42 snippets
-rw-r--r--  1 root root  664 Feb  4  2019 uwsgi_params
-rw-r--r--  1 root root 3071 Feb  4  2019 win-utf


도메인 연결
ingoos.com 대여 1년 3년
가비아
후이즈 
싼곳 1년 //


백앤드 프론트서버 나눠서 계속 진행하게될경우 
도메인 어느정도 필수 

login 새로고침하면 로그인이 풀림 cookie 


/
back
front
[webpack5] git clone https://github.com/ingoo-code/webpack5.git


cd front # [경로확인해주세요!]
npm install



npm run build