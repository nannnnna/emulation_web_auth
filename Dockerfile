FROM node:16-buster-slim

# Установка необходимых утилит
RUN apt-get update && apt-get install -y curl bash unzip

# Установка Bun
RUN curl -fsSL https://bun.sh/install | bash

# Установка переменной среды для Bun
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

COPY . .

# Проверка установки Bun
RUN echo $PATH && ls -al /root/.bun/bin

# Установка зависимостей с помощью Bun
RUN /root/.bun/bin/bun --version && /root/.bun/bin/bun install

CMD ["/root/.bun/bin/bun", "run", "src/index.ts"]
