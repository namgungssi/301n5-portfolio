$(function(){
  $("#form").submit(function(e){
    //create data object
    var data={};
    data.name=$("#name").val();
    data.email=$("email").val();
    data.comment=$("#comment").val();
    // The url of your server-side script that handles the post submission
    var url= "http://www.someurl.com/post_comment.php";
    $.POST(url, data)
    .done(function(response){
      //This code executes when the server returns a response
      $("#comments").append(response);
    });
    e.preventDefault();
  });
});
