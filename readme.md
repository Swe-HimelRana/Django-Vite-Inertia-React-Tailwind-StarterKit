# Starterkit for Django, Vite, InertiaJS, ReactJS, TailwindCSS

# Development

```
Make sure
Debug = True # in django settings.py file
```
```
create virtualenv
install requirements.txt
```

```bash
# now run
npm run dirt-dev
python manage.py runserver
```

# Production
Note: In this starterkit I have used Whitenoice for staticfile serve

0. Disable Debug in django settings.py file

    ```
    Debug = False

    ```

1. Build React files
    ```bash
        npm run vite-build
    ```
2. Run Django collectstatic

    ```bash
        python manage.py collectstatic
    ```
3. Run Django server (in this case no need to run `npm` command)

    ```bash

        python manage.py runserver

    ```
    
Everyting should work like you expect. 

Note: Now you can use Nginx, Gunicorn for production or any other technology you like for production.

Thank you
------------------
Himel
contact@himelrana.com
https://himelrana.com