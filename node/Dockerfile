FROM rockylinux:9

RUN dnf update -y && dnf install -y curl --skip-broken --nobest
RUN curl -sL https://rpm.nodesource.com/setup_22.x | bash
RUN dnf update -y && dnf install -y nodejs && dnf install -y nano cronie-noanacron && dnf clean all

RUN rm -rf /var/www/html

WORKDIR /var/www

RUN npm install pm2 -g

CMD ["pm2-runtime", "/tmp/ecosystem.config.js", "--env production"]
