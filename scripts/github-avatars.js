// ==UserScript==
// @name            GitHub-Avatars
// @namespace       MaiJZ
// @version         0.1
// @description     display avatars in github news feed.
// @author          MaiJZ
// @originalAuthor  https://github.com/anasnakawa/chrome-github-avatars
// @homepageURL     https://github.com/maijz128/tampermonkey-github-avatars
// @supportURL      https://greasyfork.org/zh-CN/scripts/31500-github-avatars
// @match           *://github.com/
// @require         http://code.jquery.com/jquery-2.2.4.min.js
// @grant           none
// @icon            data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMzA0MTNFOTI0MzgxMUUyQjU3NEE4RkIwNjc3OEQ5OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMzA0MTNFQTI0MzgxMUUyQjU3NEE4RkIwNjc3OEQ5OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUzMDQxM0U3MjQzODExRTJCNTc0QThGQjA2Nzc4RDk5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUzMDQxM0U4MjQzODExRTJCNTc0QThGQjA2Nzc4RDk5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NGRhYgAADRtJREFUeNqsWAl0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
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...

    use_script();
    addCSS();
})();

function use_script() {
    'use strict';

// cahcing some jQuery references
// ------------------------------
    var $news = $('.news')

// hacking into jQuery ajax to be notified
// once the pagination ajax completed
        , onPaginationComplete = function () {
        getAvatarsForUsers(function (data) {
            printImages(data.items);
        });
    }

// generate search url for a
// list of github usernames
// ------------------------
        , generateUrl = function (array, pagination) {
        for (var i in array) {
            array[i] = 'user%3A' + array[i];
        }
        return '//api.github.com/search/users?q=' + array.join('+') + ( pagination ? '&per_page=' + pagination : '' );
    }

// drop duplicated items from an array
// -----------------------------------
        , unique = function (array) {
        var temp = {};
        for (var i in array) {
            temp[array[i]] = {};
        }
        return Object.keys(temp);
    }

// get new users
// -------------
        , prepareNewUsersOnPage = function () {
        var users = $news.find('.alert').not('.push, .public, .issues_comment, .avatar-ready').find('.title a:eq(0)').map(function () {
            var $self = $(this)
                , username = $self.text();

            $self.addClass(username);

            $self.parent().addClass('avatar-container')

            // store username
            $self.closest('.alert')
                .attr('data-username', username);

            return username;
        }).toArray();

        return unique(users);
    }

// print all users gravatars into DOM
// ----------------------------------
        , printImages = function (items) {
        for (var item in items) {
            var $img = $('<img />').addClass('github-avatar').attr('src', items[item].avatar_url);

            $('.alert:not(.avatar-ready,.issues_opened) .' + items[item].login).each(function () {
                var $self = $(this);

                $img.clone().insertBefore($self);
                $self.closest('.alert').addClass('avatar-ready');
            });
        }
    }

        , getAvatarsForUsers = function (callback) {
        $.get(generateUrl(prepareNewUsersOnPage(), 31), callback);
    }

// tricking first element in feed
// ------------------------------
        , $first = $('.news .alert').eq(0)
        , $clone;

    $first.clone().insertBefore($first);
    $clone = $first.prev();
    $first.css('border', 'none');
    $clone.css({
        height: 0
        , padding: 0
    });


// query github API
// ----------------
    getAvatarsForUsers(function (data) {
        printImages(data.items);
    });

// hacking into pagination calls
// -----------------------------
// since we don't have access to github's
// jQuery object, we'll do a workaround here
    var buttonSelector = '.js-events-pagination, .ajax-pagination-btn';
    $news.on('click', buttonSelector, function () {

        console.info('waiting for a pagination to complete');

        var id = setInterval(function () {
            var $button = $(buttonSelector);
            if ($button.closest('.loading').length === 0) {
                clearInterval(id);
                onPaginationComplete();
                console.info('pagination completed');
            } else {
                console.info('waiting...');
            }

        }, 500);
    });
}


function addCSS() {
    const CSS_0 = {
        selector: ".title .github-avatar",
        rules: "position: absolute;border-radius: 4px;" +
        "left: 0;  top: 6px;	width: 32px;  height: 32px;"
    };
    const CSS_1 = {
        selector: ".news .alert.avatar-ready .simple > .octicon",
        rules: "z-index: 10;" +
        "left: 27px !important;	top: 27px;  text-shadow: #FFF -1px -1px 0px;"
    };

    function Sheet() {
        // 创建 <style> 标签
        var style = document.createElement("style");

        // 可以添加一个媒体(/媒体查询,media query)属性
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")

        // 对WebKit hack :(
        style.appendChild(document.createTextNode(""));

        // 将 <style> 元素加到页面中
        document.head.appendChild(style);

        return style.sheet;
    }

    function addCSSRule(sheet, selector, rules, index) {
        if ("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}", index);
        }
        else if ("addRule" in sheet) {
            sheet.addRule(selector, rules, index);
        }
    }


    try {
        var sheet = new Sheet();
        addCSSRule(sheet, CSS_0.selector, CSS_0.rules, 0);
        addCSSRule(sheet, CSS_1.selector, CSS_1.rules, 0);

    } catch (e) {
        console.error(e);
    }
}
