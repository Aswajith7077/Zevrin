FROM postgres:16
RUN apt-get update && apt-get install -y postgresql-contrib
RUN apt-get install -y postgresql-16-pgvector
COPY ./init.sql /docker-entrypoint-initdb.d/
