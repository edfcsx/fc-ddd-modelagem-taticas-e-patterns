FROM node:18.12-alpine3.15

RUN apk update && apk add bash

CMD ["/bin/bash"]

