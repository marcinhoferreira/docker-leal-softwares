FROM php:8.1-fpm

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} leal && \
useradd -u ${USER_UID} -g leal -m leal && \
usermod -p "*" leal

RUN ldconfig

RUN dnf update && dnf install -y openssl bash libxml2-dev postgresql-client libpq-dev libpng-dev libjpeg-dev libaio1 chromium

RUN docker-php-ext-install pdo pdo_mysql pdo_pgsql soap gd

# RUN docker-php-ext-install zip

RUN docker-php-ext-install exif

RUN docker-php-ext-install calendar && docker-php-ext-configure calendar
RUN curl -sL https://rpm.nodesource.com/setup_22.x | bash
RUN dnf update && dnf install -y nodejs && dnf clean all

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN rm -rf /var/www/html

RUN dnf update && dnf install -y git

RUN dnf update && dnf install -y libxrender-dev libfontconfig

RUN dnf update && dnf install -y nano cronie-noanacron

RUN docker-php-ext-install bcmath
RUN docker-php-ext-install intl

RUN docker-php-ext-configure calendar && docker-php-ext-install calendar

RUN docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install gd

RUN dnf install -y zip

RUN dnf update && dnf install -y \
    zlib1g-dev \
    libzip-dev
RUN docker-php-ext-install zip

WORKDIR /var/www


COPY ./.bash_aliases /home/lealdock
