@extends('layouts.app')

@section('content')
    <br><br>
<div class="container">
    <div class="row ">

        <div class="col-md-12">
            <div id="root">

            </div> 
        </div>

        

    </div>
</div>

<script type="text/javascript">$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('.materialboxed').materialbox();
    $('.modal').modal();
})</script>
@endsection
