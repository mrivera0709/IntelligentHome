<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> {{ env('APP_NAME') }} </title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/styles.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body class="black">
    <header> 
            <br>
    <nav class="black">
        <div class=row>   
            <div class="flex-center position-ref full-height">
                
                <div class="nav-wrapper container">
                    <a href="{{ url('/home') }}" class="brand-logo textGradient1 font36"> find </a>
                    <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
            
                    <ul id="nav-mobile" class="right hide-on-med-and-down links">
                        <li class="textGradient2"> <a class="font16" href="{{ route('about') }}">ABOUT</a> </li>
                        <li class="textGradient2"> <a class="font16" href="{{ route('privacy') }}">PRIVACY</a> </li>
                        <li class="textGradient2"> <a class="font16" href="{{ route('affiliate') }}">AFFILIATE PROGRAM</a> </li>
                    </ul>
            
                    <ul class="side-nav" id="mobile-demo">
                        <li class="textGradient2"> <a class="font16" href="{{ route('about') }}">ABOUT</a> </li>
                        <li class="textGradient2"> <a class="font16" href="{{ route('privacy') }}">PRIVACY</a> </li>
                        <li class="textGradient2"> <a class="font16" href="{{ route('affiliate') }}">AFFILIATE PROGRAM</a> </li>
                    </ul>
            
                </div>
            
            </div>
        </div>
    </nav>
    </header>
    <main>
            <div class="content">
                <div class="title m-b-md">
                    SMART TECH
                </div>
                <br>
                <div class="title m-b-md">
                    finder
                </div>
            </div>
        </div>
    </main>
        <script src="{{ asset('js/app.js') }}"></script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        <script type="text/javascript">$( document ).ready(function(){
            $(".button-collapse").sideNav();
        })</script>

    </body>
</html>
