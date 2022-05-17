#!/bin/sh

sudo docker pull wjdgustn15/ssafy_donation_service:fe
sudo docker pull wjdgustn15/ssafy_donation_service:be
sudo docker pull wjdgustn15/ssafy_donation_service:nginx

#갱신
sudo docker stack deploy -c docker-compose.yml donation-service-stack
sudo docker service scale donation-service-stack_be=3
sudo docker service scale donation-service-stack_fe=3


# 불필요한 이미지 죽이기.
sudo docker system prune --force
