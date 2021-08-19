$(document).ready(function () {
    var currentFloor = 2; // переменная с текущим этажом
    var floorPath = $('.main__home path'); // каждый отдельный этаж в SVG
    var counterUp = $('.counter-up'); // кнопка увеличения этажа
    var counterDown = $('.counter-down'); // кнопка уменьшения этажа

    // Ф-ция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.main__counter-number').text(currentFloor); // записываем значение этажа в счетчик справа
    });

    // Ф-ция слежения за кликом по кнопке вверх
    counterUp.on('click', function () {
        // проверяем значение этажа оно не должно быть больше 18
        if (currentFloor < 18) { 
            currentFloor++; // прибавляем один этаж
            // форматируем переменную с этажем, чтобы было 01, а не 1
            usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
            $('.main__counter-number').text(usCurrentFloor); // записываем значение этажа в счетчик справа
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
            $('.main__counter-number').text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });
});