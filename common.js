$(document).ready(function () {

  $.getJSON('https://raw.githubusercontent.com/sc00l8oy/DI/main/posts.json').then(function (response) {
    for (var i = 0; i < response.length; i++) {
      $('main.container').append(
      '<div  class="post container">' +
        '<div class="avatar_container">' +
        '<div><img src=" '+ response[i].avatar +'" alt="avatar"></div>' +
        '</div>' +
        '<div class="post_container">' +
          '<a href="https://twitter.com/SandroSimonish3" target="_blank">'+response[i].first_name+'<span>@'+response[i].last_name +'</span> </a>' +
          '<p>' + response[i].description + '</p>' +
            '<div class="buttons" >' +
              '<button type="button" class="btn btn-success"> Like <span class="likebutton">'+ response[i].like_count +' </span> </button>'+
              '<button type="button" class="btn btn-warning"> Share '+ response[i].share_count +' </button>'+
              '<button type="button" class="btn btn-danger"> Comment '+ response[i].comment_count +' </button>'+
            '</div>' +
      '</div></div>')
    }
  })
})



var burger = document.getElementById('burger_menu');
var desktop = document.getElementById('desktopresp');
var header = document.getElementById('main_header');

burger.addEventListener('click', function () {
  desktop.classList.toggle('activedesktop')
})

burger.addEventListener('click', function () {
  header.classList.toggle('activeheader')
})
