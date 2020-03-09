$(document).ready(function () {
    $.ajax({
        url: '/api/recommend/',
        type: 'GET',
        data: {count: 5},
        // headers: {'X-CSRFtoken': $.cookie('csrftoken') },
        dataType: 'JSON',
        success: function (result) {
            console.log(result);
            $.each(result, function (i, val) {
                var card = "                                            <div class=\"Card TopstoryItem TopstoryItem-isRecommend\" tabindex=\"0\">\n" +
                    "                                                <div class=\"Feed\">\n" +
                    "                                                    <div class=\"ContentItem AnswerItem\">\n" +
                    "                                                        <h2 class=\"ContentItem-title\">\n" +
                    "                                                            <div itemprop=\"zhihu:question\"\n" +
                    "                                                                 itemtype=\"http://schema.org/Question\" itemscope=\"\">\n" +
                    "                                                                <a target=\"_blank\"\n" +
                    "                                                                   data-za-detail-view-element_name=\"Title\"\n" +
                    "                                                                   href=\"/cms/question_detail/" + val["qid"] + "\">" + val["question_title"] + "</a>\n" +
                    "                                                            </div>\n" +
                    "                                                        </h2>\n" +
                    "                                                        <div class=\"RichContent is-collapsed\">\n" +
                    "                                                            <div class=\"RichContent-inner\">\n" +
                    "                                                                <span\n" +
                    "                                                                    class=\"RichText ztext CopyrightRichText-richText\"\n" +
                    "                                                                    itemprop=\"text\">" + val["answer"]["answer_content"] + "…</span>\n" +
                    "                                                                <button type=\"button\"\n" +
                    "                                                                        class=\"Button ContentItem-more Button--plain\">\n" +
                    "                                                                    阅读全文<span\n" +
                    "                                                                        style=\"display: inline-flex; align-items: center;\">\n" +
                    "                                                                    ​<svg\n" +
                    "                                                                        class=\"Zi Zi--ArrowDown ContentItem-arrowIcon\"\n" +
                    "                                                                        fill=\"currentColor\" viewBox=\"0 0 24 24\"\n" +
                    "                                                                        width=\"24\" height=\"24\"><path\n" +
                    "                                                                        d=\"M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z\"\n" +
                    "                                                                        fill-rule=\"evenodd\"></path></svg></span>\n" +
                    "                                                                </button>\n" +
                    "                                                            </div>\n" +
                    "                                                            <div class=\"ContentItem-actions\">\n" +
                    "                                                                <span>\n" +
                    "                                                                    <button class=\"Button VoteButton VoteButton--up\">\n" +
                    "                                                                        <span style=\"display: inline-flex; align-items: center;\">​\n" +
                    "                                                                <svg\n" +
                    "                                                                    class=\"Zi Zi--TriangleUp VoteButton-TriangleUp\"\n" +
                    "                                                                    fill=\"currentColor\" viewBox=\"0 0 24 24\" width=\"10\"\n" +
                    "                                                                    height=\"10\"><path\n" +
                    "                                                                    d=\"M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z\"\n" +
                    "                                                                    fill-rule=\"evenodd\"></path></svg></span>赞同 " + val["answer"]["like"] + "</button\n" +
                    "                                                                    ><button type=\"button\"\n" +
                    "                                                                    class=\"Button VoteButton VoteButton--down\">\n" +
                    "                                                                    <span\n" +
                    "                                                                    style=\"display: inline-flex; align-items: center;\">\n" +
                    "                                                                        ​<svg\n" +
                    "                                                                    class=\"Zi Zi--TriangleDown\" fill=\"currentColor\"\n" +
                    "                                                                    viewBox=\"0 0 24 24\" width=\"10\" height=\"10\"><path\n" +
                    "                                                                    d=\"M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z\"\n" +
                    "                                                                    fill-rule=\"evenodd\"></path></svg>\n" +
                    "                                                                    </span>\n" +
                    "                                                                </button></span>\n" +
                    "                                                                <button type=\"button\"\n" +
                    "                                                                        class=\"Button ContentItem-action Button--plain Button--withIcon Button--withLabel\">\n" +
                    "                                                                    <span style=\"display: inline-flex; align-items: center;\">​\n" +
                    "                                                                        <svg\n" +
                    "                                                                            class=\"Zi Zi--Comment Button-zi\"\n" +
                    "                                                                            fill=\"currentColor\" viewBox=\"0 0 24 24\"\n" +
                    "                                                                            width=\"1.2em\" height=\"1.2em\"><path\n" +
                    "                                                                            d=\"M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z\"\n" +
                    "                                                                            fill-rule=\"evenodd\"></path></svg></span>" + val["answer"]["comment"] + " 条评论\n" +
                    "                                                                </button>\n" +
                    "                                                                <div class=\"Popover ShareMenu ContentItem-action\">\n" +
                    "                                                                    <div class=\"ShareMenu-toggler\" id=\"Popover3-toggle\"\n" +
                    "                                                                         aria-haspopup=\"true\" aria-expanded=\"false\"\n" +
                    "                                                                         aria-owns=\"Popover3-content\">\n" +
                    "                                                                        <button type=\"button\"\n" +
                    "                                                                                class=\"Button Button--plain Button--withIcon Button--withLabel\">\n" +
                    "                                                                            <span style=\"display: inline-flex; align-items: center;\">​<svg\n" +
                    "                                                                                    class=\"Zi Zi--Share Button-zi\"\n" +
                    "                                                                                    fill=\"currentColor\"\n" +
                    "                                                                                    viewBox=\"0 0 24 24\" width=\"1.2em\"\n" +
                    "                                                                                    height=\"1.2em\"><path\n" +
                    "                                                                                    d=\"M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z\"\n" +
                    "                                                                                    fill-rule=\"evenodd\"></path></svg></span>分享\n" +
                    "                                                                        </button>\n" +
                    "                                                                    </div>\n" +
                    "                                                                </div>\n" +
                    "                                                                <button type=\"button\"\n" +
                    "                                                                        class=\"Button ContentItem-action Button--plain Button--withIcon Button--withLabel\">\n" +
                    "                                                                    <span style=\"display: inline-flex; align-items: center;\">​<svg\n" +
                    "                                                                            class=\"Zi Zi--Star Button-zi\"\n" +
                    "                                                                            fill=\"currentColor\" viewBox=\"0 0 24 24\"\n" +
                    "                                                                            width=\"1.2em\" height=\"1.2em\"><path\n" +
                    "                                                                            d=\"M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z\"\n" +
                    "                                                                            fill-rule=\"evenodd\"></path></svg></span>收藏\n" +
                    "                                                                </button>\n" +
                    "                                                                <button type=\"button\"\n" +
                    "                                                                        class=\"Button ContentItem-action Button--plain Button--withIcon Button--withLabel\">\n" +
                    "                                                                    <span style=\"display: inline-flex; align-items: center;\">​<svg\n" +
                    "                                                                            class=\"Zi Zi--Heart Button-zi\"\n" +
                    "                                                                            fill=\"currentColor\" viewBox=\"0 0 24 24\"\n" +
                    "                                                                            width=\"1.2em\" height=\"1.2em\"><path\n" +
                    "                                                                            d=\"M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z\"\n" +
                    "                                                                            fill-rule=\"evenodd\"></path></svg></span>喜欢\n" +
                    "                                                                </button>\n" +
                    "                                                                <div class=\"Popover ContentItem-action\">\n" +
                    "                                                                    <button aria-label=\"更多\" type=\"button\"\n" +
                    "                                                                            id=\"Popover4-toggle\" aria-haspopup=\"true\"\n" +
                    "                                                                            aria-expanded=\"false\"\n" +
                    "                                                                            aria-owns=\"Popover4-content\"\n" +
                    "                                                                            class=\"Button OptionsButton Button--plain Button--withIcon Button--iconOnly\">\n" +
                    "                                                                        <span style=\"display: inline-flex; align-items: center;\">​<svg\n" +
                    "                                                                                class=\"Zi Zi--Dots Button-zi\"\n" +
                    "                                                                                fill=\"currentColor\" viewBox=\"0 0 24 24\"\n" +
                    "                                                                                width=\"1.2em\" height=\"1.2em\"><path\n" +
                    "                                                                                d=\"M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"\n" +
                    "                                                                                fill-rule=\"evenodd\"></path></svg></span>\n" +
                    "                                                                    </button>\n" +
                    "                                                                </div>\n" +
                    "                                                            </div>\n" +
                    "                                                        </div>\n" +
                    "                                                    </div>\n" +
                    "                                                </div>\n" +
                    "                                            </div>";
                $("#card_topstory_list").append(card);
            });
        },
        error: function (result) {
            console.log("error: " + JSON.stringify(result));
        }

    });
    $("#Popover1-toggle").bind('input propertychange', 'none', function () {
        var text = $(this).val();
        // alert(text);
        if (text.length != 0) {
            $.ajax({
                type: "GET",
                url: "https://api.search.mi.com/query?",
                dataType: "jsonp",
                data: {
                    jsonpcallback: "xmsearch",
                    query: text,
                    page_index: "1"
                },
                async: false,
                success: function (result) {
                    $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").html("");
                    $.each(result.data.list, function (i, val) {
                        var list = "<li class=\"J-qcTopNavSearchItem menu-search-select\"><a href=\"#\" data-event=\"nav\">" + val["title"] + "</a></li>";
                        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").append(list);
                    })
                },
                error: function (result) {
                    console.log("error: " + JSON.stringify(result));
                }
            })
        } else {
            $.ajax({
                type: "GET",
                url: "https://api.search.mi.com/query?",
                dataType: "jsonp",
                data: {
                    jsonpcallback: "xmsearch",
                    query: " ",
                    page_index: "1"
                },
                async: false,
                success: function (result) {
                    $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").html("");
                    $.each(result.data.list, function (i, val) {
                        var list = "<li class=\"J-qcTopNavSearchItem menu-search-select\"><a href=\"#\" data-event=\"nav\">" + val["title"] + "</a></li>";
                        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").append(list);
                    })
                },
                error: function (result) {
                    console.log("error: " + JSON.stringify(result));
                }
            })
        }
    });

    $("#submit-question").click(function () {
        var question_title = $("#question_title").val();
        var question_details = $("#question_details").val();
        console.log(question_title);
        console.log(question_details);
        if (question_title.length != 0) {
            $.ajax({
                url: '/api/ask_question/',
                type: 'POST',
                data: {title: question_title,describe:question_details},
                // headers: {'X-CSRFtoken': $.cookie('csrftoken') },
                dataType: 'JSON',
                success: function (result){
                    console.log(result["state"]);
                    if(result["state"]=="200")
                    {
                        alert("问题提交成功！");
                        $("#quest").css('display', 'none');
                    }
                    if(result["state"]=="401")
                    {
                        alert("标题少于3个字符，请重新输入标题！");
                    }
                },
                error: function (result) {
                    console.log("failed");
                }
            });
        }
    });

    $(window).scroll(function () {
        var scroH = $(document).scrollTop();
        if (scroH > 26) {
            $("#root > div > div:nth-child(2) > header").addClass("is-fixed");
            $("#root > div > div:nth-child(2) > header").attr('style', 'width: 1519.2px; top: 0px; left: 0px;');
        }
        // if(scroH<26)
        // {
        //     $("#root > div > div:nth-child(2) > header").removeClass("is-fixed");
        //     $("#root > div > div:nth-child(2) > header")attr('style','none');
        // }
    });

    $("#Popover1-toggle").focus(function () {
        expand_searchbox();

    });

    $("#Popover1-toggle").blur(function () {
        wrap_searchbox();
    });

    $("#search-button").click(function () {
        // alert("search-button");
    });

    $("#Popover15-toggle").click(function () {
        open_notification();
    });
    $("#Popover15-toggle").blur(function () {
        close_notification();
    });

    $("#Popover16-toggle").click(function () {
        open_message();
    });
    $("#Popover16-toggle").blur(function () {
        close_message();
    });

    $("#Popover17-toggle").click(function () {
        open_user();
    });
    $("#Popover15-content").blur(function () {
        close_user();
    });

    $("#login_button").click(function () {
        $(location).attr('href', '/userzone/login/');

    })

});

// $(document).on('mousewheel DOMMouseScroll', onMouseScroll);
// function onMouseScroll(e){
//     e.preventDefault();
//     var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
//     var delta = Math.max(-1, Math.min(1, wheel) );
//     if(delta<=0){//向下滚动
//         console.log('向下滚动',delta);
//         $("#root > div > div:nth-child(2) > header").addClass("is-fixed");
//         $("#root > div > div:nth-child(2) > header").attr('style','width: 1519.2px; top: 0px; left: 0px;')
//         // $("#root > div > div:nth-child(2) > header").css('style','width: 1519.2px; top: 0px; left: 0px;');
//     }else{//向上滚动
//         console.log('向上滚动',delta);
//         $("#root > div > div:nth-child(2) > header").removeClass("is-fixed");
//         $("#root > div > div:nth-child(2) > header")attr('style','none')
//     }
// }

// $(document).scroll(function() {
//     var scroH = $(document).scrollTop();  //滚动高度
//     var viewH = $(window).height();  //可见高度
//     var contentH = $(document).height();  //内容高度
//     console.log(scroH)
//     if(scroH >1080){  // 距离顶部大于1080px时
//         console.log(scroH);
//     }
//     if (contentH - (scroH + viewH) <= 1080){  // 距离底部高度小于1080px
//
//     }
//     if (contentH = (scroH + viewH)){  //滚动条滑到底部啦
//
//     }
// });

function expand_searchbox() {
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").removeClass("SearchBar-input Input-wrapper Input-wrapper--grey");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").addClass("SearchBar SearchBar-focusedInput Input-wrapper Input-wrapper--grey is-focus");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > button").addClass("SearchBar-hiddenAskButton");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label > button > span > svg").addClass("isFocus");
    // show = $('#Popover1-content').css('display');
    // $("#Popover1-content").css('display',show =='block'?'none':show);
    $("#Popover1-content").css('display', 'block');
}

function wrap_searchbox() {
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").removeClass();
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").addClass("SearchBar-input Input-wrapper Input-wrapper--grey");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > button").removeClass("SearchBar-hiddenAskButton")
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label > button > span > svg").removeClass("isFocus")
    $("#Popover1-content").css('display', 'none');
}

function open_notification() {
    $("#Popover13-content").css('display', 'block');

}

function close_notification() {
    $("#Popover13-content").css('display', 'none');

}

function open_message() {
    $("#Popover14-content").css('display', 'block');

}

function close_message() {
    $("#Popover14-content").css('display', 'none');

}

function open_user() {
    $("#Popover15-content").css('display', 'block');

}

function close_user() {
    $("#Popover15-content").css('display', 'none');

}