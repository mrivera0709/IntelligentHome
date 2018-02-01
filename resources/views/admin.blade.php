@extends('layouts.app')

@section('content')
<div class="container">

    <div class="row ">

            <div id="root"></div>
                
    </div>

    <div class="row">


        <div class="col-md-12">

            <div class="flex-center position-ref full-height">
                @if (Route::has('login'))
                    <div class="top-right links">
                        <br><br>

                        
                        <div class="row">
                                <div id="admin"></div>
                        </div>



                        @auth
                            
                            <br><br>

                        @else
                            <a href="{{ route('login') }}">Login</a>
                            <a href="{{ route('register') }}">Register</a>
                        @endauth
                    </div>
                @endif            
            </div>
            
            



        </div>
    </div>
</div>
@endsection
