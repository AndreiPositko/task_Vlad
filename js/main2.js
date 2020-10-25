

  var buyerCounter;

  var init = function(){
      var countryVal = countryName();
      buyerCounter = 18;
      var countryValIndex;

      if (countryVal == 'RUS' || countryVal == 'UKR' || countryVal == 'BLR' || countryVal == 'KAZ') {
          switch (countryVal) {
              case 'RUS':
                  countryValIndex = 0;
                  break;
              case 'BLR':
                  countryValIndex = 1;
                  break;
              case 'UKR':
                  countryValIndex = 2;
                  break;
              case 'KAZ':
                  countryValIndex = 3;
                  break;
          }

          buyed(countryValIndex);


          setTimeout(function () {
              $('.freezing-wrap').addClass('freezing-active');
          }, 5000);

      }

  };

  var countryName = function(){
      return 'UKR';
  };

  var startNumber2 = 677;

  var buyed = function(countryValIndex){
      var timeInterval = setTimeout(function tInterval(){


          var lengthTown = arr_buyer.country[countryValIndex].town.length;
          var lengthName = arr_buyer.country[countryValIndex].people_name.length;

          var buyerName = getRandomInt(0, lengthName-1);
          var buyerTown = getRandomInt(0, lengthTown-1);

          buyerCounter--;

          //скрипт уменьшающегося товара - старт
          var ctr_list = new Object();
          ctr_list['stringPack01'] = 'заговор';
          ctr_list['stringPack02'] = 'заговора';
          ctr_list['stringPack03'] = 'заговоров';
          function declOfNum(number, titles) {
              cases = [2, 0, 1, 1, 1, 2];
              return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
          }
          var purCnt = Math.floor(Math.random() * (6 - 3 + 1) + 3);
          var purCntString = purCnt + ' ' + declOfNum(purCnt, [ctr_list.stringPack01, ctr_list.stringPack02, ctr_list.stringPack03]);


          var cans = parseInt($('.left-pack:first').text());
          if(cans < 9){
              clearInterval(timeInterval);
              return false;
          } else {
              $('.left-pack').text(cans - purCnt);
          }
          $('#product-bought').text(purCntString);
          

          //скрипт уменьшающегося товара - конец

          $('.freezing-buyer--name').text(arr_buyer.country[countryValIndex].people_name[buyerName]);
          $('.freezing-buyer--town').text(arr_buyer.country[countryValIndex].town[buyerTown]);
          $('.freezing-buyer--flag').removeClass().addClass("freezing-buyer--flag " + arr_buyer.country[countryValIndex].class_flag[0]);

          $('.freezing-buyer').css('-webkit-transition','all 1s ease-in-out');
          $('.freezing-buyer').css('transition','all 1s ease-in-out');
          $('.freezing-buyer').addClass('freezing-buyer--show');

          setTimeout(function(){
              $('.freezing-buyer').removeClass('freezing-buyer--show');
          }, 5000);

          var randInterval = getRandomInt(20, 22);

          timeInterval = setTimeout(tInterval, randInterval *1000);


      }, 20000);
  };

  function getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var arr_buyer = {
      country: [
          { // RUS
              town: [],
              people_name: [],
              class_flag: ["flag_rus"]
          },
          { // BLR
              town: [],
              people_name: [],
              class_flag: ["flag_blr"]
          },
          { // UKR
              town: ["Киев", "Харьков", "Одесса", "Днепропетровск", "Запорожье", "Львов", "Кривой Рог", "Николаев", "Мариуполь", "Винница", "Херсон", "Полтава", "Чернигов", "Черкассы", "Житомир", "Сумы", "Хмельницкий", "Черновцы", "Ровно", "Кировоград", "Ивано-Франковск", "Кременчуг", "Тернополь", "Луцк", "Белая Церковь", "Краматорск", "Калуш", "Ирпень", "Самбор", "Мукачево", "Городище", "Фастов", "Котовск", "Славянск", "Умань", "Тульчин", "Хмельник", "Дрогобыч"],
              people_name: ["Сергей Игоревич", "Серега", "Леша", "Алексей Иванович", "Колян", "Коля", "Николай Петрович", "Павел", "Паша", "Дима", "Дмитрий", "Дмитрий Сергеевич", "Женя", "Евгений Павлович", "Славик", "Антон Юриевич", "Андрей", "Антон Сергеевич", "Артем", "Гена", "Генадий", "Макс", "Максим", "Олег Петрович", "Олег", "Виктор", "Роман Антонович", "Рома", "Денис О.", "Руслан Андреевич", "Вадим", "Костя", "Юрий Игоревич", "Влад", "Владислав", "Валентин Михайлович", "Марат", "Юрий", "Юрий Иванович", "Никитос", "Анатолий И."],
              class_flag: ["flag_ukr"]
          }
      ]
  };


init();

  // ---------------------------------------------------------