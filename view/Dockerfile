# View Dockerfile

FROM node:16.3.0
LABEL author="GJCode"
# permission needed for electron
RUN chmod -R 777 root
WORKDIR /home/view
# install global dependencies (not foundable in package.json)
RUN npm install -g @angular/cli
RUN npm install --save-dev electron
# install chrome to enable headless unit testing for angular
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt update -y
RUN apt install ./google-chrome-stable_current_amd64.deb -y
RUN rm google-chrome-stable_current_amd64.deb
# default port of angular
EXPOSE 4200
# endless job to keep the container open
ENTRYPOINT ["tail", "-f", "/dev/null"]