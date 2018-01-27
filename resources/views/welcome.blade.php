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
        <link href="{{ asset('css/laravel.css') }}" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/styles.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>
            
        </style>
    </head>
    <body class="black">
    <header> 
            <br>
    <nav class="black">
        <div class=row>   
            <div class="flex-center position-ref ">
                
                <div class="nav-wrapper container">
                    <a href="{{ url('/home') }}" class="btn-floating btn-large waves-effect waves-light findButton hoverable" style="text-transform:lowercase">start finding</a>
                    <a href="{{ url('/home') }}" class="brand-logo textGradient1 font20 findingButton"> <span class="textGradient1">find</span>ing </a>
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
    <main class="container valign-wrapper">
        <div class="row w100">
            <div class="col s12 content ">
                <div class="titleDiv ">
                    <div class="title welcomeTitle">
                        SMART TECH
                    </div>
                        <br>
                    <div class="title font86 welcomeTitle font208">
                        <span class="textGradient1">find</span>er
                    </div>
                    
                </div>
            </div>
        </div>
    </main>

    <footer class="page-footer black">
        <div class="footer-copyright">
            <div class="container textGradient2 bold">
                © 2018 COPYRIGHT | MISAEL RIVERA
            </div>
        </div>
    </footer>

    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script type="text/javascript">$( document ).ready(function(){
            $(".button-collapse").sideNav();
    })</script>

    </body>
</html>
