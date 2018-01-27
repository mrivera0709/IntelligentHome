@extends('layouts.app')

@section('content')
<div class="container">

    <div class="row ">

            <div id="root"></div>
                
    </div>

    <div class="row">


        <div class="col-md-8 col-md-2">

            <div class="flex-center position-ref full-height">
                @if (Route::has('login'))
                    <div class="top-right links">
                        <br><br>

                        

                        @auth
                            <div class="row">
                                <div class"col s12">
                                    <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Category</a>

                                    <!-- Dropdown Structure -->
                                    <ul id='dropdown1' class='dropdown-content'>
                                        <li><a href="#!">one</a></li>
                                        <li><a href="#!">two</a></li>
                                        <li><a href="#!">three</a></li>
                                    </ul>

                                    <a class='dropdown-button btn' href='#' data-activates='dropdown2'>Sub-Category</a>

                                    <!-- Dropdown Structure -->
                                    <ul id='dropdown2' class='dropdown-content'>
                                        <li><a href="#!">one</a></li>
                                        <li><a href="#!">two</a></li>
                                        <li><a href="#!">three</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class"col m12">

                                    <br>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                                            <label for="first_name">Keywords</label>
                                        </div> 
                                    </div>
                                    <br>
                                    <div class="row">
                                        <div class"col s6">
                                            <a class='dropdown-button btn' href='#' data-activates='dropdown3'>SearchIndex</a>

                                            <!-- Dropdown Structure -->
                                            <ul id='dropdown3' class='dropdown-content'>
                                                <li><a href="#!">one</a></li>
                                                <li><a href="#!">two</a></li>
                                                <li><a href="#!">three</a></li>
                                            </ul>
                                        </div>
                                    <br><br>
                                        <div class"col s6">
                                            <a class='dropdown-button btn' href='#' data-activates='dropdown4'>Sort</a>
        
                                            <!-- Dropdown Structure -->
                                            <ul id='dropdown4' class='dropdown-content'>
                                                <li><a href="#!">one</a></li>
                                                <li><a href="#!">two</a></li>
                                                <li><a href="#!">three</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row">
                                            <div class="input-field col s6">
                                                <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                                                <label for="first_name">Manufacturer</label>
                                            </div> 
                                        </div>
                                    <br>
                                    <div class="row">
                                        <div class="input-field col s6">
                                            <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                                            <label for="first_name">Minimum Price</label>
                                        </div> 
                                    </div>           

                                </div>
                            </div>

                            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i class="material-icons right">send</i>
                            </button>

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
