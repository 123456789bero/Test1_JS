imgg=document.getElementById(".imgg");
position=document.getElementById(".position");
caption=document.getElementById(".caption");

let slidewidth=  $(".slide").outerWidth(true)
      $(".slide").css({left:-slidewidth})
      $(window).scroll(function (){
        let heightsection=$("#Duration").offset().top;
        console.log(heightsection);
        let windowscrol=$(window).scrollTop();
        console.log(windowscrol);
        if(windowscrol>heightsection-250 ){
          $(".slidei").hide();
          $(".contentslide").hide();
          $(".slide").hide();
          $(".slidebar").hide();
        }
        else{ $(".slidei").show()
        $(".slidei").show();
        $(".contentslide").show();
        $(".slide").show();
        $(".slidebar").show();}
      })
      
         $(".slidei1").click(function(){
     console.log("hello")
    {  $(".slide").animate({left:-slidewidth},1000)
  }})


      $(".slideii").click(function(){ $(".slide").animate({left:"0px"},1000)
 
    
    })
    

 $("a").click(function(einfo){
    let ahref=einfo.target.getAttribute(`href`)

     let officetahref=$("ahref").offset();
     $("body").animate({scrollTop:officetahref},8000)



 })
 //Section Singer
$("p").hide();


 $(document).ready(function(){$(function(){
  $("p:first").css({display:"block"})
  $("h2").click(function(){
    $(this).next().slideToggle(500);
    
      $("p").not($(this).next()).slideUp(500)
  })
})})
//counetr
$(function(){
  
  "use strict";
  
  $(".count").countTo();







})


// ================================= displayhome
const $loadingIndicator = $('#loading');
function showLoading() {
  $loadingIndicator.fadeIn();
  $('body').css('overflow','hidden')
}

function hideLoading() {
  $loadingIndicator.fadeOut();
  $('body').css('overflow','visible')
  $('body').css('overflow-x','hidden')
}
var x=0;
function getspec(){ var http= new XMLHttpRequest();
  http.open("GET",`https://www.themealdb.com/api/json/v1/1/search.php?s`);
  http.send();
  http.addEventListener("readystatechange",function(){
      if (readystate=4) {
          x = JSON.parse(http.response);
          display(x);
      
         }
      })}
  getspec();


        function display(data){
          let meals = data.meals;
          let box = '';
          for (let i = 0; i < meals.length; i++) {
            box += `    <div id="${meals[i].idMeal}"  class="itemStyle btn col-md-6 mb-4 w-25  position-relative ">
            <img id="${meals[i].idMeal}" class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" >
            <div id="${meals[i].idMeal}"class="infoStyle position-absolute h-100 d-flex align-items-center rounded-3 ps-2">
              <h3 id="${meals[i].idMeal}">${meals[i].strMeal}</h3>
            </div>
          </div>`
        
          }
        
          $('#displayhome').html(box);
          $('#catogeries').html('')
          $('#mealInfo').html('')
          $('#area').html('')
          $('#ingredient').html('')
          $('#contactForm').html('')
        
        
        }
    
  
        $('#displayhome').click(function (e) {
          console.log("hiiiiiiii");
           getMeal(e.target.id)
         })
    
    //===================== catogires
    function displayCategories(data) {
      
      let cat = data.categories;
      let box = '';
      for (let i = 0; i < cat.length; i++) {
        box += `    <div id="${cat[i].strCategory}"  class=" itemStyle btn col-md-6 mb-4 w-25  position-relative ">
      <img id="${cat[i].strCategory}" class="w-100 rounded-3" src="${cat[i].strCategoryThumb}" alt="${cat[i].strCategory}" >
      <div id="${cat[i].strCategory}"class="infoStyle position-absolute h-100 d-flex flex-column align-items-center rounded-3 ps-2">
        <h3  id="${cat[i].strCategory}">${cat[i].strCategory}</h3>
        <p  id="${cat[i].strCategory}">${cat[i].strCategoryDescription}</p>
      </div>
    </div>`
    
      }
          $('.rowsearch').html('');   
          $('#displayhome').html('');
          $('#catogeries').html(box)
          $('#mealInfo').html('')
          $('#area').html('')
          $('#ingredient').html('')
          $('#contactForm').html('')
          $(".slide").animate({left:-slidewidth},1000)
      
      }
      async function getMealCategories() {
        showLoading()
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        hideLoading()
        displayCategories(data);
      
      }
      $('#Categoris').click(function () {
      
      

        getMealCategories()
      
        
      
      })
      async function getMealsByCategory(category) {
        showLoading()
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        hideLoading()
        display(data);
      }
      $('#catogeries').click(function (e) {
        getMealsByCategory(e.target.id)
      })
      async function getMeal(id) {
        showLoading();
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        hideLoading();
        showMeal(data.meals[0]);
      }
      function showMeal(data) {
     
       
       // $("#contactForm").removeClass('vh-100')
        let box = `   <section id="mealInfo" class="d-flex  py-5 text-white m-auto w-75 pb-5">
        <div id="mealImg" class="d-flex flex-column col-md-4">
          <img src=${data.strMealThumb} alt="" class=" rounded-3  w-100">
          <h2 >${data.strMeal}</h2>
        </div>
        <div id="mealIns" class="col-md-7 h-50">
          <h2 class="ps-5">Instructions</h2>
          <p class="ps-5">${data.strInstructions}</p>
          <h3 class="ps-5" ><span class="fw-bolder">Area : </span>${data.strArea}</h3>
          <h3 class="ps-5" ><span class="fw-bolder">Category : </span>${data.strCategory}</h3>
          <h3 class="ps-5">Recipes : </h3>
          <ul id="receipes" class="d-flex flex-wrap">
          </ul>
          <h3 class="ps-5">Tags :</h3> 
          <a class="ps-5"  id="source" class="btn" href="${data.strSource}" target="_blank">Source</a>
          <a class="ps-5"  id="youtube" class="btn" href="${data.strYoutube}" target="_blank">Youtube</a>
        </div>
      </section>`
      
             $('.rowsearch').html('');
             $('#displayhome').html('');
             $('#catogeries').html('')
             $('.mealInfoo').html(box)
             $('#area').html('')
             $('#ingredient').html('')
             $('#form').html('')
            $(".slide").animate({left:-slidewidth},1000)}

            $('#mealInfo').click(function (e) {
             console.log("hiiiiiiii");
              getMeal(e.target.id)
            })
            
      //=======================Area
      function displayArea(data) {
      
        let areas = data.meals;
        let box = '';
        for (let i = 0; i < areas.length; i++) {
          box += `   <div id="${areas[i].strArea}" class=" col-md-6 w-25 text-white btn ">
          <i id="${areas[i].strArea}" class="fa-solid fa-house-laptop fa-4x w-100 "></i>
          <div>
          <h3  class="text-center" id="${areas[i].strArea}">${areas[i].strArea}</h3></div>
        </div> `
      
        }
        $('.rowsearch').html('');  
        $('#displayhome').html('');
        $('#catogeries').html('');
        $('#mealInfo').html('');
        $('#area').html(box);
        $('.ingredient').html('');
        $('#form').html('');
        }
        async function getarea() {
          showLoading()
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
          const data = await response.json();
          hideLoading()
          displayArea(data);
        }
        $('#Area').click(function (e) {
          e.preventDefault();
          $(".slide").animate({left:-slidewidth},1000)
          getarea();
        
          
        
        })
        async function getMealsByArea(area) {
          showLoading()
          const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
          const response = await fetch(url);
          const data = await response.json();
          hideLoading()
          display(data)
        }
        
        $('#area').click(function (e) {
          getMealsByArea(e.target.id)
        })
        //================================= INGREIDIENT
        function displayingrident(data) {
      
          let ingri = data.meals;
          let boxing = '';
          for (let i = 0; i < 20; i++) {
            boxing += `   <div id="${ingri[i].strIngredient}" class=" getbying text-white btn w-25 col-md-6 mb-4 overfolw-hidden">
            <i id="${ingri[i].strIngredient}" class="fa-solid fa-drumstick-bite fa-4x w-100 "></i>
            <h3 id="${ingri[i].strIngredient}">${ingri[i].strIngredient}</h3>
            <p id="${ingri[i].strIngredient}">${ingri[i].strDescription.split(' ').slice(0, 20).join(' ')}</p>
          </div>    `
        
          }
          $('.rowsearch').html('');  
          $('#displayhome').html('');
          $('#catogeries').html('')
          $('#mealInfo').html('')
          $('#area').html('')
          $('#ingredient').html(boxing)
          $('#contactForm').html('')}
         
         
          async function getingrident() {
            showLoading()
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            const dataingri = await response.json();
            hideLoading()
            displayingrident(dataingri);
          }
          $('#ingr').click(function (e) {
            e.preventDefault();
           
             $(".slide").animate({left:-slidewidth},1000)

            getingrident() ;
           
          
            
          
          })
          async function getMealsByIngrediant(mainIngrediant) {
            showLoading()
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngrediant}`;
            const response = await fetch(url);
            const data = await response.json();
            hideLoading()
            display(data)
          }
          
          $('#ingredient').click(function (e) {
            console.log(e.target.id);
            getMealsByIngrediant(e.target.id)
          })
          
    
          //=================== search
          async function getMealsByFullSearch(searched) {
            showLoading()
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`);
            const data = await response.json();
           hideLoading()
           display(data)
          }
          async function getMealsByFirstLetter(searched) {
            showLoading()
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searched}`);
            const data = await response.json();
            hideLoading()
            display(data)
       
          }
          function showSearch() {
            let box = `<div class="d-flex justify-content-center">
            <input id="searchByName" type="text" class="form-control m-4" placeholder="Search By Name">
            <input id="searchByFL" type="text" class="form-control m-4" placeholder="Search By First Letter">
            </div>`
            
             $('.rowsearch').html(box);
             $('#displayhome').html('');
             $('#catogeries').html('')
             $('#mealInfo').html('')
             $('#area').html('')
             $('#ingredient').html('')
             $('#form').html('')
            $(".slide").animate({left:-slidewidth},1000)

            $('#searchByName').on('input', () => {
              const searchTerm = $('#searchByName').val();
              getMealsByFullSearch(searchTerm);
            });
            $('#searchByFL').on('input', () => {
              const searchTerm = $('#searchByFL').val();
              getMealsByFirstLetter(searchTerm);
            });

          }
          $('#Search').click(function (e) {
            e.preventDefault();
          
            showSearch()
          
          })
          //===================form
          function showForm() {
            $("#contactForm").addClass('vh-100')
            let box = '';
            box += `<div class="col-md-6 d-flex justify-content-around p-lg-3 w-75">
          
            <div class="mx-lg-3 w-50">
              <input id="name" type="text" class="form-control " placeholder="Enter Your Name">
              <div id="nameWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
                Special characters and numbers not allowed
              </div>
            </div>
          
            <div class="mx-lg-3 w-50">
              <input id="email" type="text" class="form-control" placeholder="Enter Your Email">
              <div id="emailWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
                Email not valid *exemple@yyy.zzz
              </div>
            </div>
          
          </div>
          
          
          
          <div class="col-md-6 d-flex justify-content-around p-lg-3 w-75">
          
            <div class="mx-lg-3 w-50">
              <input id="phone" type="text" class="form-control " placeholder="Enter Your Phone">
              <div id="phoneWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
                Enter valid Phone Number
              </div>
            </div>
          
            <div class="mx-lg-3 w-50">
              <input id="age" type="number" class="form-control" placeholder="Enter Your Age">
              <div id="ageWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
                Enter valid age
              </div>
            </div>
          
          </div>
          
          
          
          <div class="col-md-6 d-flex justify-content-around p-lg-3 w-75">
          
            <div class="mx-lg-3 w-50">
              <input id="pass" type="password" class="form-control " placeholder="Enter Your Password">
              <div id="passWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
                Enter valid password *Minimum eight characters, at least one letter and one number:*
              </div>
            </div>
          
            <div class="mx-lg-3 w-50">
              <input id="repass" type="password" class="form-control" placeholder="Repassword">
              <div id="repassWarning" class="d-none warningBG warningColor justify-content-center p-3 mt-2 rounded-3">
                Enter valid repassword
              </div>
            </div>
          
          </div>
          
          
          <button class="btn  btn-outline-danger "> submit</button>
          `
          $('.rowsearch').html('');
          $('#displayhome').html('');
          $('#catogeries').html('')
          $('#mealInfo').html('')
          $('#area').html('')
          $('#ingredient').html('')
          $('#form').html(box)
         $(".slide").animate({left:-slidewidth},1000)
          }
          
          $('#ContactUs').click(function () {
          
          
            showForm()
          
          })
          function nameRegex(input) {
            let regex =/^[a-zA-Z]{3,}[0-9-_]*$/;;
            if (regex.test(input))
              return true
            else
              return false
          }
          function emailRegex(input) {
            let regex =/^[a-zA-Z]{1,}[0-9-_]*\@(yahoo|gmail|Gmail)\.com$/;
            if (regex.test(input))
              return true
            else
              return false
          }
          function passRegex(input) {
            let regex =/^[a-zA-Z]{3,}[0-9]*$/;
            if (regex.test(input))
              return true
            else
              return false
          }
          function phoneRegex(input) {
            let regex = /^01[0125][0-9]{8}$/;
            if (regex.test(input))
              return true
            else
              return false
          }
          let nameRegFlag = false;  
  $('#name').on('input', () => {
    const searchTerm = $('#name').val();
    if (nameRegex(searchTerm)) {
      nameRegFlag = true
      $('#nameWarning').removeClass('d-flex')
      $('#nameWarning').addClass('d-none')
    }
    else {
      nameRegFlag = false
      $('#nameWarning').removeClass('d-none')
      $('#nameWarning').addClass('d-flex')
    }})
          