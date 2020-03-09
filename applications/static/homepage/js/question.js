$(document).ready(function () {

         $.ajax({
        url: '/api/question_detail/',
        type: 'GET',
        data: {qid:window.location.href.split('/')[5],page:1,count:5},
        dataType: 'JSON',
        success: function (result) {
            $(".QuestionPage").html("");
            $(".QuestionPage").append(
                '                <div>\n' +
                '                    <div class="QuestionHeader">\n' +
                '                        <div class="QuestionHeader-content">\n' +
                '                            <div class="QuestionHeader-main">' +
                '<h1 class="QuestionHeader-title">'+result['title']+'</h1>                                <div>\n' +
                '                                    <div class="QuestionHeader-detail">\n' +
                '                                        <div class="QuestionRichText QuestionRichText--expandable QuestionRichText--collapsed">\n' +
                '                                            <div><span class="RichText ztext" itemProp="text">'+result["describe"]+
                '</span>' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>' +
                '                            <div class="QuestionHeader-side">\n' +
                '                                <div class="QuestionHeader-follow-status">\n' +
                '                                    <div class="QuestionFollowStatus">\n' +
                '                                        <div class="NumberBoard QuestionFollowStatus-counts NumberBoard--divider">\n' +
                '                                            <button type="button" class="Button NumberBoard-item Button--plain">\n' +
                '                                                <div class="NumberBoard-itemInner">\n' +
                '                                                    <div class="NumberBoard-itemName">关注者</div>\n' +
                '                                                    <strong class="NumberBoard-itemValue">'+result["follower_num"]+
                '</strong></div>\n' +
                '                                            </button>\n' +
                '                                            <div\n' +
                '                                                    class="NumberBoard-item">\n' +
                '                                                <div class="NumberBoard-itemInner">\n' +
                '                                                    <div class="NumberBoard-itemName">被浏览</div>\n' +
                '                                                    <strong class="NumberBoard-itemValue">' +result["browse_view"]+
                '</strong>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>' +
                '                        <div class="QuestionHeader-footer">\n' +
                '                            <div class="QuestionHeader-footer-inner">\n' +
                '                                <div class="QuestionHeader-main QuestionHeader-footer-main">\n' +
                '                                    <div class="QuestionButtonGroup">\n' +
                '                                        <button type="button" \n' +
                '                                                class="Button FollowButton Button--primary Button--blue">\n' +
                '                                            关注问题\n' +
                '                                        </button>\n' +
                '                                        <button type="button" class="Button Button--blue">\n' +
                '                                            <svg viewBox="0 0 12 12"\n' +
                '                                                 class="Icon QuestionButton-icon Button-icon Icon--modify"\n' +
                '                                                 style="height:16px;width:14px" width="14" height="16"\n' +
                '                                                 aria-hidden="true"><title></title>\n' +
                '                                                <g>\n' +
                '                                                    <path d="M.423 10.32L0 12l1.667-.474 1.55-.44-2.4-2.33-.394 1.564zM10.153.233c-.327-.318-.85-.31-1.17.018l-.793.817 2.49 2.414.792-.814c.318-.328.312-.852-.017-1.17l-1.3-1.263zM3.84 10.536L1.35 8.122l6.265-6.46 2.49 2.414-6.265 6.46z"\n' +
                '                                                          fill-rule="evenodd"/>\n' +
                '                                                </g>\n' +
                '                                            </svg>\n' +
                '                                            写回答\n' +
                '                                        </button>\n' +
                '                                    </div>\n' +
                '                                    <div\n' +
                '                                            class="QuestionHeaderActions">\n' +
                '                                        <button style="margin-right:16px" type="button" \n' +
                '                                                class="Button Button--grey Button--withIcon Button--withLabel"><span\n' +
                '                                                style="display:inline-flex;align-items:center">​<svg\n' +
                '                                                class="Zi Zi--Invite Button-zi" fill="currentColor" viewBox="0 0 24 24"\n' +
                '                                                width="1.2em" height="1.2em"><path\n' +
                '                                                d="M4 10V8a1 1 0 1 1 2 0v2h2a1 1 0 0 1 0 2H6v2a1 1 0 0 1-2 0v-2H2a1 1 0 0 1 0-2h2zm10.455 2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-7 6c0-2.66 4.845-4 7.272-4C17.155 14 22 15.34 22 18v1.375c0 .345-.28.625-.625.625H8.08a.625.625 0 0 1-.625-.625V18z"\n' +
                '                                                fill-rule="evenodd"></path></svg></span>邀请回答\n' +
                '                                        </button>\n' +
                '                                        <button type="button"\n' +
                '                                                class="Button Button--plain Button--withIcon Button--withLabel"><span\n' +
                '                                                style="display:inline-flex;align-items:center">​<svg\n' +
                '                                                class="Zi Zi--Report Button-zi" fill="currentColor" viewBox="0 0 24 24"\n' +
                '                                                width="1.2em" height="1.2em"><path\n' +
                '                                                d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z"\n' +
                '                                                fill-rule="evenodd"></path></svg></span>举报\n' +
                '                                        </button>\n' +
                '                                    </div>\n' +
                '                                    <div class="QuestionHeader-actions"></div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div>\n' +
                '                        <div class="Sticky"></div>\n' +
                '                    </div>\n' +
                '                </div>'
            );
            $(".QuestionPage").append(
                '                <div class="Question-main">\n' +
                '                    <div class="Question-mainColumn">\n' +
                '                        <div>\n' +
                '                            <div class="QuestionAnswers-statusWrapper"></div>\n' +
                '                            <div id="QuestionAnswers-answers" class="QuestionAnswers-answers"\n' +
                '                                 data-zop-feedlistmap="0,0,1,0" data-za-detail-view-path-module="ContentList"\n' +
                '                                 data-za-extra-module="{}">\n' +
                '                                <div class="Card AnswersNavWrapper">\n' +
                '                                    <div class="ListShortcut">\n' +
                '                                        <div class="List">\n' +
                '                                            <!--                                            共计有多少个回答-->\n' +
                '                                            <div class="List-header"><h4 class="List-headerText"><span>'+result["answer_num"]+
                ' 个回答</span>\n' +
                '                                            </h4>\n' +
                '                                                <div class="List-headerOptions">\n' +
                '                                                    <div class="Popover">\n' +
                '                                                        <button role="combobox" aria-expanded="false"\n' +
                '                                                                id="Popover9-toggle" aria-haspopup="true"\n' +
                '                                                                aria-owns="Popover9-content" type="button"\n' +
                '                                                                class="Button InputLike InputButton Select-button Select-plainButton Button--plain">\n' +
                '                                                            默认排序\n' +
                '                                                            <svg class="Zi Zi--Select Select-arrow" fill="currentColor"\n' +
                '                                                                 viewBox="0 0 24 24" width="24" height="24">\n' +
                '                                                                <path d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"\n' +
                '                                                                      fill-rule="evenodd"></path>\n' +
                '                                                            </svg>\n' +
                '                                                        </button>\n' +
                '                                                    </div>\n' +
                '                                                </div>\n' +
                '                                            </div>\n' +
                '                                            <div>\n' +
                '                                                <div class="" id="answer-lists">'+
                '</div></div></div></div></div></div></div>'
            );
            $.each(result["answer_list"],function(i,val){
                console.log(val);
                var card='                                                    <div class="List-item" tabindex="0">\n' +
                    '                                                        <div class="ContentItem AnswerItem" itemprop="suggestedAnswer"\n' +
                    '                                                             itemtype="http://schema.org/Answer">\n' +
                    '                                                            <div class="ContentItem-meta">\n' +
                    '                                                                <div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related"\n' +
                    '                                                                     itemprop="author" itemscope=""\n' +
                    '                                                                     itemtype="http://schema.org/Person">\n' +
                    '                                                                    <span class="UserLink AuthorInfo-avatarWrapper"><img\n' +
                    '                                                                            class="Avatar AuthorInfo-avatar" width="38"\n' +
                    '                                                                            height="38"\n' +
                    '                                                                            src="/static/homepage/images/touxiang.jpg"\n' +
                    '                                                                            ></span>\n' +
                    '                                                                    <div class="AuthorInfo-content">\n' +
                    '                                                                        <div class="AuthorInfo-head"><span\n' +
                    '                                                                                class="UserLink AuthorInfo-name">' +val["user"]["nickname"]+
                    '</span>\n' +
                    '                                                                        </div>\n' +
                    '                                                                        <div class="AuthorInfo-detail">\n' +
                    '                                                                            <div class="AuthorInfo-badge"></div>\n' +
                    '                                                                        </div>\n' +
                    '                                                                    </div>\n' +
                    '                                                                </div>\n' +
                    '                                                            </div>'+
                    '                                                            <div class="RichContent RichContent--unescapable">\n' +
                    '                                                                <div class="RichContent-inner"><span\n' +
                    '                                                                        class="RichText ztext CopyrightRichText-richText"\n' +
                    '                                                                        itemprop="text"><p>'+val["content"]+
                    '</p></span>\n' +
                    '                                                                </div>\n' +
                    '                                                                <div>\n' +
                    '                                                                    <div class="ContentItem-time"><a target="_blank"\n' +
                    '                                                                                                     href="/question/376574880/answer/1055995773">' +
                    '<span>发布于 '+val["time"]+
                    '</span></a>\n' +
                    '                                                                    </div>\n' +
                    '                                                                </div>\n' +
                    '                                                                <div class="ContentItem-actions"><span><button\n' +
                    '                                                                        type="button"\n' +
                    '                                                                        class="Button VoteButton VoteButton--up"><span\n' +
                    '                                                                        style="display: inline-flex; align-items: center;">​<svg\n' +
                    '                                                                        class="Zi Zi--TriangleUp VoteButton-TriangleUp"\n' +
                    '                                                                        fill="currentColor" viewBox="0 0 24 24"\n' +
                    '                                                                        width="10" height="10"><path\n' +
                    '                                                                        d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"\n' +
                    '                                                                        fill-rule="evenodd"></path></svg></span>赞同'+val["like_num"]+
                    '</button><button\n' +
                    '                                                                        aria-label="反对" type="button"\n' +
                    '                                                                        class="Button VoteButton VoteButton--down"><span\n' +
                    '                                                                        style="display: inline-flex; align-items: center;">​<svg\n' +
                    '                                                                        class="Zi Zi--TriangleDown" fill="currentColor"\n' +
                    '                                                                        viewBox="0 0 24 24" width="10" height="10"><path\n' +
                    '                                                                        d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"\n' +
                    '                                                                        fill-rule="evenodd"></path></svg></span></button></span>'+
                    '                                                                    <button type="button"\n' +
                    '                                                                            class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel" >\n' +
                    '                                                                        <span style="display: inline-flex; align-items: center;">​<svg\n' +
                    '                                                                                class="Zi Zi--Comment Button-zi"\n' +
                    '                                                                                fill="currentColor" viewBox="0 0 24 24"\n' +
                    '                                                                                width="1.2em" height="1.2em"><path\n' +
                    '                                                                                d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"\n' +
                    '                                                                                fill-rule="evenodd"></path></svg></span>添加评论\n' +
                    '                                                                    </button>'+
                    '                                                                    <div class="Popover ShareMenu ContentItem-action">\n' +
                    '                                                                        <div class="ShareMenu-toggler"\n' +
                    '                                                                             id="Popover180-toggle" aria-haspopup="true"\n' +
                    '                                                                             aria-expanded="false"\n' +
                    '                                                                             aria-owns="Popover180-content">\n' +
                    '                                                                            <button type="button"\n' +
                    '                                                                                    class="Button Button--plain Button--withIcon Button--withLabel" >\n' +
                    '                                                                                <span style="display: inline-flex; align-items: center;">​<svg\n' +
                    '                                                                                        class="Zi Zi--Share Button-zi"\n' +
                    '                                                                                        fill="currentColor"\n' +
                    '                                                                                        viewBox="0 0 24 24"\n' +
                    '                                                                                        width="1.2em" height="1.2em"><path\n' +
                    '                                                                                        d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"\n' +
                    '                                                                                        fill-rule="evenodd"></path></svg></span>分享\n' +
                    '                                                                            </button>\n' +
                    '                                                                        </div>\n' +
                    '                                                                    </div>' +
                    '                                                                    <button type="button"\n' +
                    '                                                                            class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">\n' +
                    '                                                                        <span style="display: inline-flex; align-items: center;">​<svg\n' +
                    '                                                                                class="Zi Zi--Star Button-zi"\n' +
                    '                                                                                fill="currentColor" viewBox="0 0 24 24"\n' +
                    '                                                                                width="1.2em" height="1.2em"><path\n' +
                    '                                                                                d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"\n' +
                    '                                                                                fill-rule="evenodd"></path></svg></span>收藏\n' +
                    '                                                                    </button>'+
                    '<button type="button"  class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel"><span style="display: inline-flex; align-items: center;">​<svg class="Zi Zi--Report Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z" fill-rule="evenodd"></path></svg></span>举报</button>'+
                    '                                                                </div>\n' +
                    '                                                            </div>\n' +
                    '                                                        </div>\n' +
                    '                                                    </div>'+
                    ''
                ;
                $("#answer-lists").append(card);
            });
            $("#answer-lists").append(
                '<div class="Card ViewAll" data-za-detail-view-path-module="MessageItem" data-za-extra-module="{&quot;card&quot;:{&quot;content&quot;:{&quot;item_num&quot;:26}}}"><a class="QuestionMainAction ViewAll-QuestionMainAction" data-za-detail-view-element_name="ViewAll" href="javascript:void(0);">已经到底啦</a></div>'
            );

        },
        error: function (result) {
            console.log("error: " + JSON.stringify(result));
        }

    });

    $(window).scroll(function(){
        var scroH = $(document).scrollTop();
        if(scroH>26)
        {
            $("#root > div > div:nth-child(2) > header").addClass("is-fixed");
            $("#root > div > div:nth-child(2) > header").attr('style','width: 1519.2px; top: 0px; left: 0px;');
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

    $("#search-button").click(function (){
        // alert("search-button");
    });

    $("#Popover15-toggle").click(function (){
        open_notification();
    });
    $("#Popover15-toggle").blur(function (){
        close_notification();
    });

    $("#Popover16-toggle").click(function (){
        open_message();
    });
    $("#Popover16-toggle").blur(function (){
        close_message();
    });

    $("#Popover17-toggle").click(function (){
        open_user();
    });
    $("#Popover15-content").blur(function (){
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

function expand_searchbox(){
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").removeClass("SearchBar-input Input-wrapper Input-wrapper--grey");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").addClass("SearchBar SearchBar-focusedInput Input-wrapper Input-wrapper--grey is-focus");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > button").addClass("SearchBar-hiddenAskButton");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label > button > span > svg").addClass("isFocus");
    // show = $('#Popover1-content').css('display');
    // $("#Popover1-content").css('display',show =='block'?'none':show);
    $("#Popover1-content").css('display','block');
}
function wrap_searchbox(){
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").removeClass();
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label").addClass("SearchBar-input Input-wrapper Input-wrapper--grey");
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > button").removeClass("SearchBar-hiddenAskButton")
    $("#root > div > div:nth-child(2) > header > div.AppHeader-inner > div.SearchBar > div > form > div > div > label > button > span > svg").removeClass("isFocus")
    $("#Popover1-content").css('display','none');
}

function open_notification() {
    $("#Popover13-content").css('display','block');

}
function close_notification() {
    $("#Popover13-content").css('display','none');

}
function open_message() {
    $("#Popover14-content").css('display','block');

}
function close_message() {
    $("#Popover14-content").css('display','none');

}

function open_user() {
    $("#Popover15-content").css('display','block');

}
function close_user() {
    $("#Popover15-content").css('display','none');

}