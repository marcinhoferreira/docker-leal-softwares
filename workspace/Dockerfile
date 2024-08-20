FROM rockylinux:9

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} lealdock && useradd -u ${USER_UID} -g lealdock -m lealdock && usermod -p "*" lealdock

RUN sudo dnf update -y && sudo dnf install -y curl
RUN curl -sL https://rpm.nodesource.com/setup_22.x | bash
RUN sudo dnf update -y && sudo dnf install -y nodejs && sudo dnf install -y nano cron && sudo dnf clean

RUN npm install -g sequelize-cli
RUN dnf install -y git

RUN rm -rf /var/www/html

WORKDIR /var/www
