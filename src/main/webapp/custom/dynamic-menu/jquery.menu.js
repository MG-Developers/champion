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
              // $namea.text(jsonCode[i].name);
              // $namea.attr('href',jsonCode[i].link);
              // $LI.append($namea)
              
              $sp = `<span class="nav-label">${jsonCode[i].name}</span>`;
              $div.attr('href',jsonCode[i].link);
              // $div.text(jsonCode[i].name);
              $div.append($sp)
              $LI.append($div)  

            }
                else {
                  // $div.text(jsonCode[i].name); 
                  
                  $ULd = $(`<span class="fa arrow"></span>`)
                  $namespan = jsonCode[i].name
                  
                  if (jsonCode[i].parentId == 0){
                      $namespan = $(`<span class="nav-label">${jsonCode[i].name}</span>`)
                  }
                  
                  $div.append($namespan);
                  $div.append($ULd);
                  $LI.append($div);
                }
                // console.log(typeof jsonCode[i].icon);
                if (typeof jsonCode[i].icon !=='undefined') {
                  if (jsonCode[i].parentId == 0) {
                    $i = (`<i class="${jsonCode[i].icon}"></i>`)
                    $div.prepend($i);
                    $namea.prepend($i);
                    // $("").children().remove()
                  }
                
                fillLI(jsonCode[i], $LI, depth);
                dest.append($LI);
                
                }
              }
      }
    };


    let fillLI = function(jsonCode, dest, depth) {
      if (typeof jsonCode === 'object') {

        
        // console.log(jsonCode.children);
        if (jsonCode.children != undefined) {

          //  let used = jsonCode.children.filter(value=> value.icon ==null)
          //  console.log(used);
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
        // .css({
        //   'display': 'none'
        // });
        // $UL.find('*:not(a):not(span)')
        // .css({
        //   'display': 'none'
        // });
      }
    };

    // let opt = $.extend({}, $.fn.menu.defaults, options);/

    $.getJSON('https://mocki.io/v1/b57b862f-c08e-4875-ae96-c7f2ca356e90', function(data) {
      fillUL(data.data, $('.sidemenu'),1);
    });
    return this;
  }

  // $.fn.menu.defaults = {
  //   // enlarge: $.fn.fadeTo,
  //   // openSpeed: 1000,
  //   // openbg: '#777777',
  //   // mouseoutOpacity: 0.7,
  //   // mouseOut: {
  //   //   'opacity': 0.7
  //   // },
  //   // openProp: {
  //   //   'speed': 0,
  //   //   'css': {
  //   //     'opacity': 0.7
  //   //   },
  //     // 'background-color': '#777777'
  //   // }
  // }

}(jQuery));
