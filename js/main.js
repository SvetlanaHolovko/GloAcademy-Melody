$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажом
    var floorPath = $('.main__home path'); // каждый отдельный этаж в SVG
    var counterUp = $('.counter-up'); // кнопка увеличения этажа
    var counterDown = $('.counter-down'); // кнопка уменьшения этажа

    var modal = $('.modal'); // модальное окно
    var modalCloseBtn = $('.modal__close-btn'); // кнопка закрытия модального окна
    var viewFlatsBtn = $('.view-flats'); // кнопка "Смотреть квартиры на этаже"

    var currentFlat = 02; // переменная с текущей квартирой
    var flatPath = $('.flats path'); // каждая отдельная квартира в SVG
    var flatsLink = $(".flat__link"); // характеристики квартир

    // Ф-ция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
    });

    // при клике на этаж открывается модальное окно
    floorPath.on('click', toggleModal); 

    // при клике на кнопку закрывается модальное окно
    modalCloseBtn.on('click', toggleModal); 
    
    // при клике на кнопку открывается модальное окно
    viewFlatsBtn.on('click', toggleModal);
    
    // Ф-ция слежения за кликом по кнопке вверх
    counterUp.on('click', function () {
        // проверяем значение этажа оно не должно быть больше 18
        if (currentFloor < 18) { 
            currentFloor++; // прибавляем один этаж
            // форматируем переменную с этажем, чтобы было 01, а не 1
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });

    // Ф-ция слежения за кликом по кнопке вниз
    counterDown.on('click', function () {
        // проверяем значение этажа оно не должно быть меньше 2
        if (currentFloor > 2) { 
            currentFloor--; // отнимаем один этаж
            // форматируем переменную с этажем, чтобы было 01, а не 1
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });

    // Ф-ция открытия и закрытия модального окна
    function toggleModal() {
        modal.toggleClass('is-open');
    }

    // Ф-ция при наведении мышью на квартиру
    flatPath.on('mouseover', function () {
        currentFlat = $(this).attr('data-flat'); // получаем значение текущей квартиры
        flatPath.removeClass('current-flat'); // удаляем активный класс у квартиры
        flatsLink.removeClass('current-link'); // удаляем активный класс у х-ки квартиры
        $(`[data-flat=${currentFlat}]`).toggleClass('current-flat'); // подсвечиваем текущую квартиру
        $(`[data-link=${currentFlat}]`).toggleClass('current-link'); // подсвечиваем текущую х-ку квартиры
    });

    // Ф-ция при наведении мышью на х-ку квартиры
    flatsLink.on('mouseover', function () {
        currentFlat = $(this).attr('data-link'); // получаем значение текущей х-ки квартиры
        flatPath.removeClass('current-flat'); // удаляем активный класс у квартиры
        flatsLink.removeClass('current-link'); // удаляем активный класс у х-ки квартиры
        $(`[data-flat=${currentFlat}]`).toggleClass('current-flat'); // подсвечиваем текущую квартиру
        $(`[data-link=${currentFlat}]`).toggleClass('current-link'); // подсвечиваем текущую х-ку квартиры
    });

});