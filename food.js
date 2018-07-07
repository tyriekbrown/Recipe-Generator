$("button").on("click",function(){
var apiURL = "https://www.themealdb.com/api/json/v1/1/random.php"

var apiKey2 = ""

$.ajax({
  url:  apiURL,
  // Work with the response
  success: function( response ) {
    $("img").attr("src",response.meals[0].strMealThumb)
    $("h1").html(response.meals[0].strMeal)
    $("h2 ").html(response.meals[0].strArea)
    $("p").html(response.meals[0].strInstructions)
    $("li").hide()
    $(".meals").append('<li>'+ response.meals[0].strIngredient1+ '</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient2+'</li>')
    console.log(response.meals[0])
    $(".meals").append('<li>'+ response.meals[0].strIngredient3+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient4+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient5+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient6+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient7+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient8+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient9+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient10+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient11+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient12+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient13+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient14+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient15+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient16+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient17+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient18+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient19+'</li>')
    $(".meals").append('<li>'+ response.meals[0].strIngredient20+'</li>')
    wiki(response.meals[0].strArea)
    // console.log( response ); // server response
  },
  error: function (r){
    console.log( r ); // server response
  }
});
})

function wiki(searchTerm){
  var apiURL2 = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json"
  $.ajax({
    url: apiURL2,
    success: function(response) {
      $(".thankyou").removeClass()
      $("#country").append('<li><a href="'+ response[3][0]+'">'+ response[3][0]+'</a></li>')

      console.log(response);

    },
    error: function (r){
      console.log( r ); // server response
    }
  })
}
