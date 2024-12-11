FROM mariadb

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} lealsoftwares && useradd -u ${USER_UID} -g lealsoftwares -m lealsoftwares && usermod -p "*" lealsoftwares

CMD ["mariadb"]

EXPOSE 3306
