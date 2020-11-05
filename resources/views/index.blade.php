<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Blog</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <!-- Styles -->
        <style>
            body {
                font-family: 'Nunito';
            }
        </style>
    </head>
    <body>
        <div class="content">
            <div id="index"></div>
        </div>
    </body>
    <script>
        let user = {!! json_encode($user) !!};
    </script>
    <script type="text/javascript" src="js/app.js"></script>
</html>
