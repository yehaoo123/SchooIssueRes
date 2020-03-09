$(document).ready(function () {
    $("#sidebar > div > div > ul > li:nth-child(1)").click(function () {
        if ($('#clerk')[0].style.display == "block") {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
        }
        else {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
            $(".qc-aside-subitem").removeClass("qc-aside-select");
            $(this).find(">a").addClass("qc-aside-select");
            $(this).addClass("qc-aside-select");
            $('#clerk')[0].style.display = "block";
        }
    });
    $("#sidebar > div > div > ul > li:nth-child(2)").click(function () {
        if ($('#audit')[0].style.display == "block") {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
        }
        else {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
            $(".qc-aside-subitem").removeClass("qc-aside-select");
            $(this).find(">a").addClass("qc-aside-select");
            $(this).addClass("qc-aside-select");
            $('#audit')[0].style.display = "block";
        }
    });
    $("#sidebar > div > div > ul > li:nth-child(3)").click(function () {
        if ($('#insert')[0].style.display == "block") {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
        }
        else {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
            $(".qc-aside-subitem").removeClass("qc-aside-select");
            $(this).find(">a").addClass("qc-aside-select");
            $(this).addClass("qc-aside-select");
            $('#insert')[0].style.display = "block";
        }
    });
    $("#sidebar > div > div > ul > li:nth-child(4)").click(function () {
        if ($('#file')[0].style.display == "block") {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
        }
        else {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
            $(".qc-aside-subitem").removeClass("qc-aside-select");
            $(this).find(">a").addClass("qc-aside-select");
            $(this).addClass("qc-aside-select");
            $('#file')[0].style.display = "block";
        }
    });
    $("#sidebar > div > div > ul > li:nth-child(5)").click(function () {
        if ($('#search')[0].style.display == "block") {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
        }
        else {
            for (var i = 0; i < $(".qc-aside-subitem").length; i++) {
                $(".qc-aside-subitem")[i].style.display = "none";
            }
            $(".qc-aside-select").removeClass("qc-aside-select");
            $(".qc-aside-subitem").removeClass("qc-aside-select");
            $(this).find(">a").addClass("qc-aside-select");
            $(this).addClass("qc-aside-select");
            $('#search')[0].style.display = "block";
        }
    });

    $(".qc-nav-service").hover(function () {
        $(this).removeClass("qc-nav-service");
        $(this).addClass("qc-nav-service qc-nav-hover");
    }, function () {
        $(this).removeClass("qc-nav-service qc-nav-hover");
        $(this).addClass("qc-nav-service");
        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul")[0].style.display="none";
    });

    $("#J-headerProductClose").click(function () {
        $("#J-top_submenu").removeClass("qc-nav-service qc-nav-hover");
        $("#J-top_submenu").addClass("qc-nav-service");
    });

    $(".qc-nav-user").hover(function () {
        $(this).removeClass("qc-nav-user");
        $(this).addClass("qc-nav-user qc-nav-hover");
        var that = this;
    }, function () {
        $(this).removeClass("qc-nav-user qc-nav-hover");
        $(this).addClass("qc-nav-user");
    });

    $(".qc-nav-account").hover(function () {
        $(this).removeClass("qc-nav-account");
        $(this).addClass("qc-nav-account qc-nav-hover");
        var that = this;
    }, function () {
        $(this).removeClass("qc-nav-account qc-nav-hover");
        $(this).addClass("qc-nav-account");
    });

    $("#message_trigger").hover(function () {
        $(this).addClass(" qc-nav-hover");
    }, function () {
        $(this).removeClass(" qc-nav-hover");
    });

    $("#message_trigger").click(function () {
        $("#message_trigger").removeClass();
        $("#message_trigger").addClass("qc-nav-message");
        $("#operatelog_trigger").removeClass();
        $("#operatelog_trigger").addClass("qc-nav-log");
        $("#help_trigger").removeClass();
        $("#help_trigger").addClass("qc-nav-help");
        $(this).addClass(" qc-nav-select");
    });

    $(".qc-close-panel").click(function (event) {
        $("#message_trigger").removeClass();
        $("#message_trigger").addClass("qc-nav-message");
        event.stopPropagation();//阻止事件冒泡即可
    });

    $("#operatelog_trigger").hover(function () {
        $(this).addClass(" qc-nav-hover");
    }, function () {
        $(this).removeClass(" qc-nav-hover");
    });

    $("#operatelog_trigger").click(function () {
        $("#message_trigger").removeClass();
        $("#message_trigger").addClass("qc-nav-message");
        $("#operatelog_trigger").removeClass();
        $("#operatelog_trigger").addClass("qc-nav-log");
        $("#help_trigger").removeClass();
        $("#help_trigger").addClass("qc-nav-help");
        $(this).addClass(" qc-nav-select");
    });

    $(".qc-close-panel").click(function (event) {
        $("#operatelog_trigger").removeClass();
        $("#operatelog_trigger").addClass("qc-nav-log");
        event.stopPropagation();//阻止事件冒泡即可
    });

    $("#help_trigger").hover(function () {
        $(this).addClass(" qc-nav-hover");
    }, function () {
        $(this).removeClass(" qc-nav-hover");
    });

    $("#help_trigger").click(function () {
        $("#message_trigger").removeClass();
        $("#message_trigger").addClass("qc-nav-message");
        $("#operatelog_trigger").removeClass();
        $("#operatelog_trigger").addClass("qc-nav-log");
        $("#help_trigger").removeClass();
        $("#help_trigger").addClass("qc-nav-help");
        $(this).addClass(" qc-nav-select");
    });

    $(".qc-close-panel").click(function (event) {
        $("#help_trigger").removeClass();
        $("#help_trigger").addClass("qc-nav-help");
        event.stopPropagation();//阻止事件冒泡即可
    });
    $("#container").click(function () {
        $("#message_trigger").removeClass();
        $("#message_trigger").addClass("qc-nav-message");
        $("#operatelog_trigger").removeClass();
        $("#operatelog_trigger").addClass("qc-nav-log");
        $("#help_trigger").removeClass();
        $("#help_trigger").addClass("qc-nav-help");
    });

    $("#menu-search").click(function () {
       $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul")[0].style.display="block";
    });


    $("#menu-search").bind('input propertychange','none',function () {
        var text=$(this).val();
        if(text.length!=0)
        {
            $.ajax({
                type : "GET",
                url : "https://api.search.mi.com/query?",
                dataType : "jsonp",
                data : {
                    jsonpcallback:"xmsearch",
                    query: text,
                    page_index: "1"},
                async : false,
                success:function(result){
                    $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").html("");
                    $.each(result.data.list,function(i,val){
                        var list="<li class=\"J-qcTopNavSearchItem menu-search-select\"><a href=\"#\" data-event=\"nav\">"+val["title"]+"</a></li>";
                        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").append(list);
                    })
                },
                error: function (result) {
                    console.log("error: " + JSON.stringify(result));
                }
            })
        }
        else
        {
            $.ajax({
                type : "GET",
                url : "https://api.search.mi.com/query?",
                dataType : "jsonp",
                data : {
                    jsonpcallback:"xmsearch",
                    query: " ",
                    page_index: "1"},
                async : false,
                success:function(result){
                    $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").html("");
                    $.each(result.data.list,function(i,val){
                        var list="<li class=\"J-qcTopNavSearchItem menu-search-select\"><a href=\"#\" data-event=\"nav\">"+val["title"]+"</a></li>";
                        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").append(list);
                    })
                },
                error: function (result) {
                    console.log("error: " + JSON.stringify(result));
                }
            })
        }
    });

    $("#menu-search").keypress(function(event) {
        if(event.keyCode==13){
            var text=$(this).val();
            if(text.length!=0)
            {
                $.ajax({
                    type : "GET",
                    url : "https://api.search.mi.com/query?",
                    dataType : "jsonp",
                    data : {
                        jsonpcallback:"xmsearch",
                        query: text,
                        page_index: "1"},
                    async : false,
                    success:function(result){
                        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").html("");
                        $.each(result.data.list,function(i,val){
                            var list="<li class=\"J-qcTopNavSearchItem menu-search-select\"><a href=\"#\" data-event=\"nav\">"+val["title"]+"</a></li>";
                            $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").append(list);
                        })
                    },
                    error: function (result) {
                        console.log("error: " + JSON.stringify(result));
                    }
                })
            }
            else
            {
                $.ajax({
                    type : "GET",
                    url : "https://api.search.mi.com/query?",
                    dataType : "jsonp",
                    data : {
                        jsonpcallback:"xmsearch",
                        query: " ",
                        page_index: "1"},
                    async : false,
                    success:function(result){
                        $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").html("");
                        $.each(result.data.list,function(i,val){
                            var list="<li class=\"J-qcTopNavSearchItem menu-search-select\"><a href=\"#\" data-event=\"nav\">"+val["title"]+"</a></li>";
                            $("#productService > div > div.menu-list-search.J-headerProductSearchBar > ul").append(list);
                        })
                    },
                    error: function (result) {
                        console.log("error: " + JSON.stringify(result));
                    }
                })
            }
        }
    });

    $(".qc-help-search-btn").click(function () {
        $("#help_trigger > div.qc-help-inner > div > div > div.qc-tool-head.J-helper-head > h3").html("");
        $("#help_trigger > div.qc-help-inner > div > div > div.qc-tool-head.J-helper-head > h3").append("<a href=\"#\" class=\"qc-nav-help-reback J-help-reback\"></a> 返回");
        var text=$("#input_search_cont_help").val();
        if(text.length!=0)
        {
            $.ajax({
                type : "GET",
                url : "https://api.search.mi.com/query?",
                dataType : "jsonp",
                data : {
                    jsonpcallback:"xmsearch",
                    query: text,
                    page_index: "1"},
                async : false,
                success:function(result){
                    $(".qc-question-list").html("");
                    var count=result.data.list.length;
                    var temp= "<dt>搜索到<a href=\"javascript:;\"> "+count+" </a>条相关结果</dt>";
                    $(".qc-question-list").append(temp);
                    $.each(result.data.list,function(i,val){
                        var list="<dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
                            "href=\"#\">"+val["title"]+"</a></dd>";
                        $(".qc-question-list").append(list);
                    })
                    $(".qc-question-list").append("</a></dd>");
                },
                error: function (result) {
                    console.log("error: " + JSON.stringify(result));
                }
            })
        }
        else
        {
            $.ajax({
                type : "GET",
                url : "https://api.search.mi.com/query?",
                dataType : "jsonp",
                data : {
                    jsonpcallback:"xmsearch",
                    query: " ",
                    page_index: "1"},
                async : false,
                success:function(result){
                    $(".qc-question-list").html("");
                    var count=result.data.list.length;
                    var temp="<dt>搜索到<a href=\"javascript:;\"> "+count+" </a>条相关结果</dt>";
                    $(".qc-question-list").append(temp);
                    $.each(result.data.list,function(i,val){
                        var list="<dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
                            "href=\"#\">"+val["title"]+"</a></dd>";
                        $(".qc-question-list").append(list);
                    })
                    $(".qc-question-list").append("</a></dd>");
                },
                error: function (result) {
                    console.log("error: " + JSON.stringify(result));
                }
            })
        }
    });

    $("#input_search_cont_help").keypress(function(event){
        if(event.keyCode==13){
            $("#help_trigger > div.qc-help-inner > div > div > div.qc-tool-head.J-helper-head > h3").html("");
            $("#help_trigger > div.qc-help-inner > div > div > div.qc-tool-head.J-helper-head > h3").append("<a href=\"#\" class=\"qc-nav-help-reback J-help-reback\"></a> 返回");
            var text=$("#input_search_cont_help").val();
            if(text.length!=0)
            {
                $.ajax({
                    type : "GET",
                    url : "https://api.search.mi.com/query?",
                    dataType : "jsonp",
                    data : {
                        jsonpcallback:"xmsearch",
                        query: text,
                        page_index: "1"},
                    async : false,
                    success:function(result){
                        $(".qc-question-list").html("");
                        var count=result.data.list.length;
                        var temp= "<dt>搜索到<a href=\"javascript:;\"> "+count+" </a>条相关结果</dt>";
                        $(".qc-question-list").append(temp);
                        $.each(result.data.list,function(i,val){
                            var list="<dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
                                "href=\"#\">"+val["title"]+"</a></dd>";
                            $(".qc-question-list").append(list);
                        })
                        $(".qc-question-list").append("</a></dd>");
                    },
                    error: function (result) {
                        console.log("error: " + JSON.stringify(result));
                    }
                })
            }
            else
            {
                $.ajax({
                    type : "GET",
                    url : "https://api.search.mi.com/query?",
                    dataType : "jsonp",
                    data : {
                        jsonpcallback:"xmsearch",
                        query: " ",
                        page_index: "1"},
                    async : false,
                    success:function(result){
                        $(".qc-question-list").html("");
                        var count=result.data.list.length;
                        var temp="<dt>搜索到<a href=\"javascript:;\"> "+count+" </a>条相关结果</dt>";
                        $(".qc-question-list").append(temp);
                        $.each(result.data.list,function(i,val){
                            var list="<dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
                                "href=\"#\">"+val["title"]+"</a></dd>";
                            $(".qc-question-list").append(list);
                        })
                        $(".qc-question-list").append("</a></dd>");
                    },
                    error: function (result) {
                        console.log("error: " + JSON.stringify(result));
                    }
                })
            }
        }
    });

    $(".qc-tool-head-title").click(function (event) {
        $("#help_trigger > div.qc-help-inner > div > div > div.qc-tool-head.J-helper-head > h3").html("帮助中心");
        event.stopPropagation();//阻止事件冒泡即可
        $(".qc-question-list").html("");
        $(".qc-question-list").append("<dt>您可能需要</dt>\n" +
            "                                            <dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
            "                                                   href=\"#\">常见操作指南</a>\n" +
            "                                            </dd>\n" +
            "                                            <dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
            "                                                   href=\"#\">登陆注册指引</a>\n" +
            "                                            </dd>\n" +
            "                                            <dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
            "                                                   href=\"#\">产品文档</a></dd>\n" +
            "                                            <dd><a class=\"external-link-help\" data-type=\"2\" target=\"_blank\"\n" +
            "                                                   href=\"#\">API文档</a>\n" +
            "                                            </dd>");
        $(".qc-question-list").append(list4);
        $(".qc-question-list").append("</a></dd>");
    });
    i=0;
    $(".qc-menu-fold").click(function () {
        i++;
        if(i%2==1){
            $("#container").removeClass();
            $("#container").addClass("container container-developer qc-aside-hidden qc-aside-hover");
            $(".qc-aside-area").hover(function () {
                $("#container").removeClass("container container-developer qc-aside-hover qc-aside-hidden");
                $("#container").addClass("container container-developer");
            }, function () {
                $("#container").removeClass("container container-developer qc-aside-hover");
                $("#container").addClass("container container-developer qc-aside-hover qc-aside-hidden");
            });
        }
        else if(i%2==0){
            $("#container").removeClass();
            $("#container").addClass("container container-developer");
            $(".qc-aside-area").hover(function () {
                $("#container").removeClass("container container-developer qc-aside-hover qc-aside-hidden");
                $("#container").addClass("container container-developer");
            }, function () {
                $("#container").removeClass("qc-aside-hidden container container-developer");
                $("#container").removeClass("qc-aside-hover container container-developer");
                $("#container").addClass("container container-developer");
            });
        }
    });

    $("#today").click(function () {
        $("#today").removeClass();
        $("#yesterday").removeClass();
        $("#week").removeClass();
        $("#all").removeClass();
        $("#today").addClass("current");
    });
    $("#yesterday").click(function () {
        $("#today").removeClass();
        $("#yesterday").removeClass();
        $("#week").removeClass();
        $("#all").removeClass();
        $("#yesterday").addClass("current");
    });
    $("#week").click(function () {
        $("#today").removeClass();
        $("#yesterday").removeClass();
        $("#week").removeClass();
        $("#all").removeClass();
        $("#week").addClass("current");
    });
    $("#all").click(function () {
        $("#today").removeClass();
        $("#yesterday").removeClass();
        $("#week").removeClass();
        $("#all").removeClass();
        $("#all").addClass("current");
    });
});