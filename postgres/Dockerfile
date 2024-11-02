FROM postgres

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} leal && useradd -u ${USER_UID} -g leal -m leal && usermod -p "*" leal

CMD ["postgres"]

EXPOSE 5432
