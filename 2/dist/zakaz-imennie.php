<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom-style.css">


    <title>avtonum</title>
  </head>
  <body>
    
    <?php include_once "includes/head.php"; ?>
    
    <div class="zakaz-imennie">
      <div class="container">
        <div class="row">
          <div class="col-md-8 calc">
            <span class="label">Ваш именной номер:<span class="star">*</span></span>
            <div class="row justify-content-center">
              <span class="error">Введите надпись на номере</span>
            </div>
            <div class="calc-input">
              <img src="img/calc.png" title="image" alt="image">
              <form action="">
                <input type="text" maxlength="8" placeholder="ИМЯ">
              </form>
            </div>
            <p class="calc__heading">Стоимость: <b class="orange">6500 грн</b></p>
            <p class="paragraph calc__text">в стоимость входит: <br> комплект именных номеров <br>разрешительное письмо из департамента ГАИ</p>
          </div>
          <div class="zakaz-imennie-car">
            <img src="img/Car---Range-Rover.jpg" title="car-image" alt="car-image">
            <div class="zakaz-imennie-car__number">
              <img src="img/calc.png" alt="image">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form class="form">
      <div class="container">
        <div class="form-block">
          <div class="row input-wrap">
            <div class="col-sm-3">
              <label for="name" class="label">Ваше имя:<span class="star">*</span></label>
            </div>
            <div class="col">
              <input type="text" id="name" class="col-sm-7 input input_error" placeholder="для доставки по Украине ФИО напишите полностью">
              <span class="col error_small">необходимо заполнить</span>
            </div>
          </div>
          <div class="row input-wrap">
            <div class="col-sm-3">
              <label for="mail" class="label">E-mail:</label>
            </div>
            <div class="col">
              <input type="text" id="mail" class="col-sm-7 input" placeholder="не обязательно">
            </div>
          </div>
          <div class="row input-wrap">
            <div class="col-sm-3">
              <label for="tel" class="label">Контактный телефон:<span class="star">*</span></label>
            </div>
            <div class="col">
              <input type="text" id="tel" class="col-sm-7 input input_error">
              <span class="col error_small">необходимо заполнить</span>
            </div>
          </div>
          <div class="row input-wrap">
            <div class="col-sm-3">
              <label for="tel" class="label">Фото/сканы документов:</label>
            </div>
            <div class="col">
              <input type="file" name="pic[]" multiple="">
            </div>
          </div>
        </div>

        <div class="form-block">
          <div class="form-block-heading">
            <p class="label label_big">Способ доставки<span class="star">*</span></p>
            <span class="error">Выберите cпособ доставки</span>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="deliver-type" class="radio" id="10">
              <label for="10"></label>
              <div class="radio-text">
                <p class="label">Самовывоз <span>(г.Киев, ул.Святошинская 1, офис 11)</span></p>
              </div>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="deliver-type" class="radio" id="11">
              <label for="11"></label>
              <div class="radio-text">
                <p class="label">Доставка по Киеву <span>(курьером, +50 грн)</span></p>
                <div class="input-wrap">
                  <label for="tel" class="label">адрес доставки:<span class="star">*</span></label>
                  <input type="text" id="tel" class="col-sm-7 input input_error">
                  <span class="error_small">необходимо заполнить</span>
                </div>
              </div>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="deliver-type" class="radio" id="12">
              <label for="12"></label>
              <div class="radio-text">
                <p class="label">Доставка по Украине <span>(Новой Почтой)</span></p>
                <div class="input-wrap">
                  <label for="tel" class="label">Город / населенный пункт:<span class="star">*</span></label>
                  <input type="text" id="tel" class="col-sm-7 input input_error">
                  <span class="error_small">необходимо заполнить</span>
                </div>
                <div class="big-select-wrap">
                  <p class="label">Служба доставки:</p>
                    <select name="" id="">
                      <option value="">Новая почта</option>
                      <option value="">2 номера</option>
                      <option value="">3 номера</option>
                    </select>
                </div>
                <div class="input-wrap">
                  <label for="tel" class="label">Адрес отделения или номер склада:</label>
                  <input type="text" id="tel" class="col-sm-7 input">
                </div>
              </div>
          </div>
        </div>

        <div class="form-block">
          <div class="form-block-heading">
            <p class="label label_big">Способ оплаты<span class="star">*</span></p>
            <span class="error">Выберите cпособ оплаты</span>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="pay-type" class="radio" id="13">
              <label for="13"></label>
              <div class="radio-text">
                <p class="label">При получении</p>
              </div>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="pay-type" class="radio" id="14">
              <label for="14"></label>
              <div class="radio-text">
                <p class="label">Он-лайн оплата через сайт <span>(после оформления заказа)</span></p>
              </div>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="pay-type" class="radio" id="15">
              <label for="15"></label>
              <div class="radio-text">
                <p class="label">На карту Приватбанка <span>(номер карты 5363 5423 0661 7631)</span></p>
              </div>
          </div>
          <div class="radio-wrap">
              <input type="radio" name="pay-type" class="radio" id="16">
              <label for="16"></label>
              <div class="radio-text">
                <p class="label">По безналичному расчету <span>(счет будет сформирован и выслан после оформления заказа)</span></p>
              </div>
          </div>
        </div>

        <div class="form-block textarea-block">
          <div class="form-block-heading">
            <p class="label">Дополнительная информация к вашему заказу</p>
          </div>
          <textarea name="" id="" class="textarea"></textarea>
        </div>
      </div>

      <div class="pay">
        <p>Сумма к оплате:  <b class="orange">450 грн</b></p>
        <button class="button_big" type="submit">Заказать</button>
      </div>
    </form>

    <div class="inform">
      <div class="container">
        <p><span class="star">*</span> - поля обязательные для заполнения</p>
      </div>
    </div>

    <div class="ukraine-order">
      <div class="container">
        <div class="row">
          <div class="col-md-4 content-block-image">
            <img src="img/ukraine-map.jpg" title="ukraine-map" alt="ukraine-map">
          </div>
          <div class="col-md-8">
            <h2 class="h2">
              <b>Заказать номерные знаки в наших представительствах по Украине</b>
            </h2>
            <div class="row">
              <div class="col-sm-6">
                <ul class="city-link-list">
                  <li><a href="#">Изготовление номеров Винница</a></li>
                  <li><a href="#">Изготовление номеров Днепропетровск</a></li>
                  <li><a href="#">Изготовление номеров Донецк</a></li>
                  <li><a href="#">Изготовление номеров Житомир</a></li>
                  <li><a href="#">Изготовление номеров Запорожье</a></li>
                  <li><a href="#">Изготовление номеров Ивано-Франковск</a></li>
                  <li><a href="#">Изготовление номеров Кировоград</a></li>
                  <li><a href="#">Изготовление номеров Кривой Рог</a></li>
                  <li><a href="#">Изготовление номеров Луганск</a></li>
                  <li><a href="#">Изготовление номеров Луцк</a></li>
                  <li><a href="#">Изготовление номеров Львов</a></li>
                  <li><a href="#">Изготовление номеров Николаев</a></li>
                  <li><a href="#">Изготовление номеров Одесса</a></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="city-link-list">
                  <li><a href="#">Изготовление номеров Полтава</a></li>
                  <li><a href="#">Изготовление номеров Ровно</a></li>
                  <li><a href="#">Изготовление номеров Симферополь</a></li>
                  <li><a href="#">Изготовление номеров Сумы</a></li>
                  <li><a href="#">Изготовление номеров Тернополь</a></li>
                  <li><a href="#">Изготовление номеров Ужгород</a></li>
                  <li><a href="#">Изготовление номеров Харьков</a></li>
                  <li><a href="#">Изготовление номеров Херсон</a></li>
                  <li><a href="#">Изготовление номеров Хмельницкий</a></li>
                  <li><a href="#">Изготовление номеров Черкассы</a></li>
                  <li><a href="#">Изготовление номеров Чернигов</a></li>
                  <li><a href="#">Изготовление номеров Черновцы</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php include_once "includes/footer.php"; ?>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   <!--  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->

    <script src="js/common.js"></script>
    <script src="js/zakaz_imennie.js"></script>

    <script src="js/custom.js"></script>


  </body>
</html>