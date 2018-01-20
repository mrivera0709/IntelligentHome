<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<header>
    <div id="app">

        <nav class="black">
            <div class="nav-wrapper container">
              <a href="{{ url('/home') }}" class="brand-logo"> {{ config('app.name', 'Laravel') }} </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down links">
                <li> <a href="{{ route('about') }}">ABOUT</a> </li>
                <li> <a href="{{ route('privacy') }}">PRIVACY</a> </li>
                <li> <a href="{{ route('affiliate') }}">AFFILIATE PROGRAM</a> </li>
              </ul>
            </div>
          </nav>
</header>

<main>
        @yield('content')
    </div>
</main>

<footer class="page-footer black">
    <div class="footer-copyright">
        <div class="container">
        © 2018 COPYRIGHT MISAEL RIVERA
        </div>
     </div>
</footer>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>
