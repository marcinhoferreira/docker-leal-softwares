FROM php:8.1-fpm

ARG USER_UID
ARG USER_GID

RUN groupadd -g ${USER_GID} flexdock && \
useradd -u ${USER_UID} -g flexdock -m flexdock && \
usermod -p "*" flexdock

RUN ldconfig

RUN apt update && apt install -y openssl bash libxml2-dev postgresql-client libpq-dev libpng-dev libjpeg-dev libaio1 chromium

RUN docker-php-ext-install pdo pdo_mysql pdo_pgsql soap gd

# RUN docker-php-ext-install zip

RUN docker-php-ext-install exif

RUN docker-php-ext-install calendar && docker-php-ext-configure calendar
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get update && apt-get install -y nodejs && apt-get clean

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN rm -rf /var/www/html

RUN apt-get update && apt-get install -y git

RUN apt-get update && apt-get install -y libxrender-dev libfontconfig

RUN apt-get update && apt-get install -y nano cron

RUN docker-php-ext-install bcmath
RUN docker-php-ext-install intl

RUN docker-php-ext-configure calendar && docker-php-ext-install calendar

RUN docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install gd

RUN apt install -y zip

RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev
RUN docker-php-ext-install zip

WORKDIR /var/www


COPY ./.bash_aliases /home/flexdock
