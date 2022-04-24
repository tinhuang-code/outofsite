var interviewee = [
    {'name': '簡俊成'}
];
var project = [
    {'name': '楊浤淵'},
    {'name': '黃耀陞'}
];

$(function () {
    var html;
    var name;
    const $menu = $('#navMenu');
    const $content = $('#content');
    const page = $('body').data('page');

    // 修正資料夾位置
    var path_fix = (page == 'interview' || page == 'project') ? '../' : '';

    // 左側選單收納
    $menu.find('.switch').on('click', function () {
        $menu.toggleClass('menu-show');
        $content.toggleClass('menu-show');
    });

    // 左側選單 - 建立訪談計畫連結
    html = '';
    for (i in interviewee) {
        name = interviewee[i]['name'];
        html += '<div><a class="btn" href="' + path_fix + 'interview/' + name + '.html">' + name +'</a></div>';
    }
    $('#menu-interview').html(html);

    // 左側選單 - 建立書寫連結
    html = '';
    for (i in project) {
        name = project[i]['name'];
        html += '<div><a class="btn" href="' + path_fix + 'project/' + name + '.html">' + name +'</a></div>';
    }
    $('#menu-project').html(html);
});
