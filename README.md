#### used Nuxt-icons https://github.com/nuxt-modules/icon You can use any name from the https://icones.js.org collection:

```vue
<Icon name="uil:github" />
```

---

# Launch

-   1 run `npm i`
-   2 run `npm run dev` or build using `npm run build`

---

# Deployment (Nginx)

-   update the files `/etc/nginx/sites-available/your_domain_name /etc/nginx/sites-enabled/your_domain_name` with the following content

```
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen          80;             # the port nginx is listening on
    server_name     your-domain;    # setup your domain here

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    location / {
        expires $expires;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # set the address of the Node.js instance here
    }
}
```

from https://nuxtjs.org/deployments/nginx/ or simply

```
server {
    listen 80;
    listen [::]:80;
    index index.html;
    server_name your_domain;

    location / {
        proxy_pass http://0.0.0.0:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

-   make sure the setup iscorrect `sudo nginx -t`
-   reload the server `sudo nginx -s reload`

---

# now the app should run in background but it shows `502 Bad Gateway` once we disconnect the ssh connection we do this using https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/ (node apps production manager)

> install

```
npm install pm2@latest -g
```

> start the app in background

```
pm2 start node .output/server/index.mjs
```

> few commands

```
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
```

-   for example on build run pm2 restart node .output/server/index.mjs

---

# Issues

-   https://github.com/tailwindlabs/tailwindcss/issues/4962
