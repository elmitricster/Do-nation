#!/bin/sh


# 정지
sudo docker-compose stop fe
sudo docker-compose stop be
sudo docker-compose stop nginx

# 삭제
sudo docker-compose rm fe --force
sudo docker-compose rm be --force
sudo docker-compose rm nginx --force



sudo docker pull wjdgustn15/ssafy_donation_service:fe
sudo docker pull wjdgustn15/ssafy_donation_service:be
sudo docker pull wjdgustn15/ssafy_donation_service:nginx

#갱신
sudo docker-compose up -d

# 불필요한 이미지 죽이기.
sudo docker system prune --force
