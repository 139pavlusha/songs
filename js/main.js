"use strict";

$(document).ready(function () {
    const playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        }, {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        }, {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        }, {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        }, {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        }, {
            author: "AC/DC",
            song: "BACK IN BLACK"
        }, {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        }, {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }];

    function closeWindow($item) {
        $item.append($('<hr>'));
        $('.window').remove();
    }

    function showInfo(author, song, $item) {
        // console.log(author, song);
        let $window = $(`<section class="window"><h3>${author}</h3><p>${song}</p></section>`);
        let $btn = $('<button class="close">Close window</button>')
        $btn.click(function () {
            closeWindow($item);
        });
        $window.append($btn);
        $('body').append($window);
    }

    for (let i = 0; i < playList.length; i++) {
        let $btn = $('<button  class="show_inf">Show Info</button>');
        let $item = $(`<li> ${playList[i].author} ${playList[i].song} </li>`);
        $btn.click(function () {
            showInfo(playList[i].author, playList[i].song, $item);
        });
        $item.append($btn);
        $('.list').append($item);
    }

});