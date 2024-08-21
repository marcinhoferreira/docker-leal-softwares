FROM postgres

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} lealdock && useradd -u ${USER_UID} -g lealdock -m lealdock && usermod -p "*" lealdock

CMD ["postgres"]

EXPOSE 5432
