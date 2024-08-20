FROM rockylinux:9

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} lealdock && useradd -u ${USER_UID} -g lealdock -m lealdock && usermod -p "*" lealdock

RUN dnf update -y && dnf install -y curl --skip-broken --nobest
RUN curl -sL https://rpm.nodesource.com/setup_22.x | bash
RUN dnf update -y && dnf install -y nodejs && dnf install -y nano cron && sudo dnf clean

RUN npm install -g sequelize-cli
RUN dnf install -y git

RUN rm -rf /var/www/html

WORKDIR /var/www
