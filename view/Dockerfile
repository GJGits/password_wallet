# View Dockerfile

FROM node:16.3.0
LABEL author="GJCode"

# permission needed for electron
RUN chmod -R 777 root
WORKDIR /home/view
RUN npm install -g @angular/cli
RUN npm install --save-dev electron

EXPOSE 4200

ENTRYPOINT ["tail", "-f", "/dev/null"]