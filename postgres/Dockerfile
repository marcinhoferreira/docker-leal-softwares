FROM postgres

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} lalsoftwares && useradd -u ${USER_UID} -g lalsoftwares -m lalsoftwares && usermod -p "*" lalsoftwares

CMD ["postgres"]

EXPOSE 5432
