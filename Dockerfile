FROM ubuntu:16.04

ENV http_proxy ${http_proxy}
ENV https_proxy ${http_proxy}
ENV no_proxy ${no_proxy}
ENV HTTP_PROXY ${HTTP_PROXY}
ENV HTTPS_PROXY ${HTTP_PROXY}

RUN apt-get update && apt-get install -y \
    curl \
    python-pip

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs

COPY ./requirements.txt /srv
RUN pip install -r /srv/requirements.txt

COPY . /srv/react-demo
RUN cd /srv/react-demo/frontend && npm set progress=false && npm install

WORKDIR /srv/react-demo

EXPOSE 8080
EXPOSE 8000

CMD sh start.sh