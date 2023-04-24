(function($) {

  $.fn.sidemenu = function(options) {

    let fillUL = function(jsonCode, dest,depth) {
      let i = 0, $a=null,$div;
      if (jsonCode instanceof Array) {
        for (i = 0; i < jsonCode.length; i += 1) {
          let $LI = $('<li class="main"></li>');
          $div=$(`<a class="sub-child down"></a>`);
          $namea = $(`<a></a>`)
          $div.css({

          }); 

          if(jsonCode[i].link!=null && jsonCode[i].icon == null) {      
            $div.attr('href',jsonCode[i].link);   
            $div.text(jsonCode[i].name);
            $LI.append($div);
            
            } else if (jsonCode[i].icon !=null && jsonCode[i].link != null){    
              $sp = `<span class="nav-label">${jsonCode[i].name}</span>`;
              $div.attr('href',jsonCode[i].link);
              $div.append($sp)
              $LI.append($div)  

            }
                else {
                  $ULd = $(`<span class="fa arrow"></span>`)
                  $namespan = jsonCode[i].name
                  if (jsonCode[i].parentId == 0){
                      $namespan = $(`<span class="nav-label">${jsonCode[i].name}</span>`)
                  }
                  $div.append($namespan);
                  $div.append($ULd);
                  $LI.append($div);
                }
                if (typeof jsonCode[i].icon !=='undefined') {
                  if (jsonCode[i].parentId == 0) {
                    $i = (`<i class="${jsonCode[i].icon}"></i>`)
                    $div.prepend($i);
                    $namea.prepend($i);
                  }
                fillLI(jsonCode[i], $LI, depth);
                dest.append($LI);
                }
              }
      }
    };
    let fillLI = function(jsonCode, dest, depth) {
      if (typeof jsonCode === 'object') {
        if (jsonCode.children != undefined) {
          dest.on('click', function(e) {
            // $(this).toggleClass("active")
            // $(this).children().fadeIn().children().fadeIn();
            // $(this).siblings('li').find('*:not(a):not(span)').fadeOut();
            // $(this).toggle("click")`
          });

          if(jsonCode.icon != null && jsonCode.link == null || jsonCode.children.icon != null ){
            
            let $UL = $(`<ul class="nav nav-second-level collapse"></ul>`)
            fillUL(jsonCode.children, $UL,depth+1);
            dest.append($UL);
          }  
        }
      }
    };

    var test = $.test();

      $.getJSON(`${test}/menumaster/menus`, function(data) {
        fillUL(data.data, $('.sidemenu'),1);
      });

      $.ajax({
          url:`${test}/menumaster/menus`,
          // url:"https://mocki.io/v1/b57b862f-c08e-4875-ae96-c7f2ca356e90",
          complete:function(){
              jQuery(".sidemenu").metisMenu().show();    
          }
      })

    
    
    
    return this;
  }
      
    }(jQuery));

      var sessionString = sessionStorage.getItem('name');
      var username  = JSON.parse(sessionString);
      $(".name")[1].innerText = username; 

      $("#menulist").sidemenu();


      