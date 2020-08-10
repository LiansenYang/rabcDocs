$.getJSON("../data/json/course.json?_="+new Date().getTime(), function(data){
    laytpl($("#courseTpl").html()).render({list:data}, function(html){
        $("#courseitems").html(html);
    });
    
    var nav = '<ul class="site-nav">';
    $.each(data, function(i, t){
        nav += '<li><a href="#'+t.id+'"><cite>'+t.name+'</cite></a></li>';
    });
    nav += '</ul>';
    layerAPI.open({
        title: '导航',
        area: '200px',
        type: 1,
        shade: 0,
        offset: 'l',
        content: nav
    });
});